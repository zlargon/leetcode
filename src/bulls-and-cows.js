/*
 * You are playing the following Bulls and Cows game with your friend:
 * You write down a number and ask your friend to guess what the number is.
 * Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows").
 * Your friend will use successive guesses and hints to eventually derive the secret number.
 *
 * For example:
 * Secret number:  "1807"
 * Friend's guess: "7810"
 * Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
 * Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.
 * In the above example, your function should return "1A3B".
 *
 * Please note that both secret number and friend's guess may contain duplicate digits, for example:
 * Secret number:  "1123"
 * Friend's guess: "0111"
 * In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
 * You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
 *
 * Tags:
 *  - Hash Table
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var secrets = secret.split('');
  var guesses = guess.split('');

  var bulls = 0;
  var map = {};
  for (var i = 0; i < secret.length; i++) {
    if (secrets[i] === guesses[i]) {
      bulls++;
      secrets[i] = guesses[i] = null;
      continue;
    }

    var c = secrets[i];
    if (map.hasOwnProperty(c) === false) {
      map[c] = 0;
    }
    map[c]++;
  }

  var cows = 0;
  for (var i = 0; i < guesses.length; i++) {
    var c = guesses[i];
    if (c === null || map.hasOwnProperty(c) === false) {
      continue;
    }

    if (map[c] > 0) {
      cows++;
    }
    map[c]--;
  }

  return bulls + 'A' + cows + 'B';
};


// mocha testing
var expect = require('chai').expect;
describe('Bulls and Cows', function() {

  // default test case
  it('secret 1807 => 7810', function () {
    var input = {
      secret: '1807',
      guess: '7810'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('1A3B');
  });

  it('secret 1123 => 0111', function () {
    var input = {
      secret: '1123',
      guess: '0111'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('1A1B');
  });

  it('secret 9305 => 1234', function () {
    var input = {
      secret: '9305',
      guess: '1234'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('0A1B');
  });

  it('secret 9305 => 5678', function () {
    var input = {
      secret: '9305',
      guess: '5678'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('0A1B');
  });

  it('secret 9305 => 9012', function () {
    var input = {
      secret: '9305',
      guess: '9012'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('1A1B');
  });

  it('secret 9305 => 9087', function () {
    var input = {
      secret: '9305',
      guess: '9087'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('1A1B');
  });

  it('secret 9305 => 1087', function () {
    var input = {
      secret: '9305',
      guess: '1087'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('0A1B');
  });

  it('secret 9305 => 9205', function () {
    var input = {
      secret: '9305',
      guess: '9205'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('3A0B');
  });

  it('secret 9305 => 9305', function () {
    var input = {
      secret: '9305',
      guess: '9305'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('4A0B');
  });

  it('secret 1 => 0', function () {
    var input = {
      secret: '1',
      guess: '0'
    };
    var output = getHint(input.secret, input.guess);
    expect(output).to.equal('0A0B');
  });
});
