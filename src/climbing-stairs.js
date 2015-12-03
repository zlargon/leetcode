/*
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Tags:
 *  - Dynamic Programming
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var f = [ 1, 2 ];
  if (n < 2) {
    return n;
  }

  for (var i = 2; i < n; i++) {
    var tmp = f[0] + f[1];
    f[0] = f[1];
    f[1] = tmp; // f[0] + f[1]
  }

  return f[1];
};

// mocha testing
var expect = require('chai').expect;
describe('Add Binary', function() {

  // default test case
  it('1 steps => 1', function () {
    var input = 1;
    var output = climbStairs(input);
    expect(output).to.equal(1);
  });

  it('2 steps => 2', function () {
    var input = 2;
    var output = climbStairs(input);
    expect(output).to.equal(2);
  });

  it('3 steps => 3', function () {
    var input = 3;
    var output = climbStairs(input);
    expect(output).to.equal(3);
  });

  it('4 steps => 5', function () {
    var input = 4;
    var output = climbStairs(input);
    expect(output).to.equal(5);
  });

  it('5 steps => 8', function () {
    var input = 5;
    var output = climbStairs(input);
    expect(output).to.equal(8);
  });

});
