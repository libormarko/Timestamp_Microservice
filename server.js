// server.js
// where the node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// to serve the static CSS file from the public folder by using the 
// built-in middleware function in Express
app.use(express.static('public'));

// routing--how the app responds to a client request to a particular endpoint
// when the route is matched, the handler function is executed--responds with the index.html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// first test API endpoint 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// API endpoint as requested in user stories
app.get("/api/timestamp/:dateString?", function (req, res) {
  const chosenDate = req.params.dateString;
  let date;
  // if the chosen date is an empty string choose current time
  // else create a Date instance--the unix timestamp needs to be converted 
  // to an integer
  if (!chosenDate) {
    date = new Date();
  } else {
   if (isNaN(chosenDate)) {
      date = new Date(chosenDate);
    } else {
     date = new Date(parseInt(chosenDate)); 
    }
  }
  
  // if the date is invalid send the error response
  // else send the response in the requested format
  if (date.toString() === "Invalid Date") {
    res.send({
      error: date.toString()
    })
  } else {
    res.send({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  }
})

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});