var BinarySearchTree = function (value) {
  var binaryTree = Object.create(binarySearchTree);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.flag = false;
  return binaryTree;
};

var binarySearchTree = {};

binarySearchTree.insert = function (value) {
  if (this.value > value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binarySearchTree.contains = function (value) {
  let queue = [],
    cur = null;
  queue.push(this);
  while (queue.length > 0) {
    cur = queue.shift();
    if (cur.value === value) return true;
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return false;
};

binarySearchTree.depthFirstLog = function (cb) {
  let cur = this;
  function helper(node, cb) {
    if (!node) return null;
    cb(node.value);
    if (node.left) {
      helper(node.left, cb);
    }
    if (node.right) {
      helper(node.right, cb);
    }
  }
  helper(cur, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
