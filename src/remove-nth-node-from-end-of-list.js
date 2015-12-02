/*
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * For example,
 *    Given linked list: 1->2->3->4->5, and n = 2.
 *    After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 *
 * Tags:
 *  - Linked List
 *  - Two Pointers
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var nodes = [];
  for (var ptr = head; ptr !== null; ptr = ptr.next) {
    nodes.push(ptr);
  }

  var index = nodes.length - n;
  if (index === 0) {
    // first node
    return head.next;
  }

  nodes[index - 1].next = nodes[index].next;
  return head;
};


// mocha testing
var expect = require('chai').expect;
describe('Remove Nth Node From End of List', function() {

  // default testing example
  it('1 → 2 → 3 → 4 → 5, n = 2', function () {
    var input = {
      head: LinkedList(1, 2, 3, 4, 5),
      n: 2
    };
    var output = removeNthFromEnd(input.head, input.n);

    expect(output).to.deep.equal(LinkedList(1, 2, 3, 5));
  });

  it('1 → 2 → 3 → 4 → 5, n = 5', function () {
    var input = {
      head: LinkedList(1, 2, 3, 4, 5),
      n: 5
    };
    var output = removeNthFromEnd(input.head, input.n);

    expect(output).to.deep.equal(LinkedList(2, 3, 4, 5));
  });

  it('1 → 2 → 3 → 4 → 5, n = 1', function () {
    var input = {
      head: LinkedList(1, 2, 3, 4, 5),
      n: 1
    };
    var output = removeNthFromEnd(input.head, input.n);

    expect(output).to.deep.equal(LinkedList(1, 2, 3, 4));
  });

  it('1, n = 1', function () {
    var input = {
      head: LinkedList(1),
      n: 1
    };
    var output = removeNthFromEnd(input.head, input.n);

    expect(output).to.deep.equal(null);
  });
});
