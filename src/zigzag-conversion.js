/*
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *
 * Tags:
 *  - String
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

};

// mocha testing
var expect = require('chai').expect;
describe('ZigZag Conversion', function() {

  // default testing example
  it('PAYPALISHIRING, rows = 3', function () {
    var input = {
      s: 'PAYPALISHIRING',
      numRows: 3
    };
    var output = convert(input.s, input.numRows);

    expect(output).to.equal('PAHNAPLSIIGYIR');
  });

});
