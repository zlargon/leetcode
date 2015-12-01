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
  var container = [];
  for (var i = 0; i < numRows; i++) {
    container[i] = '';
  }

  var row = 0;
  var direction = -1;
  for (var i = 0; i < s.length; i++) {
    container[row] += s.charAt(i);

    // decide the direction
    if (numRows === 1) {
      direction = 0;
    } else if (row % (numRows - 1) === 0) {
      direction *= -1;
    }

    row += direction;
  }

  return container.join('');
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

  it('PAYPALISHIRING, rows = 4', function () {
    var input = {
      s: 'PAYPALISHIRING',
      numRows: 4
    };
    var output = convert(input.s, input.numRows);

    // P  I  N  => PIN
    // A LS IG  => ALSIG
    // YA HR    => YAHR
    // P  I     => PI
    expect(output).to.equal('PINALSIGYAHRPI');
  });

  it('Empty String, row = 1', function() {
    var input = {
      s: '',
      numRows: 1
    };
    var output = convert(input.s, input.numRows);

    expect(output).to.equal('');
  });

  it('AB, row = 1', function() {
    var input = {
      s: 'AB',
      numRows: 1
    };
    var output = convert(input.s, input.numRows);

    expect(output).to.equal('AB');
  });
});
