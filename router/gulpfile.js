// ex1. gulp task 등록
// var gulp = require("gulp");

// // hello라는 gulp task를 등록
// gulp.task("hello", function () {
//     return console.log("hello gulpworld");
// });


// ex2. 기본값 설정 
// var gulp = require("gulp");
// //hello라는 gulp task를 등록
// gulp.task("hello", function () {
// 	return console.log("hello gulpworld");
// });

// gulp.task("default", ["hello"]);


// ex3. 우선순서 
// gulpworld task로 가서 hello task로 가라. 
// var gulp = require("gulp");

// gulp.task("hello", function() {
// 	return console.log("hello")
// });

// gulp.task("gulpworld", ["hello"], function() {
// 	return console.log("gulpworld");
// });

// gulp.task("default", ["gulpworld"]);


// ex4. Minify(uglify)
var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("uglify", function(){
	return gulp.src("public/src/js/*.js").pipe(uglify()).pipe(gulp.dest("public/dist/js"));
});

gulp.task("default", ["uglify"]);









