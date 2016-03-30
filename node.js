var http = require('http'),
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  port = 9000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/img/icon.ico'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/DanielWendelken.html'));
});

app.get('/secret', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/FrontPage.html'));
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/resume.html'));
});

app.get('/resume/download', function(req, res){
  var file = __dirname + '/public/files/2016-Resume-DanielWendelken.pdf';
  res.download(file); // Set disposition and send it.
});

http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});
