/**
 * Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var array = [];

    var size = 0;
    for (var node = head; node !== null; node = node.next) {
        array.push(node);
        size++;
    }

    if (size === n) {
        // remove head
        head = head.next;
    } else {
        array[size - n - 1].next = array[size - n].next;
    }

    return head;
};

var test = function() {
    var testCase = [
        { list: 1,      nth: 1 },
        { list: 12345,  nth: 2 },
        { list: 12345,  nth: 5 },
        { list: 12345,  nth: 1 }
    ];

    testCase.forEach(function(param, i) {
        var list = ListNode.createListByNumber(param.list);
        console.log("\n" + list.toString());

        list = removeNthFromEnd(list, param.nth);
        if (list === null) {
            console.log("list is empty");
        } else {
            console.log(list.toString());
        }
    });
}

test();
