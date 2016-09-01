// var fs 		 = require("fs");

// // readFile './layout/home.html': 비동기. 싱크를 맞출 필요가 없다. 
// // 동기 : 순서가 필요하다. 
// function home(req, res) {
// 	if (req.url == "/") {
// 		fs.readFile("./layout/home.html", function(err, data){
// 			res.write(data);
// 			res.end();
// 		}); 
// 	}
// }

// function detail(req, res) {
// 	var detailId = req.url.replace("/", "");
// 	if ( detailId.length > 0 ) {
// 		res.write(detailId);
// 		res.end();
// 	}
// }

// module.exports.home = home;
// module.exports.detail = detail;


//ex2.
var fs 		 = require("fs");
var renderer = require("./renderer");

// readFile './layout/home.html': 비동기. 싱크를 맞출 필요가 없다. 
// 동기 : 순서가 필요하다. 
function home(req, res) {
	if (req.url == "/") {
		return renderer(req, res, "home", {});
	}
}

function contact(req, res) {
	if (req.url == "/contact") {
		return renderer(req, res, "contack", {});
	}
}

function detail(req, res) {
	var detailId = req.url.replace("/", "");
	if ( detailId.length > 0 ) {
		res.write(detailId);
		res.end();
	}
}

module.exports.home = home;
module.exports.detail = detail;
module.exports.contact = contact;
