var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.get('/', function(req, res) {
	res.render('about.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
