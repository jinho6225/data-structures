var Stack = function () {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
  return this.count;
};
Stack.prototype.pop = function () {
  let item = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count > 0) this.count--;
  return item;
};
Stack.prototype.size = function () {
  return this.count;
};
