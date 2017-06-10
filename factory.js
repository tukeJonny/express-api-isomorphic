var Factory = function(){};
var ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";

function fuzzy_string(n) {
	var res = "";

	for(var i = 0; i < n; i++) {
		var rand = Math.floor( Math.random() * n );
		res += ascii_lowercase[rand];
	}
	return res;
}

Factory.prototype.get_users = function (n) {
	var users = [];

	for(var i = 0; i < n; i++) {
		var user = {
			username: "user"+i,
			password: fuzzy_string(10),
			email: "user"+i+"@example.com",
		}
		users.push(user);
	}
	return users;
}

module.exports = new Factory();
