/*
 * Given two binary trees, write a function to check if they are equal or not.
 * Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 *
 * Tags:
 *  - Tree
 *  - Depth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// mocha testing
var expect = require('chai').expect;
describe('Same Tree', function() {

  it('[] & []', function () {
    var input = {
      p: BinaryTree(),
      q: BinaryTree()
    };
    var output = isSameTree(input.p, input.q);

    expect(output).to.equal(true);
  });

  it('[1, 2, 3] & [1, 2, 3]', function () {
    var input = {
      p: BinaryTree(1, 2, 3),
      q: BinaryTree(1, 2, 3)
    };
    var output = isSameTree(input.p, input.q);

    expect(output).to.equal(true);
  });

  it('[1, 2] & [1, 2, 3]', function () {
    var input = {
      p: BinaryTree(1, 2),
      q: BinaryTree(1, 2, 3)
    };
    var output = isSameTree(input.p, input.q);

    expect(output).to.equal(false);
  });
});
