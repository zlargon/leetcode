/*
 * Implement atoi to convert a string to an integer.
 *
 * Hint: Carefully consider all possible input cases.
 * If you want a challenge, please do not see below and ask yourself what are the possible input cases.
 *
 * Notes:
 * It is intended for this problem to be specified vaguely (ie, no given input specs).
 * You are responsible to gather all the input requirements up front.
 *
 * Requirements for atoi:
 * The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
 * Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
 * The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
 * If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
 * If no valid conversion could be performed, a zero value is returned.
 * If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
 *
 * Tags:
 *  - Math
 *  - String
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

};

// mocha testing
var expect = require('chai').expect;
describe('String to Integer (atoi)', function() {

  it('whitespace', function () {
    var input = ' abc 123';
    var output = myAtoi(input);

    expect(output).to.equal(0);
  });

  it('123', function () {
    var input = '123';
    var output = myAtoi(input);

    expect(output).to.equal(123);
  });

  it('-123', function () {
    var input = '-123';
    var output = myAtoi(input);

    expect(output).to.equal(-123);
  });


  it(' \\t123', function () {
    var input = ' \t123';
    var output = myAtoi(input);

    expect(output).to.equal(123);
  });

  it(' \\t-123', function () {
    var input = ' \t-123';
    var output = myAtoi(input);

    expect(output).to.equal(-123);
  });

  it(' 123abcd', function () {
    var input = ' 123abcd';
    var output = myAtoi(input);

    expect(output).to.equal(123);
  });

  it(' -123abcd', function () {
    var input = ' -123abcd';
    var output = myAtoi(input);

    expect(output).to.equal(-123);
  });

  it('INT_MAX 2147483650', function () {
    var input = '2147483650';
    var output = myAtoi(input);

    expect(output).to.equal(2147483647);
  });

  it('INT_MIN -2147483650', function () {
    var input = '-2147483650';
    var output = myAtoi(input);

    expect(output).to.equal(-2147483648);
  });
});
