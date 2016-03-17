var http = require('http'),
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  port = 9000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(favicon(__dirname + '/public/img/icon.ico'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/DanielWendelken.html'));
});

http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});
