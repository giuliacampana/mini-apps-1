// keeps track of whose turn it is:
var playerX = true;
var playerO = false;


var board = document.getElementById("board");
var rows = board.children[0].children;

var game = function() {
  var movesCounter = 0;

	for (var i = 0; i < rows.length; i++) {
	  for (var j = 0; j < rows[i].children.length; j++) {

	  	var square = rows[i].children[j];
	   
		square.addEventListener('click', function(event) {
		  // var virtualBoard = [[0, 0, 0], 
				// 			  [0, 0, 0], 
				// 			  [0, 0, 0]];

	  	  // playerX makes a move:
	  	  if (playerX && event.target.innerHTML === '' && movesCounter <= 9) {
	  	    event.target.innerHTML = 'X';
	  	    playerX = false;
	  	    playerO = true;
	  	    movesCounter++;
	  	    var outcome = rowWins();
	  	    console.log(outcome);


	  	    // game ends if all squares are filled
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
	  	    movesCounter++
	  	    var outcome = rowWins();
	  	    console.log(outcome);
	  	  }

	  	  console.log('movesCounter ', movesCounter);
		});	
	  }
	}
};

var rowWins = function() {
  for (var i = 0; i < rows.length; i++) {

    var rowContent = 0;

    for (var j = 0; j < rows[i].children.length; j++) {
  	  if (rows[i].children[j].textContent === 'X') {
  	  	// console.log(rows[i].children[j].textContent)
        rowContent += 1;
        console.log(rowContent)
  	  } else if (rows[i].children[j].textContent === 'O') {
  	    rowContent += 0;
  	  } else {
  	  	continue;
  	  }

  	  if (rowContent === 3) {
  	  	return 1;
  	  } else if (rowContent === 0) {
  	  	return 0;
  	  } else {
  	  	continue;
  	  }
    }
    console.log('rowContent after inner for loop ', rowContent);
  }
  return -1; 
};

game();






// var next = function() {
//       var rowSum = rowContent.reduce(function(a, b) { return a + b; });
//       if (rowSum === 3) {
//   	    return 1;
//       } else if (rowSum === 0) {
//   	    return 0;
//       } else {
//   	    continue;
//       }
//       return -1;
//     }
//   }
























