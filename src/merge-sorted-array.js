/*
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 *
 * Tags:
 *  - Array
 *  - Two Pointers
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;

  for (var lastIndex = m + n - 1; lastIndex >= 0; lastIndex--) {
    if ((i >= 0 && j < 0) || (i >= 0 && j >= 0 && nums1[i] >= nums2[j])) {
      nums1[lastIndex] = nums1[i--];
    } else {
      nums1[lastIndex] = nums2[j--];
    }
  }
};

// mocha testing
var expect = require('chai').expect;
describe('Merge Sorted Array', function() {

  // default test case
  it('[1] + []', function () {
    var input = {
      nums1: [1],
      m: 1,
      nums2: [],
      n: 0
    };
    merge(input.nums1, input.m, input.nums2, input.n);
    var output = input.nums1;

    expect(output).to.deep.equal([1]);
  });

  it('[1, 1, 1] + [0, 0, 2, 2]', function () {
    var input = {
      nums1: [1, 1, 1],
      m: 3,
      nums2: [0, 0, 2, 2],
      n: 4
    };
    merge(input.nums1, input.m, input.nums2, input.n);
    var output = input.nums1;

    expect(output).to.deep.equal([0, 0, 1, 1, 1, 2, 2]);
  });

  it('[0, 0, 2, 2] + [1, 1, 1]', function () {
    var input = {
      nums1: [0, 0, 2, 2],
      m: 4,
      nums2: [1, 1, 1],
      n: 3
    };
    merge(input.nums1, input.m, input.nums2, input.n);
    var output = input.nums1;

    expect(output).to.deep.equal([0, 0, 1, 1, 1, 2, 2]);
  });

  it('[0] + [1]', function () {
    var input = {
      nums1: [0],
      m: 0,
      nums2: [1],
      n: 1
    };
    merge(input.nums1, input.m, input.nums2, input.n);
    var output = input.nums1;

    expect(output).to.deep.equal([1]);
  });

  it('Native Number Array', function () {
    var input = {
      nums1: [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      m: 55,
      nums2: [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9],
      n: 99
    };
    merge(input.nums1, input.m, input.nums2, input.n);
    var output = input.nums1;

    expect(output).to.deep.equal([-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9]);
  });

});
