// In other programming languages Arrays are known as List in this file you would see how we
// implement a very popular data structure called the Linked-List.
// Linked List store a sequential collection of elements but unlike arraus, in linked list the elements are not placed contiguously in memory.
// Each element consists of node that store the element itself and also a reference (also known as a pointer or link) that point to the next element.
// the benefit of linked list over arrays is that we do not need to shift elements over when adding or removing them.
// A real-life example of a linked list is a conga line or a train

//create the Linked List Class
const defaultEquals = (a, b) => {
  return a === b;
};
class LinkedList {
  constructor(equalsFn = defaultEquals) {//Check if a comparism function is given, if not given use the defaultEquals function
    this.count = 0;// keeps count
    this.head = undefined;// keeps a reference to the first element on the Linked List, this is due to dynamic nature of the list
    this.equalsFn = equalsFn;
  }
}

// To represent the head and other elements of the linked list, we need a helper class called Node;
// The Node class represent the items we want to add to the list, it contains an element to be added 
// and a next attribute that is the pointer that contains the link to the next node item 

//Declaring the Node class below

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

// the LinkedList will have the following methods

// push(element): This method adds a new element to the end of the list.
push(element) {
  const node = new Node(element); // initialize the ode class
  let current; // {2}
  if (this.head == null) { // Check if the List is empty i.e if the list is empty the head would be null
    this.head = node; //if it is empty, the incoming element becomes the new head
  } else {
    current = this.head; // Assign current to the head of the list
    while (current.next != null) { // Iteriate through the entire list till the last element is found
      current = current.next; //Assign current to the last element on the list
    }

    current.next = node; // and assign current.next of the last element to the new element to make the link
  }
  this.count++; // increase count
}

// insert(element, position): This method inserts a new element at a specified position in the list.
insert(element, index) {
  if (index >= 0 && index <= this.count) { //check for out-of-bounds values
    const node = new Node(element); // create a node from the given element
    if (index === 0) { // if the index is zero then add on to the first position
      const current = this.head; //keep a reference to the current head
      node.next = current; // assign the current head to the pointer of the added element
      this.head = node; //make the inserted element the head
    } else {
      const previous = this.getElementAt(index - 1); // get the element before the given index position
      const current = previous.next; // reference current to the previous pointer (previous.next)
      node.next = current; // reference the incoming node's pointer to the element the previous pointer was pointing to
      previous.next = node; // and point the previous pointer to the inserted node
    }
    this.count++; // update size of list
    return true;
  }
  return false; // {7}
}


// getElementAt(index): This method returns the element of a specific position in the list.If the element does not exist in the list, it returns undefined.
getElementAt(index) {
  if (index >= 0 && index <= this.count) { // check for out-of-bounds values
    for (let i = 0; i < index && node != null; i++) { // loop through the list till the index is found
      node = node.next;
    }
    return node; // return the result 
  }
  return undefined; // if the index is out-of-bound, return undefined
}
// remove(element): This method removes an element from the list.
remove(element) {
  const index = this.indexOf(element);//find the index of the element
  return this.removeAt(index); //use the removeAt method to remove the element
}

// indexOf(element): This method returns the index of the element in the list. Ifthe element does not exist in the list, it returns - 1.;
indexOf(element) {
  let current = this.head; // as always assign current to the first element on the list
  for (let i = 0; i < this.count && current != null; i++) { // iteriate through the list checking for the end of the list (i<this.count) and ensuring it's not pointing to null
    if (this.equalsFn(element, current.element)) { // for each element in the list check if it's the required element by using the equalsFn to check
      return i; // if a match is found return the position of the match
    }
    current = current.next; // if not, countinue iteriating through the list
  }
  return -1; // if the end of the list is reached and no element is found matching the given element return -1, which insinuates that 'element not found' 
}

// removeAt(position): This method removes an item from a specified position in the list.
removeAt(index) {

  if (index >= 0 && index < this.count) {  // check for out-of-bounds values
    let current = this.head; // Assign current to the first element on the list
    if (index === 0) { // if the index is the first element on the Linked List
      this.head = current.next; // reassign the head to the second element on the list, making it the first
    } else {
      let previous; // initialize previous
      for (let i = 0; i < index; i++) { // loop through the list till the index is found
        previous = current; // moving through the list by assigning previous to current 
        current = current.next; // and then assign current to the next element on the list
      }

      previous.next = current.next; // link previous with current's next: skip it to remove
    }
    this.count--; // decrease count
    return current.element; // return the removed element
  }
  return undefined; // if the value is out of bound, return undefined
}

// isEmpty(): This method returns true if the linked list does not contain any elements, and false if the size of the linked list is bigger than 0.;
isEmpty() {
  return this.size() === 0;
}

// size(): This method returns the number of elements the linked list contains.It is similar to the length property of the array.
size() {
  return this.count;
}

//getHead(): this returns the first element / current head from the list
getHead() {
  return this.head;
}

// toString(): This method returns a string representation of the linked list.As the list uses a Node class as an element, we need to overwrite the default toString method inherited from the JavaScript Object class to output only the element values.
toString() {
  if (this.head == null) { // if the list is empty
    return ''; //return an empty string
  }
  let objString = `${this.head.element}`; // using template literals convert the first element to a string and assign it to objString
  let current = this.head.next; // assign the pointer of the head to current
  for (let i = 1; i < this.size() && current != null; i++) { // iteriate through the list
    objString = `${objString},${current.element}`; // add each element to the objString in form of string
    current = current.next; 
  }
  return objString; // return the objString
}














