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

});
