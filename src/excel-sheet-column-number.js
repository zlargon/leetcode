/*
 * Related to question Excel Sheet Column Title
 *
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var base = 1;
  var number = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    number += base * (s.charCodeAt(i) - 64);
    base *= 26;
  }
  return number;
};

// mocha testing
var expect = require('chai').expect;
describe('Excel Sheet Column Number', function() {

  it('A -> 1', function () {
    var input = 'A';
    var output = titleToNumber(input);
    expect(output).to.equal(1);
  });

  it('B -> 2', function () {
    var input = 'B';
    var output = titleToNumber(input);
    expect(output).to.equal(2);
  });

  it('C -> 3', function () {
    var input = 'C';
    var output = titleToNumber(input);
    expect(output).to.equal(3);
  });

  it('Z -> 26', function () {
    var input = 'Z';
    var output = titleToNumber(input);
    expect(output).to.equal(26);
  });

  it('AA -> 27', function () {
    var input = 'AA';
    var output = titleToNumber(input);
    expect(output).to.equal(27);
  });

  it('AB -> 28', function () {
    var input = 'AB';
    var output = titleToNumber(input);
    expect(output).to.equal(28);
  });

  it('CV -> 100', function () {
    var input = 'CV';
    var output = titleToNumber(input);
    expect(output).to.equal(100);
  });

  it('IZ -> 260', function () {
    var input = 'IZ';
    var output = titleToNumber(input);
    expect(output).to.equal(260);
  });

  it('YY -> 675', function () {
    var input = 'YY';
    var output = titleToNumber(input);
    expect(output).to.equal(675);
  });

  it('YZ -> 676', function () {
    var input = 'YZ';
    var output = titleToNumber(input);
    expect(output).to.equal(676);
  });

  it('ALL -> 1000', function () {
    var input = 'ALL';
    var output = titleToNumber(input);
    expect(output).to.equal(1000);
  });

});
