var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newTail = Node(value);
    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function () {
    let item = list.head
    if (list.head.next) {
      list.head = list.head.next  
    } else {
      list.head = null
    }
    return item.value;
  };

  list.contains = function (target) {
    while (list.head) {
      if (list.head.value === target) {
        return true
      }
      list.head = list.head.next
    }
    return false
  };

  return list;
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
