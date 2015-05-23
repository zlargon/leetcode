/**
 * Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.toString = function() {
    var isFirst = true;
    var str = "";
    for (var node = this; node !== null; node = node.next) {
        str += (isFirst === true ? "" : " -> ") + node.val;
        isFirst = false;
    }
    return str;
};

ListNode.createListByNumber = function(num) {
    // TODO: check num
    var list = new ListNode(0);
    var tail = list;

    for (; num >= 10; num = parseInt(num / 10)) {
        tail.val = num % 10;
        tail.next = new ListNode(0);
        tail = tail.next;
    }

    // last digit number
    tail.val = num;
    return list;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var n1 = l1;
    var n2 = l2;

    var sum = new ListNode(0);
    for (var tail = sum; ; tail = tail.next) {
        tail.val += (n1 === null ? 0 : n1.val) + (n2 === null ? 0 : n2.val);
        if (n1 !== null) n1 = n1.next;
        if (n2 !== null) n2 = n2.next;

        // check overflow
        if (tail.val >= 10) {
            tail.next = new ListNode(parseInt(tail.val / 10));
            tail.val %= 10;
        } else {
            if (n1 === null && n2 === null) {
                return sum;
            }

            // create next node
            tail.next = new ListNode(0);
        }
    }
};

// test
var test = function() {
    var l1 = ListNode.createListByNumber(342);
    var l2 = ListNode.createListByNumber(465);
    console.log("Input: (" + l1.toString() + ") + (" + l2.toString() + ")");

    var l3 = addTwoNumbers(l1, l2);
    console.log("Output: " + l3.toString());
};

test();
