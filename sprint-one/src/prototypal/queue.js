var Queue = function () {
  // using Object.create
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;
  queue.rmv = 0;
  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;
  return this.count;
};
queueMethods.dequeue = function () {
  this.rmv++;
  if (this.rmv > this.count) this.count = this.rmv;
  let item = this.storage[this.rmv];
  delete this.storage[this.rmv];
  return item;
};
queueMethods.size = function () {
  return this.count - this.rmv;
};
