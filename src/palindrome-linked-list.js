/*
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 *
 * Tags:
 *  - Linked List
 *  - Two Pointers
 */

var ListNode   = require('../lib/ListNode');
var LinkedList = require('../lib/LinkedList');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var result = true;
  var front = head;

  function compareLastNode(last) {
    if (last === null) {
      return;
    }

    compareLastNode(last.next);

    // comparsion is done
    if (result === false || last.val === null) {
      // 1. we already know it's not palindrome
      // 2. 'front' and 'last' are overlapping
      return;
    }

    if (last.val !== front.val) {
      result = false;
    }

    front.val = null;    // set val to null. It means this node has been compared.
    front = front.next;  // move to next node in front
  }

  compareLastNode(head);
  return result;
};

// mocha testing
var expect = require('chai').expect;
describe('Palindrome Linked List', function() {

  it('null', function () {
    var input = LinkedList();
    var output = isPalindrome(input);
    expect(output).to.be.true;
  });

  it('1', function () {
    var input = LinkedList(1);
    var output = isPalindrome(input);
    expect(output).to.be.true;
  });

  it('1 -> 1', function () {
    var input = LinkedList(1, 1);
    var output = isPalindrome(input);
    expect(output).to.be.true;
  });

  it('1 -> 2', function () {
    var input = LinkedList(1, 2);
    var output = isPalindrome(input);
    expect(output).to.be.false;
  });

  it('1 -> 2 -> 1', function () {
    var input = LinkedList(1, 2, 1);
    var output = isPalindrome(input);
    expect(output).to.be.true;
  });

  it('1 -> 2 -> 2 -> 1', function () {
    var input = LinkedList(1, 2, 2, 1);
    var output = isPalindrome(input);
    expect(output).to.be.true;
  });

  it('1 -> 2 -> 3 -> 2 -> 3 -> 4 -> 2 -> 1', function () {
    var input = LinkedList(1, 2, 3, 2, 3, 4, 2, 1);
    var output = isPalindrome(input);
    expect(output).to.be.false;
  });

});
