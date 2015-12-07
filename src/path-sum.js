/*
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 *
 * For example:
 * Given the below binary tree and sum = 22,
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \      \
 *         7    2      1
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 *
 * Tags:
 *  - Tree
 *  - Depth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }

  // is leaf node
  if (root.left === null && root.right === null) {
    return root.val === sum;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

// mocha testing
var expect = require('chai').expect;
describe('Path Sum', function() {

  // default test case
  it('[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]', function () {
    var input = {
      root: BinaryTree(5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1),
      sum: 22
    };
    var output = hasPathSum(input.root, input.sum);

    expect(output).to.equal(true);
  });

  it('[]', function () {
    var input = {
      root: BinaryTree(),
      sum: 1
    };
    var output = hasPathSum(input.root, input.sum);

    expect(output).to.equal(false);
  });

});
