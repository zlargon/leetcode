var ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.view = function() {
  var arr = [];
  for (var node = this; node !== null; node = node.next) {
    arr.push(node.val);
  }
  return arr.join(' -> ');
}

module.exports = ListNode;
