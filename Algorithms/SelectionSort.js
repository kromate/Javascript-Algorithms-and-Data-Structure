const findSmallest = (arr) => {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
};

const selectionSort = (arr) => {
	let sortedArr = [];
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let SI = findSmallest(arr);
		sortedArr.push(arr.splice(SI, 1));
	}
	return sortedArr.flat();
};

let sorted = selectionSort([5, 2, 5, 9, 1, 8]);

console.log(sorted);
