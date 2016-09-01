//ex1.
// var http = require("http");
// // 라우터를 가져온다
// var router = require("./router");

// var app = http.createServer(function(req, res){
// 	console.log(req.url); //요청받는 url를 받는다.

// 	// router 내용 if 2개
// 	if (req.url == "/") {
// 		res.write("home");
// 		res.end(); //항상end로 닫아줘야하다.
// 	}

// 	var detailId = req.url.replace("/", ""); // 요청받은 '/' 앞에는 다 지워라.
// 	if ( detailId > 0 ) {
// 		res.write(detailId);
// 		res.end();
// 	}

// 	router.home(req, res);
// 	router.detail(req, res);
// }).listen(3030);

// console.log("Server is running at localhost:3030");

//ex2. router.js 파일 만든 후 소스 수정
var http = require("http");
// 라우터를 가져온다
var router = require("./router"); // './' : root

var app = http.createServer(function(req, res){
	console.log(req.url); //요청받는 url를 받는다.
	router.home(req, res);
	router.detail(req, res);
	router.contact(req, res);

});

app.listen(3030, function (){
	console.log("Server is running at localhost:3030");
});














