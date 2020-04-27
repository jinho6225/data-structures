class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length > 0) {
      let lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    } else {
      console.error('array is empty now');
    }
  }

  deleteAtIndex(idx) {
    let item = this.data[idx];
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myArray = new MyArray();

myArray.push('!!??!!');
myArray.push('hello');
myArray.push('world');
myArray.push('!');
console.log(myArray.deleteAtIndex(1));
myArray.deleteAtIndex(0);
console.log(myArray);
