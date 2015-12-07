/*
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 * For example, given numRows = 5,
 * Return
 *
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 *
 * Tags:
 *  - Array
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }

  var pascal = [ [1] ];
  for (var i = 1; i < numRows; i++) {
    var row = pascal[i] = pascal[i - 1].concat([0]);

    for (var j = row.length - 1; j >= 1; j--) {
      row[j] += row[j - 1];
    }
  }

  return pascal;
};

// mocha testing
var expect = require('chai').expect;
describe('Pascal\'s Triangle', function() {

  // default test case
  it('0', function () {
    var input = 0;
    var output = generate(input);

    expect(output).to.deep.equal([]);
  });

  it('5', function () {
    var input = 5;
    var output = generate(input);

    expect(output).to.deep.equal([
           [1],
          [1,1],
         [1,2,1],
        [1,3,3,1],
       [1,4,6,4,1]
    ]);
  });
});
