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

  //   set(key, value) {}

  //   get(key) {}
}

const myHashTable = new HashTable(2);

// myHashTable.set('grapes', 10000)
// myHashTable.set('apples', 9)
// myHashTable.set('appless', 90)
// myHashTable.set('apple1', 80)
// myHashTable.set('apple2', 70)
// myHashTable.get('appless')
console.log(myHashTable);
