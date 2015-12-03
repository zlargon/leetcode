/*
 * Given a non-negative number represented as an array of digits, plus one to the number.
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Tags:
 *  - Array
 *  - Math
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var end = digits.length - 1;
  digits[end] ++;

  var carry = 0;
  for (var i = end; i >= 0; i--) {
    var val = digits[i] + carry;
    digits[i] = val % 10;
    carry = Math.floor(val / 10);
  }

  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
};


// mocha testing
var expect = require('chai').expect;
describe('Plus One', function() {

  // default testing example
  it('[0] => [1]', function () {
    var input = [0];
    var output = plusOne(input);
    expect(output).to.deep.equal([1]);
  });

  it('[0, 0, 1] => [0, 0, 2]', function () {
    var input = [0, 0, 1];
    var output = plusOne(input);
    expect(output).to.deep.equal([0, 0, 2]);
  });

  it('[9, 9, 9] => [1, 0, 0, 0]', function () {
    var input = [9, 9, 9];
    var output = plusOne(input);
    expect(output).to.deep.equal([1, 0, 0, 0]);
  });

});
