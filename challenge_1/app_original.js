var playerX = true;
var playerO = false;


var board = document.getElementById("board");
var rows = board.children[0].children;
var movesCounter = 0;

var virtualBoard = [0, 0, 0, 
					          0, 0, 0, 
					          0, 0, 0];

// end result messages:
var end = document.getElementById("end");
var x = document.getElementById("x");
var o = document.getElementById("o");

var checkRows = function() {
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
};

var checkColumns = function() {
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

var checkDiagRightToLeft = function() {
  var diagSum = virtualBoard[0] + virtualBoard[4] + virtualBoard[8];

  if (diagSum === 'XXX') {
  	return 1;
  }
  if (diagSum === 'OOO') {
  	return 0;
  }
  return -1;
};

var checkDiagLeftToRight = function() {
  var diagSum = virtualBoard[2] + virtualBoard[4] + virtualBoard[6];

  if (diagSum === 'XXX') {
  	return 1;
  }
  if (diagSum === 'OOO') {
  	return 0;
  }
  return -1;
};

var game = function() {
  
  document.getElementById("reset").addEventListener('click', function(event) {
    virtualBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    movesCounter = 0;
    playerX = true;
	  playerO = false;
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
  });

	for (var i = 0; i < rows.length; i++) {
	  for (var j = 0; j < rows[i].children.length; j++) {

	  	var square = rows[i].children[j];
	   
  		square.addEventListener('click', function(event) {
  	  	  // playerX makes a move:
  	  	  if (playerX && event.target.innerHTML === '' && movesCounter <= 9) {
  	  	    event.target.innerHTML = 'X';
  	  	    playerX = false;
  	  	    playerO = true;
  	  	    movesCounter++;
  	  	    virtualBoard[this.id] = 'X';

  	  	    // check for wins
  	  	    var rowCheck = checkRows();
  	  	    var columnCheck = checkColumns();
  	  	    var diagCheck1 = checkDiagRightToLeft();
  	  	    var diagCheck2 = checkDiagLeftToRight();
   
  	  	    if (rowCheck === 1 || columnCheck === 1 || diagCheck1 === 1 || diagCheck2 === 1) {
  	  	      x.style.display = "block";
  	  	      return;
  	  	    }

  	  	    // game ends if all squares are filled and no one has won
  	  	    // since game always begins with playerX's move, game always ends with playerX's move
  	  	    if (movesCounter === 9) {
  		  	    end.style.display = "block";
  		  	    return;
  	  	    }

  	  	  // playerO makes a move:
  	  	  } else if (playerO && event.target.innerHTML === '' && movesCounter <= 9) {
  	  	    event.target.innerHTML = 'O';
  	  	    playerX = true;
  	  	    playerO = false;
  	  	    movesCounter++;
  	  	    virtualBoard[this.id] = 'O';
  	  	    var rowCheck = checkRows();
  	  	    var columnCheck = checkColumns();
  	  	    var diagCheck1 = checkDiagRightToLeft();
  	  	    var diagCheck2 = checkDiagLeftToRight();

  	  	    if (rowCheck === 0 || columnCheck === 0 || diagCheck1 === 0 || diagCheck2 === 0) {
  	  	      o.style.display = "block";
  	  	    }

  	  	  }
  		});	
	  }
	}
};


game();


























