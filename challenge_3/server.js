var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

http.createServer(app).listen(1337);
console.log('express server is listening on port 1337');

