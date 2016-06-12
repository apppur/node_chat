var http = require('http');

process.title = 'httpclient';

var data = "<agip>" +
		   "<header>" +
		   "<command_id>10002003</command_id>" +
		   "<game_id>2161</game_id>" +
		   "<gateway_id>361001</gateway_id>" +
		   "</header>" +
		   "<body>" +
		   "<server_id>2161</server_id>" +
		   "<data_info_list>" +
		   "<data_info>" +
		   "<data_value>11</data_value>" +
		   "<data_type>1</data_type>" +
		   "</data_info>" +
		   "<data_info>" +
		   "<data_value>3</data_value>" +
		   "<data_type>8</data_type>" +
		   "</data_inof>" + 
		   "</data_info_list>" +
		   "</body>" +
		   "</agip>";
var datalen = data.length;

console.log(data);
console.log(datalen);

var options = {
	//hostname: '10.10.41.89',
	//port: 9186,
	hostname: '127.0.0.1',
	port: 8888,
	path: '/',
	method: 'POST',
	headers: {
		'Content-Type': 'application/xml',
		'Content-Length': data.length
	}
};

var client = function() {
	var req = http.request(options, function(res) {
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				console.log('BODY: ' + chunk);
			});
	});
	req.on('error', function(e) {
			console.log('Problem with request: ' + e.message);
	});
	req.write(data);
	req.end();
};

//client();

setInterval(client, 15000);
