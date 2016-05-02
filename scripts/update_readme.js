#!/usr/bin/env node
'use strict';

const fs        = require('fs');
const path      = require('path');
const fetch     = require('node-fetch');
const cheerio   = require('cheerio');
const coroutine = require('co');
const Mocha     = require('mocha');

const HOST = 'https://leetcode.com';
const OUTPUT = path.resolve(__dirname, '../README.md');

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
  const response = [];
  for (let i = 0; i < Categories.length; i++) {
    const category = Categories[i];
    const url = HOST + '/problemset/' + category.toLowerCase();
    const data = yield fetch(url, { timeout: 10 * 1000 }).then(res => {
      if (res.status !== 200) {
        throw new Error(`request to ${url} failed, status code = ${res.status} (${res.statusText})`);
      }
      return res.text().then(html => new Object({ category, html }));
    });
    response.push(data);
  }

  // 2. response => problem list
  const problemList = response.reduce((list, data) => {
    const $ = cheerio.load(data.html);
    $('#problemList tbody tr').each((index, tr) => {
      const td = $(tr).find('td');
      const no         = Number.parseInt(td.eq(1).text().trim(), 10);
      const title      = td.eq(2).find('a').text().trim();
      const uri        = td.eq(2).find('a').attr('href').trim();
      const lock       = td.eq(2).find('i').attr('class') ? true : false;
      const acceptance = td.eq(3).text().trim();
      const difficulty = td.eq(6).text().trim();
      list[no] = { no, category: data.category, title, uri, lock, acceptance, difficulty };
    });
    return list;
  }, [])
  .filter(problem => problem !== null); // filter the empty item from list


  // 3. generate statistics
  let statistics = {};
  for (let i = 0; i < problemList.length; i++) {
    const name       = problemList[i].uri.split('/')[2];
    const category   = problemList[i].category;
    const difficulty = problemList[i].difficulty;

    // state
    let state = false;
    try {
      state = yield mochaTest(path.resolve(__dirname, '../src', name + '.js'));
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
    const total = statistics[difficulty].total;
    const solve = statistics[difficulty].solve;

    return `* ${difficulty} (${solve}/${total})`;
  }).join('\n');

  const leetcodeTable = problemList.map(p => {
    return [
      '',
      p.category,
      p.no,
      `[${p.title}](${HOST + p.uri})${p.lock ? ' :blue_book:' : ''}`,
      p.difficulty,
      p.state ? `[✓](src/${p.name}.js)` : '✘',
      ''
    ].join(' | ').trim();
  }).join('\n');

  const markdown = [
    '#LeetCode',
    '',
    '[![Build Status](https://travis-ci.org/zlargon/leetcode.svg)](https://travis-ci.org/zlargon/leetcode)',
    '[![Dependency Status](https://david-dm.org/zlargon/leetcode.svg)](https://david-dm.org/zlargon/leetcode)',
    '',
    difficultyStatistics,
    '',
    '| Category | #     | Title | Difficulty | State |',
    '| :---     | :---: | :---  | :---       | :---: |',
    leetcodeTable,
    ''
  ].join('\n');

  // 5. write file
  fs.writeFileSync(OUTPUT, markdown);
  console.log('Save to ' + OUTPUT);
})
.catch(e => console.log(e.stack));
