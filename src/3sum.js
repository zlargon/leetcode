/*
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
 * The solution set must not contain duplicate triplets.
 *
 * For example, given array S = {-1 0 1 2 -1 -4},
 *   A solution set is:
 *   (-1, 0, 1)
 *   (-1, -1, 2)
 *
 * Tags:
 *  - Array
 *  - Two Pointers
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var result = [];
  for (var i = 0; i < nums.length - 2; i++) {

    // filter the duplication
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
        continue;
      }

      if (sum < 0) {
        left++;
        continue;
      }

      result.push([nums[i], nums[left++], nums[right--]]);

      // move to next 'left' (might different with pervious one)
      while (nums[left] === nums[left - 1] && left < right) left++;
    }
  }

  return result;
};

function normalize(numSets) {
  return numSets.map(function (nums) {
    return nums.join('_');
  }).sort();
}

// mocha testing
var expect = require('chai').expect;
describe('3Sum', function() {

  it('[-1, 0, 1, 2, -1, -4]', function () {
    var input = [-1, 0, 1, 2, -1, -4];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-1,-1,2],[-1,0,1]]
    ));
  });

  it('[-1, 0, 0, 0, -1, 1, 2, -1, -4]', function () {
    var input = [-1, 0, 0, 0, -1, 1, 2, -1, -4];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-1,-1,2],[-1,0,1],[0,0,0]]
    ));
  });

  it('[]', function () {
    var input = [];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      []
    ));
  });

  it('[1, 1]', function () {
    var input = [1, 1];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      []
    ));
  });

  it('[1, 1, 1]', function () {
    var input = [1, 1, 1];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      []
    ));
  });

  it('[-1, -1, -1]', function () {
    var input = [-1, -1, -1];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      []
    ));
  });

  it('[-1, 0, 0, 0, -1, 1, 2, -1, -4, 2, 2]', function () {
    var input = [-1, 0, 0, 0, -1, 1, 2, -1, -4, 2, 2];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-4,2,2],[-1,-1,2],[-1,0,1],[0,0,0]]
    ));
  });

  it('[1, 1, -2]', function () {
    var input = [1, 1, -2];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-2,1,1]]
    ));
  });

  it('[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]', function () {
    var input = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
    ));
  });

  it('[0,0,0,1,1,1,2,2,2,3,3,4,4,6,6]', function () {
    var input = [0,0,0,1,1,1,2,2,2,3,3,4,4,6,6];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[0,0,0]]
    ));
  });

  it('[0,0,0,-1,-1,-1,-2,-2,-2,-3,-3,-4,-4,-6,-6]', function () {
    var input = [0,0,0,-1,-1,-1,-2,-2,-2,-3,-3,-4,-4,-6,-6];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[0,0,0]]
    ));
  });

  it('[-6,0,1,2,2,3,3,4,5]', function () {
    var input = [-6,0,1,2,2,3,3,4,5];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-6,1,5],[-6,2,4],[-6,3,3]]
    ));
  });

  it('[-6,0,1,2,2,3,3,4,4,5]', function () {
    var input = [-6,0,1,2,2,3,3,4,4,5];
    var output = threeSum(input);
    expect(normalize(output)).to.deep.equal(normalize(
      [[-6,1,5],[-6,2,4],[-6,3,3]]
    ));
  });
});
