/*
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
var isBalanced = function(root) {
  var result = true;
  function getDepth(node) {
    if (node === null) return 0;

    // is leaf node
    if (node.left === null && node.right === null) {
      return 1;
    }

    // left > right
    var left = getDepth(node.left);
    var right = getDepth(node.right);
    if (left < right) {
      var tmp = left;
      left = right;
      right = tmp;
    }

    // check differ
    if (left - right > 1) {
      result = false;
    }

    return left + 1;
  }

  getDepth(root);
  return result;
};

function Tree(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return null;
  }

  var order = str.split('').map(function (c) {
    return c === '.' ? null : c;
  });
  var tree = BinaryTree.apply(null, order);
  console.log(tree.view());
  return tree;
}

// mocha testing
var expect = require('chai').expect;
describe('Balanced Binary Tree', function() {

  it('ABCD.EF..G', function () {
    var input = Tree('ABCD.EF..G');
    var output = isBalanced(input);

    expect(output).to.be.true;
  });

  it('ABCDE.F..G', function () {
    var input = Tree('ABCDE.F..G');
    var output = isBalanced(input);

    expect(output).to.be.true;
  });

  it('ABCD.E...G', function () {
    var input = Tree('ABCD.E...G');
    var output = isBalanced(input);

    expect(output).to.be.false;
  });

  it('ABCDEFGHI.J......K.L', function () {
    var input = Tree('ABCDEFGHI.J......K.L');
    var output = isBalanced(input);

    expect(output).to.be.false;
  });

  it('Empty Tree', function () {
    var input = Tree();
    var output = isBalanced(input);

    expect(output).to.be.true;
  });
});
