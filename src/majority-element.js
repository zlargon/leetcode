/*
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Tags:
 *  - Divide and Conquer
 *  - Array
 *  - Bit Manipulation
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (map.hasOwnProperty(n) === false) {
      map[n] = 0;
    }

    map[n]++;

    if (map[n] > nums.length / 2) {
      return n;
    }
  }
};

// mocha testing
var expect = require('chai').expect;
describe('Majority Element', function() {

  it('[1]', function () {
    var input = [1];
    var output = majorityElement(input);
    expect(output).to.equal(1);
  });

  it('[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]', function () {
    var input = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    var output = majorityElement(input);
    expect(output).to.equal(1);
  });

  it('[1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]', function () {
    var input = [1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
    var output = majorityElement(input);
    expect(output).to.equal(2);
  });

});
