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
  var signOf = {
    1:    'I',
    5:    'V',
    10:   'X',
    50:   'L',
    100:  'C',
    500:  'D',
    1000: 'M'
  };

  var decompose = [
    [],
    [1],
    [1, 1],
    [1, 1, 1],
    [1, 5],
    [5],
    [5, 1],
    [5, 1, 1],
    [5, 1, 1, 1],
    [1, 10]
  ];

  var romans = [];
  var digit = 1;
  while (num > 0) {
    // get units, and convert to roman numeral literal
    var units = num % 10;
    var literal = decompose[units].map(function (n) {
      return signOf[n * digit];
    }).join('');

    // add each literal to {romans}
    romans.unshift(literal);

    // right shift 1 digit
    num = Math.floor(num / 10);
    digit *= 10;
  }

  return romans.join('');
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

  it('21 => XXI', function () {
    var input = 21;
    var output = intToRoman(input);
    expect(output).to.equal('XXI');
  });

  it('29 => XXIX', function () {
    var input = 29;
    var output = intToRoman(input);
    expect(output).to.equal('XXIX');
  });

  it('30 => XXX', function () {
    var input = 30;
    var output = intToRoman(input);
    expect(output).to.equal('XXX');
  });

  it('40 => XL', function () {
    var input = 40;
    var output = intToRoman(input);
    expect(output).to.equal('XL');
  });

  it('48 => XLVIII', function () {
    var input = 48;
    var output = intToRoman(input);
    expect(output).to.equal('XLVIII');
  });

  it('49 => XLIX', function () {
    var input = 49;
    var output = intToRoman(input);
    expect(output).to.equal('XLIX');
  });

  it('50 => L', function () {
    var input = 50;
    var output = intToRoman(input);
    expect(output).to.equal('L');
  });

  it('60 => LX', function () {
    var input = 60;
    var output = intToRoman(input);
    expect(output).to.equal('LX');
  });

  it('90 => XC', function () {
    var input = 90;
    var output = intToRoman(input);
    expect(output).to.equal('XC');
  });

  it('98 => XCVIII', function () {
    var input = 98;
    var output = intToRoman(input);
    expect(output).to.equal('XCVIII');
  });

  it('100 => C', function () {
    var input = 100;
    var output = intToRoman(input);
    expect(output).to.equal('C');
  });

  it('101 => CI', function () {
    var input = 101;
    var output = intToRoman(input);
    expect(output).to.equal('CI');
  });

  it('200 => CC', function () {
    var input = 200;
    var output = intToRoman(input);
    expect(output).to.equal('CC');
  });

  it('500 => D', function () {
    var input = 500;
    var output = intToRoman(input);
    expect(output).to.equal('D');
  });

  it('600 => DC', function () {
    var input = 600;
    var output = intToRoman(input);
    expect(output).to.equal('DC');
  });

  it('621 => DCXXI', function () {
    var input = 621;
    var output = intToRoman(input);
    expect(output).to.equal('DCXXI');
  });

  it('900 => CM', function () {
    var input = 900;
    var output = intToRoman(input);
    expect(output).to.equal('CM');
  });

  it('1000 => M', function () {
    var input = 1000;
    var output = intToRoman(input);
    expect(output).to.equal('M');
  });

  it('1666 => MDCLXVI', function () {
    var input = 1666;
    var output = intToRoman(input);
    expect(output).to.equal('MDCLXVI');
  });

  it('1970 => MCMLXX', function () {
    var input = 1970;
    var output = intToRoman(input);
    expect(output).to.equal('MCMLXX');
  });

});
