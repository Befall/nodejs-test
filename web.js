var html = require('http');
var fs = require('fs');
var app = express();

fs.readFileSync('./index.html', function(err, html) {
	if (err) {
		throw err;
	}

	http.createServer(function(req, res) {
		res.writeHeader(200, {"Content-Type":"text/html"});
		res.write(html);
		res.end();
	}).listen(8000);
});
