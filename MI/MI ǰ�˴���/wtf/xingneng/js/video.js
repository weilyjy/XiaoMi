var arr=[{
			title:"雷军与斯塔克打造全面屏2.0",
			img:"../images/vedio1-1.jpg",
			desc:"一场关于小米MIX 2 极致工艺的巅峰对话",
			url:"http://v.mifile.cn/b2c-mimall-media/9e43087a3ac5525a33982a2da2ba2cff.mp4"

		},{
			title:"小米Note 3 与吴亦凡",
			desc:'看看小米Note 3 与吴亦凡谁更帅？',
			img:"../images/vedio3-3.png",
			url:"http://v.mifile.cn/b2c-mimall-media/d6f32c4087ec8a1466b72e58cdfa0625.mp4",
		},{
			title:"MIUI 9 理念视频",
			desc:'快如闪电，前所未有的流畅',
			img:"../images/vedio3-3.png",
			url:"http://v.mifile.cn/b2c-mimall-media/079803c78170eaf692d936eba3978cc1.mp4",
		},{
			title:"拍人更美的背后故事",
			desc:"小米手机工程师采访视频",
			img:"../images/vedio4.jpg",
			url:"http://v.mifile.cn/b2c-mimall-media/d0bf3d4892625ddb42836ff4d6d4af05.mp4",
		}];
		$(function(){
			$('.wr_conent_ul').find('li').each(function(i){
				$(this).find('a span').click(function(){
					$('#vedio').css('display','block');
					$('#vedio').find('h3').html(arr[i].title);
					$('#vedio').find('img').attr('src',arr[i].img);
					$('#vedio').find('video').attr('src',arr[i].url);
					$('#vedio').find('.video_off').hover(function(){
						$(this).css('backgroundColor',"#ED0827").css('color','#fff');
						$(this).click(function(){
							// alert(1);
							$('#vedio').css('display','none');
						})
					},function(){
							$(this).css('backgroundColor',"#F5F5F5").css('color','#B0B0B0');
						})
					$('#vedio').find('span').click(function(){
						$("#vedio").find('img').css('display',"none");
						$(this).css('display',"none");
						$('#vedio').find('video').attr('controls','controls');
						$('#vedio').find('video').attr('autoplay',"autoplay");
						// 
						var count=1;
						$('#vedio').find("video").click(function(){
							
							if (count==1) {
								$('#vedio').find('span').css('display','block');
								count=0;
							}else{
								$('#vedio').find('span').css('display','none');
								count=1;
							}
							

						});
						
					})
				})
			})	

		})
			