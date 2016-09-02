// var express = require('express');
// var app = express();

// var http = require('http').Server(app);
// app.set("port", process.env.PORT || 3030);

// app.get("/", function(req, res){
//    res.type("text/plain");
//    res.send("This is chat server");
// });

// http.listen(app.get("port"), function(){
//    console.log("Express chat server running at localhoat:" + app.get("port"));
// });

// // http.listen(3030);


//ex2. socket.io 설정 - 
// var express = require('express');


// var app = express();

// var http = require('http').Server(app);
// var io = require("socket.io")(http);

// app.set("port", process.env.PORT || 3030);

// app.get("/", function(req, res){
//    res.sendFile(__dirname + "/views/index.html");
// });

// io.on("connection", function(socket) {
// 	// console.log("a user connected.");
// 	socket.on("disconnect", function() {
// 		console.log("user disconnected.");
// 	});
// });

// http.listen(app.get("port"), function(){
//    console.log("Express chat server running at localhoat:" + app.get("port"));
// });


//ex3. 체팅창에 입력한 내용이 출력 
// var express = require('express');
// var app = express();

// var http = require('http').Server(app);
// var io = require("socket.io")(http);

// app.set("port", process.env.PORT || 3030);

// app.get("/", function(req, res){
//    res.sendFile(__dirname + "/views/index.html");
// });

// io.on("connection", function(socket) {
// 	socket.on("chat message", function(msg) {
// 		console.log("message: " + msg); // 체팅창에 입력한 내용이 출력 
// 	});
// });

// http.listen(app.get("port"), function(){
//    console.log("Express chat server running at localhoat:" + app.get("port"));
// });

//ex4. 화면에 표출
var express = require("express");
var app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http); // http를 이용하여 소켓통신

app.set("port", process.env.PORT || 8080);

app.get("/", function(req, res){
   res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function(socket){ 
   socket.on("chat message", function(msg){ // "chat message" : 약속어
       // console.log("message:" + msg);
       io.emit("chat message", msg);
   });
});

http.listen(app.get("port"), function(){
   console.log("Express chat server is running at localhost:" + app.get("port"));
});










