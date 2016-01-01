#!/usr/bin/env babel-node
import fs        from 'fs';
import path      from 'path';
import fetch     from 'node-fetch';
import cheerio   from 'cheerio';
import coroutine from 'co';
import Mocha     from 'mocha';

const HOST = 'https://leetcode.com';
const OUTPUT = path.resolve(__dirname, 'README.md');

const Categories = ['Algorithms']; // Database, Shell
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

coroutine(function * () {

  // 1. http request
  const request = Categories.map(category => {
    const url = HOST + '/problemset/' + category.toLowerCase();
    return coroutine(function * () {
      const res = yield fetch(url, { timeout: 10 * 1000 });

      if (res.status !== 200) {
        throw new Error(`request to ${url} failed, status code = ${res.status} (${res.statusText})`);
      }

      return {
        category,
        html: yield res.text()
      }
    });
  });


  // 2. response => problem list
  const response = yield request;
  const problemList = response.reduce((list, { category, html }) => {
    const $ = cheerio.load(html);
    $('#problemList tbody tr').each((index, tr) => {
      const td = $(tr).find('td');
      const no         = Number.parseInt(td.eq(1).text().trim(), 10);
      const title      = td.eq(2).find('a').text().trim();
      const uri        = td.eq(2).find('a').attr('href').trim();
      const lock       = td.eq(2).find('i').attr('class') ? true : false;
      const acceptance = td.eq(3).text().trim();
      const difficulty = td.eq(4).text().trim();
      list[no] = { no, category, title, uri, lock, acceptance, difficulty };
    });
    return list;
  }, [])
  .filter(problem => problem !== null); // filter the empty item from list


  // 3. generate statistics
  let statistics = {};
  for (let i = 0; i < problemList.length; i++) {
    const { category, uri, difficulty } = problemList[i];
    const name = uri.split('/')[2];

    // state
    let state = false;
    try {
      state = yield mochaTest(path.resolve(__dirname, 'src', name + '.js'));
    } catch (e) {
      if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
      }
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


  // 4. generate markdown
  const difficultyStatistics = Difficulties.map(difficulty => {
    const { total, solve } = statistics[difficulty];
    return `* ${difficulty} (${solve}/${total})`;
  }).join('\n');

  const leetcodeTable = problemList.map(problem => {
    const { category, no, name, title, uri, lock, difficulty, state } = problem;
    return `| ${category} | ${no} | [${title}](${HOST + uri})${lock ? ' :blue_book:' : ''} | ${difficulty} | ${state ? `[✓](src/${name}.js)` : '✘'} |`;
  }).join('\n');

  const markdown = `#LeetCode\n
[![Build Status](https://travis-ci.org/zlargon/leetcode.svg)](https://travis-ci.org/zlargon/leetcode)\n
${difficultyStatistics}\n
| Category | #     | Title | Difficulty | State |
| :---     | :---: | :---  | :---       | :---: |
${leetcodeTable}\n`;


  // 5. write file
  fs.writeFileSync(OUTPUT, markdown);
  console.log('Save to ' + OUTPUT);
})
.catch(e => console.log(e.stack));
