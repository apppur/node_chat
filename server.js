var http = require('http');
var querystring = require('querystring');

console.log('start');

var server = http.createServer(function(req, res) {
		var post = '';
		req.on('data', function(chunk) {
			post += chunk;
		});

        /*
		req.on('end', function() {
			console.log(post);
			res.statusCode = 200;
			res.setHeader('Context-Type', 'text/plain');
			res.end("Hello World\n");
		});
        */
});

server.listen(8888);
