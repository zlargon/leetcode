/*
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * For example, this binary tree is symmetric:
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 * But the following is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 *
 * Tags:
 *  - Tree
 *  - Depth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }

  var treeLevel = [];
  function setupTreeLevel(node, index) {
    if (Array.isArray(treeLevel[index]) === false) {
      treeLevel[index] = [];
    }

    if (node === null) {
      treeLevel[index].push(null);
      return;
    }

    setupTreeLevel(node.left, index + 1);
    treeLevel[index].push(node.val);
    setupTreeLevel(node.right, index + 1);
  }

  // setup level
  setupTreeLevel(root, 0);

  // check each row's nodes
  for (var i = 1; i < treeLevel.length; i++) {
    var row = treeLevel[i];
    for (var m = 0, n = row.length - 1; m <= n; m++, n--) {
      if (row[m] !== row[n]) {
        return false;
      }
    }
  }

  return true;
};

// mocha testing
var expect = require('chai').expect;
describe('Symmetric Tree', function() {

  // default test case
  it('[1, 2, 2, 3, 4, 4, 3]', function () {
    var input = BinaryTree(1, 2, 2, 3, 4, 4, 3);
    var output = isSymmetric(input);
    expect(output).to.equal(true);
  });

  // default test case
  it('[1, 2, 2, null, 3, null, 3]', function () {
    var input = BinaryTree(1, 2, 2, null, 3, null, 3);
    var output = isSymmetric(input);
    expect(output).to.equal(false);
  });

  it('[]', function () {
    var input = BinaryTree();
    var output = isSymmetric(input);
    expect(output).to.equal(true);
  });

  it('[1, 2, 3, 3, null, 2, null]', function () {
    var input = BinaryTree(1, 2, 3, 3, null, 2, null);
    var output = isSymmetric(input);
    expect(output).to.equal(false);
  });

  it('[1, 2, 2, null, 3, 3]', function () {
    var input = BinaryTree(1, 2, 2, null, 3, 3);
    var output = isSymmetric(input);
    expect(output).to.equal(true);
  });
});
