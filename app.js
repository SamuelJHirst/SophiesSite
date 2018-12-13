var express = require('express'),
    config = require('./config'),
    app = express();

app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('*', function(req, res, next) {
    res.redirect('/')
});

var server = app.listen(config.app.port, function() {
    console.log('Listening on Port ' + config.app.port);
});