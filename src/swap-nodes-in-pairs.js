/*
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Your algorithm should use only constant space.
 * You may not modify the values in the list, only nodes itself can be changed.
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
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // swap n0 and n1
  var root = head.next;
  head.next = root.next;
  root.next = head;

  var ptr = head.next;
  while (ptr !== null && ptr.next !== null) {
    head.next = ptr.next;

    var last = ptr.next.next;
    ptr.next.next = ptr;
    ptr.next = last;

    // move to next round
    head = ptr;
    ptr = last;
  }

  return root;
};


// mocha testing
var expect = require('chai').expect;
describe('Swap Nodes in Pairs', function() {

  it('Empty List', function () {
    var input = LinkedList();
    var output = swapPairs(input);

    expect(output).to.deep.equal(LinkedList());
  });

  it('1', function () {
    var input = LinkedList(1);
    var output = swapPairs(input);

    expect(output).to.deep.equal(LinkedList(1));
  });

  it('1 -> 2', function () {
    var input = LinkedList(1, 2);
    var output = swapPairs(input);

    expect(output).to.deep.equal(LinkedList(2, 1));
  });

  it('1 -> 2 -> 3 -> 4', function () {
    var input = LinkedList(1, 2, 3, 4);
    var output = swapPairs(input);

    expect(output).to.deep.equal(LinkedList(2, 1, 4, 3));
  });

  it('1 -> 2 -> 3 -> 4 -> 5', function () {
    var input = LinkedList(1, 2, 3, 4, 5);
    var output = swapPairs(input);

    expect(output).to.deep.equal(LinkedList(2, 1, 4, 3, 5));
  });

});
