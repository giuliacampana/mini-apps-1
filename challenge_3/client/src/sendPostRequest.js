var sendPostRequest = (input) => {
  $.ajax({
	url: 'http://127.0.0.1:1337',
	type: 'POST',
	data: JSON.stringify(input),
	contentType: 'application/json',
	success: function (data) {
	  console.log('data processed!');
	  console.log(data);
	},
	error: function (error) {
	  console.error('error: ', error);
	}
  });
}

window.sendPostRequest = sendPostRequest;