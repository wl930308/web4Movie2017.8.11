require("../css/xiangQing.css");
require("jquery");
require("bootstrap");
require("bootstrap-loader");



$("#qieHuanImg_span").on('click',function(){
	$("#jianjie1").css('display','none'); 
	$("#jianjie2").css('display','block'); 
})
$("#hui").on('click',function(){
	$("#jianjie1").css('display','block'); 
	$("#jianjie2").css('display','none'); 
})


var gq=$("#bofang").click(function(){
var video=document.getElementById("shipin")
var bofang=document.getElementById("bofang")
var anniu=document.getElementById("anniu")
	 if(video.paused) {
      	video.play();
    	anniu.style.opacity="0";
    }else {
    	anniu.style.opacity="1";
        video.pause();
        
     }
	return false;
})
var movieId="<%=movies.movie_id%>";
//alert(movieId)
//$.post("/xiangQingAction/selectChangCi",{movieId:movieId},function(result){
//	
//},"json")
$.post("/indexAction/selectMovies",{},function(result){
	var movies=result.movies
	for(var i=0;i<movies.length;i++){
		//获取div  
        var div = document.getElementById("jianjie2");  
        //添加小div
        var div2=document.createElement("div");
        //把小div放在div中
        div.appendChild(div2);
        //在div2中添加id
        div2.style.cssText="margin-left:280px"
        div2.setAttribute('id',movies[i].movie_id);
        //创建a标签
        var a=document.createElement("a");
        //把a标签放在div2中
        div2.appendChild(a);
        //给a标签动态添加属性
        a.setAttribute('href','/movieAction/xiangQingPage?id='+movies[i].movie_id);
        //创建img标签
        var img=document.createElement("img");
        //把img标签放在a标签中
        a.appendChild(img);
        //给img标签动态添加属性
        img.setAttribute('src',movies[i].movie_photo);
        //修改img标签样式
        img.style.cssText=" width:150px;height:200px;margin-right:60px;margin-top:100px;float:left"
	}
},"json")
