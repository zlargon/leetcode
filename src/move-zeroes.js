/*
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 *
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 * Tags:
 *  - Array
 *  - Two Pointers
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var len = nums.length;

  var j = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }

  while (j < len) {
    nums[j++] = 0;
  }
};

// mocha testing
var expect = require('chai').expect;
describe('Move Zeroes', function() {

  it('[]', function () {
    var input = [];
    moveZeroes(input);
    expect(input).to.deep.equal([]);
  });

  it('[0]', function () {
    var input = [0];
    moveZeroes(input);
    expect(input).to.deep.equal([0]);
  });

  it('[0, 0, 0, 0, 0]', function () {
    var input = [0, 0, 0, 0, 0];
    moveZeroes(input);
    expect(input).to.deep.equal([0, 0, 0, 0, 0]);
  });

  it('[0, 1, 0, 3, 12]', function () {
    var input = [0, 1, 0, 3, 12];
    moveZeroes(input);
    expect(input).to.deep.equal([1, 3, 12, 0, 0]);
  });

});
