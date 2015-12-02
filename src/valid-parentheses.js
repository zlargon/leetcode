/*
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 *
 * Tags:
 *  - Stack
 *  - String
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

};

// mocha testing
var expect = require('chai').expect;
describe('Valid Parentheses', function() {

  // default testing case
  it('()', function () {
    var input = '()';
    var output = isValid(input);
    expect(output).to.equal(true);
  });

  // default testing case
  it('()[]{}', function () {
    var input = '()[]{}';
    var output = isValid(input);
    expect(output).to.equal(true);
  });

  // default testing case
  it('(]', function () {
    var input = '(]';
    var output = isValid(input);
    expect(output).to.equal(false);
  });

  // default testing case
  it('([)]', function () {
    var input = '([)]';
    var output = isValid(input);
    expect(output).to.equal(false);
  });

});
