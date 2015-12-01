/*
 * Reverse digits of an integer.
 *
 * Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows.
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var MAX_INT_32 = Math.pow(2, 31) - 1;

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
};

// mocha testing
var expect = require('chai').expect;
describe('Reverse Integer', function() {

  // default testing example
  it('reverse 123', function () {
    var input = 123;
    var output = reverse(input);

    expect(output).to.equal(321);
  });

  // default testing example
  it('reverse -123', function () {
    var input = -123;
    var output = reverse(input);

    expect(output).to.equal(-321);
  });

  // default testing example
  it('reverse 10', function () {
    var input = 10;
    var output = reverse(input);

    expect(output).to.equal(1);
  });

  // default testing example
  it('reverse 100', function () {
    var input = 100;
    var output = reverse(input);

    expect(output).to.equal(1);
  });

  // default testing example
  it('reverse 1000000003 overflows', function () {
    var input = 1000000003;
    var output = reverse(input);

    expect(output).to.equal(0);
  });

  it('reverse 0', function () {
    var input = 0;
    var output = reverse(input);

    expect(output).to.equal(0);
  });
});
