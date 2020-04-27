class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      let currentNode = this.head;
      let count = 0;
      while (currentNode !== null) {
        if (count === index - 1) {
          let tmp = currentNode.next;
          currentNode.next = newNode;
          newNode.next = tmp;
          break;
        }
        count++;
        currentNode = currentNode.next;
      }
      this.length++;
    }
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index >= this.length) {
      return undefined;
    } else {
      let currentNode = this.head;
      let count = 0;
      while (currentNode !== null) {
        if (count === index - 1) {
          let deletedItem = currentNode.next.value;
          currentNode.next = currentNode.next.next;
          this.length--;
          return deletedItem;
        }
        count++;
        currentNode = currentNode.next;
      }
    }
  }

  reverse() {
    let prev = null;
    while (this.head) {
      let temp = this.head.next;
      this.head.next = prev;
      prev = this.head;
      this.head = temp;
    }
    this.head = prev;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// console.log(myLinkedList.remove(2))
// console.log(myLinkedList.remove(0))
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
