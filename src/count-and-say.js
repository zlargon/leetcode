/*
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth sequence.
 *
 * Note: The sequence of integers will be represented as a string.
 *
 * Tags:
 *  - String
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

};


// mocha testing
var expect = require('chai').expect;
describe('Count and Say', function() {

  // default test case
  it('1', function () {
    var input = 1;
    var output = countAndSay(input);
    expect(output).to.equal('1');
  });

  // default test case
  it('2', function () {
    var input = 2;
    var output = countAndSay(input);
    expect(output).to.equal('11');
  });

  // default test case
  it('3', function () {
    var input = 3;
    var output = countAndSay(input);
    expect(output).to.equal('21');
  });

  // default test case
  it('4', function () {
    var input = 4;
    var output = countAndSay(input);
    expect(output).to.equal('1211');
  });

  // default test case
  it('5', function () {
    var input = 5;
    var output = countAndSay(input);
    expect(output).to.equal('111221');
  });

});
