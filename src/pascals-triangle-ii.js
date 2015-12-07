/*
 * Given an index k, return the kth row of the Pascal's triangle.
 *
 * For example, given k = 3,
 * Return [1,3,3,1].
 *
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 * Tags:
 *  - Array
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  var n = 1;
  var row = [n];
  for (var i = 1; i < rowIndex + 1; i++) {
    n *= (rowIndex + 1 - i) / i;
    row[i] = n;
  }
  return row;
};


// mocha testing
var expect = require('chai').expect;
describe('Pascal\'s Triangle II', function() {

  // default test case
  it('0', function () {
    var input = 0;
    var output = getRow(input);

    expect(output).to.deep.equal([1]);
  });

  it('3', function () {
    var input = 3;
    var output = getRow(input);

    expect(output).to.deep.equal([1,3,3,1]);
  });

  it('5', function () {
    var input = 5;
    var output = getRow(input);

    expect(output).to.deep.equal([1,5,10,10,5,1]);
  });
});
