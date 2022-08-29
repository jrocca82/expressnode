const express = require("express");
const app = express();
const ejs = require("ejs");

app.use("/", express.static(__dirname + "public"));

app.engine('html', require('ejs').renderFile);

app.set("view engine", "html");

app.set("views", __dirname + "/views");

app.get("/", function(req, res){
    res.render("index");
});

app.listen(4000);