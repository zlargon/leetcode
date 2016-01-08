/*
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 *
 * Tags:
 *  - Math
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var powerOfTree = [
    1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323,
    4782969, 14348907, 43046721, 129140163, 387420489, 1162261467, 3486784401
  ];
  return powerOfTree.indexOf(n) !== -1;
};


// mocha testing
var expect = require('chai').expect;
describe('Power of Three', function() {

  it('Is Power of Tree', function () {
    var nums = [
      1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323,
      4782969, 14348907, 43046721, 129140163, 387420489, 1162261467, 3486784401
    ];
    nums.forEach(function (input) {
      var output = isPowerOfThree(input);
      expect(output).to.be.true;
    })
  });

  it('Is Not Power of Tree', function () {
    var nums = [
      2, 4, 10, 28, 82, 244, 730, 2188, 6562, 19684, 59050, 177148, 531442, 1594324,
      4782970, 14348908, 43046722, 129140164, 387420490, 1162261468, 3486784402
    ];
    nums.forEach(function (input) {
      var output = isPowerOfThree(input);
      expect(output).to.be.false;
    })
  });
});
