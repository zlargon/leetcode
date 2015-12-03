#!/usr/bin/env babel-node
import fs        from 'fs';
import path      from 'path';
import fetch     from 'node-fetch';
import cheerio   from 'cheerio';
import coroutine from 'co';
import Mocha     from 'mocha';

const HOST = 'https://leetcode.com';
const OUTPUT = path.resolve(__dirname, 'README.md');

const Categories = ['Algorithms', 'Database', 'Shell'];
const Difficulties = ['Easy', 'Medium', 'Hard'];

function mochaTest (file) {
  return new Promise((resolve, reject) => {
    const mocha = new Mocha();
    mocha.addFile(file);
    mocha.run(result => {
      resolve(result === 0);
    });
  });
}

// Start
Promise.all(Categories.map(category => {
  return fetch(HOST + '/problemset/' + category.toLowerCase())
    .then(res => res.text())
    .then(html => {
      return {
        category,
        html
      }
    });
}))
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
    let statistics = {};

    for (let i = 1; i < problemList.length; i++) {
      const { category, uri, difficulty } = problemList[i];
      const name = uri.split('/')[2];

      // state
      let state = false;
      try {
        state = yield mochaTest(path.resolve(__dirname, 'src', name + '.js'));
      } catch (e) {
        // file is not exist
      }

      // add name and state
      Object.assign(problemList[i], {
        name, state
      });

      // Difficulty Statistics
      if (!statistics.hasOwnProperty(difficulty)) {
        statistics[difficulty] = { total: 0, solve: 0 };
      }
      statistics[difficulty].total += 1;
      statistics[difficulty].solve += state ? 1 : 0;

      // Category Statistics
      if (!statistics.hasOwnProperty(category)) {
        statistics[category] = { total: 0, solve: 0 };
      }
      statistics[category].total += 1;
      statistics[category].solve += state ? 1 : 0;
    }

    return {
      problemList,
      statistics
    };
  });
})
.then(({ statistics, problemList }) => {
  const difficultyStatistics = Difficulties.map(difficulty => {
    const { total, solve } = statistics[difficulty];
    return `* ${difficulty} (${solve}/${total})`;
  }).join('\n');

  const leetcodeTable = problemList.map(problem => {
    const { category, no, name, title, uri, difficulty, state } = problem;
    return `| ${category} | ${no} | [${title}](${HOST + uri}) | ${difficulty} | ${state ? `[✓](src/${name}.js)` : '✘'} |`;
  }).join('\n').trim();

  return `#LeetCode\n
${difficultyStatistics}\n
| Category | #     | Title | Difficulty | State |
| :---     | :---: | :---  | :---       | :---: |
${leetcodeTable}\n`;
})
.then(markdown => {
  fs.writeFileSync(OUTPUT, markdown);
  console.log('Save to ' + OUTPUT);
})
.catch(e => console.log(e.stack));
