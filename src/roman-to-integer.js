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
  var valueOf = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  }

  var result = 0;
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    var next = s.charAt(i + 1);
    var sign = next !== '' && valueOf[next] > valueOf[char] ? -1 : 1;
    result += sign * valueOf[char];
  }

  return result;
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

  it('XXI', function () {
    var input = 'XXI';
    var output = romanToInt(input);
    expect(output).to.equal(21);
  });

  it('XXIX', function () {
    var input = 'XXIX';
    var output = romanToInt(input);
    expect(output).to.equal(29);
  });

  it('XXX', function () {
    var input = 'XXX';
    var output = romanToInt(input);
    expect(output).to.equal(30);
  });

  it('XL', function () {
    var input = 'XL';
    var output = romanToInt(input);
    expect(output).to.equal(40);
  });

  it('XLVIII', function () {
    var input = 'XLVIII';
    var output = romanToInt(input);
    expect(output).to.equal(48);
  });

  it('IL', function () {
    var input = 'IL';
    var output = romanToInt(input);
    expect(output).to.equal(49);
  });

  it('L', function () {
    var input = 'L';
    var output = romanToInt(input);
    expect(output).to.equal(50);
  });

  it('LX', function () {
    var input = 'LX';
    var output = romanToInt(input);
    expect(output).to.equal(60);
  });

  it('XC', function () {
    var input = 'XC';
    var output = romanToInt(input);
    expect(output).to.equal(90);
  });

  it('XCVIII', function () {
    var input = 'XCVIII';
    var output = romanToInt(input);
    expect(output).to.equal(98);
  });

  it('C', function () {
    var input = 'C';
    var output = romanToInt(input);
    expect(output).to.equal(100);
  });

  it('CI', function () {
    var input = 'CI';
    var output = romanToInt(input);
    expect(output).to.equal(101);
  });

  it('CC', function () {
    var input = 'CC';
    var output = romanToInt(input);
    expect(output).to.equal(200);
  });

  it('D', function () {
    var input = 'D';
    var output = romanToInt(input);
    expect(output).to.equal(500);
  });

  it('DC', function () {
    var input = 'DC';
    var output = romanToInt(input);
    expect(output).to.equal(600);
  });

  it('DCXXI', function () {
    var input = 'DCXXI';
    var output = romanToInt(input);
    expect(output).to.equal(621);
  });

  it('CM', function () {
    var input = 'CM';
    var output = romanToInt(input);
    expect(output).to.equal(900);
  });

  it('M', function () {
    var input = 'M';
    var output = romanToInt(input);
    expect(output).to.equal(1000);
  });

  it('MDCLXVI', function () {
    var input = 'MDCLXVI';
    var output = romanToInt(input);
    expect(output).to.equal(1666);
  });

  it('MCMLXX', function () {
    var input = 'MCMLXX';
    var output = romanToInt(input);
    expect(output).to.equal(1970);
  });
});
