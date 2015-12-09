var BinaryTree = require('../BinaryTree');

function TreeTag(strings) {
  return strings.raw[0].replace(/ /g, '').trim();
}

// mocha testing
var expect = require('chai').expect;
describe('Binary Tree', function() {

  it('[1, 2, 3]', function () {
    var input = BinaryTree(1, 2, 3);
    var output = input.view(0, 1);
    expect(output).to.equal(TreeTag
      `1
      / \
     2   3`);
  });

  it('[1, null, 2, 3]', function () {
    var input = BinaryTree(1, null, 2, 3);
    var output = input.view(0, 1);
    expect(output).to.equal(TreeTag
      `1
        \
         2
        /
       3`);
  });

  it('[1, 2, 3, 4, 5, null, 6, 7]', function () {
    var input = BinaryTree(1, 2, 3, 4, 5, null, 6, 7);
    var output = input.view(0, 1);
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
    var input = BinaryTree(5, 4, 7, 3, null, 2, null, -1, null, 9);
    var output = input.view(0, 1);
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
