var fs = require("fs");

function home(req, res) {
	if (req.url == "/") {
		fs.readFile("./layout/home.html", function(err, data){
			res.write(data);
			res.end();
		}); //readFile 비동기. 싱크를 맞출수 없다.
	}
}

function detail(req, res) {
	var detail = req.url.replace("/", "");
	if ( detail.length > 0 ) {
		res.write(detailId);
		res.end();
	}
}

module.exports.home = home;
module.exports.detail = detail;
