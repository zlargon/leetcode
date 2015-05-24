/**
 * Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var INT_MAX = Math.pow(2, 31) - 1;      // 2147483647
    var INT_MIN = Math.pow(2, 31) * (-1);   // -2147483648
    if (INT_MIN > x || x > INT_MAX) {
        console.log("overflow");
        return 0;
    }

    var sign = x < 0 ? -1 : 1;
    x *= sign;

    var result = 0;
    for (var i = 0; x > 0; i++) {
        result = result * 10 + (x % 10) * sign;

        // check overflow
        if (INT_MIN > result || result > INT_MAX) {
            console.log("overflow");
            return 0;
        }

        x = Math.floor(x / 10);
    }

    return result;
};

var test = function() {
    var testCase = [123, -123, 0, 100, -1000, 1000000003, 1534236469, 1563847412, -3000000001];
    testCase.forEach(function (num, i) {
        console.log((i + 1) + ". " + num + " -> " + reverse(num));
    });
}

test();
