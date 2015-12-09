/*
 * You are playing the following Nim Game with your friend:
 * There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones.
 * The one who removes the last stone will be the winner.
 * You will take the first turn to remove the stones.
 *
 * Both of you are very clever and have optimal strategies for the game.
 * Write a function to determine whether you can win the game given the number of stones in the heap.
 *
 * For example,
 * if there are 4 stones in the heap, then you will never win the game:
 *   no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.
 *
 * Hint:
 * If there are 5 stones in the heap, could you figure out a way to remove the stones such that you will always be the winner?
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 !== 0;
};

// mocha testing
var expect = require('chai').expect;
describe('Nim Game', function() {

  it('n = 1', function () {
    var input = 1;
    var output = canWinNim(input);
    expect(output).to.be.true;
  });

  it('n = 2', function () {
    var input = 2;
    var output = canWinNim(input);
    expect(output).to.be.true;
  });

  it('n = 3', function () {
    var input = 3;
    var output = canWinNim(input);
    expect(output).to.be.true;
  });

  it('n = 4', function () {
    var input = 4;
    var output = canWinNim(input);
    expect(output).to.be.false;
  });

  it('n = 5', function () {
    var input = 5;
    var output = canWinNim(input);
    expect(output).to.be.true;
  });

  it('n = 6', function () {
    var input = 6;
    var output = canWinNim(input);
    expect(output).to.be.true;
  });

  it('n = 7', function () {
    var input = 7;
    var output = canWinNim(input);
    expect(output).to.be.true;
  });

  it('n = 8', function () {
    var input = 8;
    var output = canWinNim(input);
    expect(output).to.be.false;
  });

});
