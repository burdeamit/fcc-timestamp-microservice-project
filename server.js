// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
require('dotenv').config()


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
app.get('/api/', function (req, res) {
  let date_string = new Date();
  let unixDate = date_string.getTime();
  let utcDate = date_string.toUTCString();
  let dateApiObject = {
    unix: unixDate,
    utc: utcDate
  }
    res.json(dateApiObject);
});

// api main endpoint 
app.get('/api/:dateInput', function (req, res) {
  let dateInput = req.params.dateInput;
 
  let dateApiObject = {
    unix: "",
    utc: ""
  }
 

  // if date input contains "-" then
  if (dateInput.includes('-')) {
    let date_string = new Date(dateInput);
    dateApiObject.unix = parseInt(date_string.getTime());
    dateApiObject.utc = date_string.toGMTString();
  }
  // if date input does not contains "-"
  else {
      // if date input contains non numeric characters 
      if (dateInput.match(/[^0-9]/g)) {
      dateApiObject.unix = 'Invalid Date';
      dateApiObject.utc = 'Invalid Date';
      }
     // if date input contains numeric characters only
      else {
      let date_string = new Date(parseInt(dateInput));
      dateApiObject.unix = date_string.getTime();
      dateApiObject.utc = date_string.toUTCString();
    }
  }
  // if the dates are invalid show error
  if (dateApiObject.unix === 'Invalid Date' || dateApiObject.utc === 'Invalid Date') {
    res.json({ error: "Invalid Date" });
  }
  
  // if the dates are valid 
  else {
    res.json(dateApiObject);
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
