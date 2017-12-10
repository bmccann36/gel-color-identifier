'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var bodyParser = require('body-parser');



// logging middleware
app.use(morgan('dev'));
// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


// start the server
var server = app.listen(1337, function () {
  console.log('listening on port 1337');
});


app.use(express.static(path.join(__dirname, '/public')));

// send index.html
app.use('*', (req, res, next) =>
  res.sendFile(path.join(__dirname, '/dist/index.html'))
);

