/*
 * Rotate an array of n elements to the right by k steps.
 *
 * For example,
 * with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 *
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 *
 * Hint:
 * Could you do it in-place with O(1) extra space?
 * Related problem: Reverse Words in a String II
 *
 * Tags:
 *  - Array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var n = nums.length;
  k %= n;
  if (k === 0) {
    return;
  }

  Object.assign(nums, nums.slice(n - k, n).concat(nums.slice(0, n - k)));
};

// mocha testing
var expect = require('chai').expect;
describe('Rotate Array', function() {

  // default test case
  it('[1,2,3,4,5,6,7], rotate = 3', function () {
    var input = {
      nums: [1,2,3,4,5,6,7],
      k: 3
    };
    rotate(input.nums, input.k);
    expect(input.nums).to.deep.equal([5,6,7,1,2,3,4]);
  });

  it('[1,2,3,4,5,6,7], rotate = 0', function () {
    var input = {
      nums: [1,2,3,4,5,6,7],
      k: 0
    };
    rotate(input.nums, input.k);
    expect(input.nums).to.deep.equal([1,2,3,4,5,6,7]);
  });

  it('[1,2,3,4,5,6,7], rotate = 5', function () {
    var input = {
      nums: [1,2,3,4,5,6,7],
      k: 5
    };
    rotate(input.nums, input.k);
    expect(input.nums).to.deep.equal([3,4,5,6,7,1,2]);
  });

});
