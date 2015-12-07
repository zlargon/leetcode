var TreeNode = require('./TreeNode');

module.exports = function BinaryTree() {
  if (arguments.length === 0) {
    return null;
  }

  var nodes = [ new TreeNode(arguments[0]) ]; // first node should not be null
  var index = 0;

  var i = 1;
  while (i < arguments.length) {
    var parent = nodes[index++];
    if (parent === null) {
      continue;
    }

    // set left child
    var node = arguments[i] === null ? null : new TreeNode(arguments[i]);;
    nodes.push(node);
    parent.left = node;
    if (++i >= arguments.length) {
      break;
    }

    // set right child
    node = arguments[i] === null ? null : new TreeNode(arguments[i]);;
    nodes.push(node);
    parent.right = node;
    if (++i >= arguments.length) {
      break;
    }
  }

  return nodes[0];
}

