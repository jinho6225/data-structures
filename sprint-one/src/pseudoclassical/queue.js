var Queue = function () {
  this.queue = {};
  this.count = 0;
  this.rmv = 0;
};

Queue.prototype.enqueue = function (value) {
  this.count++;
  this.queue[this.count] = value;
  return this.count;
};
Queue.prototype.dequeue = function () {
  this.rmv++;
  if (this.rmv > this.count) this.count = this.rmv;
  let item = this.queue[this.rmv];
  delete this.queue[this.rmv];
  return item;
};
Queue.prototype.size = function () {
  return this.count - this.rmv;
};
