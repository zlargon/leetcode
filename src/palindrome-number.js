/*
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * Some hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * You could also try reversing an integer.
 * However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow.
 * How would you handle such case?
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  function reverse(x) {
    var MAX_INT_32 = 2147483647;

    var sign = x < 0 ? -1 : 1;
    x *= sign;

    var n = 0;
    while (x > 0) {
      n = n * 10 + (x % 10);
      x = Math.floor(x / 10);

      // check overflow
      if (n < 0 || n > MAX_INT_32) {
        return 0;
      }
    }

    return n * sign;
  }

  return x < 0 ? false : reverse(x) === x;
};

// mocha testing
var expect = require('chai').expect;
describe('Palindrome Number', function() {

  // default testing example
  it('-1', function () {
    var input = -1;
    var output = isPalindrome(input);
    expect(output).to.equal(false);
  });

  it('0', function () {
    var input = 0;
    var output = isPalindrome(input);
    expect(output).to.equal(true);
  });

  it('11', function () {
    var input = 11;
    var output = isPalindrome(input);
    expect(output).to.equal(true);
  });

  it('121', function () {
    var input = 121;
    var output = isPalindrome(input);
    expect(output).to.equal(true);
  });

  it('1221', function () {
    var input = 1221;
    var output = isPalindrome(input);
    expect(output).to.equal(true);
  });

  it('12321', function () {
    var input = 12321;
    var output = isPalindrome(input);
    expect(output).to.equal(true);
  });

  it('2147483647', function () {
    var input = 2147483647;
    var output = isPalindrome(input);
    expect(output).to.equal(false);
  });

  it('-2147483648', function () {
    var input = -2147483648;
    var output = isPalindrome(input);
    expect(output).to.equal(false);
  });

  it('22222222222', function () {
    var input = 22222222222;
    var output = isPalindrome(input);
    expect(output).to.equal(false);
  });

  it('-22222222222', function () {
    var input = -22222222222;
    var output = isPalindrome(input);
    expect(output).to.equal(false);
  });
});


