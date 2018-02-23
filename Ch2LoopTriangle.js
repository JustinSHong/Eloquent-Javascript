// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// holds the triangle
var result = '';

// every row is an iteration of the loop
for (let i = 0; i < 7; i++) {
	result += '#';
	console.log(result);
}