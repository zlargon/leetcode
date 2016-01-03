/*
 * Implement the following operations of a stack using queues.
 *
 *  push(x) -- Push element x onto stack.
 *  pop()   -- Removes the element on top of the stack.
 *  top()   -- Get the top element.
 *  empty() -- Return whether the stack is empty.
 *
 * Notes:
 *  - You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
 *  - Depending on your language, queue may not be supported natively.
 *    You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
 *  - You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
 *
 * Tags:
 *   - Stack
 *   - Design
 */

var Queue = function () {
  this.list = [];
};

// 1. push to back
Queue.prototype.push = function (x) {
  this.list.push(x);
};

// 2. peek from front
Queue.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error('Queue is empty');
  }
  return this.list[0];
};

// 3. pop from front
Queue.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Queue is empty');
  }
  return this.list.shift();
};

// 4. size
Queue.prototype.size = function () {
  return this.list.length;
};

// 5. is empty
Queue.prototype.isEmpty = function () {
  return this.size() === 0;
};


/**
 * @constructor
 */
var Stack = function() {
  this.queue = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  var q = new Queue();
  q.push(x);

  while (!this.queue.isEmpty()) {
    q.push(this.queue.pop());
  }

  this.queue = q;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.queue.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.queue.peek();
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.queue.isEmpty();
};


// mocha testing
var expect = require('chai').expect;
describe('Implement Stack using Queues', function() {
  var stack = new Stack();

  it('[], is empty', function () {
    expect(stack.empty()).to.be.true;
  });

  it('[2, 6, 4, 1, 5], Top = 5', function () {
    stack.push(2);
    stack.push(6);
    stack.push(4);
    stack.push(1);
    stack.push(5);

    expect(stack.top()).to.equal(5);
  });

  it('[2, 6, 4, 1, 5], is not empty', function () {
    expect(stack.empty()).to.be.false;
  });

  it('[2, 6, 4], Top = 4', function () {
    stack.pop();
    stack.pop();

    expect(stack.top()).to.equal(4);
  });

});
