/*
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character but a character may map to itself.
 *
 * For example,
 * Given "egg", "add", return true.
 * Given "foo", "bar", return false.
 * Given "paper", "title", return true.
 *
 * Note:
 * You may assume both s and t have the same length.
 *
 * Tags:
 *  - Hash Table
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var relation = {};  // relation[x] -> y
  var mapY = {};      // the characters in mapY should not repeat

  for (var i = 0; i < s.length; i++) {
    var x = s.charAt(i);
    var y = t.charAt(i);

    // 1. relation is not found
    if (!relation.hasOwnProperty(x)) {

      // relation result should not repeat
      if (mapY.hasOwnProperty(y)) {
        return false;
      }

      // create new relation
      relation[x] = y;
      mapY[y] = true;
      continue;
    }

    // 2. relation result should be match
    if (relation[x] !== y) {
      return false;
    }
  }

  return true;
};

// mocha testing
var expect = require('chai').expect;
describe('Isomorphic Strings', function() {

  // default test case
  it('egg, add', function () {
    var input = {
      s: 'egg',
      t: 'add'
    };
    var output = isIsomorphic(input.s, input.t);
    expect(output).to.be.true;
  });

  // default test case
  it('foo, bar', function () {
    var input = {
      s: 'foo',
      t: 'bar'
    };
    var output = isIsomorphic(input.s, input.t);
    expect(output).to.be.false;
  });

  // default test case
  it('paper, title', function () {
    var input = {
      s: 'paper',
      t: 'title'
    };
    var output = isIsomorphic(input.s, input.t);
    expect(output).to.be.true;
  });

  it('aab, bbc', function () {
    var input = {
      s: 'aab',
      t: 'bbc'
    };
    var output = isIsomorphic(input.s, input.t);
    expect(output).to.be.true;
  });

  it('ab, aa', function () {
    var input = {
      s: 'ab',
      t: 'aa'
    };
    var output = isIsomorphic(input.s, input.t);
    expect(output).to.be.false;
  });

  it('Empty Strings', function () {
    var input = {
      s: '',
      t: ''
    };
    var output = isIsomorphic(input.s, input.t);
    expect(output).to.be.true;
  });

});
