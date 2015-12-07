/*
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Tags:
 *  - Tree
 *  - Depth-first Search
 *  - Breadth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }

  var minStep = -1;
  function getMinStep(node, step) {
    if (node === null) {
      return;
    }

    // is leaf node
    if (node.left === null && node.right === null) {
      if (minStep < 0 || step < minStep) {
        minStep = step;
      }
      return;
    }

    getMinStep(node.left, step + 1);
    getMinStep(node.right, step + 1);
  }

  getMinStep(root, 1);
  return minStep;
};

// mocha testing
var expect = require('chai').expect;
describe('Minimum Depth of Binary Tree', function() {

  it('[]', function () {
    var input = BinaryTree();
    var output = minDepth(input);

    expect(output).to.equal(0);
  });

  it('[0]', function () {
    var input = BinaryTree(0);
    var output = minDepth(input);

    expect(output).to.equal(1);
  });

  it('[1, 2, 3]', function () {
    var input = BinaryTree(1, 2, 3);
    var output = minDepth(input);

    expect(output).to.equal(2);
  });

  it('[1, 2, 3, 4]', function () {
    var input = BinaryTree(1, 2, 3, 4);
    var output = minDepth(input);

    expect(output).to.equal(2);
  });

  it('[1, 2]', function () {
    var input = BinaryTree(1, 2);
    var output = minDepth(input);

    expect(output).to.equal(2);
  });

});
