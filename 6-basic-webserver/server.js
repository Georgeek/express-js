var http = require("http");
var handlers = require("./handlers")


var server = http.createServer(function(req, res) {
	var headers = req.headers,
		method = req.method,
		url = req.url;

	if (url === '/') {
		handlers.homepage(req, res);
	} else if (url === "/profile") {
		handlers.profile(req, res);
	} else {
handlers.notFound(req, res);
	}
});

server.listen(3000);
