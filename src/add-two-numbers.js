/*
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Tags:
 *  - Linked List
 *  - Math
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var root = null;
  var prev = null;

  var carry = 0;
  while (l1 !== null || l2 !== null) {
    var val = carry;
    if (l1 !== null) val += l1.val;
    if (l2 !== null) val += l2.val;

    // carry
    carry = Math.floor(val / 10);
    val %= 10;

    // add to linked list
    if (root === null) {
      root = new ListNode(val);
      prev = root;
    } else {
      prev.next = new ListNode(val);
      prev = prev.next;
    }

    // next node
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    prev.next = new ListNode(carry);
  }

  return root;
};

function linkedList(numbers) {
  var root = null;
  var prev = null;

  numbers.forEach(num => {
    if (root === null) {
      root = new ListNode(num);
      prev = root;
      return;
    }

    prev.next = new ListNode(num);
    prev = prev.next;
  });

  return root;
}

// mocha testing
var expect = require('chai').expect;
describe('Add Two Numbers', function() {

  // default testing example
  it('(2 -> 4 -> 3) + (5 -> 6 -> 4)', function () {
    var input = {
      l1: linkedList([2, 4, 3]),
      l2: linkedList([5, 6, 4])
    };
    var output = addTwoNumbers(input.l1, input.l2);

    expect(output).to.deep.equal(linkedList([7, 0, 8]));
  });

  it('(9 -> 9 -> 9 -> 9) + (9 -> 9 -> 9)', function () {
    var input = {
      l1: linkedList([9, 9, 9, 9]),
      l2: linkedList([9, 9, 9])
    };
    var output = addTwoNumbers(input.l1, input.l2);

    expect(output).to.deep.equal(linkedList([8, 9, 9, 0, 1]));
  });

  it('(8 -> 8 -> 8) + (9 -> 8 -> 8 -> 8)', function () {
    var input = {
      l1: linkedList([8, 8, 8]),
      l2: linkedList([9, 8, 8, 8])
    };
    var output = addTwoNumbers(input.l1, input.l2);

    expect(output).to.deep.equal(linkedList([7, 7, 7, 9]));
  });

  it('(0) + (9 -> 8 -> 8 -> 8)', function () {
    var input = {
      l1: linkedList([0]),
      l2: linkedList([9, 8, 8, 8])
    };
    var output = addTwoNumbers(input.l1, input.l2);

    expect(output).to.deep.equal(linkedList([9, 8, 8, 8]));
  });

  it('(0) + (0)', function () {
    var input = {
      l1: linkedList([0]),
      l2: linkedList([0])
    };
    var output = addTwoNumbers(input.l1, input.l2);

    expect(output).to.deep.equal(linkedList([0]));
  });
});
