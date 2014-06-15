var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use('/components', express.static(__dirname + '/bower_components'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
	res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
