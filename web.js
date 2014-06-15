var express = require('express');
var app = express();

app.set('Views', __dirname + '/Views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
	res.render('about.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
