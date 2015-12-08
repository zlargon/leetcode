/*
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Tags:
 *  - Two Pointers
 *  - String
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var str = s.replace(/\W/g, '').toLowerCase();

  for (var i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
  }
  return true;
};


// mocha testing
var expect = require('chai').expect;
describe('Valid Palindrome', function() {

  // default test case
  it('A man, a plan, a canal: Panama', function () {
    var input = 'A man, a plan, a canal: Panama';
    var output = isPalindrome(input);

    expect(output).to.equal(true);
  });

  it('race a car', function () {
    var input = 'race a car';
    var output = isPalindrome(input);

    expect(output).to.equal(false);
  });

  it('Empty String', function () {
    var input = '';
    var output = isPalindrome(input);

    expect(output).to.equal(true);
  });

});
