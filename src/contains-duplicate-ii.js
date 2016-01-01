/*
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
 *
 * Tags:
 *  - Array
 *  - Hash Table
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var lastIndexOf = [];
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (i - lastIndexOf[n] <= k) {
      return true;
    }
    lastIndexOf[n] = i;
  }
  return false;
};


// mocha testing
var expect = require('chai').expect;
describe('Contains Duplicate II', function() {

  it('[], k = 0', function () {
    var input = {
      nums: [],
      k: 0
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.false;
  });

  it('[0, 1, 2, 3], k = 1', function () {
    var input = {
      nums: [0, 1, 2, 3],
      k: 1
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.false;
  });

  it('[0, 0, 1, 1, 2, 2], k = 1', function () {
    var input = {
      nums: [0, 0, 1, 1, 2, 2],
      k: 1
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.true;
  });

  it('[0, 0, 1, 1, 2, 2, 3], k = 1', function () {
    var input = {
      nums: [0, 0, 1, 1, 2, 2, 3],
      k: 1
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.true;
  });

  it('[0, 1, 2, 3, 4, 0], k = 3', function () {
    var input = {
      nums: [0, 1, 2, 3, 4, 0],
      k: 3
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.false;
  });

  it('[0, 1, 2, 3, 4, 0], k = 4', function () {
    var input = {
      nums: [0, 1, 2, 3, 4, 0],
      k: 4
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.false;
  });

  it('[0, 1, 2, 3, 4, 0], k = 5', function () {
    var input = {
      nums: [0, 1, 2, 3, 4, 0],
      k: 5
    };
    var output = containsNearbyDuplicate(input.nums, input.k);
    expect(output).to.be.true;
  });
});
