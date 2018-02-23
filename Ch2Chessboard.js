// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #


// When you have a program that generates this pattern,
// define a binding size = 8 and change the program so that it works for any size,
// outputting a grid of the given width and height.

function chessBoard(size) {

	var board = '';
	var bool = true;

	for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            if (bool) {
                board += 'a';
                bool = !bool;
            } else {
                board += 'x';
                bool = !bool;
            }
        }
		board += `\n`;
		bool = !bool;
	}
	// console.log(board.length);
	console.log(board);
}

