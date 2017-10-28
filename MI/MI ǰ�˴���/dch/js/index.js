$(function(){
	
	//实现头部的点击下拉与上升
	$("#DCH_head").find(".DCH_top_center").eq(0).find("p").eq(1).hide();
	$("#DCH_head").find(".DCH_top_right").eq(0).click(function(){
		$("#DCH_head").find(".DCH_top_center").eq(0).find("p").eq(1).slideToggle();
	})
	//变色(动画无法实现)
	$("#DCH_goodsshell").find(".DCH_goodshead").find("p").eq(0).on("mousedown","a",function(){
		$("#DCH_goodsshell").find(".DCH_goodshead").find("p").eq(0).find("a").attr("class","chcolor");
		$(this).attr("class","keepcolor");
		$("#DCH_goodsshell").find(".DCH_goodshead").find("a").css("color","#424242");
		$(this).css("color","#FF672D")
	})
	$("#DCH_goodsshell").find(".DCH_goodshead").on("mouseenter","a",function(){
		$("#DCH_goodsshell").find(".DCH_goodshead").find("a").css("color","#424242")
		$("#DCH_goodsshell").find(".DCH_goodshead").find(".keepcolor").css("color","#FF672D");
		$(this).css("color","#FF672D")
	}).mouseleave(function(){
		$("#DCH_goodsshell").find(".DCH_goodshead").find("a").css("color","#424242")
		$("#DCH_goodsshell").find(".DCH_goodshead").find(".keepcolor").css("color","#FF672D");
	})
	//加载商品
	createGoods(0,16);
	//点击数字切换页面
	$("#skip").find(".serial").eq(0).css("background","#757575");
	$("#skip").find(".serial").eq(0).css("color","#fff");
	//点击事件
	$("#skip").on("click",".serial",function(){
		if($(this).html() == 1){
			$("#skip").find('a').css("background","#F5F5F5");
			$("#skip").find('a').css("color","#B0B0B0");
			$(this).css("background","#757575");
			$(this).css("color","#fff");
			$("#goods").html("");
			createGoods(0,16);

		}else{
			$("#skip").find('a').css("background","#F5F5F5");
			$("#skip").find('a').css("color","#B0B0B0");
			$(this).css("background","#757575");
			$(this).css("color","#fff");
			$("#goods").html("");
			createGoods(16,20);
			
		}
		return false;
	})
	carousel();
	$("#cir").on("click","p",function(){
		$("#cir").find("p").attr("class","beforeshow");
		$(this).attr("class","show");
		if($(this).attr("name") == "1"){
			$("#DCH_imgshell").stop().animate({left:"0px"})
		}else if($(this).attr("name") == "2"){
			$("#DCH_imgshell").stop().animate({left:"-1200px"})
		}
		
	})
	//购物车
	
	$("#DCH_imgshell").on("mouseenter",".imageshell",function(){
		$(this).find(".shopcar").eq(0).css("opacity","1");
		$(this).find(".shopcar").eq(0).css("border","1px solid #ff6700");
		$(this).find(".shopcar").eq(0).css("color","#ff6700")
		$(this).on("mouseenter",".shopcar",function(){
			$(this).css("background","#ff6700");
			$(this).css("color","#fff");
		})
		$(this).on("mouseleave",".shopcar",function(){
			$(this).css("background","#fff");
			$(this).css("color","#000");
		})
	})
	$("#DCH_imgshell").on("mouseleave",".imageshell",function(){
		$(this).find(".shopcar").eq(0).css("opacity","0");
		$(this).find(".shopcar").eq(0).css("border","1px solid #fff");
	})

	//购物车
	shoppingCar()

})	

//显示商品,num1为开始查询的范围，num2为结束的位置
function createGoods(num1,num2){
	$.ajax({
		method:"get",
		url:"../data/goods.json",
		
		success:function(data){
			var html0 = ""
			for(var k =num1; k < num2; k++){
				var html ='<div class = "imageshell">'
				var html1 = '<div class = "big">';
				var html2 = '<div class = "small">';
				for(var i = 0 ; i < data.length; i++){
				
					for(var j = 0; j < data[i].image.length; j++){
						html1 += '<img src = "'+data[i].image[j].img+'" class = "'+j+'"/>'
						html2 += '<img src = "'+data[i].image[j].img+'" class = "'+j+'"/>'
					}
					html1 += '</div>'
					html2 += '</div>'
					if((k % 5 == 0 || k % 3 == 0) && k != 0 ){
						if(k % 3 != 0){
							html += html1 + html2+'<span>'+data[i].title+'</span><span>'+data[i].price+'</span><div class = "like"><p><span>♡</span><span>喜欢</span></p><p><span>购物车</span><span><img src = "../image/cart10.png"/></span></p></div><span class = "sales">特惠九折</span><span class = "Pinkage">包邮</span></div>';	
						}else{
							if(k == 12){
								html += html1 + html2+'<span>'+data[i].title+'</span><span>'+data[i].price+'</span><div class = "like"><p><span>♡</span><span>喜欢</span></p><p><span>购物车</span><span><img src = "../image/cart10.png"/></span></p></div><span class = "Pinkage2">包邮</span></div>';	

							}else{
							html += html1 + html2+'<span>'+data[i].title+'</span><span>'+data[i].price+'</span><div class = "like"><p><span>♡</span><span>喜欢</span></p><p><span>购物车</span><span><img src = "../image/cart10.png"/></span></p></div><span class = "sales">特惠九折</span></div>';	
							}
						}
					}else{
						if(k % 7 == 0){
							html += html1 + html2+'<span>'+data[i].title+'</span><span>'+data[i].price+'</span><div class = "like"><p><span>♡</span><span>喜欢</span></p><p><span>购物车</span><span><img src = "../image/cart10.png"/></span></p></div><span class = "Pinkage1">新品</span></div>';	
						}else{
						html += html1 + html2+'<span>'+data[i].title+'</span><span>'+data[i].price+'</span><div class = "like"><p><span>♡</span><span>喜欢</span></p><p><span>购物车</span><span><img src = "../image/cart10.png"/></span></p></div></div>';
						}
					}
					
				}
				html0 += html;
			
			}	
			$("#goods").html(html0);
		}
	})
	$("#goods").find(".imageshell").css("float","left");
	$("#goods").on("mouseenter",".small",function(){
		
		$(this).on("mouseenter","img",function(){
			$(this).parent().parent().find(".big").find("img").css("display","none");
			var i = $(this).attr("class");
			$(this).parent().parent().find(".big").find("."+i+"").css("display","block");
			$(this).css("border","1px solid red");
		})
	})
	$("#goods").on("mouseleave",".small img",function(){

		$("#goods").find(".imageshell").find(".small").find("img").css("border","1px solid #E0E0E0")

	})
	//货物的移入移除事件
	
	$("#goods").find(".imageshell").find("span").css("display","none")
	$("#goods").on("mouseenter",".imageshell",function(){
		
		$(this).css("box-shadow"," 0px 3px 10px #888888")
		$(this).find(".like").find("p").eq(0).find("span").eq(0).css("display","block");
		$(this).find(".like").find("p").eq(1).find("span").eq(1).css("display","block");
		$(this).find(".like").find("p").eq(1).find("span").eq(1).mouseenter(function(){

			$(this).siblings().css("display","block");
		}).mouseleave(function(){
			$(this).siblings().css("display","none");
		})
		$(this).find(".like").find("p").eq(0).find("span").eq(0).mouseenter(function(){
			var isYes = true;
			$(this).mousedown(function(){
				 
				if(isYes){
					$(this).css("color","red");
					isYes = !(isYes)
				}else{
					$(this).css("color","#99999C");
					isYes = !(isYes)
				}

				
			})
				
			$(this).siblings().css("display","block");
		}).mouseleave(function(){
			$(this).siblings().css("display","none");
		})
	})
	$("#goods").on("mouseleave",".imageshell",function(){
		$(this).css("box-shadow"," 0px 0px 0px #888888")
		$(this).find(".like").find("p").eq(0).find("span").eq(0).css("display","none");
		$(this).find(".like").find("p").eq(1).find("span").eq(1).css("display","none");
	})
	//进行商品的筛选,点击新品将新品显示出来
	$("#newgoods").click(function(){
		$("#goods").find(".imageshell").css("display","none");
		$("#goods").find(".imageshell").find(".Pinkage1").parents().css("display","block");
		/*$("#goods").find(".imageshell").find(".Pinkage1").parents().css("display","block");*/
		$("#goods").find(".imageshell").css("float","left");
		$("#goods").css("overflow","hidden")
		/*$("#goods").find(".imageshell").find(".Pinkage1").css("float","left")*/
	})
	//点击推荐将商品恢复原样
	$("#renew").click(function(){
		$("#goods").find(".imageshell").css("display","block");
	})
	//特惠商品的显示
	var isShow = true;
	$("#preference").click(function(){
		/*alert(isShow)*/
		if(isShow){
			$("#goods").find(".imageshell").css("display","none");
			$("#goods").find(".imageshell").find(".sales").parents().css("display","block");
			$("#goods").find(".imageshell").css("float","left");
			$("#goods").css("overflow","hidden")
			isShow = !(isShow)
		}else{
			$("#goods").find(".imageshell").css("display","block");
			isShow = !(isShow)
		}
		
	})
}

//轮播图部分
function carousel(){
	$.ajax({
		url:"../data/json.json",
		method:"get",
		success:function(data){
				var html0 = ""
				/*alert(data)*/
				for(var i = 0; i < data.length; i++){
					
					for(var j = 0; j < data[i].content.length; j++){

						var html ='<div class = "imageshell" >'
						var html1 = '<div class = "big">';
						var html2 = '<div class = "small">';
						var sImg = data[i].content[j].pimage;

						arrImg = sImg.split("|")
							html1 += '<img src = "'+arrImg[0]+'"/>'
						html1 += '</div>'
						html2 += '</div>'
						html += html1 + html2+'<span>'+data[i].content[j].pname+'</span><span>'+data[i].content[j].price+'</span><div class = "like"><p><span>♡</span><span>喜欢</span></p><p><span class = "shopcar" name ="'+data[i].content[j].pid+'">加入购物车</span></p></div></div>';
						html0 += html;

					}	
				}
				html0 += html0;
				$("#DCH_imgshell").html(html0);
		}
	})
	
}
//加入购物车
function shoppingCar(){
	var num = 0;
	$("#DCH_imgshell").on("mouseenter",".imageshell",function(){
		$(this).on("click",".shopcar",function(){
			//得到商品的id
			var html = ""
			var oId = $(this).attr("name");
			var j = 0;
			if($.cookie("goods") == null){
				$.cookie("goods",'[{"id":'+oId+',"num":"1"}]')
				/*alert($.cookie("goods"));*/
				num++;
			}else{
				var arr = eval($.cookie("goods"))
				var isYes = hasSame(arr,oId);
				if(isYes === "a"){
					var arr1 = {"id":oId,num:1}
					arr.push(arr1)
					$.cookie("goods",JSON.stringify(arr));
					num++;
					alert("成功加入购物车！")
				}else{
					var i = hasSame(arr,oId)
					num++;
					j = arr[i].num;
					j++;
					arr[i].num = j;
					$.cookie("goods",JSON.stringify(arr),{expires: 7});
					alert("成功加入购物车！")
					
				}

			}
		})
	})
}
function hasSame(arr,num){

	for(var i = 0; i < arr.length;i++){
		if(arr[i].id == num){
			return i;
		}else{

		}
		
	}
	return "a";
}
