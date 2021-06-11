// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// api main endpoint 
app.get("/api/", function (req, res) {
  let currentDate = new Date();
  let unixDate = Date.parse(currentDate);
  let utcDate = currentDate.toUTCString();
  let date_string = {
    unix: unixDate,
    utc: utcDate
  }
  res.json(date_string);
});

// Api Error Endpoint
app.get("/api/*", function (req, res) {
  let error_api = { error : "Invalid Date" }
  res.json(error_api);
});



// Api Error Endpoint
app.get("/api/*", function (req, res) {
  let error_api = { error : "Invalid Date" }
  res.json(error_api);
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
