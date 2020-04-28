//Linked-List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      let holder = this.top;
      this.top = node;
      this.top.next = holder;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    let topItem = this.top.value;
    this.top = this.top.next;
    this.length--;
    return topItem;
  }
}

//LIFO
// last in first out
//[google, udemy, discord]

//Discord
//Udemy
//google

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack);

// Array

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this.array.length;
  }
  pop() {
    if (this.array.length !== 0) {
      let item = this.array[this.array.length - 1];
      this.array.pop();
      return item;
    }
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
console.log(myStack.push('discord'));
console.log(myStack.pop(), 'a');
console.log(myStack.peek());
myStack.pop();
myStack.pop();
console.log(myStack);

//Discord
//Udemy
//google
