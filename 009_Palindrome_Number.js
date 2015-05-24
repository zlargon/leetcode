/**
 * Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (typeof x !== "number") {
        console.log("x should be a positive integer");
        return false;
    }

    if (x < 0 || x !== Math.floor(x)) {
        console.log("x should be a positive integer");
        return false;
    }

    var INT_MAX = Math.pow(2, 31) - 1;  // 2147483647
    if (x > INT_MAX) {
        console.log("overflow");
        return false;
    }

    // count digit
    for (var digit = 1; x > digit * 10; digit *= 10);

    while (x > 0) {
        var left = Math.floor(x / digit);
        var right = x % 10;

        if (left !== right) {
            return false;
        }

        // remove left and right
        x = (x - left * digit - right) / 10;
        digit /= 100;
    }

    return true;
};

var test = function() {
    var testCase = [1, 111, 121, 123, -123, 0, 100, -1000, 1000000003, 1534236469, 1563847412, -3000000001];
    testCase.forEach(function (num, i) {
        console.log((i + 1) + ". " + num + (isPalindrome(num) ? " == " : " != ") + "palindrome number");
    });
}

test();
