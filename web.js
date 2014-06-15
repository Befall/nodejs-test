var express = require('express');
var mustache = require('mustache');
var mustacheExpress = require('mustache-express');
var app = express();

app.use(express.static(__dirname + '/static'));
app.use('/components', express.static(__dirname + '/bower_components'));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
