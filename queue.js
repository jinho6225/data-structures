class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let firstItem = this.first.value;
    this.first = this.first.next;
    this.length--;
    return firstItem;
  }
}

const myQueue = new Queue();

myQueue.enqueue('jinho');
myQueue.enqueue('myung');

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.peek(), 'peek');

console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
