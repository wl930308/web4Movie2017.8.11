require("../css/index.css");
require("jquery");
require("bootstrap");
require("bootstrap-loader");
require("swiper/dist/css/swiper.css");
require("swiper/dist/js/swiper.jquery.js");

$.post("/indexAction/selectMovies",{},function(result){
	var movies=result.movies
	for(var i=0;i<movies.length;i++){
		//获取div  
        var div = document.getElementById("movie_for");  
        //添加小div
        var div2=document.createElement("div");
        //把小div放在div中
        div.appendChild(div2);
        //在div2中添加id
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
        img.style.width="165px";
        img.style.height="215px";
        //获取p标签
        var p=document.createElement("p");
        //把p标签放在div2中
        div2.appendChild(p);
        //动态给p标签添加class
        p.setAttribute('class','xuanZuoGouPiao');
		//修改p样式
        p.style.cssText="width:165px;background-color:#EB002A;color:#FFFFFF;font-size:12px;padding-top:17px;padding-bottom: 10px;margin: 0px;box-sizing: border-box;text-align:center;margin-top:-6px";
        //
        var a1=document.createElement("a");
        p.appendChild(a1);
        a1.setAttribute('href','#');
        a1.setAttribute('class','anNiuYanSe');
        a1.style.cssText="color:#fff;text-decoration: none"
        a1.innerHTML="选座购票";
	}
},"json")

var s1=new Swiper("#lunBo1",{
			autoplay:2000,
			loop:true,//反向循环
			direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
			autoplayDisableOnInteraction:false,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
//			autoplayStopOnLast:true, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
			grabCursor:true,  //当鼠标覆盖到swiper上时,指针变成手掌形状  拖动时变成抓手  默认值是false
			slidesPerView:1 ,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
			slidesPerGroup:1,//设置可以同时划过几个		
			initialSlide:1,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
			speed:1000, //滑块自动滑动的开始到结束时间
			//下面是分页器
			pagination:'#pag1',//分页器
			paginationType:'bullets',//设置分页器样式'bullets'圆点(默认样式) 'fraction' 分式 progress 进度条
			paginationClickable:false,//分页器是否可以点击默认false不可以点击
			//设置左右按钮
			prevButton:'#prevBtn',
			nextButton:'#nextBtn',
			//轮廓样式
			effect:'coverflow',
			slidesPerView:1,//设置可以同时显示的滑块的数量 可以是number(数) auto(自动根据swiper的宽度显示多少块)
			//flip表示翻转     fade表示淡入  cube表示3D翻转
			//coverflow表示多边轮播一般配合slidesPerView:3和centeredSlides:true 使用
		});
		var lunbo=document.getElementById("lunBo1");
		lunbo.onmouseover=function(){
			var zuojiantou=document.getElementById("prevBtn");
			var youjiantou=document.getElementById("nextBtn");
			zuojiantou.style.display="block";
			youjiantou.style.display="block";
		};
		lunbo.onmouseout=function(){
			var zuojiantou=document.getElementById("prevBtn");
			var youjiantou=document.getElementById("nextBtn");
			zuojiantou.style.display="none";
			youjiantou.style.display="none";
		}
		
		