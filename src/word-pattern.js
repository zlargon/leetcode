/*
 * Given a pattern and a string str, find if str follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
 *
 * Examples:
 * pattern = "abba", str = "dog cat cat dog" should return true.
 * pattern = "abba", str = "dog cat cat fish" should return false.
 * pattern = "aaaa", str = "dog cat cat dog" should return false.
 * pattern = "abba", str = "dog dog dog dog" should return false.
 *
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 *
 * Tags:
 *  - Hash Table
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  if (pattern === '' || str === '') {
    return false;
  }

  var words = str.split(' ');
  if (words.length !== pattern.length) {
    return false;
  }

  var thePatternOf = {};
  // thePatternOf['dog'] = 'a'
  // thePatternOf['cat'] = 'b'

  var patterns = {};
  // patterns['a'] = true
  // patterns['b'] = true

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var p = pattern.charAt(i);

    // the word is not exit before
    if (thePatternOf.hasOwnProperty(word) === false) {
      if (patterns.hasOwnProperty(p)) {
        // the different words with the same pattern
        return false;
      }

      // add new relationship between word and pattern
      thePatternOf[word] = p;
      patterns[p] = true;
      continue;
    }

    if (thePatternOf[word] !== p) {
      // pattern is not match
      return false;
    }
  }

  return true;
};


// mocha testing
var expect = require('chai').expect;
describe('Word Pattern', function() {

  it('pattern = abba, str = dog cat cat (pattern and str length are not match)', function () {
    var input = {
      pattern: 'abba',
      str: 'dog cat cat'
    };
    var output = wordPattern(input.pattern, input.str);
    expect(output).to.be.false;
  });

  it('pattern = abb, str = dog cat cat dog (pattern and str length are not match)', function () {
    var input = {
      pattern: 'abb',
      str: 'dog cat cat dog'
    };
    var output = wordPattern(input.pattern, input.str);
    expect(output).to.be.false;
  });

  it('pattern = abba, str = dog cat cat dog (correct)', function () {
    var input = {
      pattern: 'abba',
      str: 'dog cat cat dog'
    };
    var output = wordPattern(input.pattern, input.str);
    expect(output).to.be.true;
  });

  it('pattern = abba, str = dog cat cat fish (pattern is not match)', function () {
    var input = {
      pattern: 'abba',
      str: 'dog cat cat fish'
    };
    var output = wordPattern(input.pattern, input.str);
    expect(output).to.be.false;
  });

  it('pattern = aaaa, str = dog cat cat dog (different words with same pattern)', function () {
    var input = {
      pattern: 'aaaa',
      str: 'dog cat cat dog'
    };
    var output = wordPattern(input.pattern, input.str);
    expect(output).to.be.false;
  });

  it('pattern = abba, str = dog dog dog dog (different patterns with same word)', function () {
    var input = {
      pattern: 'abba',
      str: 'dog dog dog dog'
    };
    var output = wordPattern(input.pattern, input.str);
    expect(output).to.be.false;
  });
});
