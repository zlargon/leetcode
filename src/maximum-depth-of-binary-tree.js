/*
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Tags:
 *  - Tree
 *  - Breadth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  var maxLevel = 0;
  function getMaxLevel(node, lv) {
    if (node === null) return;
    getMaxLevel(node.left, lv + 1);
    if (lv > maxLevel) maxLevel = lv;
    getMaxLevel(node.right, lv + 1);
  }

  getMaxLevel(root, 0);
  return maxLevel + 1;
};

// mocha testing
var expect = require('chai').expect;
describe('Maximum Depth of Binary Tree', function() {

  it('[]', function () {
    var input = BinaryTree();
    var output = maxDepth(input);

    expect(output).to.equal(0);
  });

  it('[0]', function () {
    var input = BinaryTree(0);
    var output = maxDepth(input);

    expect(output).to.equal(1);
  });

  it('[1, 2, 3]', function () {
    var input = BinaryTree(1, 2, 3);
    var output = maxDepth(input);

    expect(output).to.equal(2);
  });

  it('[1, 2, 3, 4]', function () {
    var input = BinaryTree(1, 2, 3, 4);
    var output = maxDepth(input);

    expect(output).to.equal(3);
  });

});
