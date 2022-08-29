const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", function (request, response) {
	fs.readFile("index.html", function (err, data) {
		if (!err) {
			response.write(data);
		}
		response.end();
	});
});

app.get("/status", function (request, response) {
	fs.readFile("post.json", function (err, data) {
		if (!err) {
			response.write(data);
		}
		response.end();
	});
});

app.post("/status/new", function (req, res) {
    const status = JSON.stringify({
        name: req.body.name,
        status: req.body.status,
    })
	fs.writeFile(
		"post.json",
		status,
		function (error) {
			console.log(error);
		}
	);
});

app.listen(port, function (error) {
	if (error) {
		console.log("Error:", error);
	} else {
		console.log(`Listening on localhost:${port}`);
	}
});
