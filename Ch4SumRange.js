// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

// As a bonus assignment, modify your range function to take an optional third argument
// that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one.

function range (start, end, step = 1) {
	let nums = [];

	for (let i = start; i <= end; i += step) {
		nums.push(i);
	}
	return nums;
}

function sum (arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += i;
	}
	return sum;
}

range(1, 10); // [1,2,3,4,5,6,7,8,9,10]
sum(range(1, 10)); // 55

range(5, 2, -1); // [5,4,3,2]
sum(range(5, 2, -1)); // 14