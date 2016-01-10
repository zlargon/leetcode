/*
 * Given a digit string, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Input: Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 *
 * Tags:
 *  - Backtracking
 *  - String
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }

  var letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  var result = [];
  function generate(arr, index) {
    if (index === digits.length) {
      if (arr.length > 0) {
        result.push(arr.join(''));
      }
      return;
    }

    var num = digits.charAt(index);
    if (letters.hasOwnProperty(num) === false) {
      // Unknown letters
      return;
    }

    var chars = letters[num];
    for (var i = 0; i < chars.length; i++) {
      generate(arr.concat(chars[i]), index + 1);
    }
  }

  generate([], 0);
  return result;
};

// mocha testing
var expect = require('chai').expect;
describe('Letter Combinations of a Phone Number', function() {

  it('', function () {
    var input = '';
    var output = letterCombinations(input);
    expect(output).to.deep.equal([]);
  });

  it('01', function () {
    var input = '01';
    var output = letterCombinations(input);
    expect(output).to.deep.equal([]);
  });

  it('23', function () {
    var input = '23';
    var output = letterCombinations(input);
    expect(output.sort()).to.deep.equal([
      "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
    ].sort());
  });

  it('98765', function () {
    var input = '98765';
    var output = letterCombinations(input);
    expect(output.sort()).to.deep.equal([
      "wtpmj","wtpmk","wtpml","wtpnj","wtpnk","wtpnl","wtpoj","wtpok","wtpol","wtqmj",
      "wtqmk","wtqml","wtqnj","wtqnk","wtqnl","wtqoj","wtqok","wtqol","wtrmj","wtrmk",
      "wtrml","wtrnj","wtrnk","wtrnl","wtroj","wtrok","wtrol","wtsmj","wtsmk","wtsml",
      "wtsnj","wtsnk","wtsnl","wtsoj","wtsok","wtsol","wupmj","wupmk","wupml","wupnj",
      "wupnk","wupnl","wupoj","wupok","wupol","wuqmj","wuqmk","wuqml","wuqnj","wuqnk",
      "wuqnl","wuqoj","wuqok","wuqol","wurmj","wurmk","wurml","wurnj","wurnk","wurnl",
      "wuroj","wurok","wurol","wusmj","wusmk","wusml","wusnj","wusnk","wusnl","wusoj",
      "wusok","wusol","wvpmj","wvpmk","wvpml","wvpnj","wvpnk","wvpnl","wvpoj","wvpok",
      "wvpol","wvqmj","wvqmk","wvqml","wvqnj","wvqnk","wvqnl","wvqoj","wvqok","wvqol",
      "wvrmj","wvrmk","wvrml","wvrnj","wvrnk","wvrnl","wvroj","wvrok","wvrol","wvsmj",
      "wvsmk","wvsml","wvsnj","wvsnk","wvsnl","wvsoj","wvsok","wvsol","xtpmj","xtpmk",
      "xtpml","xtpnj","xtpnk","xtpnl","xtpoj","xtpok","xtpol","xtqmj","xtqmk","xtqml",
      "xtqnj","xtqnk","xtqnl","xtqoj","xtqok","xtqol","xtrmj","xtrmk","xtrml","xtrnj",
      "xtrnk","xtrnl","xtroj","xtrok","xtrol","xtsmj","xtsmk","xtsml","xtsnj","xtsnk",
      "xtsnl","xtsoj","xtsok","xtsol","xupmj","xupmk","xupml","xupnj","xupnk","xupnl",
      "xupoj","xupok","xupol","xuqmj","xuqmk","xuqml","xuqnj","xuqnk","xuqnl","xuqoj",
      "xuqok","xuqol","xurmj","xurmk","xurml","xurnj","xurnk","xurnl","xuroj","xurok",
      "xurol","xusmj","xusmk","xusml","xusnj","xusnk","xusnl","xusoj","xusok","xusol",
      "xvpmj","xvpmk","xvpml","xvpnj","xvpnk","xvpnl","xvpoj","xvpok","xvpol","xvqmj",
      "xvqmk","xvqml","xvqnj","xvqnk","xvqnl","xvqoj","xvqok","xvqol","xvrmj","xvrmk",
      "xvrml","xvrnj","xvrnk","xvrnl","xvroj","xvrok","xvrol","xvsmj","xvsmk","xvsml",
      "xvsnj","xvsnk","xvsnl","xvsoj","xvsok","xvsol","ytpmj","ytpmk","ytpml","ytpnj",
      "ytpnk","ytpnl","ytpoj","ytpok","ytpol","ytqmj","ytqmk","ytqml","ytqnj","ytqnk",
      "ytqnl","ytqoj","ytqok","ytqol","ytrmj","ytrmk","ytrml","ytrnj","ytrnk","ytrnl",
      "ytroj","ytrok","ytrol","ytsmj","ytsmk","ytsml","ytsnj","ytsnk","ytsnl","ytsoj",
      "ytsok","ytsol","yupmj","yupmk","yupml","yupnj","yupnk","yupnl","yupoj","yupok",
      "yupol","yuqmj","yuqmk","yuqml","yuqnj","yuqnk","yuqnl","yuqoj","yuqok","yuqol",
      "yurmj","yurmk","yurml","yurnj","yurnk","yurnl","yuroj","yurok","yurol","yusmj",
      "yusmk","yusml","yusnj","yusnk","yusnl","yusoj","yusok","yusol","yvpmj","yvpmk",
      "yvpml","yvpnj","yvpnk","yvpnl","yvpoj","yvpok","yvpol","yvqmj","yvqmk","yvqml",
      "yvqnj","yvqnk","yvqnl","yvqoj","yvqok","yvqol","yvrmj","yvrmk","yvrml","yvrnj",
      "yvrnk","yvrnl","yvroj","yvrok","yvrol","yvsmj","yvsmk","yvsml","yvsnj","yvsnk",
      "yvsnl","yvsoj","yvsok","yvsol","ztpmj","ztpmk","ztpml","ztpnj","ztpnk","ztpnl",
      "ztpoj","ztpok","ztpol","ztqmj","ztqmk","ztqml","ztqnj","ztqnk","ztqnl","ztqoj",
      "ztqok","ztqol","ztrmj","ztrmk","ztrml","ztrnj","ztrnk","ztrnl","ztroj","ztrok",
      "ztrol","ztsmj","ztsmk","ztsml","ztsnj","ztsnk","ztsnl","ztsoj","ztsok","ztsol",
      "zupmj","zupmk","zupml","zupnj","zupnk","zupnl","zupoj","zupok","zupol","zuqmj",
      "zuqmk","zuqml","zuqnj","zuqnk","zuqnl","zuqoj","zuqok","zuqol","zurmj","zurmk",
      "zurml","zurnj","zurnk","zurnl","zuroj","zurok","zurol","zusmj","zusmk","zusml",
      "zusnj","zusnk","zusnl","zusoj","zusok","zusol","zvpmj","zvpmk","zvpml","zvpnj",
      "zvpnk","zvpnl","zvpoj","zvpok","zvpol","zvqmj","zvqmk","zvqml","zvqnj","zvqnk",
      "zvqnl","zvqoj","zvqok","zvqol","zvrmj","zvrmk","zvrml","zvrnj","zvrnk","zvrnl",
      "zvroj","zvrok","zvrol","zvsmj","zvsmk","zvsml","zvsnj","zvsnk","zvsnl","zvsoj",
      "zvsok","zvsol"
    ].sort());
  });
});
