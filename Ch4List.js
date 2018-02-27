// A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
//  Also write a listToArray function that produces an array from a list. Then, add a helper function prepend,
//   which takes an element and a list and creates a new list that adds the element to the front of the input list,
//    and nth, which takes a list and a number and returns the element at the given position in the list
//     (with zero referring to the first element) or undefined when there is no such element.

function arrayToList(arr) {
	let list = {};

	for (let i = arr.length - 1; i >= 0; i--) {
			list = {value: arr[i],
	  		rest: list
		};
	}
	return list;
}

function listToArray(list) {
	let result = [];

	for (node = list; node; node = node.rest) {
		if (node.rest) {
			result.push(node.value);
		}
	}
	return result;
}

function prepend(el, list) {
	let newList = {
		value: el,
		rest: list
	};

	return newList;
}

function nth(list, num) {

	let index = 0;
	for (let node = list; node; node = node.rest) {
		if (index === num) {
			return node.value;
		}
		index++;
	}
}

console.log(arrayToList([10, 20]));
// {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20,30]));
// {value:	10
	// rest:	{
	// 	value:	20
	// 		rest:	{value: 30, rest: {}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// 2
