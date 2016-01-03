/*
 * Implement the following operations of a queue using stacks.
 *
 *   push(x) -- Push element x to the back of queue.
 *   pop()   -- Removes the element from in front of queue.
 *   peek()  -- Get the front element.
 *   empty() -- Return whether the queue is empty.
 *
 * Notes:
 *  - You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
 *  - Depending on your language, stack may not be supported natively.
 *    You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
 *  - You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
 *
 * Tags:
 *  - Stack
 *  - Design
 */

var Stack = function () {
  this.list = [];
};

// push to top
Stack.prototype.push = function (x) {
  this.list.push(x);
};

// peek from top
Stack.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error('Stack is empty');
  }

  return this.list[this.size() - 1];
};

// pop from top
Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Stack is empty');
  }

  return this.list.pop();
};

Stack.prototype.size = function () {
  return this.list.length;
};

Stack.prototype.isEmpty = function () {
  return this.size() === 0;
};

/**
 * @constructor
 */
var Queue = function() {
  this.stack = new Stack();
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  if (this.stack.isEmpty()) {
    this.stack.push(x);
    return;
  }

  var val = this.stack.pop();
  this.push(x);   // recursive
  this.stack.push(val);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.stack.peek();
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.stack.isEmpty();
};


// mocha testing
var expect = require('chai').expect;
describe('Implement Queue using Stacks', function() {
  var queue = new Queue();

  it('[], is empty', function () {
    expect(queue.empty()).to.be.true;
  });

  it('[2, 6, 4, 1, 5], peek = 2', function () {
    queue.push(2);
    queue.push(6);
    queue.push(4);
    queue.push(1);
    queue.push(5);

    expect(queue.peek()).to.equal(2);
  });

  it('[2, 6, 4, 1, 5], is not empty', function () {
    expect(queue.empty()).to.be.false;
  });

  it('[4, 1, 5], Top = 4', function () {
    queue.pop();
    queue.pop();

    expect(queue.peek()).to.equal(4);
  });

});
