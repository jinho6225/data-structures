var Queue = function () {
  var queue = {};
  queue.store = {};
  queue.count = 0;
  queue.rmv = 0;
  extend(queue, queueMethods);
  return queue;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
var queueMethods = {};
queueMethods.enqueue = function (value) {
  this.count++;
  this.store[this.count] = value;
  return this.count;
};
queueMethods.dequeue = function () {
  this.rmv++;
  if (this.rmv > this.count) this.count = this.rmv;
  let item = this.store[this.rmv];
  delete this.store[this.rmv];
  return item;
};
queueMethods.size = function () {
  return this.count - this.rmv;
};
