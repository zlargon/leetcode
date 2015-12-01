/*
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Tags:
 *  - Math
 *  - String
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

};

// mocha testing
var expect = require('chai').expect;
describe('Roman to Integer', function() {

  it('I ~ XX', function () {
    var input = [
      'I',   'II',   'III',   'IV',  'V',
      'VI',  'VII',  'VIII',  'IX',  'X',
      'XI',  'XII',  'XIII',  'XIV', 'XV',
      'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
    ];

    for (var i = 0; i < input.length; i++) {
      var output = romanToInt(input[i]);
      expect(output).to.equal(i + 1);
    }
  });
});

