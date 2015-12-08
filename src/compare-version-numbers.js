/*
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
 *
 * You may assume that the version strings are non-empty and contain only digits and the . character.
 * The . character does not represent a decimal point and is used to separate number sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
 *
 * Here is an example of version numbers ordering:
 * 0.1 < 1.1 < 1.2 < 13.37
 *
 * Tags:
 *  - String
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var version = [version1, version2].map(function (ver) {
    return ver.split('.');
  });

  while (version[0].length > 0 || version[1].length > 0) {
    var num = version.map(function (arr) {
      var n = parseInt(arr.shift(), 10);
      return isNaN(n) ? 0 : n;
    });

    if (num[0] > num[1]) return 1;
    if (num[0] < num[1]) return -1;
  }

  return 0;
};


// mocha testing
var expect = require('chai').expect;
describe('Compare Version Numbers', function() {

  // default test case
  it('0.1 < 1.1', function () {
    var input = {
      version1: '0.1',
      version2: '1.1'
    };
    var output = compareVersion(input.version1, input.version2);

    expect(output).to.equal(-1);
  });

  it('1.1 > 0.1', function () {
    var input = {
      version1: '1.1',
      version2: '0.1'
    };
    var output = compareVersion(input.version1, input.version2);

    expect(output).to.equal(1);
  });

  it('1.1.1 = 1.1.1', function () {
    var input = {
      version1: '1.1.1',
      version2: '1.1.1'
    };
    var output = compareVersion(input.version1, input.version2);

    expect(output).to.equal(0);
  });

  it('1.1.1.2 < 1.1.1.2.1', function () {
    var input = {
      version1: '1.1.1.2',
      version2: '1.1.1.2.1'
    };
    var output = compareVersion(input.version1, input.version2);

    expect(output).to.equal(-1);
  });

  it('1.1.1.2 = 1.1.1.2.0', function () {
    var input = {
      version1: '1.1.1.2',
      version2: '1.1.1.2.0'
    };
    var output = compareVersion(input.version1, input.version2);

    expect(output).to.equal(0);
  });

  it('1.1.1.2 = 1.1.1.2.0.0', function () {
    var input = {
      version1: '1.1.1.2',
      version2: '1.1.1.2.0.0'
    };
    var output = compareVersion(input.version1, input.version2);

    expect(output).to.equal(0);
  });

});
