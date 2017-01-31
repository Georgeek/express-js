export function homepage(req, res) {
	res.setHeader("Content-type", "text/html");
	res.end("Hello World");
}

export function notFound(req, res) {
	res.statusCode = 404;
	res.setHeader("Content-type", "text/html");
	res.end(404);
}

