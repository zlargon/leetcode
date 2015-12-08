/*
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 * For example, the following two linked lists:
 *
 * A:          a1 → a2
 *                    ↘
 *                      c1 → c2 → c3
 *                    ↗
 * B:     b1 → b2 → b3
 * begin to intersect at node c1.
 *
 * Notes:
 *  * If the two linked lists have no intersection at all, return null.
 *  * The linked lists must retain their original structure after the function returns.
 *  * You may assume there are no cycles anywhere in the entire linked structure.
 *  * Your code should preferably run in O(n) time and use only O(1) memory.
 *
 * Tags:
 *  - Linked List
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  function sizeOf(list) {
    var size = 0;
    for (var node = list; node !== null; node = node.next) {
      size++;
    }
    return size;
  }

  var distance = sizeOf(headA) - sizeOf(headB);
  if (distance < 0) {
    var tmp = headA;
    headA = headB;
    headB = tmp;
    distance *= -1;
  }

  for (var i = 0; i < distance; i++) {
    headA = headA.next;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

// mocha testing
var expect     = require('chai').expect;
var deepFreeze = require('deep-freeze');

function ListConcat(l1, l2) {
  for (var node = l1; node !== null; node = node.next) {
    if (node.next === null) {
      node.next = l2;
      break;
    }
  }
  return l1;
}

describe('Intersection of Two Linked Lists', function() {

  // default test case
  it('Has Intersection At Middle', function () {
    var tail = LinkedList(7, 8, 9);
    var input = {
      headA: ListConcat(LinkedList(1, 2, 3), tail),
      headB: ListConcat(LinkedList(4, 5, 6), tail)
    };
    deepFreeze(input);

    var output = getIntersectionNode(input.headA, input.headB);
    expect(output).to.equal(tail);
  });

  it('Has Intersection At First (Same List)', function () {
    var list = LinkedList(2, 4, 3);
    var input = {
      headA: list,
      headB: list
    };
    deepFreeze(input);

    var output = getIntersectionNode(input.headA, input.headB);
    expect(output).to.equal(list);
  });

  it('Has Intersection At Last', function () {
    var node = new ListNode(0);
    var input = {
      headA: ListConcat(LinkedList(1, 2, 3), node),
      headB: ListConcat(LinkedList(4, 5, 6), node)
    };
    deepFreeze(input);

    var output = getIntersectionNode(input.headA, input.headB);
    expect(output).to.equal(node);
  });

  it('No Intersection', function () {
    var input = {
      headA: LinkedList(2, 4, 3),
      headB: LinkedList(5, 6, 4)
    };
    deepFreeze(input);

    var output = getIntersectionNode(input.headA, input.headB);
    expect(output).to.be.null;
  });

});
