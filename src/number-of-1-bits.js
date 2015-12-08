/*
 * Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
 *
 * For example,
 * the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
 *
 * Tags:
 *  - Bit Manipulation
 */

var Bits = require('../lib/Bits');

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var sum = 0;
  for (var i = 0; i < 32; i++) {
    sum += n & 1;
    n >>= 1;
  }
  return sum;
};


// mocha testing
var expect = require('chai').expect;
describe('Number of 1 Bits', function() {

  // default test case
  it('00000000000000000000000000001011', function () {
    var input = Bits('00000000000000000000000000001011');
    var output = hammingWeight(input);

    expect(output).to.equal(3);
  });

  it('0', function () {
    var input = Bits('0');
    var output = hammingWeight(input);

    expect(output).to.equal(0);
  });

  it('10', function () {
    var input = Bits('10');
    var output = hammingWeight(input);

    expect(output).to.equal(1);
  });

  it('11111', function () {
    var input = Bits('11111');
    var output = hammingWeight(input);

    expect(output).to.equal(5);
  });

  it('10000000000000000000000000000000', function () {
    var input = Bits('10000000000000000000000000000000');
    var output = hammingWeight(input);

    expect(output).to.equal(1);
  });

  it('11111111111111111111111111111111', function () {
    var input = Bits('11111111111111111111111111111111');
    var output = hammingWeight(input);

    expect(output).to.equal(32);
  });
});

