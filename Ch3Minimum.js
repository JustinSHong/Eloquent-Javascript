// Write a function min that takes two arguments and returns their minimum.

function min(a, b) {

	return Math.min(a, b);
}

function min(a, b) {

	if (a > b) {
		return b;
	}
	return a;
}

console.log(min(0, 10)); // 0
console.log(min(0, -10)); // -10