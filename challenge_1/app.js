// for each square on board
//	add an event listener for a click
//	click will make an X appear on the square

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");

for (var i = 0; i < row1.children.length; i++) {
  row1.children[i].addEventListener('click', function(event) {
  	event.target.innerHTML = 'X';
  });
}
