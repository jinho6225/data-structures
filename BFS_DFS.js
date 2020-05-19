let tree = {
  val: 9,
  left: {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 170, left: null, right: null },
  },
};
/*
	-	BFS (breadthFirstSearch) - O(n)
    iteratively & recursively
	-	DFS (depthFirstSearch) - O(n)
               9
           4      20
        1    6  15   170
InOder [1,4,6,9,15,20,170]
PreOrder [9,4,1,6,20,15,170]
PostOrder [1,6,4,15,170,20,9]
*/
function breadthFirstSearch(root) {
  let list = [];
  let queue = [];
  let currentNode = root;
  queue.push(currentNode);
  while (queue.length > 0) {
    console.log(queue);
    currentNode = queue.shift();
    list.push(currentNode.val); // queue []
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
}
function breadthFirstSearchR(root) {
  let queue = [];
  let list = [];
  let currentNode = root;
  queue.push(currentNode);
  function helper(root) {
    if (!queue.length) return list;
    currentNode = queue.shift();
    list.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    helper(currentNode);
  }
  helper(root);
  return list;
}
function depthFirstSearchPostOder(root) {
  let list = [];
  function helper(root) {
    if (root.left) {
      helper(root.left);
    }
    if (root.right) {
      helper(root.right);
    }
    list.push(root.val);
  }
  helper(root);
  return list;
}
function depthFirstSearchInOder(root) {
  let list = [];
  function helper(root) {
    if (root.left) {
      helper(root.left);
    }
    list.push(root.val);
    if (root.right) {
      helper(root.right);
    }
  }
  helper(root);
  return list;
}
function depthFirstSearchPreOder(root) {
  let list = [];
  function helper(root) {
    list.push(root.val);
    if (root.left) {
      helper(root.left);
    }
    if (root.right) {
      helper(root.right);
    }
  }
  helper(root);
  return list;
}
console.log(breadthFirstSearch(tree));
console.log(breadthFirstSearchR(tree));
console.log(depthFirstSearchPreOder(tree));
console.log(depthFirstSearchInOder(tree));
console.log(depthFirstSearchPostOder(tree));
