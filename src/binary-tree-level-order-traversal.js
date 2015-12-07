/*
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 *
 * For example:
 * Given binary tree {3,9,20,#,#,15,7},
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * return its level order traversal as:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 *
 * Tags:
 *  - Tree
 *  - Breadth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }

  var treeLevel = [];
  function setupTreeLevel(node, index) {
    if (node === null) {
      return;
    }

    if (Array.isArray(treeLevel[index]) === false) {
      treeLevel[index] = [];
    }

    setupTreeLevel(node.left, index + 1);
    treeLevel[index].push(node.val);
    setupTreeLevel(node.right, index + 1);
  }

  // setup level
  setupTreeLevel(root, 0);
  return treeLevel;
};

// mocha testing
var expect = require('chai').expect;
describe('Binary Tree Level Order Traversal', function() {

  // default test case
  it('[3, 9, 20, null, null, 15, 7]', function () {
    var input = BinaryTree(3, 9, 20, null, null, 15, 7);
    var output = levelOrder(input);

    expect(output).to.deep.equal([
      [3],
      [9, 20],
      [15, 7]
    ]);
  });

  it('[]', function () {
    var input = BinaryTree();
    var output = levelOrder(input);

    expect(output).to.deep.equal([]);
  });
});
