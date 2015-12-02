/*
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Tags:
 *  - Linked List
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
var mergeTwoLists = function(l1, l2) {

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
describe('Merge Two Sorted Lists', function() {

  it('(2 -> 3 -> 4) + (4 -> 5 -> 6)', function () {
    var input = {
      l1: linkedList([2, 3, 4]),
      l2: linkedList([4, 5, 6])
    };
    var output = mergeTwoLists(input.l1, input.l2);

    expect(output).to.deep.equal(linkedList([2, 3, 4, 4, 5, 6]));
  });

});
