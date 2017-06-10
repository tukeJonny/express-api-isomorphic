var log4js = require("log4js");

log4js.configure({
	"appenders": [{
		"category": "access",
		"type": "dateFile",
		"filename": "/tmp/api_mock_access.log",
		"pattern": "-yyyy-MM-dd"
	}, {
		"category": "app",
		"type": "dateFile",
		"filename": "/tmp/api_mock_system.log",
		"pattern": "-yyyy-MM-dd"
	}, {
		"category": "error",
		"type": "dateFile",
		"filename": "/tmp/api_mock_error.log",
		"pattern": "-yyyy-MM-dd"
	}, {
		"type": "console"
	}]
});

var logApp = log4js.getLogger("app");
exports.app = function(message) {
	logApp.info(message);
};

var logAccess = log4js.getLogger("access");
exports.access = log4js.connectLogger(log4js.getLogger("access"), {
	level: log4js.levels.INFO
});

var logError = log4js.getLogger("error");
exports.error = function(message) {
	logError.info(message);
};

