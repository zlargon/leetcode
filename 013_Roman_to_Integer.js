/**
 * Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (typeof s !== "string" || s.length === 0) {
        return 0;
    }

    var prev = 0;
    var result = 0;
    for (var i = s.length - 1; i >= 0 ; i--) {
        var n = 0;
        switch (s.charAt(i)) {
            case "I": n = 1;    break;
            case "V": n = 5;    break;
            case "X": n = 10;   break;
            case "L": n = 50;   break;
            case "C": n = 100;  break;
            case "D": n = 500;  break;
            case "M": n = 1000; break;
            default:
                console.log("unknown roman numeral");
                return 0;
        }

        result += n * (n < prev ? -1 : 1);
        prev = n;
    }

    return result;
};

var test = function() {
    var testCase = [
        "I",   "II",        "III",  "IV",    "V",         "VI",   "VII",  "VIII",  "IX",           "X",
        "XI",  "XII",       "XIII", "XIV",   "XV",        "XVI",  "XVII", "XVIII", "XIX",          "XX",
        "XXX", "XL",        "L",    "LX",    "LXX",       "LXXX", "XC",   "XCIX",  "C",            "CI",
        "CII", "CXCIX",     "CC",   "CCC",   "CD",        "D",    "DC",   "DCCC",  "CM",           "M",
        "MCD", "MCDXXXVII", "MD",   "MDCCC", "MDCCCLXXX", "MCM",  "MM",   "MMM",   "MMMCCCXXXIII", "ABC"
    ];

    testCase.forEach(function (str, i) {
        console.log((i + 1) + ". " + str + " = " + romanToInt(str));
    });
}

test();
