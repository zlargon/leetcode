/*
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * The order of elements can be changed.
 * It doesn't matter what you leave beyond the new length.
 *
 * Tags:
 *  - Array
 *  - Two Pointer
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

};

// mocha testing
var expect = require('chai').expect;
describe('Remove Element', function() {

  it('[1, 1, 2], val = 1', function () {
    var input = {
      nums: [1, 1, 2],
      val: 1
    };
    var output = removeElement(input.nums, input.val);

    expect(input.nums.sort()).to.deep.equal([2]);
    expect(output).to.equal(1);
  });

  it('[1, 1, 2, 1, 2, 5, 6], val = 1', function () {
    var input = {
      nums: [1, 1, 2, 1, 2, 5, 6],
      val: 1
    };
    var output = removeElement(input.nums, input.val);

    expect(input.nums.sort()).to.deep.equal([2, 2, 5, 6]);
    expect(output).to.equal(4);
  });

});
