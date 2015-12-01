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
});
