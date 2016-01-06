/*
 * Write a program to check whether a given number is an ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 *
 * Note that 1 is typically treated as an ugly number.
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) return false;

  // factor of 5
  while (num % 5 === 0) num /= 5;
  if (num === 1) return true;

  // factor of 3
  while (num % 3 === 0) num /= 3;
  if (num === 1) return true;

  // 2: it should be power of 2 (power-of-two)
  while (num > 0 && !(num & 1)) {
    num >>= 1;
  }
  return num === 1;
};

// mocha testing
var expect = require('chai').expect;
describe('Ugly Number', function() {

  it('num = 0', function () {
    var input = 0;
    var output = isUgly(input);
    expect(output).to.be.false;
  });

  it('num = 1', function () {
    var input = 1;
    var output = isUgly(input);
    expect(output).to.be.true;
  });

  it('num = -1', function () {
    var input = -1;
    var output = isUgly(input);
    expect(output).to.be.false;
  });

  it('num = -6', function () {
    var input = -6;
    var output = isUgly(input);
    expect(output).to.be.false;
  });

  it('num = 6', function () {
    var input = 6;
    var output = isUgly(input);
    expect(output).to.be.true;
  });

  it('num = 8', function () {
    var input = 8;
    var output = isUgly(input);
    expect(output).to.be.true;
  });

  it('num = 14', function () {
    var input = 14;
    var output = isUgly(input);
    expect(output).to.be.false;
  });

  it('num = 90000', function () {
    var input = 90000;
    var output = isUgly(input);
    expect(output).to.be.true;
  });

  it('num = -2147483648', function () {
    var input = -2147483648;
    var output = isUgly(input);
    expect(output).to.be.false;
  });

  it('num = 2147483648', function () {
    var input = 2147483648;
    var output = isUgly(input);
    expect(output).to.be.false;
  });
});
