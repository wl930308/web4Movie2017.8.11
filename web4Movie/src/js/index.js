require("../css/index.css");
//require("../css/swiper-3.4.0.min.css");

//监听socket传来的信息
require("jquery");
require("bootstrap");
require("bootstrap-loader");
require("swiper/dist/css/swiper.css");
require("swiper/dist/js/swiper.jquery.js")

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
		})
		var lunbo=document.getElementById("lunBo1");
		lunbo.onmouseover=function(){
			var zuojiantou=document.getElementById("prevBtn");
			var youjiantou=document.getElementById("nextBtn");
			zuojiantou.style.display="block";
			youjiantou.style.display="block";
		}
		lunbo.onmouseout=function(){
			var zuojiantou=document.getElementById("prevBtn");
			var youjiantou=document.getElementById("nextBtn");
			zuojiantou.style.display="none";
			youjiantou.style.display="none";
		}
		
		onload=function(){
            var dx=document.getElementById("dx");
            var dxdx=document.getElementById("dxdx");
            var a=dx.getElementsByTagName("a");
            var imgs=dxdx.getElementsByTagName("img");
            var last = 0;
            for(var i=0;i<a.length;i++){
                (function(i){
                    a[i].onmouseover=function(){
                        imgs[last].style.display="none";
                        imgs[i].style.display="block";
                        last=i;
                    }
                })(i);
            }
        }