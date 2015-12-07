var BinaryTree = require('../BinaryTree');

function TreeMatrix(treeRoot) {
  var list = [];
  var maxLevel = 0;
  function createNodeList(node, lv, child) {
    if (node === null) return;

    if (lv > maxLevel) {
      maxLevel = lv;
    }

    createNodeList(node.left, lv + 1, 'left');
    list.push({
      val: node.val,
      level: lv,
      child: child
    });
    createNodeList(node.right, lv + 1, 'right');
  }
  createNodeList(treeRoot, 0, null);

  var matrix = [];
  for (var lv = 0; lv <= maxLevel; lv++) {
    // children link
    var childrenLink = list.map(function(node) {
      if (node.level !== lv) return '';
      return node.child === 'left' ? '/' : '\\';
    });
    if (lv !== 0) matrix.push(childrenLink);

    // values
    var values = list.map(function (node) {
      if (node.level !== lv) return '';
      return node.val.toString();
    });
    matrix.push(values);
  }
  return matrix;
}

function TreeView (treeArray) {
  return TreeMatrix(BinaryTree.apply(null, treeArray))
    .map(function (row) {
      return row.join('');
    })
    .join('\n');
}

function TreeTag(strings) {
  return strings.raw[0].replace(/ /g, '').trim();
}

// mocha testing
var expect = require('chai').expect;
describe('Binary Tree', function() {

  it('[]', function () {
    var input = [];
    var output = TreeView(input);
    expect(output).to.equal('');
  });

  it('[1, 2, 3]', function () {
    var input = [1, 2, 3];
    var output = TreeView(input);
    expect(output).to.equal(TreeTag
      `1
      / \
     2   3`);
  });

  it('[1, null, 2, 3]', function () {
    var input = [1, null, 2, 3];
    var output = TreeView(input);
    expect(output).to.equal(TreeTag
      `1
        \
         2
        /
       3`);
  });

  it('[1, 2, 3, 4, 5, null, 6, 7]', function () {
    var input = [1, 2, 3, 4, 5, null, 6, 7];
    var output = TreeView(input);
    expect(output).to.equal(TreeTag
          `1
          / \
         2   3
        / \   \
       4   5   6
      /
     7`);
  });

  it('[5, 4, 7, 3, null, 2, null, -1, null, 9]', function () {
    var input = [5, 4, 7, 3, null, 2, null, -1, null, 9];
    var output = TreeView(input);
    expect(output).to.equal(TreeTag
            `5
            / \
           4   7
          /   /
         3   2
        /   /
      -1   9`);
  });
});
