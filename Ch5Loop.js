// Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
// Each iteration, it first runs the test function on the current loop value, and stops if that returns false.
// Then it calls the body function, giving it the current value.

// And finally, it calls the update function to create a new value, and starts from the beginning.

function loop(n, test, body, update) {
	if (!test(n)) {
		return false;
	}
	console.log(n);
	n = body(n);
	loop(n, test, body, update);
}


loop(3, n => n > 0, n => n - 1, console.log);
// 3
// 2
// 1

loop(5, n => n > 0, n => n - 1, console.log);
// 5
// 4
// 3
// 2
// 1