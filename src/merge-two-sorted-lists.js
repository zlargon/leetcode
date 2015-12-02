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
  var root = null;
  var prev = null;
  function add(val) {
    if (root === null) {
      root = new ListNode(val);
      prev = root;
      return;
    }

    prev.next = new ListNode(val);
    prev = prev.next;
  }

  while (l1 !== null || l2 !== null) {

    if (l1 === null) {
      add(l2.val);
      l2 = l2.next;
      continue;
    }

    if (l2 === null) {
      add(l1.val);
      l1 = l1.next;
      continue;
    }

    if (l1.val >= l2.val) {
      add(l2.val);
      l2 = l2.next;
    } else {
      add(l1.val);
      l1 = l1.next;
    }
  }

  return root;
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

  it('(0) + (4 -> 5 -> 6)', function () {
    var input = {
      l1: LinkedList(0),
      l2: LinkedList(4, 5, 6)
    };
    var output = mergeTwoLists(input.l1, input.l2);

    expect(output).to.deep.equal(LinkedList(0, 4, 5, 6));
  });

  it('(4 -> 6 -> 9) + (4 -> 5 -> 6)', function () {
    var input = {
      l1: LinkedList(4, 6, 9),
      l2: LinkedList(4, 5, 6)
    };
    var output = mergeTwoLists(input.l1, input.l2);

    expect(output).to.deep.equal(LinkedList(4, 4, 5, 6, 6, 9));
  });

  it('() + ()', function () {
    var input = {
      l1: LinkedList(),
      l2: LinkedList()
    };
    var output = mergeTwoLists(input.l1, input.l2);

    expect(output).to.deep.equal(LinkedList());
  });

  it('() + (9 -> 9 -> 9)', function () {
    var input = {
      l1: LinkedList(),
      l2: LinkedList(9, 9, 9)
    };
    var output = mergeTwoLists(input.l1, input.l2);

    expect(output).to.deep.equal(LinkedList(9, 9, 9));
  });

});
