/*
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
 *
 * Tags:
 *  -  Linked List
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) return null;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
};


// mocha testing
var expect = require('chai').expect;
describe('Remove Linked List Elements', function() {

  // default testing example
  it('1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, remove 6', function () {
    var input = {
      head: LinkedList(1, 2, 6, 3, 4, 5, 6),
      val: 6
    };
    var output = removeElements(input.head, input.val);

    expect(output).to.deep.equal(LinkedList(1, 2, 3, 4, 5));
  });

  it('1 -> 1 -> 1 -> 1 -> 1 -> 1, remove 1', function () {
    var input = {
      head: LinkedList(1, 1, 1, 1, 1, 1),
      val: 1
    };
    var output = removeElements(input.head, input.val);

    expect(output).to.deep.equal(LinkedList());
  });

  it('Empty List', function () {
    var input = {
      head: LinkedList(),
      val: 1
    };
    var output = removeElements(input.head, input.val);

    expect(output).to.deep.equal(LinkedList());
  });

});
