/*	var index = 0;
	var imgnum = $('.wtf_img_banner ul li').length;
	var nmun='';
	var imgwidth = $('.wtf_img_banner ul li').width();
	var allimgwidth = imgwidth*imgnum;
	$('.wtf_img_banner ul').css('width',allimgwidth);
	
	
	$('.wtf_img_banner').hover(function(){
		clearInterval(p);
		$('.wtf_img_banner .u').fadeIn();
	},function(){
		pic();
		$('.wtf_img_banner .u').fadeOut();
		});
	
	function pic(){
		
		p=setInterval(function(){
			index++;
			
			if(index>=imgnum){
				index=0;
			}
			
			selectimg(index);
	
		},10000000);
		
	}
	
	function selectimg(index){
		$('.wtf_img_banner ul').animate({'margin-left':'-' + imgwidth*index + 'px'},600);
		$('.con a').eq(index).addClass('active').siblings('a').removeClass('active');
	}
	
	
	$('.wtf_img_banner .left').click(function(){
		index-=1;
		if(index<0){
				index=imgnum-1;
			}
		selectimg(index);
		
	});
	
	$('.wtf_img_banner .right').click(function(){
		index+=1;
		if(index>imgnum-1){
				index=0;
			}
		selectimg(index);
		
	});
	
	for(var ni=0;ni<imgnum;ni++){
		nmun +="<a href='javascript:;'></a>";
	}
	$('.wtf_img_banner .con').html(nmun);
	$('.wtf_img_banner .con a').eq(0).addClass('active');
	
	$('.con a').each(function(index){
		$(this).click(function(){
			$('.wtf_img_banner ul').animate({'margin-left':'-' + imgwidth*index + 'px'},600);
			$('.con a').eq(index).addClass('active').siblings('a').removeClass('active');
		});
	});	
	
	pic();*/