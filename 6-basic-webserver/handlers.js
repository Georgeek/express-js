exports.homepage = function(req, res) {
	res.setHeader("Content-Type", "text/html");
	res.end("<p>Hello World!</p>");
}

exports.profile = function(req, res) {
	var profile = {
			name: "George",
			age: 28
		}

	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(profile));
}

exports.notFound = function(req, res) {
	res.statusCode = 404;
	res.setHeader("Content-Type", "text/html");
	res.end("<p>Page not found!</p>");
}
 