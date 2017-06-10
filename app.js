var bodyParser = require("body-parser");
var app = require("express")();
var http = require("http").Server(app);
var logger = require("./logger.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger.access);

app.get("/login", function(req, res) {
	console.log("/login API");
	var username = req.query.username;
	var password = req.query.password;
	if(username && password) {
		logger.app("<User: "+username+","+password+" >");
		res.json({"status": "ok"});
	} else {
		logger.error("Invalid username or password.");
		res.json({"status": "ng"});
	}
});

app.post("/register", function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	if(username && password) {
		logger.app("<User: "+username+","+password+" >");
		res.json({"status": "ok"});
	} else {
		logger.error("Invalid username or password.");
		res.json({"status": "ng"});
	}
});

http.listen(3000, function() {
	console.log("Listening on *:3000");
});
