const http = require("http");
const fs = require("file-system");

// const movieA = fs.readFileSync("./movieA.txt", "utf8");
// fs.writeFileSync("./movieA.txt", movieA + ". 5 stars", "utf8");
//fs.rename("./movieA.txt", "./newMovie.txt", function(){})
//fs.unlink("./movieC.txt", function(){});

http
	.createServer(function (req, res) {
		try {
			let file = fs.readFileSync("." + req.url + ".txt", "utf8");
			res.write(file);
		} catch (err) {
			res.write("404 file not found");
		}
		res.end();
	})
	.listen(8000);
