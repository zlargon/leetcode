/*
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 *
 * Example:
 * Given nums = [-2, 0, 3, -5, 2, -1]
 *
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * Note:
 * You may assume that the array does not change.
 * There are many calls to sumRange function.
 *
 * Tags:
 *  - Dynamic Programming
 */

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  var sum = 0;
  this.numArray = nums.map(function (num) {
    sum += num;
    return sum;
  });
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.numArray[j];
  }

  return this.numArray[j] - this.numArray[i - 1];
};


// mocha testing
var expect = require('chai').expect;
describe('Range Sum Query - Immutable', function() {
  var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

  // default test case
  it('[-2, 0, 3, -5, 2, -1], sumRange(0, 2) = 1', function () {
    var output = numArray.sumRange(0, 2);
    expect(output).to.equal(1);
  });

  it('[-2, 0, 3, -5, 2, -1], sumRange(2, 5) = -1', function () {
    var output = numArray.sumRange(2, 5);
    expect(output).to.equal(-1);
  });

  it('[-2, 0, 3, -5, 2, -1], sumRange(0, 5) = -3', function () {
    var output = numArray.sumRange(0, 5);
    expect(output).to.equal(-3);
  });

});
