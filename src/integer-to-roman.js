/*
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Tags:
 *  - Math
 *  - String
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

};

// mocha testing
var expect = require('chai').expect;
describe('Integer to Roman', function() {

  it('1 ~ 20', function () {
    var table = [
      'I',   'II',   'III',   'IV',  'V',
      'VI',  'VII',  'VIII',  'IX',  'X',
      'XI',  'XII',  'XIII',  'XIV', 'XV',
      'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
    ];

    for (var i = 0; i < table.length; i++) {
      var output = intToRoman(i + 1);
      expect(output).to.equal(table[i]);
    }
  });

});
