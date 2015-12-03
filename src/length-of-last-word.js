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
  var count = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === ' ') {
      if (count === 0) {
        continue; // not start yet
      } else {
        break;    // end of word
      }
    }

    count++;
  }
  return count;
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

  it('Empty String', function () {
    var input = '';
    var output = lengthOfLastWord(input);
    expect(output).to.equal(0);
  });

  it('"a " (last whitespace)', function () {
    var input = 'a ';
    var output = lengthOfLastWord(input);
    expect(output).to.equal(1);
  });

  it('"  ab  " (last whitespace)', function () {
    var input = '  ab  ';
    var output = lengthOfLastWord(input);
    expect(output).to.equal(2);
  });
});
