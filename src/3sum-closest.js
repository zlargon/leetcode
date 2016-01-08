/*
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 *   For example, given array S = {-1 2 1 -4}, and target = 1.
 *   The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Tags:
 *  - Array
 *  - Two Pointers
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var closest = null;
  for (var i = 0; i < nums.length - 2; i++) {

    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];
      if (closest === null) {
        closest = sum;
      }

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return target;
      }
    }
  }

  return closest;
};

// mocha testing
var expect = require('chai').expect;
describe('3Sum Closest', function() {

  it('[-1, 2, 1, -4], target = 2', function () {
    var input = {
      nums: [-1, 2, 1, -4],
      target: 2
    };
    var output = threeSumClosest(input.nums, input.target);
    expect(output).to.equal(2);
  });

  it('[0, 0, 0], target = 1', function () {
    var input = {
      nums: [0, 0, 0],
      target: 1
    };
    var output = threeSumClosest(input.nums, input.target);
    expect(output).to.equal(0);
  });

  it('[-1, 0, 1, 2, -1, -4], target = 0', function () {
    var input = {
      nums: [-1, 0, 1, 2, -1, -4],
      target: 0
    };
    var output = threeSumClosest(input.nums, input.target);
    expect(output).to.equal(0);
  });

  it('[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6], target = 20', function () {
    var input = {
      nums: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6],
      target: 20
    };
    var output = threeSumClosest(input.nums, input.target);
    expect(output).to.equal(16);
  });

  it('[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6], target = -20', function () {
    var input = {
      nums: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6],
      target: -20
    };
    var output = threeSumClosest(input.nums, input.target);
    expect(output).to.equal(-8);
  });
});
