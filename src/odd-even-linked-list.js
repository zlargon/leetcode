/*
 * Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
 *
 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 *
 * Example:
 * Given 1->2->3->4->5->NULL,
 * return 1->3->5->2->4->NULL.
 *
 * Note:
 * The relative order inside both the even and odd groups should remain as it was in the input.
 * The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function(head) {
  var oddLast  = null;
  var evenHead = null;
  var evenLast = null;

  for (var ptr = head; ptr !== null; ptr = evenLast.next) {

    // odd
    if (oddLast !== null) {
      oddLast.next = ptr;
    }
    oddLast = ptr;

    // check null
    if (ptr.next === null) {
      break;
    }

    // even
    ptr = ptr.next;
    if (evenLast === null) {
      evenHead = ptr;
    } else {
      evenLast.next = ptr;
    }
    evenLast = ptr;
  }

  // concat oddlist and evenList
  if (oddLast  !== null) oddLast.next  = evenHead;
  if (evenLast !== null) evenLast.next = null;

  return head;
};


// mocha testing
var expect = require('chai').expect;
describe('Odd Even Linked List', function() {

  it('Empty List', function () {
    var input = LinkedList();
    var output = oddEvenList(input);
    expect(output).to.deep.equal(LinkedList());
  });

  it('1', function () {
    var input = LinkedList(1);
    var output = oddEvenList(input);
    expect(output).to.deep.equal(LinkedList(1));
  });

  it('1 -> 2', function () {
    var input = LinkedList(1, 2);
    var output = oddEvenList(input);
    expect(output).to.deep.equal(LinkedList(1, 2));
  });

  it('1 -> 2 -> 3 -> 4 -> 5', function () {
    var input = LinkedList(1, 2, 3, 4, 5);
    var output = oddEvenList(input);
    expect(output).to.deep.equal(LinkedList(1, 3, 5, 2, 4));
  });

  it('1 -> 2 -> 3 -> 4 -> 5 -> NULL', function () {
    var input = LinkedList(1, 2, 3, 4, 5, null);
    var output = oddEvenList(input);
    expect(output).to.deep.equal(LinkedList(1, 3, 5, 2, 4, null));
  });

  it('8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1', function () {
    var input = LinkedList(8, 7, 6, 5, 4, 3, 2, 1);
    var output = oddEvenList(input);
    expect(output).to.deep.equal(LinkedList(8, 6, 4, 2, 7, 5, 3, 1));
  });

});
