/*
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *
 * For example:
 * 1 -> A
 * 2 -> B
 * 3 -> C
 * ...
 * 26 -> Z
 * 27 -> AA
 * 28 -> AB
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var base = 26;
  var codes = [];

  while (n > 0) {
    var r = n % base;    // remainder
    n = (n - r) / base;  // quotient

    // remainder should never be zero
    if (r === 0) {
      r = base;
      n--;
    }

    // add ASCII code (A = 65)
    codes.unshift(r + 64);
  }

  return String.fromCharCode.apply(null, codes);
};

// mocha testing
var expect = require('chai').expect;
describe('Excel Sheet Column Title', function() {

  it('1 -> A', function () {
    var input = 1;
    var output = convertToTitle(input);
    expect(output).to.equal('A');
  });

  it('2 -> B', function () {
    var input = 2;
    var output = convertToTitle(input);
    expect(output).to.equal('B');
  });

  it('3 -> C', function () {
    var input = 3;
    var output = convertToTitle(input);
    expect(output).to.equal('C');
  });

  it('26 -> Z', function () {
    var input = 26;
    var output = convertToTitle(input);
    expect(output).to.equal('Z');
  });

  it('27 -> AA', function () {
    var input = 27;
    var output = convertToTitle(input);
    expect(output).to.equal('AA');
  });

  it('28 -> AB', function () {
    var input = 28;
    var output = convertToTitle(input);
    expect(output).to.equal('AB');
  });

  it('100 -> CV', function () {
    var input = 100;
    var output = convertToTitle(input);
    expect(output).to.equal('CV');
  });

  it('260 -> IZ', function () {
    var input = 260;
    var output = convertToTitle(input);
    expect(output).to.equal('IZ');
  });

  it('675 -> YY', function () {
    var input = 675;
    var output = convertToTitle(input);
    expect(output).to.equal('YY');
  });

  it('676 -> YZ', function () {
    var input = 676;
    var output = convertToTitle(input);
    expect(output).to.equal('YZ');
  });

  it('1000 -> ALL', function () {
    var input = 1000;
    var output = convertToTitle(input);
    expect(output).to.equal('ALL');
  });

});
