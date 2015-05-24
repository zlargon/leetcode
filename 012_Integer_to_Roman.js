/**
 * Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // check num
    if (typeof num !== "number" || num < 0 || num !== Math.floor(num)) {
        return "";
    }

    // roman table
    var roman = [
        { symbol: "M",  value: 1000 },
        { symbol: "CM", value: 900  },
        { symbol: "D",  value: 500  },
        { symbol: "CD", value: 400  },
        { symbol: "C",  value: 100  },
        { symbol: "XC", value: 90   },
        { symbol: "L",  value: 50   },
        { symbol: "XL", value: 40   },
        { symbol: "X",  value: 10   },
        { symbol: "IX", value: 9    },
        { symbol: "V",  value: 5    },
        { symbol: "IV", value: 4    },
        { symbol: "I",  value: 1    }
    ];

    var i = 0;
    var result = "";
    while (num > 0) {
        if (num < roman[i].value) {
            i++;
            continue;
        }

        num    -= roman[i].value;
        result += roman[i].symbol;
    }

    return result;
};

// test
var test = function() {
    for (var i = 1; i < 4000; i++) {
       console.log(i + " = " + intToRoman(i));
    }
}

test();
