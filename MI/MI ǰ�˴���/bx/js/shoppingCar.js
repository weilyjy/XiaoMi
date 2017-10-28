$(function(){
	//设置一个全局变量，改变两代表结算总金额    全局变量 共多少件商品 选中多少件商品
	var settleAmount = 0, goodsNum = 0, chooseNum = 0; 

	// if(settleAmount == 0){
	// 	$("#goToCount").find(".clickreminder").css("display","block");
	// 	$("#goToCount").css("backgroundColor","#e0e0e0");
	// 	$("#goToCount").css("color","#b0b0b0");
	// }else{
	// 	$("#goToCount").find(".clickreminder").css("display","none");
	// 	$("#goToCount").css("backgroundColor","#ff6700");
	// 	$("#goToCount").css("color","#ffffff");
	// }

	//顶部小米logo更换动画
	$("#logoChange").hover(function(){
		$(this).find("a").stop().animate({
			left:0
		},150)
	},function(){
		$(this).find("a").stop().animate({
			left:-49
		},150)
	});

	//立即登录按钮  移入颜色加深  lhn_loginImde
	$("#lhn_loginImde").hover(function(){
		$(this).css("backgroundColor","#ff4500");
	},function(){
		$(this).css("backgroundColor","#ff6700");
	});

	//为您推荐部分  推荐内容下载
	$.ajax({
		url:"data/goods.json",
		method:"get",
		success:function(data){
			var html = '';
			for(var i = 0; i < 20; i ++){
				html += '<li><a href = "#"><img src = "https://i1.mifile.cn/a1/pms_1502962275.73995818!140x140.jpg"/></a><p class = "title"><a href = "#" class = "title_span">' + data[19].title + '暗示的如果他人</a></p><p class = "price">' + data[19].price.substring(1) + "元"  + '</p><span class = "remark">2万人好评</span><div class = "joinincar">加入购物车</div></li>';
			}
			$("#contentOfRecommend").html(html);
		}
	})


	//为您推荐部分 ，进入商品显示加入购物车按钮  进入购物车按钮 更换别的颜色
	$("#contentOfRecommend").on("mouseenter","li",function(){
		$(this).find(".joinincar").css("display","block");
		$(this).find(".joinincar").hover(function(){
			$(this).css("backgroundColor","#ff6700");
			$(this).css("color","#ffffff");
		},function(){
			$(this).css("backgroundColor","#ffffff");
			$(this).css("color","#ff6700");
		});
	})
	$("#contentOfRecommend").on("mouseleave","li",function(){
		$(this).find(".joinincar").css("display","none");
	})
	//	全选按钮未选中时，加一个标志
	$(".chooseAll").attr("ischecked","false");

	//购物车商品初始化
	$.ajax({
		url:"../data/goods.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i = 17 ; i < 19; i ++){
				html += '<li class = "first"><b class = "choosegood"><i class = "iconfont icon-duihao"></i></b><strong class = "goodPic"><img src = "' + data[i].img +'"/></strong><span class = "title">' +data[i].title + '</span><span class = "price">' + data[i].price.substring(1) + '元</span><div class = "changeOfNum"><span class = "substract">-</span><span class = "numofgoods">1</span><span class = "add">+</span></div><span class  = "countofgood">'+  data[i].price.substring(1) +'元</span><span class = "delete" id = "'+ data[i].goodsId + '">x</span><ul id = "'+'id'+ data[i].goodsId + '"></ul></li>';
			}
			$("#commodity").html(html);
			$("#commodity").find(".choosegood").attr("ischecked","false");
				//共多少件商品初始化
			for(var i = 0 ; i < $("#commodity").find("li").size(); i ++){
				goodsNum += parseInt($("#commodity").find("li").eq(i).find(".numofgoods").html());
			}
			$("#numofAll").html(goodsNum);
		}
	})


	//点击加价购加号按钮，向购物车添加商品
	// $("#addPrice").on("click",".icon-iconjia",function(){
	// 	var html = '';
	// 	$.ajax({
	// 		url:"../data/goods.json",
	// 		method:"get",
	// 		success:function(data){
	// 			for(var i = 0 ; i < 2; i++){
	// 				html += '<li class = "second"><i class = "arrow"></i><strong class = "goodPicone"><img src = "' + "https://i1.mifile.cn/a1/pms_1506500032.85218459!140x140.jpg" +'"/></strong><div><p class = "addBuy">加价购</p><span class = "titleone">' +"小米一体织轻薄羽绒服 男款 黑色 S" + '</span></div><span class = "priceone">' + data[i].price.substring(1) + '元</span><span class = "numofgoodsone">1</span><span class  = "countofgoodone">299元</span><span class = "deleteone">x</span></li>';
	// 			}
				
	// 			$("#commodity").find("#id172").html(html);
	// 		}
	// 	})
	// })


	//移入checkbox选框,出现对号选中之后不能再出现对号  
	$(".chooseAll").hover(function(){
		if($(this).attr("ischecked") == "false"){
			$(this).find(".icon-duihao").css("display","inline-block");
		}
	},function(){
		if($(this).attr("ischecked") == "false"){
			$(this).find(".icon-duihao").css("display","none");
		}
	});

	$("#commodity").on("mouseenter",".choosegood",function(){
		if($(this).attr("ischecked")=="false"){
			$(this).find(".icon-duihao").css("display","inline-block");
		}
	})
	$("#commodity").on("mouseleave",".choosegood",function(){
		if($(this).attr("ischecked")=="false"){
			$(this).find(".icon-duihao").css("display","none");
		}
	})

	//点击checkbox全选选择框  选中和取消选中
	$(".chooseAll").click(function(){
		var html = "",speciallog = 0;
		var oLisLen = $("#commodity").find("li");
		if($(this).attr("ischecked") == "false"){
			$(this).attr("ischecked","true");
			$(this).find(".icon-duihao").css("display","inline-block");
			$(this).css("backgroundColor","#ff6700");
			$(this).find(".icon-duihao").css("color","#ffffff");
			$(this).css("border","1px solid #ff6700");
			//全选按钮
			for(var i= 0; i <oLisLen.size(); i++ ){
				if(oLisLen.eq(i).find(".choosegood").attr("ischecked") == "false"){
					oLisLen.eq(i).find(".choosegood").attr("ischecked","true");
					oLisLen.eq(i).find(".choosegood").find(".icon-duihao").css("display","inline-block");
					oLisLen.eq(i).find(".choosegood").css("backgroundColor","#ff6700");
					oLisLen.eq(i).find(".choosegood").find(".icon-duihao").css("color","#ffffff");
					oLisLen.eq(i).find(".choosegood").css("border","1px solid #ff6700");
					settleAmount += parseInt(oLisLen.eq(i).find(".countofgood").html());
					$("#settleAmount").html(settleAmount);

					speciallog = oLisLen.eq(i).find(".delete").attr("id");
					html = '<li class = "' + speciallog + '"><i class = "iconfont icon-iconjia"></i><span>+25元的小米活塞耳机 清新版 25元</span></li>';
					$("#addPrice").append(html);


					if(settleAmount == 0){
						$("#goToCount").find(".clickreminder").css("display","block");
						$("#goToCount").css("backgroundColor","#e0e0e0");
						$("#goToCount").css("color","#b0b0b0");
					}else{
						$("#goToCount").find(".clickreminder").css("display","none");
						$("#goToCount").css("backgroundColor","#ff6700");
						$("#goToCount").css("color","#ffffff");
					}
				}
			}

			//选中多少件商品
			chooseNum = goodsNum;
			$("#hasChoose").html(chooseNum);


		}else{
			$(this).attr("ischecked","false");
			$(this).find(".icon-duihao").css("display","none");
			$(this).css("backgroundColor","#ffffff");
			$(this).find(".icon-duihao").css("color","#424242");
			$(this).css("border","1px solid #e0e0e0");
			for(var i= 0; i <oLisLen.size(); i++ ){
				if(oLisLen.eq(i).find(".choosegood").attr("ischecked") == "true"){
					oLisLen.eq(i).find(".choosegood").attr("ischecked","false");
					oLisLen.eq(i).find(".choosegood").find(".icon-duihao").css("display","none");
					oLisLen.eq(i).find(".choosegood").css("backgroundColor","#ffffff");
					oLisLen.eq(i).find(".choosegood").find(".icon-duihao").css("color","#424242");
					oLisLen.eq(i).find(".choosegood").css("border","1px solid #e0e0e0");
					settleAmount -= parseInt(oLisLen.eq(i).find(".countofgood").html());
					$("#settleAmount").html(settleAmount);
					
					speciallog = oLisLen.eq(i).find(".delete").attr("id");
					var className = "." + speciallog;
					$("#addPrice").find(className).detach();
					oLisLen.eq(i).find("ul").html("");



					if(settleAmount == 0){
						$("#goToCount").find(".clickreminder").css("display","block");
						$("#goToCount").css("backgroundColor","#e0e0e0");
						$("#goToCount").css("color","#b0b0b0");
					}else{
						$("#goToCount").find(".clickreminder").css("display","none");
						$("#goToCount").css("backgroundColor","#ff6700");
						$("#goToCount").css("color","#ffffff");
					}
				}
			}
			chooseNum =0;
			$("#hasChoose").html(chooseNum);

		}
	})

	$("#commodity").on("click",".choosegood",function(){
		var html = "",speciallog = 0;
		if($(this).attr("ischecked") == "false"){
			$(this).attr("ischecked","true");
			$(this).find(".icon-duihao").css("display","inline-block");
			$(this).css("backgroundColor","#ff6700");
			$(this).find(".icon-duihao").css("color","#ffffff");
			$(this).css("border","1px solid #ff6700");
			var total = parseInt($(this).parents("li").find(".countofgood").html());
			settleAmount += total;
			$("#settleAmount").html(settleAmount);
			if(settleAmount == 0){
				$("#goToCount").find(".clickreminder").css("display","block");
				$("#goToCount").css("backgroundColor","#e0e0e0");
				$("#goToCount").css("color","#b0b0b0");
			}else{
				$("#goToCount").find(".clickreminder").css("display","none");
				$("#goToCount").css("backgroundColor","#ff6700");
				$("#goToCount").css("color","#ffffff");
			}
			chooseNum += parseInt($(this).parents("li").find(".numofgoods").html());
			$("#hasChoose").html(chooseNum);
			speciallog = $(this).parents("li").find(".delete").attr("id");
			html = '<li class = "' + speciallog + '"><i class = "iconfont icon-iconjia"></i><span>+25元的小米活塞耳机 清新版 25元</span></li>';
			$("#addPrice").append(html);
		}else{
			$(this).attr("ischecked","false");
			$(this).find(".icon-duihao").css("display","none");
			$(this).css("backgroundColor","#ffffff");
			$(this).find(".icon-duihao").css("color","#424242");
			$(this).css("border","1px solid #e0e0e0");
			var total = parseInt($(this).parents("li").find(".countofgood").html());
			settleAmount -= total;
			$("#settleAmount").html(settleAmount);
			if(settleAmount == 0){
				$("#goToCount").find(".clickreminder").css("display","block");
				$("#goToCount").css("backgroundColor","#e0e0e0");
				$("#goToCount").css("color","#b0b0b0");
			}else{
				$("#goToCount").find(".clickreminder").css("display","none");
				$("#goToCount").css("backgroundColor","#ff6700");
				$("#goToCount").css("color","#ffffff");
			}
			chooseNum -= parseInt($(this).parents("li").find(".numofgoods").html());
			$("#hasChoose").html(chooseNum);
			speciallog = $(this).parents("li").find(".delete").attr("id");
			var className = "." + speciallog;
			$("#addPrice").find(className).detach();
			$(this).parents("li").find("ul").html("");

		}

		//商品类表里所有商品全选中全选checkbox才会高亮，否则非高亮
		$(".chooseAll").attr("ischecked","true");
		$(".chooseAll").find(".icon-duihao").css("display","inline-block");
		$(".chooseAll").css("backgroundColor","#ff6700");
		$(".chooseAll").find(".icon-duihao").css("color","#ffffff");
		$(".chooseAll").css("border","1px solid #ff6700");
		for(var i = 0; i < $(this).parents("#commodity").find("li").size(); i++){
			if($(this).parents("#commodity").find("li").eq(i).find(".choosegood").attr("ischecked") == "false"){
				$(".chooseAll").attr("ischecked","false");
				$(".chooseAll").find(".icon-duihao").css("display","none");
				$(".chooseAll").css("backgroundColor","#ffffff");
				$(".chooseAll").find(".icon-duihao").css("color","#424242");
				$(".chooseAll").css("border","1px solid #e0e0e0");
				break;
			}
		}
	})

	

	//每件商品 加减数量按钮 移入移出变色
	$("#commodity").on("mouseenter",".substract",function(){
		$(this).css("backgroundColor","#e2e2e2");
	})
	$("#commodity").on("mouseleave",".substract",function(){
		$(this).css("backgroundColor","#ffffff");
	})

	$("#commodity").on("mouseenter",".add",function(){
		$(this).css("backgroundColor","#e2e2e2");
	})
	$("#commodity").on("mouseleave",".add",function(){
		$(this).css("backgroundColor","#ffffff");
	})

	//每件商品 加减数量按钮 点击数量进行加减
	$("#commodity").on("click",".substract",function(){
		var num = parseInt($(this).nextAll(".numofgoods").html());
		var price = parseInt($(this).parents("li").find(".price").html());
		if($(this).parents("li").find(".choosegood").attr("ischecked") == "false"){
			if(num == 1){
				$(this).nextAll(".numofgoods").html(1);
			}else{
				$(this).nextAll(".numofgoods").html(--num);
				goodsNum--;
				$("#numofAll").html(goodsNum);
			}
			$(this).parents("li").find(".countofgood").html(num * price + '元');
		}else{
			if(num == 1){
				$(this).nextAll(".numofgoods").html(1);
			}else{
				$(this).nextAll(".numofgoods").html(--num);
				goodsNum--;
				$("#numofAll").html(goodsNum);
				chooseNum--;
				$("#hasChoose").html(chooseNum);

				settleAmount -= parseInt($(this).parents("li").find(".price").html());
				$("#settleAmount").html(settleAmount);
			}
			$(this).parents("li").find(".countofgood").html(num * price + '元');
		}
	})
	$("#commodity").on("click",".add",function(){
		var num = parseInt($(this).prevAll(".numofgoods").html());
		var price = parseInt($(this).parents("li").find(".price").html());
		if($(this).parents("li").find(".choosegood").attr("ischecked") == "false"){
			if(num == 5){
				$(".lhn-arriveMaxNum").css("display","block");
				$(".lhn-arriveMaxNum").find(".thinborder").stop().animate({
						top:70,
					})
				 var title = $(this).parents("li").find(".title").html();
				$(".lhn-arriveMaxNum").find(".reminder").html(title + '已达到最大购买数量');
			}else{
				$(this).prevAll(".numofgoods").html(++num);	
				goodsNum++;
				$("#numofAll").html(goodsNum);
			}
			$(this).parents("li").find(".countofgood").html(num * price + '元');
		}else{
			if(num == 5){
				$(".lhn-arriveMaxNum").css("display","block");
				$(".lhn-arriveMaxNum").find(".thinborder").stop().animate({
						top:70,
					})
				 var title = $(this).parents("li").find(".title").html();
				$(".lhn-arriveMaxNum").find(".reminder").html(title + '已达到最大购买数量');
			}else{
				$(this).prevAll(".numofgoods").html(++num);	
				goodsNum++;
				$("#numofAll").html(goodsNum);
				chooseNum++;
				$("#hasChoose").html(chooseNum);
				settleAmount += parseInt($(this).parents("li").find(".price").html());
				$("#settleAmount").html(settleAmount);
			}
			$(this).parents("li").find(".countofgood").html(num * price + '元');
		}
		
	})

	//最大购买数量点击确定和X号，最大购买数量提示框消失
	$(".lhn-arriveMaxNum").find(".icon-x").hover(function(){
		$(this).css("backgroundColor","#d91400");
		$(this).css("color","#ffffff");
	},function(){
		$(this).css("backgroundColor","#ffffff");
		$(this).css("color","#757575");
	});
	$(".lhn-arriveMaxNum").find(".confirm").hover(function(){
		$(this).css("backgroundColor","#ff4500");
	},function(){
		$(this).css("backgroundColor","#ff6700");
	});
	$(".lhn-arriveMaxNum").find(".icon-x").click(function(){
		$(this).parent().stop().animate({
			top:-340,
		},function(){
			$(".lhn-arriveMaxNum").css("display","none");
		})
		
	})
	$(".lhn-arriveMaxNum").find(".confirm").click(function(){
		$(this).parent().stop().animate({
			top:-340,
		},function(){
			$(".lhn-arriveMaxNum").css("display","none");
		})
		
	})
	$(window).scroll(function(){
		$(".lhn-arriveMaxNum").css("top",$(this).scrollTop());
		$(".lhn-purchase").css("top",$(this).scrollTop());
		$(".lhn-deleteGood").css("top",$(this).scrollTop());
	})//以上是商品数量达到购买上限时的弹出框动画



	//加价购数据加载
	$("#addPrice").on("click",".icon-iconjia",function(){
		//点击加号弹出框，里面是推荐商品，初始化
		var className = $(this).parent().attr("class");
		$.ajax({
			url:"../data/goods.json",
			method:"get",
			success:function(data){
				var html = '';
				for(var i = 0; i < 3; i++ ){
					html += '<li class = "' +  className +'"><span class = "emptyCircle"><span class = "discCircle"></span></span><div class = "imgPic"><img src = "' + 'https://i1.mifile.cn/a1/pms_1482321199.12589253!220x220.jpg' + '"/></div><p class = "title">'+ '小米活塞耳机 清新版 黑色' +'</p><p class = "price">' + data[i].price.substring(1) + '元</p></li>';
				}
				$("#addPriceGoods").html(html);
				$("#addPriceGoods").find(".discCircle").attr("ischoosed","false");
			}
		})
		$(".lhn-purchase").css("display","block");
		$(".lhn-purchase").find(".thinborder").stop().animate({
			top:0,
		})
	})
	// 加价购 移入X号和加入购物车 点击X号和移入购物车
	$(".lhn-purchase").find(".icon-x").hover(function(){
		$(this).css("backgroundColor","#d91400");
		$(this).css("color","#ffffff");
	},function(){
		$(this).css("backgroundColor","#ffffff");
		$(this).css("color","#757575");
	});
	$(".lhn-purchase").find(".joinInCar").hover(function(){
		if($(this).attr("isActive") == "true"){
			$(this).css("backgroundColor","#f04400");
		}else{
			$(this).css("backgroundColor","#727272");
		}
		
	},function(){
		if($(this).attr("isActive") == "true"){
			$(this).css("backgroundColor","#ff6700");
		}else{
			$(this).css("backgroundColor","#b0b0b0");
		}
		
	});
	$(".lhn-purchase").find(".icon-x").click(function(){
		$(this).parents(".thinborder").stop().animate({
			top:-502,
		},function(){
			$(".lhn-purchase").css("display","none");
			$(".lhn-purchase").find(".joinInCar").attr("isActive","false");
			$(".lhn-purchase").find(".joinInCar").css("backgroundColor","#b0b0b0");
		})
		
	})
	
	$(".lhn-purchase").find(".joinInCar").click(function(){
		var htmlOfAddPrice = '';
		var idName = "#id" + $(this).prevAll("#addPriceGoods").find("li").attr("class");
		if($(".lhn-purchase").find(".joinInCar").attr("isActive") == "true"){
			$(this).parents(".thinborder").stop().animate({
				top:-502,
			},function(){
				$(".lhn-purchase").css("display","none");
					$.ajax({
						url:"../data/goods.json",
						method:"get",
						success:function(data){
							htmlOfAddPrice += '<li class = "second"><i class = "arrow"></i><strong class = "goodPicone"><img src = "' + 'https://i1.mifile.cn/a1/pms_1482321199.12589253!220x220.jpg' +'"/></strong><div><p class = "addBuy">加价购</p><span class = "titleone">' +"小米一体织轻薄羽绒服 男款 黑色 S" + '</span></div><span class = "priceone">' + data[1].price.substring(1) + '元</span><span class = "numofgoodsone">1</span><span class  = "countofgoodone">299元</span><span class = "deleteone">x</span></li>';
							$("#commodity").find(idName).html(htmlOfAddPrice);
						}
					})
					$(".lhn-purchase").find(".joinInCar").attr("isActive","false");
					$(".lhn-purchase").find(".joinInCar").css("backgroundColor","#b0b0b0");

			})
		}
	})


	//加价购弹出框选择产品时，移入出现实心点，移出实心点消失
	$(".lhn-purchase").on("mouseenter","li",function(){
		if($(this).find(".discCircle").attr("ischoosed") == "false"){
			$(this).find(".discCircle").css("display","inline-block");
		}
	})
	$(".lhn-purchase").on("mouseleave","li",function(){
		if($(this).find(".discCircle").attr("ischoosed") == "false"){
			$(this).find(".discCircle").css("display","none");
		}
	})

	$(".lhn-purchase").on("click","li",function(){
		$(this).parents("#addPriceGoods").find("li").find(".discCircle").attr("ischoosed","false");
		$(this).parents("#addPriceGoods").find("li").find(".discCircle").css("display","none");
		$(this).parents("#addPriceGoods").find("li").find(".discCircle").css("backgroundColor","#e2e2e2");
		$(this).parents("#addPriceGoods").find("li").find(".emptyCircle").css("border","1px solid #e2e2e2");
		$(this).find(".discCircle").attr("ischoosed","true");
		$(this).find(".discCircle").css("display","inline-block");
		$(this).find(".discCircle").css("backgroundColor","#ff6700");
		$(this).find(".emptyCircle").css("border","1px solid #ff6700");
		$(this).parents("#addPriceGoods").nextAll(".joinInCar").attr("isActive","true");
		$(this).parents("#addPriceGoods").nextAll(".joinInCar").css("backgroundColor","#ff6700");
	})



	//点击删除按钮  移入移出效果和删除弹出框
	
	$("#commodity").on("mouseenter",".delete",function(){
		$(this).css("backgroundColor","#e21918");
		$(this).css("color","#ffffff");
	})
	$("#commodity").on("mouseleave",".delete",function(){
		$(this).css("backgroundColor","#ffffff");
		$(this).css("color","#747474");
	})

	$("#commodity").on("click",".delete",function(){
		$(".lhn-deleteGood").css("display","block");
		$(".lhn-deleteGood").find(".thinborder").stop().animate({
			top:0
		})
	})


	$(".lhn-deleteGood").find(".icon-x").click(function(){
		$(this).parent().stop().animate({
			top:-340,
		},function(){
			$(".lhn-deleteGood").css("display","none");;
		})
		
	})
	$(".lhn-deleteGood").find(".cancel").click(function(){
		$(this).parent().stop().animate({
			top:-340,
		},function(){
			$(".lhn-deleteGood").css("display","none");;
		})
		
	})
	$(".lhn-deleteGood").find(".confirm").click(function(){
		$(this).parent().stop().animate({
			top:-340,
		},function(){
			$(".lhn-deleteGood").css("display","none");;
		})
		
	})

	$(".lhn-deleteGood").find(".icon-x").hover(function(){
		$(this).css("backgroundColor","#d91400");
		$(this).css("color","#ffffff");
	},function(){
		$(this).css("backgroundColor","#ffffff");
		$(this).css("color","#757575");
	});

	$(".lhn-deleteGood").find(".cancel").hover(function(){
		$(this).css("backgroundColor","#929292");
	},function(){
		$(this).css("backgroundColor","#b0b0b0");
	});


	$(".lhn-deleteGood").find(".confirm").hover(function(){
		$(this).css("backgroundColor","#fd4700");
	},function(){
		$(this).css("backgroundColor","#ff6700");
	});

	//底部版权信息移入变颜色  第一部分 五大优点变颜色
	$(".lhn_copyrightInfo").find(".thinborder").find(".top").find("a").hover(function(){
		$(this).find("i").css("color","#ff6700");
		$(this).find("span").css("color","#ff6700");
	},function(){
		$(this).find("i").css("color","#616161");
		$(this).find("span").css("color","#616161");
	})

	//底部信息 六大特色内容变颜色  
	$(".lhn_copyrightInfo").find(".thinborder").find(".bottom").find("li").find("a").hover(function(){
		$(this).css("color","#ff6700");
	},function(){
		$(this).css("color","#757575");
	});

	//24小时客服移入换背景色和字体颜色
	$(".lhn_copyrightInfo").find(".thinborder").find(".bottom").find(".kefuFor24").hover(function(){
		$(this).css("backgroundColor","#ff6700");
		$(this).find("i").css("color","#ffffff");
		$(this).find("span").css("color","#ffffff");
	},function(){
		$(this).css("backgroundColor","#ffffff");
		$(this).find("i").css("color","#ff6700");
		$(this).find("span").css("color","#ff6700");
	});

	//小米logo右侧字体颜色改变
	$(".lhn_lastInfo").find(".top").find(".center").find(".firstline").find("a").hover(function(){
		$(this).css("color","#ff6700");
	},function(){
		$(this).css("color","#757575");
	});

	$(".lhn_lastInfo").find(".top").find(".center").find(".secondline").find("a").hover(function(){
		$(this).css("color","#ff6700");
	},function(){
		$(this).css("color","#b0b0b0");
	});
})