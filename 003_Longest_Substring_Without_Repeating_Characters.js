/**
 * Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /*
     *
     * a b c a b c b b
     * ├─────┤
     *   ├─────┼───┼─┤
     *     ├─────┤
     */

    // check input
    if (typeof s !== "string" || s.length === 0) {
        console.log("s should not be an empty string");
        return 0;
    }

    var lastPositionOf = {};
    var startIndex = 0;
    var maxDistance = 0;
    var maxSubstring = s.charAt(0);

    for (var i = 0; i < s.length; lastPositionOf[c] = i++) {
        var c = s.charAt(i);

        // c is repeated
        if (lastPositionOf.hasOwnProperty(c) === true) {

            // last position of c is same to the start index, or after the start index
            if (startIndex <= lastPositionOf[c]) {
                startIndex = lastPositionOf[c] + 1;
                continue;
            }
        }

        // c is not repeated, or last position of c is before the start index
        if (i - startIndex > maxDistance) {
            maxDistance = i - startIndex;
            maxSubstring = s.substr(startIndex, maxDistance + 1);
        }
    }

    console.log("'" + s + "' substring = " + maxSubstring);
    return maxSubstring.length;
    // return maxDistance + 1;
};

// test
var test = function() {
    var str = ["abcabcbb", "bbbbb", "", "dvdf", "ohvhjdml"];
    str.forEach(function (s) {
        console.log("'" + s + "' longest substring length = " + lengthOfLongestSubstring(s) + "\n");
    });
};

test();
