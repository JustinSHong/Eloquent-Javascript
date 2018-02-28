// Write a function, deepEqual, that takes two values and returns true only if they are the same value
// or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident,
// typeof null also produces "object".

function deepEqual(a, b) {
	// tests if a and b are values
	if (a === b) {
		return true;
	}
	// false case: a or b are null or are not type object
	if (a == null || b == null ||
		typeof a != "object" || typeof b != "object") {
		return false;
	}
	
	let keysA = Object.keys(a);
	let keysB = Object.keys(b);
	// false case: a and b dont have the same number of properties
	if (keysA.length !== keysB.length) {
    	return false;
	}
	// false case: properties in a are not found in b
	for (let key of keysA) {
		if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
			return false;
		}
	}
	return true;
}

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true