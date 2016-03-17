var http = require('http'),
  express = require('express'),
  path = require('path'),
  port = 9000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.body-parser());
app.use(express.methodOverride());
app.use(express.serve-favicon(__dirname + '/public/img/icon.ico'));

app.get('/', function(req, res) {
  res.sendfile('./views/DanielWendelken.html');
});

http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});
