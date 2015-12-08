/*
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Tags:
 *  - Stack
 *  - Design
 */

/**
 * @constructor
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  var min = this.getMin();
  if (min === undefined || x < min) {
    min = x;
  }

  this.stack.push({
    val: x,
    min: min
  });
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val;
  }
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min;
  }
};


// mocha testing
var expect = require('chai').expect;
describe('Min Stack', function() {
  var stack = new MinStack();

  it('[2, 6, 4, 1, 5], Top = 5', function () {
    stack.push(2);
    stack.push(6);
    stack.push(4);
    stack.push(1);
    stack.push(5);

    expect(stack.top()).to.equal(5);
  });

  it('[2, 6, 4, 1, 5], Min = 1', function () {
    expect(stack.getMin()).to.equal(1);
  });

  it('[2, 6, 4], Top = 4', function () {
    stack.pop();
    stack.pop();

    expect(stack.top()).to.equal(4);
  });

  it('[2, 6, 4], Min = 2', function () {
    expect(stack.getMin()).to.equal(2);
  });

  it('[2, 6, 4, -3], Min = -3', function () {
    stack.push(-3);
    expect(stack.getMin()).to.equal(-3);
  });

});
