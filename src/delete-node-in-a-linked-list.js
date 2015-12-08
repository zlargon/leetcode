/*
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 * Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
 *
 * Tags:
 *  - Linked List
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  Object.assign(node, node.next);
};

// mocha testing
var expect = require('chai').expect;

function getNodeArrayList() {
  var nodes = [];
  var size = 4;
  for (var i = size - 1; i >= 0; i--) {
    nodes[i] = new ListNode(i + 1);
    nodes[i].next = (i === size - 1) ? null : nodes[i + 1];
  }
  return nodes;
}

describe('Delete Node in a Linked List', function() {

  // default test case
  it('1 -> 2 -> 3 -> 4, remove 3', function () {
    var nodes = getNodeArrayList();
    var list = nodes[0];

    deleteNode(nodes[2]);
    expect(list).to.deep.equal(LinkedList(1, 2, 4));
  });

  it('1 -> 2 -> 3 -> 4, remove 2', function () {
    var nodes = getNodeArrayList();
    var list = nodes[0];

    deleteNode(nodes[1]);
    expect(list).to.deep.equal(LinkedList(1, 3, 4));
  });

  it('1 -> 2 -> 3 -> 4, remove 1', function () {
    var nodes = getNodeArrayList();
    var list = nodes[0];

    deleteNode(nodes[0]);
    expect(list).to.deep.equal(LinkedList(2, 3, 4));
  });

});
