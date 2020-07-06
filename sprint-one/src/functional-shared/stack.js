var Stack = function () {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;

  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
  return this.count;
};
stackMethods.pop = function () {
  let item = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count > 0) this.count--;
  return item;
};
stackMethods.size = function () {
  return this.count;
};
