#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const co = require('co');
const fetch = require('node-fetch');
const Mocha = require('mocha');

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

co(function * () {

  // 1. http request
  const problemList = [];
  for (let i = 0; i < Categories.length; i++) {
    const category = Categories[i];
    const url = HOST + '/api/problems/' + category.toLowerCase();
    const data = yield fetch(url, { timeout: 10 * 1000 }).then(res => {
      if (res.status !== 200) {
        throw new Error(`request to ${url} failed, status code = ${res.status} (${res.statusText})`);
      }
      return res.json().then(json => {
        json.stat_status_pairs.forEach(x => {
          problemList.unshift({
            id: x.stat.question_id,
            category,
            title: x.stat.question__title,
            name: x.stat.question__title_slug,
            url: HOST + '/problems/' + x.stat.question__title_slug + '/',
            lock: x.paid_only,
            difficulty: x.difficulty.level - 1
          });
        });
      });
    });
  }

  // 3. generate statistics
  const diff_total = [0, 0, 0];
  const diff_solve = [0, 0, 0];

  for (let i = 0; i < problemList.length; i++) {
    const p = problemList[i];
    p.state = false;

    try {
      p.state = yield mochaTest(path.resolve(__dirname, '../src', p.name + '.js'));
    } catch (e) {
      if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
      }
    }

    // statistics
    diff_total[p.difficulty] += 1;
    if (p.state) {
      diff_solve[p.difficulty] += 1;
    }
  }

  // 4. generate markdown
  const statistics = Difficulties.map((diff, i) => {
    return `* ${diff} (${diff_solve[i]}/${diff_total[i]})`;
  }).join('\n');

  const leetcodeTable = problemList.map(p => {
    return [
      '',
      p.category,
      p.id,
      `[${p.title}](${p.url})${p.lock ? ' :blue_book:' : ''}`,
      Difficulties[p.difficulty],
      p.state ? `[✓](src/${p.name}.js)` : '✘',
      ''
    ].join(' | ').trim();
  }).join('\n');

  const markdown = [
    '# LeetCode',
    '',
    '[![][dependency-img]][dependency-url]',
    '[![][travis-img]][travis-url]',
    '',
    statistics,
    '',
    '| Category | #     | Title | Difficulty | State |',
    '| :---     | :---: | :---  | :---       | :---: |',
    leetcodeTable,
    '',
    '[dependency-url]: https://david-dm.org/zlargon/leetcode',
    '[dependency-img]: https://img.shields.io/david/zlargon/leetcode.svg',
    '',
    '[travis-url]: https://travis-ci.org/zlargon/leetcode',
    '[travis-img]: https://img.shields.io/travis/zlargon/leetcode/master.svg',
    ''
  ].join('\n');

  // 5. write file
  fs.writeFileSync(OUTPUT, markdown);
  console.log('Save to ' + OUTPUT);
})
.catch(e => console.log(e.stack));
