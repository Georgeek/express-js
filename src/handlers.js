export function homepage(request, response) {
	response.setHeader("Content-Type", "text/html");
	response.end("<h1>Hello World!</h1>");
}

export function notFound(request, response) {
	response.setHeader("Content-Type", "text/html");
	response.end("404");
}
