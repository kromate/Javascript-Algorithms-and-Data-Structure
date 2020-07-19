// A stack is an ordered collection of items that follows the last in, first out
// (LIFO) principle.The addition of new items or the removal of existing items
// takes place at the same end.The end of the stack is known as the top, and the
// opposite side is known as the base.The newest elements are near the top, and the
// oldest elements are near the base.

// there are several ways of creating a stack in javascript, the first approach we would look at is the ARRAY-STACK method

class Stack { //created a stack class to represent our stack data-structure
  constructor() {
    this.items = [] //we used the array data-structure to store the values of the stack
  }
}

// the following method would be used to simulate the functionality of the stack

// push(element(s)): This method adds a new element(or several elements) to the top of the stack.
push(element){
  this.items.push(element) // array around provides us an easy method to do this
}

// pop(): This method removes the top element from the stack.It also returns the removed element.
pop(element){
  this.items.pop(element) // using the array in-built pop method
}
// peek(): This method returns the top element from the stack.The stack is not modified(it does not remove the element; it only returns the element for information purposes).
peek(){
  return this.items[this.items.length-1] // the array's length -1 would give us the last element in the array (the -1 is due to the zero-indexed array)
}
// isEmpty(): This method returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
isEmpty(){
  return this.items.length === 0 ? true : false //check the length of the array and return the respective values based on the result
}
// clear(): This method removes all the elements of the stack.
clear(){
  this.items = [] //just set the items array to an empty array
}
// size(): This method returns the number of elements that the stack contains. It is similar to the length property of an array.

size(){
  retun this.items.length
}

// the complete stack-array class

class Stack { 
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element) 
  }

  pop(element) {
    this.items.pop(element) 
  }

  peek() {
    return this.items[this.items.length - 1] 
  }

  isEmpty() {
    return this.items.length === 0 ? true : false 
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

}

//Using the array Stack Class

let stack = new Stack();  // creating a new instance of the Stack class

console.log(stack.isEmpty()) // true

stack.push(5);
stack.push(9);

console.log(stack.peek()) // 9
console.log(stack.size()) // 2
console.log(stack.isEmpty()) // false
console.log(stack.pop()) // removes the last element from the stack
console.log(stack.clear()) // the stack is now empty


// Let's look at the second method of creating a Stack class
// Creating a JavaScript object-based Stack class
//So basically instead of using arrays to store data of the stack class an object could be used too, which is more efficient tha the array-stack class

class Stack {
  constructor() {
    this.count = 0; // given this is an object, the count is used to keep track of the elements in the object
    this.items = {};
  }
  //The methods are similar to the array-stack methods with a little difference

  push(element) {
    this.items[this.count] = element; // set the  element to the currnet count index
    this.count++ //increases the count
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count == 0 ? true:false
  }

  pop() {
    if (this.isEmpty()) { // check if the array was empty 
      return undefined; // return undefined if true
    }
    this.count--; // reduce the count by 1
    const result = this.items[this.count]; // assign the last element in the object to the variable result
    delete this.items[this.count]; // then delete the last element in the object
    return result; // return result, which now has the value of the last element in the object
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  //we would create an extra toString method in the object based stack, this converts our data to strings
  //this was not neede in the array-stack because the array data structure already comes in-built with one

  toString() {
    if (this.isEmpty()) { // check if the array is empty
      return '';//if true return an empty string
    }
    let objString = `${this.items[0]}`; // assign objString to the first element in the object
    for (let i = 1; i < this.count; i++) { // use a for loop to iteriate through the object
      objString = `${objString},${this.items[i]}`; // combine the element of the object into a single string
    }
    return objString; //return the string
  }

}

// the above example can be used to test this object based stack and the same results would be produced 
//what happens behind the scenes is a little different

const stack = new Stack();
stack.push(5);
stack.push(9);

// what actually happens when you push 5 and 8
// items = {
//   0: 5,
//   1: 8
// };
// count = 2;

