/*
 * Given a set of distinct integers, nums, return all possible subsets.
 *
 * Note:
 * Elements in a subset must be in non-descending order.
 * The solution set must not contain duplicate subsets.
 * For example,
 * If nums = [1,2,3], a solution is:
 *
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 *
 * Tags:
 *  - Array
 *  - Backtracking
 *  - Bit Manipulation
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var result = [];
  function createSubsets(subset, index) {
    if (index === nums.length) {
      result.push(subset);
      return;
    }

    createSubsets(subset, index + 1);
    createSubsets(subset.concat(nums[index]), index + 1);
  }

  createSubsets([], 0);
  return result;
};

function normalize(subsets) {
  return subsets.map(function (sub) {
    return sub.join('_');
  }).sort();
}

// mocha testing
var expect = require('chai').expect;
describe('Subsets', function() {

  it('[]', function () {
    var input = [];
    var output = subsets(input);

    expect(normalize(output)).to.deep.equal(normalize([
      []
    ]));
  });

  it('[0]', function () {
    var input = [0];
    var output = subsets(input);

    expect(normalize(output)).to.deep.equal(normalize([
      [],
      [0]
    ]));
  });

  it('[2, 1]', function () {
    var input = [2, 1];
    var output = subsets(input);

    expect(normalize(output)).to.deep.equal(normalize([
      [],
      [1],
      [2],
      [1,2]
    ]));
  });

  it('[1, 2, 3]', function () {
    var input = [1, 2, 3];
    var output = subsets(input);

    expect(normalize(output)).to.deep.equal(normalize([
      [],
      [1],
      [2],
      [1,2],
      [3],
      [1,3],
      [2,3],
      [1,2,3]
    ]));
  });

  it('[-2, 0, 1, -3]', function () {
    var input = [-2, 0, 1, -3];
    var output = subsets(input);

    expect(normalize(output)).to.deep.equal(normalize([
      [],
      [-3],
      [-2],
      [-3,-2],
      [0],
      [-3,0],
      [-2,0],
      [-3,-2,0],
      [1],
      [-3,1],
      [-2,1],
      [-3,-2,1],
      [0,1],
      [-3,0,1],
      [-2,0,1],
      [-3,-2,0,1]
    ]));
  });

});
