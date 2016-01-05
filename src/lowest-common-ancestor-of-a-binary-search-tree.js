/*
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
 *
 *         _______6______
 *        /              \
 *     ___2__          ___8__
 *    /      \        /      \
 *    0      _4       7       9
 *          /  \
 *          3   5
 * For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 *
 * Tags:
 *  - Tree
 */

var TreeNode   = require('../lib/TreeNode');
var BinaryTree = require('../lib/BinaryTree');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  function getPath (root, node, path) {
    if (root === null) {
      return path;
    }
    path.push(root);

    if (node.val < root.val) return getPath(root.left, node, path);
    if (node.val > root.val) return getPath(root.right, node, path);
    return path;
  }

  var path = {
    p: getPath(root, p, []),
    q: getPath(root, q, [])
  };

  // posit that path.p is shorter
  if (path.p.length > path.q.length) {
    var tmp = path.p;
    path.p = path.q;
    path.q = tmp;
  }

  var common = null;
  for (var i = 0; i < path.p.length && path.p[i] === path.q[i]; i++) {
    common = path.p[i];
  }

  return common;
};

function getNodeFromBST(root, val) {
  if (val < root.val) return getNodeFromBST(root.left, val);
  if (val > root.val) return getNodeFromBST(root.right, val);
  return root;
}

// mocha testing
var expect = require('chai').expect;
describe('Lowest Common Ancestor of a Binary Search Tree', function() {

  it('find LCA of 1 and 1 => 1', function () {
    var BST = BinaryTree(1);
    console.log(BST.view());

    var input = {
      root: BST,
      p: getNodeFromBST(BST, 1),
      q: getNodeFromBST(BST, 1)
    };

    var output = lowestCommonAncestor(input.root, input.p, input.q);

    expect(output).to.deep.equal(getNodeFromBST(BST, 1));
  });

  it('find LCA of 1 and 2 => 1', function () {
    var BST = BinaryTree(2, 1);
    console.log(BST.view());

    var input = {
      root: BST,
      p: getNodeFromBST(BST, 1),
      q: getNodeFromBST(BST, 2)
    };

    var output = lowestCommonAncestor(input.root, input.p, input.q);

    expect(output).to.deep.equal(getNodeFromBST(BST, 2));
  });

  it('find LCA of 2 and 8 => 6', function () {
    var BST = BinaryTree(6, 2, 8, 0, 4, 7, 9, null, null, 3, 5);
    console.log(BST.view());

    var input = {
      root: BST,
      p: getNodeFromBST(BST, 2),
      q: getNodeFromBST(BST, 8)
    };

    var output = lowestCommonAncestor(input.root, input.p, input.q);

    expect(output).to.deep.equal(getNodeFromBST(BST, 6));
  });

  it('find LCA of 2 and 4 => 2', function () {
    var BST = BinaryTree(6, 2, 8, 0, 4, 7, 9, null, null, 3, 5);
    console.log(BST.view());

    var input = {
      root: BST,
      p: getNodeFromBST(BST, 2),
      q: getNodeFromBST(BST, 4)
    };

    var output = lowestCommonAncestor(input.root, input.p, input.q);

    expect(output).to.deep.equal(getNodeFromBST(BST, 2));
  });

});
