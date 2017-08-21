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


dianji=function(){
	
	var video=document.getElementById("shipin");
	var bofang=document.getElementById("bofang");
	var anniu=document.getElementById("anniu");
	 if(video.pause()==true) {
      	video.play();
    	anniu.style.opacity="0";
    }else {
    	anniu.style.opacity="1";
        video.pause();
        
     }
//	return false;
}
//这个是ajax 查询电影表里的数据
$.post("/movieAction/selectdianying",{},function(result){
	var movies=result.movies;
	var table = document.getElementById("a");
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
        img.style.cssText=" width:150px;height:200px;margin-right:60px;margin-top:100px;float:left";
	}
},"json")


//下面是  ajax 查询场次里的数据
var url='/movieAction/selectFangYing';
var movieId=$("#dangqianmovieid").val();
var data={movieId:movieId};
$.post(url,data,function(result){
	var table = document.getElementById("a");
	 for(var j=0;j<result.dataCode.length;j++){
       	var trs = document.getElementsByTagName("tr");
			//给每一行添加id
			var tr = table.insertRow(trs.length);
		
			//在tr里 生成td  把数据添加到td中
			var td0 = tr.insertCell(0);
			td0.innerHTML =result.dataCode[j].time;
			
			var td1 = tr.insertCell(1);
			td1.innerHTML = "国语3D";

			var td2 = tr.insertCell(2);
			td2.innerHTML = result.dataCode[j].fangyingting;

			var td3 = tr.insertCell(3);
			td3.innerHTML = "宽松";

			var td4 = tr.insertCell(4);
			td4.innerHTML =result.dataCode[j].paice;
			
			var td5 = tr.insertCell(5);
			td5.innerHTML = "<a href='/movieAction/quXuanZuo' class='xuanZuoAnNiu'>选坐购票</a>";
       }
	
},"json")


      