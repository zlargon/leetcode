var ListNode = require('./ListNode');

module.exports = function LinkedList() {
  var root = null;
  var prev = null;

  for (var i = 0; i < arguments.length; i++) {
    var num = arguments[i];

    if (root === null) {
      root = new ListNode(num);
      prev = root;
      continue;
    }

    prev.next = new ListNode(num);
    prev = prev.next;
  }

  return root;
}
