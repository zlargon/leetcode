/*
 * Given two binary strings, return their sum (also a binary string).
 *
 * Tags:
 *  - Math
 *  - String
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var sum = '';
  var carry = 0;
  for (var i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    var n1 = i < 0 ? 0 : (a.charCodeAt(i) - 48);
    var n2 = j < 0 ? 0 : (b.charCodeAt(j) - 48);

    var val = carry + n1 + n2;
    carry = Math.floor(val / 2);
    val -= carry * 2;
    sum = val + sum;
  }

  if (carry > 0) {
    sum = carry + sum;
  }

  return sum;
};

// mocha testing
var expect = require('chai').expect;
describe('Add Binary', function() {

  // default test case
  it('11 + 1 => 100', function () {
    var input = {
      a: '11',
      b: '1'
    };
    var output = addBinary(input.a, input.b);
    expect(output).to.deep.equal('100');
  });

  it('0 + 0 => 0', function () {
    var input = {
      a: '0',
      b: '0'
    };
    var output = addBinary(input.a, input.b);
    expect(output).to.deep.equal('0');
  });

});
