// The deque data structure, very similar to the queue data-structure also known as the double - ended queue, is a special
// queue that allows us to insert and remove elements from the end or from the
// front of the queue.

//creating the Deque Class
class Deque(){
  constructor(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
// below are all the methods the class would have

// addFront(element): This method adds a new element at the front of the deque
addFront(element) {
  if (this.isEmpty()) { // check if it's empty
    this.addBack(element); //if true invoke the addBack method which in this case is the front, this is used to avoid repetition of code
  } else if (this.lowestCount > 0) { // check the lowest count if it's greater than zero(meaning an element has been removed from Deque class), add the new element to the removed element position
    this.lowestCount--; //decrease the lowest count
    this.items[this.lowestCount] = element; // add the new element to the previously removed element position
  } else {
    for (let i = this.count; i > 0; i--) { // if no element has been removed from the Deque class then we increase the object by the value of one and reassign the elements in the object
      this.items[i] = this.items[i - 1]; // reassigning the values with a for loop
    }
    this.count++; //increasing the count by one
    this.lowestCount = 0; //the lowest count remains unchanged
    this.items[0] = element; // //assigning the new element to the first position
  }
}
//check the Queue class to view the logic behind the methods below
// addBack(element): This method adds a new element at the back of the deque (same implementation as the enqueue method from the Queue class)
// removeFront(): This method removes the first element from the deque(the same implementation as the dequeue method from the Queue class)
// removeBack(): This method removes the last element from the deque(the same implementation as the pop method from the Stack class)
// peekFront(): This method returns the first element from the deque(the same implementation as the peek method from the Queue class)
// peekBack(): This method returns the last element from the deque(the same  implementation as the peek method from the Stack class)




