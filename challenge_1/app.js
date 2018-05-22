// keeps track of whose turn it is:
var playerX = true;
var playerO = false;


var board = document.getElementById("board");
var rows = board.children[0].children;

var virtualBoard = [0, 0, 0, 
					0, 0, 0, 
					0, 0, 0];

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
  var movesCounter = 0;

	for (var i = 0; i < rows.length; i++) {
	  for (var j = 0; j < rows[i].children.length; j++) {

	  	var square = rows[i].children[j];
	   
		square.addEventListener('click', function(event) {
	      // console.log('this is the square: ', square);

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
	  	      var x = document.getElementById("x");
	  	      x.style.display = "block";
	  	      return;
	  	    }

	  	    // game ends if all squares are filled and no one has won
	  	    // since game always begins with playerX's move, game always ends with playerX's move
	  	    if (movesCounter === 9) {
	  	      var end = document.getElementById("end");
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
	  	      var o = document.getElementById("o");
	  	      o.style.display = "block";
	  	    }

	  	  }
		});	
	  }
	}
};

















// var rowWins = function() {
//   for (var i = 0; i < rows.length; i++) {

//     var rowContent = 0;

//     for (var j = 0; j < rows[i].children.length; j++) {
//   	  if (rows[i].children[j].textContent === 'X') {
//   	  	// console.log(rows[i].children[j].textContent)
//         rowContent += 1;
//         console.log(rowContent)
//   	  } else if (rows[i].children[j].textContent === 'O') {
//   	    rowContent += 0;
//   	  } else {
//   	  	continue;
//   	  }

//   	  if (rowContent === 3) {
//   	  	return 1;
//   	  } else if (rowContent === 0) {
//   	  	return 0;
//   	  } else {
//   	  	continue;
//   	  }
//     }
//     console.log('rowContent after inner for loop ', rowContent);
//   }
//   return -1; 
// };



// var sum = function(array) {
//   return array.reduce(function(accum, curr) {
//   	return accum + curr;
//   });
// }


// var rowWins = function(move, row, square) {

//   if (move === 'X') {
// 	virtualBoard[row][square] = 1;
//   } else if (move === 'O') {
// 	virtualBoard[row][square] = 2;
//   }
//   for (var r = 0; r < virtualBoard.length; r++) {
//   	console.log(virtualBoard[r]);
//   	// if (sum(virtualBoard[r]) === 3) {
//   	//   return 1;
//   	// } else if (sum(virtualBoard[r]) === 6) {
//   	//   return 0;
//   	// } else {
//    //    continue;
//   	// }
//   }
//   return -1;
// };

// var checkRow1 = function(move) {
//   var row1 = rows[0];
//   var xPoints = 0;
//   var oPoints = 0;

//   for (var c = 0; c < row1.length; c++) {
// 	if (row1.children[c].textContent === 'X') {
// 	  xPoints++;
// 	  console.log(xPoints);
// 	} else if (row1.children[c].textContent === 'O') {
// 	  oPoints++;
// 	  console.log(oPoints);
//     }
//   }

//   if (xPoints === 3) {
//   	return 1;
//   } else if (oPoints === 3) {
//   	return 0;
//   } else {
//   	return -1;
//   }
// }

game();
























