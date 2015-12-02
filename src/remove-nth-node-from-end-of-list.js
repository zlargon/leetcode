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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

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
describe('Remove Nth Node From End of List', function() {

  // default testing example
  it('1 → 2 → 3 → 4 → 5, n = 2', function () {
    var input = {
      head: linkedList([1, 2, 3, 4, 5]),
      n: 2
    };
    var output = removeNthFromEnd(input.head, input.n);

    expect(output).to.deep.equal(linkedList([1, 2, 3, 5]));
  });

});
