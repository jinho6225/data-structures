var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  extend(newTree, treeMethods);
  return newTree;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  let node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function (target) {
  let flag = false;

  const helper = (node, target) => {
    if (node.length === 0) return;
    for (let i = 0; i < node.length; i++) {
      if (node[i].value === target) {
        flag = true;
      }
      if (node[i].children.length !== 0) {
        helper(node[i].children, target);
      }
    }
    return flag;
  };
  return helper(this.children, target);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
