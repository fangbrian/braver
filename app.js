var express = require('express');
var app = express();
var session = require('client-sessions');
var http = require('http');
var locals = require('./locals');
var _url = require('url');
var request = require('request');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(session({
  cookieName: 'session',
  secret: 'This_Is_A_Test_String',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use(bodyParser.json());

app.get('/', function(req, res) { 
	res.sendfile('./views/index.html');
});

app.listen(8080);