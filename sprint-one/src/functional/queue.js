var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var rmv = 0;
  //[1]
  //[1,2]
  //[1,2,3]
  //[1,2,3,4]
  //[1,2,3,4,5]
  //[2,3,4,5]
  //[3,4,5]
  //[4,5]
  // Implement the methods below

  someInstance.enqueue = function (value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function () {
    rmv++;
    if (rmv > count) rmv = count;
    let item = storage[rmv];
    delete storage[rmv];
    return item;
  };

  someInstance.size = function () {
    return count - rmv;
  };

  return someInstance;
};
