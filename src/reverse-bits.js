/*
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).
 *
 * Follow up:
 * If this function is called many times, how would you optimize it?
 *
 * Related problem: Reverse Integer
 *
 * Tags:
 *  - Bit Manipulation
 */

var Bits = require('../lib/Bits');

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var result = 0;

  for (var i = 0; i < 32; i++) {
    result = result * 2 + (n & 1);
    n >>>= 1;
  }

  return result;
};

// mocha testing
var expect = require('chai').expect;
describe('Reverse Bits', function() {

  // default test case
  it('00000010100101000001111010011100', function () {
    var input = Bits('00000010100101000001111010011100');
    var output = reverseBits(input);

    expect(output).to.equal(Bits('00111001011110000010100101000000'));
  });

  it('00000000000000000000000000000000', function () {
    var input = Bits('00000000000000000000000000000000');
    var output = reverseBits(input);

    expect(output).to.equal(Bits('00000000000000000000000000000000'));
  });

  it('11111111111111111111111111111111', function () {
    var input = Bits('11111111111111111111111111111111');
    var output = reverseBits(input);

    expect(output).to.equal(Bits('11111111111111111111111111111111'));
  });

});
