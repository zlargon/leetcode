/*
 * Invert a binary tree.
 *
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * to
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 * Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
 * Subscribe to see which companies asked this question
 *
 * Tags:
 *   - Tree
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return root;
  }

  var tmp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = tmp;

  return root;
};

var expect = require('chai').expect;
describe('Invert Binary Tree', function() {

  // default test case
  it('[4, 2, 7, 1, 3, 6, 9]', function () {
    var input = BinaryTree(4, 2, 7, 1, 3, 6, 9);
    var output = invertTree(input);

    expect(output).to.deep.equal(BinaryTree(4, 7, 2, 9, 6, 3, 1));
  });

  it('[4, 2, 7, 1, 3, 6, null]', function () {
    var input = BinaryTree(4, 2, 7, 1, 3, 6, null);
    var output = invertTree(input);

    expect(output).to.deep.equal(BinaryTree(4, 7, 2, null, 6, 3, 1));
  });

  it('[4, 2, 7, 1, 3, 6, null, null, 5]', function () {
    var input = BinaryTree(4, 2, 7, 1, 3, 6, null, null, 5);
    var output = invertTree(input);

    expect(output).to.deep.equal(BinaryTree(4, 7, 2, null, 6, 3, 1, null, null, null, null, 5));
  });

  it('[]', function () {
    var input = BinaryTree();
    var output = invertTree(input);

    expect(output).to.deep.equal(BinaryTree());
  });
});
