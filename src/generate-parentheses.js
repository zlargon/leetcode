/*
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 * "((()))", "(()())", "(())()", "()(())", "()()()"
 *
 * Tags:
 *  - Backtracking
 *  - String
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  function generate (arr, left, right) {
    if (left === 0 && right === 0) {
      result.push(arr.join(''));
      return;
    }

    if (left > 0) {
      generate(arr.concat('('), left - 1, right);
    }

    if (right > left) {
      generate(arr.concat(')'), left, right - 1);
    }
  }

  generate([], n, n);
  return result;
};


// mocha testing
var expect = require('chai').expect;
describe('Generate Parentheses', function() {

  it('n = -1', function () {
    var input = -1;
    var output = generateParenthesis(input);
    expect(output).to.deep.equal([]);
  });

  it('n = 0', function () {
    var input = 0;
    var output = generateParenthesis(input);
    expect(output).to.deep.equal([
      ""
    ]);
  });

  it('n = 1', function () {
    var input = 1;
    var output = generateParenthesis(input);
    expect(output).to.deep.equal([
      "()"
    ]);
  });

  it('n = 2', function () {
    var input = 2;
    var output = generateParenthesis(input);
    expect(output.sort()).to.deep.equal([
      "(())","()()"
    ].sort());
  });

  it('n = 3', function () {
    var input = 3;
    var output = generateParenthesis(input);
    expect(output.sort()).to.deep.equal([
      "((()))", "(()())", "(())()", "()(())", "()()()"
    ].sort());
  });

  it('n = 4', function () {
    var input = 4;
    var output = generateParenthesis(input);
    expect(output.sort()).to.deep.equal([
      "(((())))","((()()))","((())())","((()))()","(()(()))",
      "(()()())","(()())()","(())(())","(())()()","()((()))",
      "()(()())","()(())()","()()(())","()()()()"
    ].sort());
  });
});
