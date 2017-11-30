$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>140){
			$(".bx-fixed").css("display","block").animate({
				height:63
			},400,"linear").css("zIndex","50");
		}else{
			$(".bx-fixed").css("display","none").animate({
				height:0
			},400,"linear");
		}
	})

	$.ajax({
		url:"data/details.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i=0;i<data.length;i++){
				html = '<h1>' + data[i].title + '<span>'+ data[i].framT + '</span></h1><h3>' + data[i].subtitle + '</h3><p><i>' + data[i].price + '</i>元起</p><em>' + data[i].ver + '</em><div><img src = "' + data[i].img + '"/></div>';
			}
			$(".bx-firstText").html(html);
		}
	})



	$("#lable-1").click(function(){
		$("#bx-firstPage").css("display","block");
		$("wtf_page2").css("display","none");
		$("wtf-page3").css("display","none");
		$("#lhn-page4").css("display","none");
	})
	
	$("#lable-2").click(function(){
		$("wtf_page2").css("display","block");
		$("#bx-firstPage").css("display","none");
		$("#wtf-page3").css("display","none");
		$("#lhn-page4").css("display","none");
	})
	
	$("#lable-3").click(function(){
		$("#wtf-page3").css("display","block");
		$("#bx-firstPage").css("display","none");
		$("#wtf_page2").css("display","none");
		$("#lhn-page4").css("display","none");
	})
	
	$("#lable-4").click(function(){
		$("#lhn-page4").css("display","block");
		$("#wtf_page2").css("display","none");
		$("#lable-3").css("display","none");
		$("#bx-firstPage").css("display","none");
	})
	
	



	

})