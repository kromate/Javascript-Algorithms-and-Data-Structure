// An array is the simplest memory data structure.For this reason, all
// programming languages have a built -in array datatype.JavaScript also supports
// arrays natively, even though its first version was released without array support.


//Creating and initializing arrays

let array1 = [];//an empty array can be created with square brackets
let array2 = [1, 2, 3];//an array with three elements
let array3 = new Array();// another method of creating an array
let array4 = new Array(1, 2, 3);//same as the above array2

console.log(array1, array2, array3, array4) //=> [], [1,2,3], [], [1,2,3]

// arrays like all javascript objects are dynamic types; meaning they can be reassigned and so can the values within them
let array5 = [1, 'boy', { 'key': 'value' }] //arrays can also contain various data types

console.log(array5)//=> [1, 'boy', {key:'value'}]


// accessing elements in an array
// array are zero-based index; so the first element is zero not 1
console.log(array5[0]);//=> 1
console.log(array5[1]); //=> 'boy'
console.log(array5[2]); //=> {key:'value'}

//this would loop through all the elements in the array
for (let i = 0; i < array5.length; i++) {
  console.log(array5[i]);
};


//Adding elements to an array
// arrays come with variety of methods include push, pop, unshift and shift which can be used to add and remove elements from an array either from the front or back
let array6 = [1, 2, 3, 4, 5, 6, 7];

array6.push(8, 9)// this added 8 and 9 to array6
console.log(array6)//=> [1,2,3,4,5,6,7,8,9]

array6.pop()// this removes an element(9) from the array
console.log(array6)//=> [1,2,3,4,5,6,7,8]

array6.unshift(-1, 0)// this adds elements -1 and 0 to array6, it's literally the opposite of push()
console.log(array6)//=>[-1,0,1,2,3,4,5,6,7,8]

array6.shift()// this removes the first element from the array
console.log(array6)//=> [0,1,2,3,4,5,6,7,8]



// Two - dimensional and multidimensional arrays
// an array can contain other arrays within itself, this therefore makes the concept of multidimensional arrays possible
let numbers = [];
numbers[0] = [2, 4, 6, 8];
numbers[1] = [1, 3, 5, 7, 9];
console.log(numbers) //=>[[2,3,6,8], [1,3,5,7,9]]

console.log(numbers[0][0] ) //=> 2
console.log(numbers[0][1] ) //=> 4
console.log(numbers[1][0] ) //=> 1
console.log(numbers[1][1]) //=> 3
// the above can be expand to three- dimensional or more arrays 


// iterating through the above two dimensional array would look like this
function printMatrix(myMatrix) {//accepts a two-dimensional array
  for (let i = 0; i < myMatrix.length; i++) {// gets the length of the array; which is 2 in this case
    for (let j = 0; j < myMatrix[i].length; j++) {// gets the length of the internal arrays
      console.log(myMatrix[i][j]);// logs the results
    }
  }
}
console.log(printMatrix(numbers)) //2,4,6,8,1,3,5,7,9

// A three-dimensional array would look like this
function print3dMatrix(threeDMatrix) {
  for (let i = 0; i < threeDMatrix.length; i++) {
    for (let j = 0; j < threeDMatrix[i].length; j++) {
      for (let z = 0; z < threeDMatrix[i][j].length; z++) {
        console.log(threeDMatrix[i][j][z]);
      }
    }
  }
}
//Note the above would work for array like the ones below

let numbers = [];
numbers[0] = []
numbers[0][0] = []
console.log(numbers)//=> [[[]]]

// an easier initializations would be

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []; // we need to initialize each array
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}


// Before we round up with arrays, as you might have figured out lot of crazy stuffs can be solved with arrays
// Below are some array methods

// [concat] Joins multiple arrays and returns a copy of the joined arrays.
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers)//=>[-3,-2,-1,0,1,2,3]


// [every] Iterates every element of the array, verifying the desired condition(function) until false is returned.
function multipleOf3(x) {
  if (x == 0)
  {
    console.log(x)
    return false;
  }
  else if (x % 3 == 0) {
    console.log(x)
    return true;
  } else {
    console.log(x)
    return false;
  }
}

let number = [1, 2, 3, 4, 5]
number.every(multipleOf3)//=> 1, false; stop immediately cause the first element is false


//   [filter] Creates an array with each element that evaluates to true in the function provided.
function filterMultipleOf3(x) {
  if (x == 0) {
    return false;
  }
  else if (x % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

let number = [1, 2, 3, 4, 5,6]
let threes = number.filter(filterMultipleOf3)
console.log(threes)//=>[3,6]


// [forEach] Executes a specific function on each element of the array.
function multipleOf3ish(x) {
  if (x == 0) {
    console.log(x, false)
    return false;
  }
  else if (x % 3 == 0) {
    console.log(x, true)
    return true;
  } else {
    console.log(x, false)
    return false;
  }
}
let number = [1, 2, 3, 4, 5]
number.forEach(multipleOf3ish)//1 false,  2 false,  3 true, 4 false, 5 false


// [join] Joins all the array elements into a string.
let number = [1, 2, 3, 4, 5]
console.log(number.join())//=>1,2,3,4,5
console.log(number.join('-'))//=>1-2-3-4-5


//   [indexOf] Searches the array for specific elements and returns its position.
let names = ['john', 'joseph', 'peter', 'andrew']
names.indexOf('joseph')//=> 1; because joseph is the second element in the ZERO indexed javascript array


// [lastIndexOf] Returns the position of the last item in the array that matches the search criterion.
let names = ['john', 'joseph', 'peter', 'andrew', 'joseph']
names.lastIndexOf('joseph')//=> 4; the last occurence of joseph is on the fourth position


//   [map] Creates a new array from a function that contains the criterion / condition and returns the elements of the array that match the criterion.
function mapMultipleOf3(x) {
  if (x == 0) {
    return false;
  }
  else if (x % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

let number = [1, 2, 3, 4, 5]
number.map(mapMultipleOf3)//=>[false, false, true, false, false]


//   [reverse] Reverses the array so that the last item becomes the first and vice versa.
let number = [1, 2, 3, 4, 5]
number.reverse()//=>[5, 4, 3, 2, 1] 


// [slice] Returns a new array from the specified index.
//  [some] Iterates every element of the array, verifying the desired condition(function) until true is returned.(just the opposite of every)
function multipleOf3(x) {
  if (x == 0) {
    console.log(x)
    return false;
  }
  else if (x % 3 == 0) {
    console.log(x)
    return true;
  } else {
    console.log(x)
    return false;
  }
}

let number = [1, 2, 3, 4, 5]
number.some(multipleOf3)//=> 1,2,3 false; stops when the third element returns true;


// [sort] Sorts the array alphabetically or by the supplied function.
let names = ['john', 'John', 'joseph', 'Joseph', 'peter','Peter', 'andrew','Andrew']
names.sort()//=>["Andrew", "John", "Joseph", "Peter", "andrew", "john", "joseph", "peter"]..... the capital letter come before the small, this is due to the way Capital and small letters are arranged in the ASCII format
//so always ensure to use .toLowerCase for string when working on sort algorithms


// [toString] Returns the array as a string.
let number = [1, 2, 3, 4, 5]
number.toString()//=>'1,2,3,4,5'


// [valueOf] Similar to the toString method, returns the array as a string.
let number = [1, 2, 3, 4, 5]
number.valueOf()//=>[1,2,3,4,5]





