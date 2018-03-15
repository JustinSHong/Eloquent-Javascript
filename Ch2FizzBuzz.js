// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz",
// for numbers that are divisible by both 3 and 5.

function fizzBuzz() {
	
	// loop from 1 to 100
	for (let i = 1; i < 101; i++) {
		// check if i is a divisible by 3 and 5
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		}
		// is i divisible by 3
		else if (i % 3 === 0) {
			console.log('Fizz');
		}
		// is i divisble by 5
		else if (i % 5 === 0) {
			console.log('Buzz');
		}
	}
}

