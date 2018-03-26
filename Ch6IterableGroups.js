// Make the Group class from the previous exercise iterable. 
// Refer back to the section about the iterator interface earlier in the chapter 
// if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, 
// don’t just return the iterator created by calling the Symbol.iterator method on the array. 
// That would work, but defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

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

// connect Group with its Groupiterator
Group.prototype[Symbol.iterator] = function() {
	// use symbol to create an iterator for Group
	// return new instance of GroupIterator on instance of Group
		// to iterate over group iterable
	return new GroupIterator(this);
}

// instances of GroupIterator tracks the current position in the group
class GroupIterator {
	constructor(position, group) {
		this.position = 0;
		this.group = group;
	}
	// Prototype methods
  next() {
  	// check if last value in the group has been called
  	if (this.position = this.group.length - 1) {
  		return {done: true};
  	}
  	// if not, iterate position and return the next value
  	let value = {
  		position: this.position,
  		value: this.group.get(this.group[position])
  	}
  	this.position++;
  	return {value, done: false};
  }
}

// test cases
let array = ['a', 'b', 'c'];
// a
// b
// c