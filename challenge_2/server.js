var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

// JSON-CSV converter begins here:
var getKeys = function(data) {
  var keys = [];
  for (var key in data) {
  	if (!Array.isArray(data[key])) {
  	  keys.push(key);
  	}
  }
  return keys;
};

var convertData = function(data) {
  var values =[];
  var eachObjValues =[];

  var keys = getKeys(data);
  var dataKeys = Object.keys(data);

  for (var i = 0; i < dataKeys.length; i++) {
  	if (keys[i] === dataKeys[i]) {
  	  eachObjValues.push(data[dataKeys[i]]);

  	} else {
  	  for (var j = 0; j < data[dataKeys[i]].length; j++) {
  	  	eachObjValues.push(convertData(data[dataKeys[i]][j]));

  	  }
  	}
  }
  return eachObjValues.join(',');
};

var formatData = function(data) {
  var keys = getKeys(data);
  var allValues = convertData(data);
  var valArray = allValues.split(',');
  var everything = keys.concat(valArray);
  var values = [];

  for (var k = 0; k < everything.length; k+=6) {
  	values.push(everything[k] + ',' + everything[k + 1] + ',' + everything[k + 2] + ',' + everything[k + 3] + ',' + everything[k + 4] + ',' + everything[k + 5]);
  }

  return values.join('\n');
} // converter ends here

// stores data
var storage = [];

// handles post requests
app.post('/', function(req, res, next) {
    var csv = formatData(req.body);
    storage.push(csv);
    res.send(csv);
});

http.createServer(app).listen(1337);
console.log('express server is listening on port 1337');



