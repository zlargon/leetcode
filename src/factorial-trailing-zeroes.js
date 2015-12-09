/*
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note:
 * Your solution should be in logarithmic time complexity.
 *
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var sum = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    sum += n;
  }
  return sum;
};


// mocha testing
var expect = require('chai').expect;
describe('Factorial Trailing Zeroes', function() {

  it('5', function () {
    var input = 5;
    var output = trailingZeroes(input);
    expect(output).to.equal(1);
  });

  it('10', function () {
    var input = 10;
    var output = trailingZeroes(input);
    expect(output).to.equal(2);
  });

  it('100', function () {
    var input = 100;
    var output = trailingZeroes(input);
    expect(output).to.equal(24);
  });

  it('1000', function () {
    var input = 1000;
    var output = trailingZeroes(input);
    expect(output).to.equal(249);
  });

});
