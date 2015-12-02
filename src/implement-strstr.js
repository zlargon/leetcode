/*
 * Implement strStr().
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Tags:
 *  - Two Pointers
 *  - String
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

};


// mocha testing
var expect = require('chai').expect;
describe('Implement strStr()', function() {

  it('haystack = xxxabcabcabc, needle = abc', function () {
    var input = {
      haystack: 'xxxabcabcabc',
      needle: 'abc'
    }
    var output = strStr(input.haystack, input.needle);

    expect(output).to.equal(3);
  });

});
