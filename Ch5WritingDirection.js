// Write a function that computes the dominant writing direction in a string of text.
// Remember that each script object has a direction property that can be "ltr" (left-to-right), "rtl" (right-to-left), or "ttb" (top-to-bottom).

// The dominant direction is the direction of a majority of the characters which have a script associated with them. 
// The characterScript and countBy functions defined earlier in the chapter are probably useful here.

function dominantDirection(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");
	// console.log(scripts);
  
  	let largest = scripts.reduce(function(a, b) {
		if (a.count > b.count) {
			return a.name;
        }
		return b.name;
	}, 0);
	// console.log(largest);
	
	for (let script of SCRIPTS) {
		if (script.name === largest) {
			return script.direction;
        }
	}
}

dominantDirection("Hello!"); // ltr
dominantDirection("Hey, مساء الخير"); // rtl