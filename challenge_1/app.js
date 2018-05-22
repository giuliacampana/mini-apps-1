// GAME OBJECTS:

var virtualBoard = [0, 0, 0, 
					0, 0, 0, 
					0, 0, 0];

var Game = function() {
  this.playerX = true;
  this.playerO = false;
  this.movesCounter = 0;
  this.xWins = 0;
  this.oWins = 0;
};

Game.prototype.reset = function() {
  // this.playerX = true;
  // this.playerO = false;
  this.movesCounter = 0;
};

Game.prototype.move = function(index) {
  var addTextTo = document.getElementById('' + index);

  if (this.playerX && virtualBoard[index] === 0 && this.movesCounter <= 9) {
  	virtualBoard[index] = 'X';
  	this.playerX = false;
  	this.playerO = true;
  	addTextTo.innerHTML = 'X';

  } else if (this.playerO && virtualBoard[index] === 0 && this.movesCounter <= 9) {
  	virtualBoard[index] = 'O';
    this.playerO = false;
    this.playerX = true;
    addTextTo.innerHTML = 'O';
  }

  this.movesCounter++;
}

Game.prototype.checkRows = function() {
  var rowSum = '';
  for (var i = 0; i < virtualBoard.length; i+= 3) {

  	rowSum = virtualBoard[i] + virtualBoard[i + 1] + virtualBoard[i + 2];

  	if (rowSum === 'XXX') {
  	  return 1; // 'X' wins
  	}
  	if (rowSum === 'OOO') {
  	  return 0; // 'O' wins
  	}
  }
  return -1;
}

Game.prototype.checkColumns = function() {
  var colSum = '';
  for (var i = 0; i < virtualBoard.length; i++) {
  	colSum = virtualBoard[i] + virtualBoard[i + 3] + virtualBoard[i + 6];

  	if (colSum === 'XXX') {
  	  return 1; // 'X' wins
  	}
  	if (colSum === 'OOO') {
  	  return 0; // 'O' wins
  	}
  	if (i === 2) {
  	  break;
  	}
  }
  return -1;
};

Game.prototype.checkDiagRightToLeft = function() {
  var diagSum = virtualBoard[0] + virtualBoard[4] + virtualBoard[8];

  if (diagSum === 'XXX') {
  	return 1;
  }
  if (diagSum === 'OOO') {
  	return 0;
  }
  return -1;
};

Game.prototype.checkDiagLeftToRight = function() {
  var diagSum = virtualBoard[2] + virtualBoard[4] + virtualBoard[6];

  if (diagSum === 'XXX') {
  	return 1;
  }
  if (diagSum === 'OOO') {
  	return 0;
  }
  return -1;
};

Game.prototype.checkForWins = function() {
  var rowCheck = this.checkRows();
  var columnCheck = this.checkColumns();
  var diagCheck1 = this.checkDiagRightToLeft();
  var diagCheck2 = this.checkDiagLeftToRight();

  if (rowCheck === 1 || columnCheck === 1 || diagCheck1 === 1 || diagCheck2 === 1) {
  	x.style.display = "block";
  	this.xWins += 1;
  	this.updateWinCountOnPage();
  	this.chooseFirstPlayer('X');
  	return true;

  } else if (rowCheck === 0 || columnCheck === 0 || diagCheck1 === 0 || diagCheck2 === 0) {
  	o.style.display = "block";
  	this.oWins += 1;
  	this.updateWinCountOnPage();
  	this.chooseFirstPlayer('O');
  	return true;

  } else if (this.movesCounter === 9) {
  	end.style.display = "block";
  	this.updateWinCountOnPage();
  	this.chooseFirstPlayer('X');
    return true;
  }
  return false;
};

Game.prototype.updateWinCountOnPage = function() {
  var playerXWins = document.getElementById("xwins");
  var playerOWins = document.getElementById("owins");

  playerXWins.innerHTML = "Player X Wins: " + this.xWins;
  playerOWins.innerHTML = "Player O Wins: " + this.oWins;
};

Game.prototype.chooseFirstPlayer = function(winner) {
  if (winner === 'X') {
  	this.playerX = true;
  	this.playerO = false;
  } else if (winner === 'O') {
  	this.playerX = false;
  	this.playerO = true;
  }
}


// CREATE GAME:
var game = new Game();



// DOM ELEMENTS:

// End result messages
var end = document.getElementById("end");
var x = document.getElementById("x");
var o = document.getElementById("o");

// HTML table
var board = document.getElementById("board");
var rows = board.children[0].children;



// CLICK EVENTS:

// Click "New Game" button
document.getElementById("reset").addEventListener('click', function(event) {
  virtualBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  end.style.display = "none";
  x.style.display = "none";
  o.style.display = "none";

  // clear HTML table
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].children.length; j++) {
	  if (rows[i].children[j].innerHTML !== '') {
	  	rows[i].children[j].innerHTML = '';
	  }
    }
  }
  game.reset();
});

// Make a move on the board
for (var i = 0; i < rows.length; i++) {
  for (var j = 0; j < rows[i].children.length; j++) {

  	var square = rows[i].children[j];

  	square.addEventListener('click', function(event) {
  	  game.move(this.id);

	  if (game.checkForWins()) {
	  	return;
	  }

  	});
  }
}











