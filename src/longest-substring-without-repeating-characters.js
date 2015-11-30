/*
 * Given a string, find the length of the longest substring without repeating characters.
 * For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
 * For "bbbbb" the longest substring is "b", with the length of 1.
 *
 * Tags:
 *  - Hash Table
 *  - Two Pointers
 *  - String
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {}; // record last index of each character
                // key = {character}, value = {last index}

  var norepeat = 0; // norepeat index
  var max = 0;

  for (var index = 0; index < s.length; index++) {
    var character = s.charAt(index);  // character

    // check the character is exist or not
    if (typeof map[character] === 'number') {
      // character is repeated, update norepeat index
      norepeat = index;
    }

    // check max length
    var length = index - norepeat + 1;
    if (length > max) {
      // update max length
      max = length;
    }

    // update the character's last index
    map[character] = index;
  }

  return max;
};

// mocha testing
var expect = require('chai').expect;
describe('Longest Substring Without Repeating Characters', function() {

  // default testing example
  it('abcabcbb', function () {
    var input = 'abcabcbb';
    var output = lengthOfLongestSubstring(input);

    expect(output).to.equal(3);
  });

  // default testing example
  it('bbbbb', function () {
    var input = 'bbbbb';
    var output = lengthOfLongestSubstring(input);

    expect(output).to.equal(1);
  });

  it('abba', function() {
    var input = 'abba';
    var output = lengthOfLongestSubstring(input);

    expect(output).to.equal(2);
  });

  it('a', function() {
    var input = 'a';
    var output = lengthOfLongestSubstring(input);

    expect(output).to.equal(1);
  });

  it('abccbababc', function() {
    var input = 'abccbababc';
    var output = lengthOfLongestSubstring(input);

    expect(output).to.equal(3);
  });

  it('', function() {
    var input = '';
    var output = lengthOfLongestSubstring(input);

    expect(output).to.equal(0);
  });

});
