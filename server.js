var express = require('express');
var app = express();
var port = 8080;

app.use(express.static('public'));

app.get("/", function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
