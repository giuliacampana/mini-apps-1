// keeps track of whose turn it is:
var playerX = true;
var playerO = false;

// adds a piece to the board:

// Before placing an X or O, ensure the clicked board square is empty. If the position is already occupied, don't place an X or O and do not move on to the next player's turn.
// After each play, look for 3 in a row, either diagonally, horizontally and vertically. Also be sure to check to see if the board is full.
// If either condition is met, display a message and do not allow any additional plays.


var board = document.getElementById("board");
var rows = board.children[0].children;

var movesCounter = 0;

for (var i = 0; i < rows.length; i++) {

  for (var j = 0; j < rows[i].children.length; j++) {
  	var square = rows[i].children[j];

   
	square.addEventListener('click', function(event) {

	  if (movesCounter === 9) {
	  	console.log('game over!');
	  	return;
	  }

  	  // playerX makes a move:
  	  if (playerX && event.target.innerHTML === '' && movesCounter <= 9) {
  	    event.target.innerHTML = 'X';
  	    playerX = false;
  	    playerO = true;
  	    movesCounter++;

  	  // playerO makes a move:
  	  } else if (playerO && event.target.innerHTML === '' && movesCounter <= 9) {
  	    event.target.innerHTML = 'O';
  	    playerX = true;
  	    playerO = false;
  	    movesCounter++
  	  }

  	  console.log('movesCounter ', movesCounter);
	});
  }
}












