/*
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which will return whether version is bad.
 * Implement a function to find the first bad version. You should minimize the number of calls to the API.
 *
 * Tags:
 *  - Binary Search
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (isBadVersion(1) === true) return 1;

    var left = 1;   // assume left is always good version
    var right = n;  // right must be last bad version
    var mid = Math.floor((left + right) / 2);

    // if left === mid, means there are only two numbers now, and the right one might to the first bad version
    while (left < mid) {
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
      mid = Math.floor((left + right) / 2);
    }

    return right;
  };
};

var qualityChecker = function (firstBadVersion) {
  return function isBadVersion (version) {
    return version >= firstBadVersion;
  }
}

// mocha testing
var expect = require('chai').expect;
describe('First Bad Version', function() {

  it('n = 1, firstBadVersion = 1', function () {
    var input = {
      n: 1,
      firstBadVersion: 1
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 2, firstBadVersion = 1', function () {
    var input = {
      n: 2,
      firstBadVersion: 1
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 2, firstBadVersion = 2', function () {
    var input = {
      n: 2,
      firstBadVersion: 2
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 3, firstBadVersion = 2', function () {
    var input = {
      n: 3,
      firstBadVersion: 2
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 10, firstBadVersion = 1', function () {
    var input = {
      n: 10,
      firstBadVersion: 1
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 10, firstBadVersion = 5', function () {
    var input = {
      n: 10,
      firstBadVersion: 5
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 10, firstBadVersion = 6', function () {
    var input = {
      n: 10,
      firstBadVersion: 6
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 10, firstBadVersion = 10', function () {
    var input = {
      n: 10,
      firstBadVersion: 10
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 11, firstBadVersion = 1', function () {
    var input = {
      n: 11,
      firstBadVersion: 1
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 11, firstBadVersion = 5', function () {
    var input = {
      n: 11,
      firstBadVersion: 5
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 11, firstBadVersion = 6', function () {
    var input = {
      n: 11,
      firstBadVersion: 6
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 11, firstBadVersion = 7', function () {
    var input = {
      n: 11,
      firstBadVersion: 7
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });

  it('n = 11, firstBadVersion = 11', function () {
    var input = {
      n: 11,
      firstBadVersion: 11
    };
    var isBadVersion = qualityChecker(input.firstBadVersion);
    var output = solution(isBadVersion)(input.n);

    expect(output).to.equal(input.firstBadVersion);
  });
});
