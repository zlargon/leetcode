/*
 * Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * A partially filled sudoku which is valid.
 *
 * Note:
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
 *
 * Tags:
 *  - Hash Table
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var rowMap = [ {}, {}, {}, {}, {}, {}, {}, {}, {} ];
  var colMap = [ {}, {}, {}, {}, {}, {}, {}, {}, {} ];
  var girdMap = [
    [ {}, {}, {} ],
    [ {}, {}, {} ],
    [ {}, {}, {} ]
  ];

  try {
    board.forEach(function (line, rowIndex) {
      line.forEach(function (number, colIndex) {
        if (number === '.') return;

        var maps = [
          rowMap[rowIndex],
          colMap[colIndex],
          girdMap[Math.floor(rowIndex / 3)][Math.floor(colIndex / 3)]
        ];

        maps.forEach(function (map) {
          if (map.hasOwnProperty(number)) {
            // number is already exist
            throw new Error();
          }

          // add to map
          map[number] = true;
        });
      });
    });
  } catch (e) {
    return false;
  }

  return true;
};

// mocha testing
var expect = require('chai').expect;
describe('Two Sum', function() {

  // default test case
  it('default test case', function () {
    var input = [
      '.87654321',
      '2........',
      '3........',
      '4........',
      '5........',
      '6........',
      '7........',
      '8........',
      '9........'
    ].map(function (s) { return s.split('') });

    var output = isValidSudoku(input);
    expect(output).to.equal(true);
  });

  it('row repeat', function () {
    var input = [
      '187654321',
      '2........',
      '3........',
      '4........',
      '5........',
      '6........',
      '7........',
      '8........',
      '9........'
    ].map(function (s) { return s.split('') });

    var output = isValidSudoku(input);
    expect(output).to.equal(false);
  });

  it('col repeat', function () {
    var input = [
      '.87654321',
      '2........',
      '3........',
      '4........',
      '5........',
      '6........',
      '7........',
      '8........',
      '9.......1'
    ].map(function (s) { return s.split('') });

    var output = isValidSudoku(input);
    expect(output).to.equal(false);
  });

  it('grid repeat', function () {
    var input = [
      '.87654321',
      '2........',
      '32.......',
      '4........',
      '5........',
      '6........',
      '7........',
      '8........',
      '9........'
    ].map(function (s) { return s.split('') });

    var output = isValidSudoku(input);
    expect(output).to.equal(false);
  });
});
