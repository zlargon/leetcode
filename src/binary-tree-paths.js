/*
 * Given a binary tree, return all root-to-leaf paths.
 *
 * For example, given the following binary tree:
 *    1
 *  /   \
 * 2     3
 *  \
 *   5
 *
 * All root-to-leaf paths are:
 * ["1->2->5", "1->3"]
 *
 * Tags:
 *  - Tree
 *  - Depth-first Search
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var paths = [];
  function findPath(node, path) {
    if (node === null) {
      return;
    }

    var currentPath = path.concat([node.val]);

    // is leaf node
    if (node.left === null && node.right === null) {
      paths.push(currentPath.join('->'));
      return;
    }

    findPath(node.left, currentPath);
    findPath(node.right, currentPath);
  }

  findPath(root, []);
  return paths;
};


// mocha testing
var expect = require('chai').expect;
describe('Binary Tree Paths', function() {

  // default test case
  it('[1, 2, 3, null, 5]', function () {
    var input = BinaryTree(1, 2, 3, null, 5);
    var output = binaryTreePaths(input).sort();

    expect(output).to.deep.equal(["1->2->5", "1->3"]);
  });

  it('[]', function () {
    var input = BinaryTree();
    var output = binaryTreePaths(input).sort();

    expect(output).to.deep.equal([]);
  });

});
