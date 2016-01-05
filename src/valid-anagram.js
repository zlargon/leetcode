/*
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 *
 * For example,
 * s = "anagram", t = "nagaram", return true.
 * s = "rat", t = "car", return false.
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your solution to such case?
 *
 * Tags:
 *  - Hash Table
 *  - Sort
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  function sort (str) {
    return str.split('').sort().join('');
  }

  return sort(s) === sort(t);
};


// mocha testing
var expect = require('chai').expect;
describe('Valid Anagram', function() {

  it('(empty) & (empty) => true', function () {
    var input = {
      s: '',
      t: ''
    };
    var output = isAnagram(input.s, input.t);
    expect(output).to.be.true;
  });

  it('(empty) & 123 => true', function () {
    var input = {
      s: '',
      t: '123'
    };
    var output = isAnagram(input.s, input.t);
    expect(output).to.be.false;
  });

  it('我為人人 & 我為人人 => true', function () {
    var input = {
      s: '我為人人',
      t: '人人為我'
    };
    var output = isAnagram(input.s, input.t);
    expect(output).to.be.true;
  });

  it('anagram & nagaram => true', function () {
    var input = {
      s: 'anagram',
      t: 'nagaram'
    };
    var output = isAnagram(input.s, input.t);
    expect(output).to.be.true;
  });

  it('rat & cat => false', function () {
    var input = {
      s: 'rat',
      t: 'cat'
    };
    var output = isAnagram(input.s, input.t);
    expect(output).to.be.false;
  });

});
