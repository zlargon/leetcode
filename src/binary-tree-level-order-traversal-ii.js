/*
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 *
 * For example:
 * Given binary tree {3,9,20,#,#,15,7},
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its bottom-up level order traversal as:
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
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
var levelOrderBottom = function(root) {
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
  return treeLevel.reverse();
};


// mocha testing
var expect = require('chai').expect;
describe('Binary Tree Level Order Traversal II', function() {

  // default test case
  it('[3, 9, 20, null, null, 15, 7]', function () {
    var input = BinaryTree(3, 9, 20, null, null, 15, 7);
    var output = levelOrderBottom(input);

    expect(output).to.deep.equal([
      [15, 7],
      [9, 20],
      [3]
    ]);
  });

  it('[]', function () {
    var input = BinaryTree();
    var output = levelOrderBottom(input);

    expect(output).to.deep.equal([]);
  });
});
