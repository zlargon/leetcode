/*
 * Reverse a singly linked list.
 *
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 * Tags:
 *  - Linked List
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) return null;

  var node = head;
  while (node.next !== null) {
    var newHead = node.next;
    node.next = newHead.next;

    newHead.next = head;
    head = newHead;
  }

  return head;
};

// mocha testing
var expect = require('chai').expect;
describe('Reverse Linked List', function() {

  it('1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6', function () {
    var input = LinkedList(1, 2, 6, 3, 4, 5, 6);
    var output = reverseList(input);

    expect(output).to.deep.equal(LinkedList(6, 5, 4, 3, 6, 2, 1));
  });

  it('1 -> 1 -> 1 -> 1', function () {
    var input = LinkedList(1, 1, 1, 1);
    var output = reverseList(input);

    expect(output).to.deep.equal(LinkedList(1, 1, 1, 1));
  });

  it('Empty List', function () {
    var input = LinkedList();
    var output = reverseList(input);

    expect(output).to.deep.equal(LinkedList());
  });

});
