class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push(value) {
    this.count++;
    this.storage[this.count] = value;
    return this.count;
  }
  pop() {
    let item = this.storage[this.count];
    delete this.storage[this.count];
    if (this.count > 0) this.count--;
    return item;
  }
  size() {
    return this.count;
  }
}
