/*
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * For example,
 * Given input array nums = [1, 1, 2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 *
 * Tags:
 *  - Array
 *  - Two Pointer
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

};


// mocha testing
var expect = require('chai').expect;
describe('Remove Duplicates from Sorted Array', function() {

  // default test case
  it('[1, 1, 2] => [1, 2]', function () {
    var input = [1, 1, 2];
    var output = removeDuplicates(input);

    expect(input).to.deep.equal([1, 2]);
    expect(output).to.equal(2);
  });

});
