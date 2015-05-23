/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    // TODO: check type of numbers and target

    var map = {};
    for (var i = numbers.length - 1; i >= 0; i--) {
        var index = map[target - numbers[i]];
        if (typeof index === "number") {
            return [i + 1, index + 1];
        }

        // add number to map
        map[numbers[i]] = i;
    }
    return null;
};

// test
var test = function() {
    var numbers = [2, 7, 11, 15];
    var target = 9;
    var result = twoSum(numbers, target);
    if (result == null) {
        console.log("no result");
        return;
    }

    console.log(result);
};

test();
