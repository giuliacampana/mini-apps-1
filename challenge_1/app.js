var playerX = true;
var playerO = false;

// adds an X to a square if clicked:
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");

for (var i = 0; i < row1.children.length; i++) {
  row1.children[i].addEventListener('click', function(event) {
  	if (playerX) {
  	  event.target.innerHTML = 'X';
  	  playerX = false;
  	  playerO = true;
  	} else if (playerO) {
  	  event.target.innerHTML = 'O';
  	  playerX = true;
  	  playerO = false;
  	}
  });
}

for (var j = 0; j < row2.children.length; j++) {
  row2.children[j].addEventListener('click', function(event) {
  	if (playerX) {
  	  event.target.innerHTML = 'X';
  	  playerX = false;
  	  playerO = true;
  	} else if (playerO) {
  	  event.target.innerHTML = 'O';
  	  playerX = true;
  	  playerO = false;
  	}
  });
}

for (var k = 0; k < row3.children.length; k++) {
  row3.children[k].addEventListener('click', function(event) {
  	if (playerX) {
  	  event.target.innerHTML = 'X';
  	  playerX = false;
  	  playerO = true;
  	} else if (playerO) {
  	  event.target.innerHTML = 'O';
  	  playerX = true;
  	  playerO = false;
  	}
  });
}