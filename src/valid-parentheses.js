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
  var close = {
    [')']: '(',
    [']']: '[',
    ['}']: '{'
  };

  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
      continue;
    }

    if (stack[stack.length - 1] !== close[c]) {
      return false;
    }

    stack.pop();
  }

  return stack.length === 0;
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

  it('[', function () {
    var input = '[';
    var output = isValid(input);
    expect(output).to.equal(false);
  });

  it('([{[()]}]', function () {
    var input = '([{[()]}]';
    var output = isValid(input);
    expect(output).to.equal(false);
  });

  it('([{()[]{}[{()()}]}])', function () {
    var input = '([{()[]{}[{()()}]}])';
    var output = isValid(input);
    expect(output).to.equal(true);
  });

});
