/*
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 *
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 *
 * Tags:
 *  - Array
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var ranges = [];

  var start = 0;
  for (var i = 1; i <= nums.length; i++) {
    var prev = nums[i - 1];

    if (nums[i] - 1 !== prev) {
      var str = nums[start] + (start === i - 1 ? '' : '->' + prev);
      ranges.push(str);
      start = i;
    }
  }

  return ranges;
};

// mocha testing
var expect = require('chai').expect;
describe('Summary Ranges', function() {

  it('[]', function () {
    var input = [];
    var output = summaryRanges(input);
    expect(output).to.deep.equal([]);
  });

  it('[0]', function () {
    var input = [0];
    var output = summaryRanges(input);
    expect(output).to.deep.equal(['0']);
  });

  it('[0,1,2,4,5]', function () {
    var input = [0,1,2,4,5];
    var output = summaryRanges(input);
    expect(output).to.deep.equal(['0->2','4->5']);
  });

  it('[0,1,2,4,5,7]', function () {
    var input = [0,1,2,4,5,7];
    var output = summaryRanges(input);
    expect(output).to.deep.equal(['0->2','4->5','7']);
  });

});
