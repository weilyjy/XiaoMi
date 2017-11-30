/*管理项目的*/


var gulp = require("gulp");
//通过gulp对象发布任务
//
//
//
gulp.task("hello",function(){
	console.log("hello");
})

gulp.task("watch",function(){
	gulp.watch("index,html",["copy-index"])
})



var connect  = require("gulp-connect");

gulp.task("sever",function(){
		connect.sever({
			root:"dist"//声明服务器的根目录
		})
})

















