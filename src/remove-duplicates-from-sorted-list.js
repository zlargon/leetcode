/*
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
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
var deleteDuplicates = function(head) {
  var prev = null;
  for (var node = head; node !== null; node = node.next) {
    if (prev !== null && node.val === prev.val) {
      prev.next = node.next;
    } else {
      prev = node;
    }
  }
  return head;
};

// mocha testing
var expect = require('chai').expect;
describe('Remove Duplicates from Sorted List', function() {

  // default test case
  it('1 → 1 → 2', function () {
    var input = LinkedList(1, 1, 2);
    var output = deleteDuplicates(input);

    expect(output).to.deep.equal(LinkedList(1, 2));
  });

  it('1 → 1 → 2 → 3 → 3', function () {
    var input = LinkedList(1, 1, 2, 3, 3);
    var output = deleteDuplicates(input);

    expect(output).to.deep.equal(LinkedList(1, 2, 3));
  });

  it('Empty Linked List', function () {
    var input = null;
    var output = deleteDuplicates(input);

    expect(output).to.deep.equal(null);
  });

  it('1', function () {
    var input = LinkedList(1);
    var output = deleteDuplicates(input);

    expect(output).to.deep.equal(LinkedList(1));
  });

  it('1 → 1 → 1', function () {
    var input = LinkedList(1, 1, 1);
    var output = deleteDuplicates(input);

    expect(output).to.deep.equal(LinkedList(1));
  });

});
