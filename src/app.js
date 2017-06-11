var bodyParser = require("body-parser");
var app = require("express")();
var http = require("http").Server(app);

var logger = require("./logger.js");
var factory = require("./factory.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger.access);

function check_user(username, password) {
	if(username && password) {
		logger.app("<User: "+username+","+password+" >");
	} else {
		logger.error("Invalid username or password.");
	}
}

app.get("/login", function(req, res) {
	logger.app("/login API");
	var username = req.query.username;
	var password = req.query.password;
	if( check_user(username, password) ) {
		res.json({"status": "ok"});
	} else {
		res.json({"status": "ng"});
	}
});

app.get("/users", function(req, res) {
	logger.app("/users API");
	res.json( factory.get_users(10) );
});

app.post("/register", function(req, res) {
	logger.app("/register API");
	var username = req.body.username;
	var password = req.body.password;
	if( check_user(username, password) ) {
		res.json({"status": "ok"});
	} else {
		res.json({"status": "ng"});
	}
});

app.put("/update", function(req, res) {
	logger.app("/update API");
	var username = req.body.username;
	var password = req.body.password;
	if( check_user(username, password) ) {
		res.json({"status": "ok"})
	} else {
		res.json({"status": "ng"})
	}
});

http.listen(3000, function() {
	console.log("Listening on *:3000");
});
