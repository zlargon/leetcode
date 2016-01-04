/*
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Tags:
 *  - Math
 *  - Bit Manipulation
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // the highest bit should be 1, and others sould be 0

  // do shift right operation until find the first bit with '1'
  while (n > 0 && !(n & 1)) {
    n >>= 1;
  }

  // n should be 1, if it is the hightest bit
  return n === 1;
};


// mocha testing
var expect = require('chai').expect;
describe('Power of Two', function() {

  it('0', function () {
    var input = 0;
    var output = isPowerOfTwo(input);
    expect(output).to.be.false;
  });

  it('1', function () {
    var input = 1;
    var output = isPowerOfTwo(input);
    expect(output).to.be.true;
  });

  it('11', function () {
    var input = 11;
    var output = isPowerOfTwo(input);
    expect(output).to.be.false;
  });

  it('8', function () {
    var input = 8;
    var output = isPowerOfTwo(input);
    expect(output).to.be.true;
  });

  it('16', function () {
    var input = 16;
    var output = isPowerOfTwo(input);
    expect(output).to.be.true;
  });

  it('65535', function () {
    var input = Math.pow(2, 16) - 1;
    var output = isPowerOfTwo(input);
    expect(output).to.be.false;
  });

});
