const express = require('express');

const app = express();

app
	.use((req, res, next) => {
		console.log("Hi!");
		next();
	})
	.get("/", (req, res) => {
		res.send("Hello World!");
	})
	.get("/profile", (req, res) => {
		let profile = {
			name: "Georgeek"
		};
		res.send(profile);
	})



app.listen(3000);
