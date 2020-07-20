// the queue data structure is one that is very similar to the stack
// just that instead of the LIFO(last in first out) principle it uses 
// FIFO(first in first out) principle a common example of this in a real-world scenario would be
//a typical queue of people i.e in the supermarket or cinema waiting on the line, the first to get there is the first to exist the line
//just like the stack data structure the queue data structure can be represented in two ways
// array based queues and object based queues, but we shall look at object based Queues only

// creating the Object based queue class

class Queue {
  constructor() {
    this.count = 0; // this is used to keep track of the elements in the queue
    this.lowestCount = 0; // this is used to keep track of the first element in the queue
    this.items = {}; // an empty object is declared to hold the elements of the queue class
  }
}

//methods to be implemented in the Queue class below

// enqueue(element): This method adds a new element at the back of the queue.
enqueue(element) {
  this.items[this.count] = element; //adds an element to the Queue, new elements are added from the back of the queue
  this.count++;
}


//   dequeue(): This method removes the first element from the queue(the item that is in the front of the queue).It also returns the removed element.
dequeue() {
  if (this.isEmpty()) {// check if the Queue is empty
    return undefined;// return undefined if true
  }
  const result = this.items[this.lowestCount]; // if not empty, we store the value from the front of the Queue so we can return it later
  delete this.items[this.lowestCount]; // we delete the element at the lowestCount, this therefore makes the object index undefined
  this.lowestCount++; // the lowest count is increased, moving to the next element
  return result; // //the value in front is returned
}


//   peek(): This method returns the first element from the queue, the first one added, and the first one that will be removed from the queue.
// The queue is not modified(it does not remove the element; it only returns the element for information purposes - very similar to the peek method from the Stack class).
// This method also works as the front method, as it is known in other languages.
peek() {
  if (this.isEmpty()) {
    return undefined;
  }
  return this.items[this.lowestCount]; 
}


//   isEmpty(): This method returns true if the queue does not contain any elements, and false if the queue size is bigger than 0.
isEmpty() {
  return this.count - this.lowestCount === 0; // returns true or false based on the result
}


// size(): This method returns the number of elements the queue contains.It is similar to the length property of the array.
size() {
  return this.count - this.lowestCount;
}


//clear(): this is used to empty the queue
clear() {
  this.items = {};
  this.count = 0;
  this.lowestCount = 0;
}


//toString(): returns a string format of all the elements in the array
toString() {
  if (this.isEmpty()) {
    return ''; //return an empty string if the queue is empty
  }
  let objString = `${this.items[this.lowestCount]}`;
  for (let i = this.lowestCount + 1; i < this.count; i++) {
    objString = `${objString},${this.items[i]}`;
  }
  return objString;
}


// the complete Queue class
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; 
    delete this.items[this.lowestCount]; 
    this.lowestCount++; 
    return result; 
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return ''; 
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

let queue = new Queue()
queue.enqueue('John');
queue.enqueue('Jack');
console.log(Queue.toString()); //=> John,Jack
queue.enqueue('Camila');
console.log(queue.toString()); // John,Jack,Camila
console.log(queue.size()); // outputs 3
console.log(queue.isEmpty()); // outputs false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
console.log(queue.toString()); // Camila
