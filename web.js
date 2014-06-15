var express = require('express');
var app = express();

app.set('Views', __dirname + '/Views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
	res.render('about.html');
});

app.listen(1337);
