$(function(){
	
	$("#wtf_body_sort_6").click(function(){
		if($("#phonenum").val() != ''){
			$("#wtf_body_one").css("display","none")
			$("#wtf_body_two").css("display","block")
			$("#wtf_body_three").css("display","none")
		}else{
			alert("手机号码不能为空！")
		}
		
	})
	//返回
	$("#wtf_body_sort_13").click(function(){
			$("#wtf_body_one").css("display","block")
			$("#wtf_body_two").css("display","none")
			$("#wtf_body_three").css("display","none")
	})
	//下一步
	$("#wtf_body_sort_12").click(function(){
		if($("#wtf_body_sort_10").val() != ""){
			$("#wtf_body_one").css("display","none")
			$("#wtf_body_two").css("display","none")
			$("#wtf_body_three").css("display","block")
		}else{
			alert("验证码不能为空！")
		}
		
	})
	$("#wtf_body_sort_14").click(function(){
		$("#wtf_body_one").css("display","none")
		$("#wtf_body_two").css("display","none")
		$("#wtf_body_three").css("display","block");
	})
	//验证验证码 
	$("#wtf_body_hint").css("opacity","0");

	
	$("#phonenum").blur(function(){

			var str = $(this).attr("class");
			if($(this).val() == ""){
				$("#wtf_body_hint").css("opacity","1");
				$("#wtf_body_hint").find('.'+str+'').html("请输入手机号码");
				$(this).val("");
			}else{
				//验证手机号码的长度
				if($(this).val().length != 11){
					$("#wtf_body_hint").css("opacity","1");
					$("#wtf_body_hint").find('.'+str+'').html("请输入正确的手机号码");
					$(this).val("");
				}else{
					//正则验证手机号码是否符合规则
					if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test($(this).val()))){
						$("#wtf_body_hint").css("opacity","1");
						$(this).val("");
						$("#wtf_body_hint").find('.'+str+'').html("请输入正确的手机号码")
					}else{
						$("#wtf_body_hint").css("opacity","0");
						$("#wtf_body_hint").find('.'+str+'').html("")
					}
				}
			}
	})
	//虚假验证码1111
	$("#wtf_body_sort_11").css("opacity","0")
	$("#wtf_body_sort_10").blur(function(){
		if($(this).val() != "1111"){
			$("#wtf_body_sort_11").css("opacity","1")
			$(this).val("");
		}else{
			$("#wtf_body_sort_11").css("opacity","0")
		}
	})

	//判定密码
	$("#wtf_code_4").css("opacity","0");
	$("#wtf_code_1").html($("#wtf_body_sort_5").find(".phonenum").eq(0).val())
	$("#wtf_code_2").blur(function(){
			var str = $(this).attr("class");
			if($(this).val() == ""){
				$("#wtf_code_4").css("opacity","1");
				$("#wtf_code_4").find(".first").html("请输入密码");
			}else{
				if(/^[a-zA-Z0-9]{4,16}$/.test($(this).val())){
					
					$("#wtf_code_4").css("opacity","0");
					
				}else{
					if(!($(this).val().length > 4 &&$ (this).val().length <16)){
						$("#wtf_code_4").css("opacity","1");

						$("#wtf_code_4").find(".first").html("密码为4-16组成");
						$(this).val("");
	
					}else{
						$("#wtf_code_4").css("opacity","1");
						$("#wtf_code_4").find(".first").html("密码必须由英文、数字、符号组成");
						$(this).val("");
					}
					
				}
			}
	})
	$("#wtf_code_5").css("opacity","0");
	//pangding dier ci shuru 
	$("#wtf_code_3").blur(function(){
		if($(this).val() == $("#wtf_code_2").val()){
			$("#wtf_code_5").css("opacity","0");
		}else{
			$("#wtf_code_5").css("opacity","1");
			$("#wtf_code_5").find(".sec").html("两次输入结果不同，请重新输入");
			$(this).val("")
		}
	})
})