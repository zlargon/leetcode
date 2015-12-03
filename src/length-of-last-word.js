/*
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space characters only.
 *
 * Tags:
 *  - String
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

};


// mocha testing
var expect = require('chai').expect;
describe('Length of Last Word', function() {

  // default test case
  it('Hello World', function () {
    var input = 'Hello World';
    var output = lengthOfLastWord(input);
    expect(output).to.equal(5);
  });

});
