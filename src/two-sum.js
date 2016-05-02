/*
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 * UPDATE (2016/2/13):
 * The return format had been changed to zero-based indices. Please read the above updated description carefully.
 *
 * Tags:
 *  - Array
 *  - Hash Table
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {}; // key = {number}, value = {index}

  for (var index = 0; index < nums.length; index++) {
    var number = nums[index];

    // check prevIndex is exist or not
    var prevIndex = map[target - number];
    if (typeof prevIndex === 'number') {
      return [
        prevIndex,
        index
      ];
    }

    map[number] = index;
  }
};

// mocha testing
var expect = require('chai').expect;
describe('Two Sum', function() {

  // default testing example
  it('nums = [2, 7, 11, 15], target = 9', function () {
    var input = {
      nums: [2, 7, 11, 15],
      target: 9
    };
    var output = twoSum(input.nums, input.target);

    expect(output).to.deep.equal([0, 1]);
  });

  it('nums = [3, 2, 4], target = 6', function () {
    var input = {
      nums: [3, 2, 4],
      target: 6
    };
    var output = twoSum(input.nums, input.target);

    expect(output).to.deep.equal([1, 2]);
  });
});
