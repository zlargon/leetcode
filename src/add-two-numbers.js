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

});
