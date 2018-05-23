var app = {
  server: 'http://127.0.0.1:1337',

  onSubmitClick: function() {
  	// input form:
  	var text = $("#input").val();
  	console.log(text);
	// event listener for submit button:
    $("#submit").on('click', app.send(text));
  },

  send: function(JSONdata) {
	$.ajax({
	  url: app.server,
	  type: 'POST',
	  data: JSONdata,
	  contentType: 'application/json',
	  success: function (data) {
	  	// Clear data from form:
	    // app.$input.val('');
	    // $("#data").display = "none";
	    // $("#submit").display = "none";
	    console.log('data processed!!!!');
	    $("output").val(data);
	  },
	  error: function (error) {
	    console.error('error: ', error);
	  }
	});
  }

};


var test = {'these': 'hi',
			'are': 'hello',
			'my': 'howdy',
			'keys': [{
				'these': 'hola',
				'are': 'hallo',
				'my': 'bonjour',
				'keys': []
			}, {
				'these': 'ciao',
				'are': 'olà',
				'my': 'namaste',
				'keys': [{
					'these': 'nihao',
					'are': 'salaam',
					'my': 'marhaba',
					'keys': []
				}]
			}]
		}