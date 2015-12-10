/*
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 *
 * Tags:
 *  - Dynamic Programming
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var money = [0, 0];

  for (var i = 0; i < nums.length; i++) {
    money = [
      money[1],
      Math.max(nums[i] + money[0], money[1])
    ];
  }

  return money[1];
};


// mocha testing
var expect = require('chai').expect;
describe('House Robber', function() {

  it('[]',function () {
    var input = [];
    var output = rob(input);
    expect(output).to.equal(0);
  });

  it('[1]',function () {
    var input = [1];
    var output = rob(input);
    expect(output).to.equal(1);
  });

  it('[1, 2]',function () {
    var input = [1, 2];
    var output = rob(input);
    expect(output).to.equal(2);
  });

  it('[1, 2, 0]',function () {
    var input = [1, 2, 0];
    var output = rob(input);
    expect(output).to.equal(2);
  });

  it('[1, 2, 2]',function () {
    var input = [1, 2, 2];
    var output = rob(input);
    expect(output).to.equal(3);
  });

  it('[1,2,3,4,5,6,7,8,9,10]',function () {
    var input = [1,2,3,4,5,6,7,8,9,10];
    var output = rob(input);
    expect(output).to.equal(30);
  });

  it('[1,1,1,1,1,1,1,1,1,1,1]',function () {
    var input = [1,1,1,1,1,1,1,1,1,1,1];
    var output = rob(input);
    expect(output).to.equal(6);
  });

  it('[1,0,0,1,1,0,1,0,1,0,1,0,1]',function () {
    var input = [1,0,0,1,1,0,1,0,1,0,1,0,1];
    var output = rob(input);
    expect(output).to.equal(6);
  });

});
