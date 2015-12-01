/*
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * Tags:
 *  - String
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

};


// mocha testing
var expect = require('chai').expect;
describe('Longest Common Prefix', function() {

  it('No Common Prefix', function () {
    var input = [
      'aaaa',
      'abc',
      'cba'
    ];
    var output = longestCommonPrefix(input);

    expect(output).to.deep.equal('');
  });

  it('a, abc, adb => a', function () {
    var input = [
      'a',
      'abc',
      'abd'
    ];
    var output = longestCommonPrefix(input);

    expect(output).to.deep.equal('a');
  });

  it('abcfg, abcfghi, abcd, abce => abc', function () {
    var input = [
      'abcfg',
      'abcfghi',
      'abcd',
      'abce'
    ];
    var output = longestCommonPrefix(input);

    expect(output).to.deep.equal('abc');
  });

});
