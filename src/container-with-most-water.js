/*
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container.
 *
 * Tags:
 *  - Array
 *  - Two Pointers
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var left = 0;
  var right = height.length - 1;

  var max = 0;
  for (var d = height.length - 1; d > 0; d--) {
    var area = Math.min(height[left], height[right]) * d;
    if (area > max) {
      max = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

// mocha testing
var expect = require('chai').expect;
describe('Container With Most Water', function() {

  it('[1,1]', function () {
    var input = [1,1];
    var output = maxArea(input);
    expect(output).to.equal(1);
  });

  it('[1,1,1,1,1,1,1]', function () {
    var input = [1,1,1,1,1,1,1];
    var output = maxArea(input);
    expect(output).to.equal(6);
  });

  it('[1,1,1,1,1,1,10]', function () {
    var input = [1,1,1,1,1,1,10];
    var output = maxArea(input);
    expect(output).to.equal(6);
  });

  it('[1,2,0,2,1,1,10]', function () {
    var input = [1,2,0,2,1,1,10];
    var output = maxArea(input);
    expect(output).to.equal(10);
  });

  it('[1,2,0,10,1,1,10]', function () {
    var input = [1,2,0,10,1,1,10];
    var output = maxArea(input);
    expect(output).to.equal(30);
  });

  it('[0,1,2,0,10,1,1,10,0]', function () {
    var input = [0,1,2,0,10,1,1,10,0];
    var output = maxArea(input);
    expect(output).to.equal(30);
  });
});

