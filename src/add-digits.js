/*
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 *
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2.
 * Since 2 has only one digit, return it.
 *
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 *
 * Hint:
 *  1. A naive implementation of the above process is trivial. Could you come up with other methods?
 *  2. What are all the possible results?
 *  3. How do they occur, periodically or randomly?
 *  4. You may find this Wikipedia article useful.
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // Digital root = Dr .... Box[1] ~ Box[9]
  // Dr[n] + 1 = Dr[n-1]
  // Box[1] ~ Box[9], Dr[n] will be in the box next to Dr[n-1]

  // if (num === 0) return 0;   // (-1 % 9) + 1 = 0
  return (num - 1) % 9 + 1;
};


// mocha testing
var expect = require('chai').expect;
describe('Add Digits', function() {

  it('0 => 0', function () {
    var input = 0;
    var output = addDigits(input);
    expect(output).to.equal(0);
  });

  it('38 => 2', function () {
    var input = 38;
    var output = addDigits(input);
    expect(output).to.equal(2);
  });

  it('1853 => 8', function () {
    var input = 1853;
    var output = addDigits(input);
    expect(output).to.equal(8);
  });

});
