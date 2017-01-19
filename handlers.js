exports.homepage = function(request, response) {
	response.setHeader("Content-Type", "text/html");
	response.end('<h1>Hello World</h1>');
}

exports.profile = function(request, response) {
	var profile = {
		name: "Egor",
		age: 28
	};
	response.setHeader("Content-Type", 'application/json');
	response.end(JSON.stringify(profile));
}

exports.notFound = function(request, response) {
	response.statusCode = 404;
	response.setHeader("Content-Type", "text/html");
	response.end('<h1>404 not found</h1>');
}
