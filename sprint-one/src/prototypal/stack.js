var Stack = function () {
  // using Object.create
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
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
