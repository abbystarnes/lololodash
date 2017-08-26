'use strict';
const routes = require("route");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const http = require('http');
const port = process.env.PORT || 3000;
const petsFile = path.join(__dirname, 'pets.json');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const route = require('./routes/routes.js');

let pets = undefined;
let updatePets = function() {
  pets = fs.readFileSync(petsFile, 'utf8');
  pets = JSON.parse(pets);
}

updatePets();

app.use(bodyParser(bodyParser.json()));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(route);


app.use(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 404;
  res.end('Not Found');
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app
