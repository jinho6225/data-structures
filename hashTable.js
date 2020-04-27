class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hashKey = this._hash(key);
    //finally, it's kind of object
    if (!this.data[hashKey]) {
      this.data[hashKey] = [];
      //create bucket which key named hashKey
    }
    //push key,value pair into the bucket as a pair
    this.data[hashKey].push([key, value]);
    return this.data;
  }

  get(key) {
    let hashKey = this._hash(key);
    for (let i = 0; i < this.data[hashKey].length; i++) {
      if (this.data[hashKey][i][0] === key) {
        return this.data[hashKey][i][1];
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === undefined) {
        continue;
      } else {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArr.push(this.data[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

const myHashTable = new HashTable(3);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('appless', 90);
myHashTable.get('appless');

console.log(myHashTable.keys()); // ['grapes', 'apples', 'appless']
console.log(myHashTable);
