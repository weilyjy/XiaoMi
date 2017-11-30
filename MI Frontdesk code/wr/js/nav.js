define(["jquery"],function($){
	var nav = function(){
		function getNav(arr,wrappParent,wrap){
			var html='';
			for(var i=0;i<arr.length;i++){
			html+='<li><a href="#">'+arr[i]+'</a></li>';
			$(wrappParent).find(wrap).html(html);
			}
		}
//==============最上面的导航条=====================================		
		var Navarr1=['小米商城',"MIUI","米聊","游戏","多看阅读","云服务","金融","米币",
		"小米商城手机版","问题反馈","Select Region"];
		getNav(Navarr1,'#wr_nav1','.wr_nav1_ul1');
//===============logo右侧的导航条==================================		
		var Navarr2=['小米手机','红米','笔记本','电视','盒子','新品','路由器','智能硬件',
		'服务','社区'];
		$('.wr_nav2_ul').find('li a').each(function(item){
			$(this).html(Navarr2[item]);

		})
//======================hover上去之后产生不同的商品======================
$('.wr_nav2_ul').find('li').each(function(item){

	$(this).hover(function(){
		$(this).find('#wr_nav2_goods').css('display','block');
		var id=this.id;
		var _this=this;
		if(id!=''){
			$.ajax({
			url: "http://10.30.151.86/XiaoMi/servlet/ProductServlet?method=findByC2id&c2id="+id+"",
			type: "GET",
			success: function(res){
				var resData=JSON.parse(res);
				var homeHtml="";
				if (resData.content.length>6) {
				resData.content.length=6;
			}
				for(var i=0;i<resData.content.length;i++){
					homeHtml+='<li><img src='+resData.content[i].pimage.split('|')[0]+' alt=""><a href="#">'+resData.content[i].pname+'</a><span>'+resData.content[i].price+'</span></li>'
					$(_this).find('#wr_nav2_goods').html(homeHtml);
					}
									
				}
			})
		}		
	},function(){
		$(this).find('#wr_nav2_goods').css('display',"none");
		
	})
	
})
//========================轮播图=====================================================
function Carousel(){
 		 //代码初始化
        var size=$(".wr_img li").size();
        for (var i = 1; i <= size; i++) {
            var li="<li>"+"</li>";
            $(".num").append(li);
        };

        //手动控制轮播效果
        $(".wr_img li").eq(0).show();
        $(".num li").eq(0).addClass("active");
        $(".num li").mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            i=index;
            $(".wr_img li").eq(index).fadeIn(300).siblings().fadeOut(300);
        })

        //自动
        var i = 0;
        var t = setInterval(move, 1500);
        //核心向左的函数
        function moveLeft() {
            i--;
            if (i == -1) {
                  i = size-1;
            }
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
            $(".wr_img li").eq(i).fadeIn(300).siblings().fadeOut(300);

        }
        //核心向右的函数
        function move() {
            i++;
            if (i == size) {
                i = 0;
            }
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
            $(".wr_img li").eq(i).fadeIn(300).siblings().fadeOut(300);

        }
        //定时器的开始与结束
        $(".out").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(move, 1500)
        })
        //左边按钮的点击事件
        $(".out .left").click(function() {
            moveLeft();
        })
        //右边按钮的点击事件
        $(".out .right").click(function() {
            move();
        })
 	}
Carousel();


//=======================侧边导航栏目内部===========================
$('.sideNav_good').find('li').each(function(item){
	$(this).hover(function(){
		$(this).find('.sideNav_hideGoods').css('display','block');
		var id=this.id;
		var _this=this;
		// alert(id);
		$.ajax({
			url: "http://10.30.151.86/XiaoMi/servlet/ProductServlet?method=findByC2id&c2id="+id+"",
			type: "GET",
			success: function(res){
				var resData=JSON.parse(res);
				var homeHtml="";
				// alert(resData.content[0].pimage.split('|')[0]);
			if (resData.content.length>6) {
				resData.content.length=6;
			}
				for(var i=0;i<resData.content.length;i++){
					homeHtml+='<li><img src='+resData.content[i].pimage.split('|')[0]+' alt=""><a href="#">'+resData.content[i].pname+'</a><span>'+resData.content[i].price+'</span></li>'
					$(_this).find('.sideNav_hideGoods').html(homeHtml);
					}
									
				}
			})
	},function(){
		$(this).find('.sideNav_hideGoods').css('display','none');
	})
	
})				
								
//============================搜索框的实现===========================
$('#seachWorld').focus(function(){
	$('.keyWorld').css('display','block');
	$('.defalutKey').css('display','none');
	
		$('#kW_select').find('li').each(function(i){
			$(this).hover(function(){
				$(this).css('backgroundColor',"#fafafa");
				$(this).click(function(){
					$('#seachWorld').val($(this).find('a').html());
				})
			},function(){
				$(this).css('backgroundColor',"#fff");
			})
		})
	})
$('#seachWorld').blur(function(){
	$('.keyWorld').css('display','none');
	$('.defalutKey').css('display','block');
	
})

//==========================侧边导航栏========================
		$.ajax({
				url: "http://10.30.151.86/XiaoMi/servlet/CategoryServlet?method=findType",
				type: "GET",
				success: function(res){
					// alert(res);
					var resData=JSON.parse(res);
					$('.sideNav_good').find('li a').each(function(item){
						$(this).html(resData.content[item].cname);

					})
				}
			})
//======================小米单品===========================
	var Mihtml='';
	for(var i=0;i<10;i++){
		Mihtml+='<li><a href="../bx/details.html"><img src="http://i1.mifile.cn/a4/6ef55907-bbed-49be-a2bb-be0821b5f7b8" alt=""><h4>小米手环 2</h4><h6>4100mAh超长续航，多彩金属</h6><span>999元起</span></a></li>'
		$('#hot_goods').find('.hot_goodsUl').html(Mihtml);
	}

//======================================================================
//===============热品推荐滚动效果=====================================
	var curIndex=0;
	var timer=null;
	 timer=setInterval(function(){

			changeTo(curIndex);
		},6000);
	$('.hot_goodsUl').hover(function(){
		clearInterval(timer);
	},function(){
		 timer=setInterval(function(){

			changeTo(curIndex);
		},6000);
	})

	function changeTo(index){
			// alert(curIndex);
			
			if (curIndex==0) {
				$('.arrows').find('.hot_next').css('border-color','#BDBDBD').css('color','#BDBDBD');
				$('.arrows').find('.hot_pre').css('border-color','#EFEFEF').css('color','#EFEFEF');

				$('.hot_goodsUl').stop().animate({left:-1245,},500,'linear');
				curIndex=1;
			}else{
				$('.arrows').find('.hot_pre').css('border-color','#BDBDBD').css('color','#BDBDBD');;
				$('.arrows').find('.hot_next').css('border-color','#EFEFEF').css('color','#EFEFEF');

				$('.hot_goodsUl').stop().animate({left:0,},500,'linear');
				curIndex=0;
			}
			
		}

//=============左右箭头的click事件=============
	$('.arrows').find('.hot_pre').on('click',function(){
		$(this).css('border-color','#BDBDBD')
		$('.hot_goodsUl').stop().animate({
			left:-1245,
		},500,'linear')
	});
	$('.arrows').find('.hot_next').on('click',function(){
		// alert($('.hot_goodsUl').offset().left-10);
		if ($('.hot_goodsUl').offset().left==-1245) {
			$('.hot_goodsUl').stop().animate({
				left:0,
			},500,'linear')
		}

		
	})
//=======================ajax从后台获取商品==================================================
function ajaxGetgoods(wrap,id){

		$.ajax({
				url: "http://10.30.151.86/XiaoMi/servlet/ProductServlet?method=findByC2id&c2id="+id+"",
				type: "GET",
				success: function(res){
					var resData=JSON.parse(res);
					var homeHtml="";
					for(var i=0;i<8;i++){
						homeHtml+='<li><a href="../bx/details.html"><img src='+resData.content[i].pimage.split('|')[0]+' alt=""><h4>'+resData.content[i].pname+'</h4><h6>'+resData.content[i].pdesc+'</h6><span>'+resData.content[i].price+'</span></a>'
						homeHtml+='<p><a href="#"><span>用着很好。漂亮</span><br><span> 来自于 生活 的评价 </span></a></p></li>'
						$(wrap).html(homeHtml);
					}
					homeHtml+='<div><li><a href="#"><h4>浏览更多</h4><span>热门</span><span><i class="iconfont icon-youjiantou"><i></span></a></li></div>'	
					$(wrap).html(homeHtml);
									
				}
			})

}	


	
//==========================hover不同的菜单显示不同的商品============================	
	
//==============获得商品================	 
	function getProduct(wrapNav,wrap){
		$(wrapNav).find('a').each(function(item){
		$(this).hover(function(){
			$(this).css('color',"#FF6700").css('border-bottom',"2px solid#FF6700");
			$(this).siblings().css('color',"#757575").css('border-bottom',"none");
			var _this=this;
			ajaxGetgoods(wrap,_this.id);
		
		})
		
	 })

}
//家电
ajaxGetgoods('.wr_Appliances_ul',5);
getProduct(".wr_Appliances_nav p",".wr_Appliances_ul");

//智能
ajaxGetgoods('.wr_capacity_ul',19);
getProduct(".wr_capacity_nav p",".wr_capacity_ul");


// 搭配
ajaxGetgoods('.wr_match_ul',11);
getProduct(".wr_match_nav p",".wr_match_ul");

//配件
ajaxGetgoods('.wr_parts_ul',4);
getProduct(".wr_parts_nav p",".wr_parts_ul");
//周边
ajaxGetgoods('.wr_rim_ul',14);
getProduct(".wr_rim_nav p",".wr_rim_ul");

//=============为你推荐=================================	
	
var Rechtml='';
for(var i=0;i<10;i++){
	Rechtml+='<li><a href="../bx/details.html"><img src="http://i1.mifile.cn/a1/pms_1502962275.73995818!140x140.jpg" alt=""><h4>小米</h4><h6>4100mAh超长续航，多彩金属</h6><span>999元起</span></a></li>'
	$('#wr_rec_goods').find('.wr_rec_goods_ul').html(Rechtml);
}
    
  //=============左右箭头的click事件=============
	$('.arrows').find('.hot_pre').on('click',function(){
		$(this).css('border-color','#B0B1BA').siblings().css('border-color','#E0E0E0')
		$('.wr_rec_goods_ul').stop().animate({
			left:-1245,
		},500,'linear')
	});
	$('.arrows').find('.hot_next').on('click',function(){
		// alert($('.hot_goodsUl').offset().left-10);
		if ($('.wr_rec_goods_ul').offset().left==-1235) {
			$('.wr_rec_goods_ul').stop().animate({
				left:0,
			},500,'linear')
		}

		
	}) 
//===========================================
//
	function slider(){
		var num=1;
		$('#wr_divWarp').find('div').each(function(i){
			var _this = this;
			$(this).hover(function(){
				$(this).find('#wr_next').css('display','block');
				$(this).find('#wr_pre').css('display','block');
			},function(){
				$(this).find('#wr_next').css('display','none');
				$(this).find('#wr_pre').css('display','none');
			})
			$(this).find('#wr_next').click(function(){
				$(this).css('backgroundColor',"#8D8D8D");
				if (num>=4) {
					num=4;
					
				}else{
					var left=$(_this).find('#wr_wrap ul').offset().left;
					// $('#wr_wrap').find('ul').css('left',left-296);
					$(_this).find('#wr_wrap ul').stop().animate({
						left:left-296,
					},500)
					num++;
				}

			});
			$(this).find('span').hover(function(){
				$(this).css('backgroundColor',"#8D8D8D");
			},function(){
				$(this).css('backgroundColor',"#D9D9D9");
			});
			$(this).find('#wr_pre').click(function(){
				
				if (num<=1) {
					num=1
				}else{
					// alert(num);
					var left=$(_this).find('#wr_wrap ul').offset().left;
					$(_this).find('#wr_wrap ul').stop().animate({
						left:left+296,
					},500)
					num--;

				}
				
			})

		})
			
}
slider();
	
//=================================================
var arr=[{
			title:"雷军与斯塔克打造全面屏2.0",
			img:"/images/vedio1-1.jpg",
			desc:"一场关于小米MIX 2 极致工艺的巅峰对话",
			url:"http://v.mifile.cn/b2c-mimall-media/9e43087a3ac5525a33982a2da2ba2cff.mp4"

		},{
			title:"小米Note 3 与吴亦凡",
			desc:'看看小米Note 3 与吴亦凡谁更帅？',
			img:"/images/vedio3-3.png",
			url:"http://v.mifile.cn/b2c-mimall-media/d6f32c4087ec8a1466b72e58cdfa0625.mp4",
		},{
			title:"MIUI 9 理念视频",
			desc:'快如闪电，前所未有的流畅',
			img:"/images/vedio3-3.png",
			url:"http://v.mifile.cn/b2c-mimall-media/079803c78170eaf692d936eba3978cc1.mp4",
		},{
			title:"拍人更美的背后故事",
			desc:"小米手机工程师采访视频",
			img:"/images/vedio4.jpg",
			url:"http://v.mifile.cn/b2c-mimall-media/d0bf3d4892625ddb42836ff4d6d4af05.mp4",
		}];
		
	function video(){
			$('.wr_conent_ul').find('li').each(function(i){
				$(this).find('a span').click(function(){
					$('#vedio').css('display','block');
					$('#vedio').find('h3').html(arr[i].title);
					$('#vedio').find('img').attr('src',arr[i].img);
					$('#vedio').find('video').attr('src',arr[i].url);
					$('#vedio').find('#video_play').click(function(){
						// alert(1);
						$("#vedio").find('img').css('display',"none");
						$(this).css('display',"none");
						// $('#vedio').find('video').attr('controls','controls');
						// $('#vedio').find('video').attr('autoplay',"autoplay");
						// 
						var count=1;
						$('#vedio').find("video").click(function(){
							
							if (count==1) {
								$('#vedio').find('#video_play').css('display','block');
								count=0;
							}else{
								$('#vedio').find('#video_play').css('display','none');
								count=1;
							}
							

						});
						
					})
					$('#vedio').hover(function(){
						$('#vedio').find('img').css('display','none');
						$('#vedio').find('#video_play').css('display','none');
					})
					$('#vedio').find('#video_off').hover(function(){
						$(this).css('backgroundColor',"#ED0827").css('color','#fff');
						
						
						$(this).click(function(){
							$('#vedio').css('display','none');
						})
					},function(){
							$(this).css('backgroundColor',"#F5F5F5").css('color','#B0B0B0');
					})
					
				})
			})	

			}
	video();	 
//	 	 	 
//=====================热评产品=====================================
	var hotCommentArr = [{
			url:"http://i1.mifile.cn/a4/8949026b-fa9a-4370-989b-5d5e2f149106",
			title:'智米全直流变频空调',
			desc:'一级能效，强劲冷暖',
			price:'4399元',
			comment:'安装简洁方便，信号不错！！！！！',

		},{
			url:"http://i1.mifile.cn/a4/3c77fe32-1113-482d-91b1-9c01a079cce6",
			title:'智米全直流变频空调',
			desc:'一级能效，强劲冷暖',
			price:'4399元',
			comment:'刚收到，外观很漂亮，颜色也很喜欢，等了好长时间了，终于拿到了，非常满意，棒棒哒！！！',
		},{
			url:"http://i1.mifile.cn/a4/aa6b038a-2946-4549-acff-17c58e701556",
			title:'智米全直流变频空调',
			desc:'一级能效，强劲冷暖',
			price:'4399元',
			comment:'东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...',
		},{
			url:"http://i1.mifile.cn/a4/54e35fdd-bc68-4a89-bad7-c9c3bb2fc6fe",
			title:'智米全直流变频空调',
			desc:'一级能效，强劲冷暖',
			price:'4399元',
			comment:'包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...',
	}]; 
	var hotHtml='';
for(var i=0;i<hotCommentArr.length;i++){

	hotHtml+='<li><a href="#"><img src="'+hotCommentArr[i].url+'" alt=""><h6>'+hotCommentArr[i].comment+'</h6><h4> 来自于 追逆 的评价 </h4><span>'+hotCommentArr[i].title+'|</span><span>999元起</span></a></li>';
	$('.wr_hot_comment_ul').html(hotHtml);

}		    

    
  };
  return {
			nav:nav,
		};
})



