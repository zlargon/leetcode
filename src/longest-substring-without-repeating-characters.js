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

});
