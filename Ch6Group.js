// The standard JavaScript environment provides another data structure called Set. 
// Like an instance of Map, a set holds a collection of values. 
// Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. 
// A value can only be part of a set once—adding it again doesn’t have any effect.

// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. 
// Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
// delete removes its argument from the group (if it was a member), and 
// has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iteratable object as argument 
// and creates a group that contains all the values produced by iterating over it.

// Group mimics the built in Set data structure
// Set takes in unique values in an array
// Set takes in all data types
// each value must be unique
class Group {
	constructor(group) {
		this.group = [];
	}
	// Prototype methods
	add(value) {
		// add a value to a Group only if it is unique
	  if (!this.has(value)) {
	  	this.group.push(value);
	  }
	}
	delete(value) {
		// remove an argument from the group if it was a member
		if (this.has(value)) {
			let idx = this.group.indexOf(value);
			return this.group.splice(idx, 1);
		}
	}
	has(value) {
		// returns a Boolean indicating if a value was a member
		return this.group.includes(value);
	}
	// Constructor method - does not belong to Group prototype
	static from(object) {
		// create a group with all values produced by iterating over it
		let newGroup = new Group({
			group: []
		});
		object.forEach((value) => newGroup.group.push(value));
		return newGroup;
	}
}

// test cases
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false