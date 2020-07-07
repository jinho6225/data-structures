class Queue {
  constructor() {
    this.queue = {};
    this.count = 0;
    this.rmv = 0;
  }
  enqueue(value) {
    this.count++;
    this.queue[this.count] = value;
    return this.count;
  }
  dequeue() {
    this.rmv++;
    if (this.rmv > this.count) this.count = this.rmv;
    let item = this.queue[this.rmv];
    delete this.queue[this.rmv];
    return item;
  }
  size() {
    return this.count - this.rmv;
  }
}
