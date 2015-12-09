var TreeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

TreeNode.prototype.matrix = function() {
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
  createNodeList(this, 0, null);

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
};

TreeNode.prototype.view = function(width, margin) {
  if (width === undefined) width = 1;
  if (margin === undefined) margin = 1;

  function convert(c) {
    var c = '' + c;
    if (width === 0) {
      return c;
    }

    if (width === 1) {
      return c === '' ? ' ' : c;
    }

    if (width === 2) {
      if (c === '\\') return '\\ ';

      if (c.length === 0) return '  ';
      if (c.length === 1) return ' ' + c;
      return c;
    }

    if (width === 3) {
      if (c === '\\') return ' \\ ';
      if (c === '/')  return ' / ';

      if (c.length === 0) return '   ';
      if (c.length === 1) return ' ' + c + ' ';
      if (c.length === 2) return c + ' ';
      return c;
    }
  }

  return this.matrix()
    .map(function (row) {
      return row.map(convert).join('');
    })
    .join('\n'.repeat(margin));
}

module.exports = TreeNode;
