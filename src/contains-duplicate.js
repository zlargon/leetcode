/*
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 *
 * Tags:
 *  - Array
 *  - Hash Table
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var record = [];
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (record[n] === true) {
      return true;
    }
    record[n] = true;
  }
  return false;
};


// mocha testing
var expect = require('chai').expect;
describe('Contains Duplicate', function() {

  it('[]', function () {
    var input = [];
    var output = containsDuplicate(input);
    expect(output).to.be.false;
  });

  it('[0, 1, 2, 3]', function () {
    var input = [0, 1, 2, 3];
    var output = containsDuplicate(input);
    expect(output).to.be.false;
  });

  it('[0, 0, 1, 1, 2, 2]', function () {
    var input = [0, 0, 1, 1, 2, 2];
    var output = containsDuplicate(input);
    expect(output).to.be.true;
  });

  it('[0, 0, 1, 1, 2, 2, 3]', function () {
    var input = [0, 0, 1, 1, 2, 2, 3];
    var output = containsDuplicate(input);
    expect(output).to.be.true;
  });
});
