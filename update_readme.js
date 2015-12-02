#!/usr/bin/env babel-node
import fs        from 'fs';
import path      from 'path';
import fetch     from 'node-fetch';
import cheerio   from 'cheerio';
import coroutine from 'co';
import Mocha     from 'mocha';

const HOST = 'https://leetcode.com';
const OUTPUT = path.resolve(__dirname, 'README.md');

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
};

function mochaTest (file) {
  return new Promise((resolve, reject) => {
    const mocha = new Mocha();
    mocha.addFile(file);
    mocha.run(result => {
      resolve(result === 0);
    });
  });
}

coroutine(function * () {
  const categories = ['algorithms', 'database', 'shell'];
  let result = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    result.push({
      category,
      html: yield fetch(HOST + '/problemset/' + category).then(res => res.text())
    });
  }
  return result;
})
.then(result => {
  return result.reduce((list, { category, html }) => {
    const $ = cheerio.load(html);
    $('#problemList tbody tr').each((index, tr) => {
      const td = $(tr).find('td');
      const no         = Number.parseInt(td.eq(1).text().trim(), 10);
      const title      = td.eq(2).find('a').text().trim();
      const uri        = td.eq(2).find('a').attr('href').trim();
      const acceptance = td.eq(3).text().trim();
      const difficulty = td.eq(4).text().trim();
      list[no] = { no, category, title, uri, acceptance, difficulty };
    });
    return list;
  }, []);
})
.then(problemList => {
  return coroutine(function * () {
    let table = [];
    for (let i = 1; i < problemList.length; i++) {
      const { no, category, title, uri, acceptance, difficulty } = problemList[i];
      const file = uri.split('/')[2] + '.js';

      // mocha test
      let state = '✘';
      try {
        const result = yield mochaTest(path.resolve(__dirname, 'src', file));
        if (result === true) {
          state = `[✓](src/${file})`;
        }
      } catch (e) {
        // file is not exist
      }

      // add to table
      table.push(`| ${capitalize(category)} | ${no} | [${title}](${HOST + uri}) | ${difficulty} | ${state} |`);
    }
    return table.join('\n');
  });
})
.then(leetcodeTable => {
  const markdown = `#LeetCode\n
| Category | #     | Title | Difficulty | State |
| :---     | :---: | :---  | :---       | :---: |
${leetcodeTable}\n`;

  fs.writeFileSync(OUTPUT, markdown);
})
.then(() => console.log('Save to ' + OUTPUT))
.catch(e => console.log(e.stack));
