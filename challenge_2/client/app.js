var app = {
  server: 'http://127.0.0.1:1337',
  
  send: function(JSONdata) {
	$.ajax({
	  url: app.server,
	  type: 'POST',
	  data: JSONdata,
	  contentType: 'application/json',
	  success: function (data) {
	  	$("#output").val(data);
	  	console.log('data processed!');
	  },
	  error: function (error) {
	    console.error('error: ', error);
	  }
	});
  }

};

$(document).ready(function() {
  $("#submit").on('click', function(event) {
  	event.preventDefault();
  	app.send($("#input").val());
  });
});