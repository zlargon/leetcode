/*
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Tags:
 *  - Linked List
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

};

// mocha testing
var expect = require('chai').expect;
describe('Merge Two Sorted Lists', function() {

  it('(2 -> 3 -> 4) + (4 -> 5 -> 6)', function () {
    var input = {
      l1: LinkedList(2, 3, 4),
      l2: LinkedList(4, 5, 6)
    };
    var output = mergeTwoLists(input.l1, input.l2);

    expect(output).to.deep.equal(LinkedList(2, 3, 4, 4, 5, 6));
  });

});
