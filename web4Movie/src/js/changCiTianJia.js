require("jquery");
require("../css/changCiTianJia.css");
require("bootstrap");
require("bootstrap-loader");

var url = "/changciAction/selectMovieId";
var data = {};
$.post(url, data, function(result) {

	var sel = document.getElementById("movieIdXiaLa");
	var dianyingming = document.getElementById("dianyingming");
	for(var i = 0; i < result.jieGuo.length; i++) {
		console.log(result.jieGuo[i].movie_name);
		var option = document.createElement("option");
		option.innerHTML = "电影名:" + "<span>" + result.jieGuo[i].movie_name + "</span>" + "-------" + "电影id:" + result.jieGuo[i].movie_id;
		sel.appendChild(option);
	}
}, "json");

var movieNews = [];
xuanMovie = function() {
	movieNews = [];
	var opt = $("#movieIdXiaLa").val();
	var aa = opt.split(":");
	var movie_news = aa[aa.length - 1];
	movieNews.push(movie_news);
}

tijiao = function() {
	if(movieNews == "") {
		alert("请选择要添加的电影")
	} else {
		console.log(movieNews);
		var url="/changciAction/insertChangCi";
		var data={movieNews:movieNews[0]};
		$.post(url,data,function(result){
			location.href="changciList";	
		},"json")
	}

}