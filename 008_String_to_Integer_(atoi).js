/**
 * String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/
 *
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // check str type
    if (typeof str !== "string") {
        console.log("str should be a string");
    }

    // trim
    str = str.trim();

    // check str length
    if (str.length === 0) {
        return 0;
    }

    // check sign
    var i = 0;
    var sign = 1;
    switch (str.charAt(0)) {
        case "+": i = 1; break;
        case "-": i = 1; sign = -1; break;
    }

    var INT_MAX = Math.pow(2, 31) - 1;      // 2147483647
    var INT_MIN = Math.pow(2, 31) * (-1);   // -2147483648

    var result = 0;
    for (; i < str.length; i++) {
        var n = -1;
        switch (str.charAt(i)) {
            case "0": n = 0; break;
            case "1": n = 1; break;
            case "2": n = 2; break;
            case "3": n = 3; break;
            case "4": n = 4; break;
            case "5": n = 5; break;
            case "6": n = 6; break;
            case "7": n = 7; break;
            case "8": n = 8; break;
            case "9": n = 9; break;
            default:
                return result;
        }

        // check overflow
        result = result * 10 + n * sign;
        if (result < INT_MIN) {
            console.log("overflow");
            return INT_MIN;
        }

        if (result > INT_MAX) {
            console.log("overflow");
            return INT_MAX;
        }
    }

    return result;
};

var test = function() {
    var testCase = ["++", "--", "+1", "    010", "-123AB", "+0", "-000100", "100", "-1000", "2147483647", "2147483648", "-2147483647", "-2147483649"];
    testCase.forEach(function (str, i) {
        console.log((i + 1) + ". " + str + " -> " + myAtoi(str));
    });
}

test();
