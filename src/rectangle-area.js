/*
 * Find the total area covered by two rectilinear rectangles in a 2D plane.
 * Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
 *
 * Assume that the total area is never beyond the maximum possible value of int.
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  function overlap (a, b) {
    if (a[0] > b[0]) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    // a[0] < a[1] < b[0] < b[1]
    if (a[1] <= b[0]) {
      return 0;
    }

    // a[0] < b[0] < a[1] < b[1]
    if (a[1] <= b[1]) {
      return a[1] - b[0];
    }

    // a[0] < b[0] < b[1] < a[1]
    return b[1] - b[0];
  }

  return (C - A) * (D - B) + (G - E) * (H - F) - overlap([A, C], [E, G]) * overlap([B, D], [F, H]);
};

// mocha testing
var expect = require('chai').expect;
describe('Rectangle Area', function() {

  it('(0, 0), (0, 0), (0, 0), (0, 0)', function () {
    var input = [0, 0, 0, 0, 0, 0, 0, 0];
    var output = computeArea.apply(null, input);
    expect(output).to.equal(0);
  });

  it('(-2, -2), (2, 2), (-2, -2), (2, 2)', function () {
    var input = [-2, -2, 2, 2, -2, -2, 2, 2];
    var output = computeArea.apply(null, input);
    expect(output).to.equal(16);
  });

  it('(-3, 0), (3, 4), (0, -1), (9, 2)', function () {
    var input = [-3, 0, 3, 4, 0, -1, 9, 2];
    var output = computeArea.apply(null, input);
    expect(output).to.equal(45);
  });

  it('(0, -1), (9, 2), (-3, 0), (3, 4)', function () {
    var input = [0, -1, 9, 2, -3, 0, 3, 4];
    var output = computeArea.apply(null, input);
    expect(output).to.equal(45);
  });

  it('(-2, -2), (2, 2), (-1, -1), (1, 1)', function () {
    var input = [-2, -2, 2, 2, -1, -1, 1, 1];
    var output = computeArea.apply(null, input);
    expect(output).to.equal(16);
  });

  it('(-1, -1), (1, 1), (-2, -2), (2, 2)', function () {
    var input = [-1, -1, 1, 1, -2, -2, 2, 2];
    var output = computeArea.apply(null, input);
    expect(output).to.equal(16);
  });

});
