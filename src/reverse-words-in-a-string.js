/*
 * Given an input string, reverse the string word by word.
 *
 * For example,
 * Given s = "the sky is blue",
 * return "blue is sky the".
 *
 * Clarification:
 *  - What constitutes a word?
 *    A sequence of non-space characters constitutes a word.
 *
 *  - Could the input string contain leading or trailing spaces?
 *    Yes. However, your reversed string should not contain leading or trailing spaces.
 *
 *  - How about multiple spaces between two words?
 *    Reduce them to a single space in the reversed string.
 *
 * Tags:
 *  - String
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  return str.split(' ')
    .filter(function (s) { return s !== '' })
    .reverse()
    .join(' ');
};

// mocha testing
var expect = require('chai').expect;
describe('Reverse Words in a String', function() {

  // default test case
  it('the sky is blue', function () {
    var input = 'the sky is blue';
    var output = reverseWords(input);

    expect(output).to.equal('blue is sky the');
  });

  it(' Hello   World ', function () {
    var input = ' Hello   World ';
    var output = reverseWords(input);

    expect(output).to.equal('World Hello');
  });

});
