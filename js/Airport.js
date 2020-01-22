
// 文本框的变化
$('#txt').focus(function(){
	$(this).css({'border':'1px solid #ff9e00','width':'380px','backgroundPosition':'-28px -139px'})
	$('.ser').addClass('serafter');
})
$('#txt').blur(function(){
	$(this).css({'border':'none','width':'130px','backgroundPosition':'-29px -109px'})
	$('.ser').removeClass('serafter');
})

// 导航栏的样式变化:颜色 上下边框 文字图标的显示
$('.nav>li').hover(function(){
	$(this).children().css('color','#ff9d00').siblings().css('color','');
	if($(this).children().length==1){
		$(this).css('borderBottom','3px solid #ff9d00');	
	}
	else{
		if (($(this).children().attr('src')=='../img/A14.png') ){
			$(this).css('borderBottom','3px solid #ff9d00');
		}else{
			$(this).css('borderTop','3px solid #ff9d00');
			$(this).addClass('re');
			$(this).children().addClass('current');
		}	
	}
},function(){
	$(this).children().css('color','#333333');
	$(this).css({'borderBottom':'','borderTop':''});
	if($(this).children().length!=0){
		$(this).children().removeClass('current');
		$(this).removeClass('re');
	}
})

/* 设置当前页面的导航栏样式 */
$('.airport').mouseenter(function(){
	$(this).css('borderBottom','');
	$(this).css('color','');
})

// 旅游子菜单变化
$('.travelol li').hover(function(){
	$(this).children('a').addClass('currentol').siblings().removeClass('currentol');
},function(){
	$(this).children().removeClass('currentol');
})

// 社区子菜单变化:自己定义的类可能会出现权重没有这么高的问题，所以不会显示
$('.socialol li').hover(function(){
	$(this).children('a').addClass('socialcola').siblings().removeClass('currentol');
},function(){
	$(this).children().removeClass('socialcola');
})




// 四个输入框聚集焦点事件

function time(){
	var a=new Date();
	return a.getFullYear()+'-'+(a.getMonth()+1)+'-'+a.getDate();
}
var changetxt;

$('form').click(function(e){
	// 出发城市
	if($(e.target).attr('class')=='inp-1')
	{		
			// input输入框
		$(e.target).addClass('bor');
		$(e.target).blur(function(){
				$(e.target).removeClass('bor');
			})
			// table栏	
		$('.gocity').addClass('dis');
		$('.tab>li').click(function(){
			$(this).addClass('col').siblings().removeClass('col');
			$('.tab-sub ul').eq($(this).index()).addClass('city-dis').siblings().removeClass('city-dis');		
		})
			// 具体内容传到输入框
		$('.tab-sub li').click(function(){
				$('.inp-1').val($(this).html());
			})
			// table内容消失
		$('.gocity').mouseleave(function(){
			$('.gocity').removeClass('dis');
		})
	}

	// 到达城市
	if($(e.target).attr('class')=='inp-2')
	{		
			// input输入框
		$(e.target).addClass('bor');
		$(e.target).blur(function(){
				$(e.target).removeClass('bor');
			})
			// table栏	
		$('.gocity-2').addClass('dis');
		$('.tab-2 li').click(function(){
			$(this).addClass('col').siblings().removeClass('col');
			$('.tab-sub2 ul').eq($(this).index()).addClass('city-dis').siblings().removeClass('city-dis');
		})
			// 具体内容传到输入框
		$('.tab-sub2 li').click(function(){
				$('.inp-2').val($(this).text());
			})
			// table内容消失
		$('.gocity-2').mouseleave(function(){
			$('.gocity-2').removeClass('dis');
		})
	}

	// 出发日期
		if($(e.target).attr('class')=='inp-3'){
			// input输入框
			$('.inp-3').val(time());
			$('.span-inp3').css('display','none');
			$(e.target).blur(function(){
				$('.inp-3').val('');
				$('.span-inp3').css('display','block');
			})
		}
		// 到达日期
		if($(e.target).attr('class')=='inp-4'){
			// input输入框
			$('.inp-4').val(time());
			$('.span-inp4').css('display','none');
			$(e.target).blur(function(){
				$('.inp-4').val('');
				$('.span-inp3').css('display','block');
				// $('.single-label')
			})
		}
	// 交换内容
		if($(e.target).attr('class')=='change-val'){
			changetxt=$('.inp-1').val();
			$('.inp-1').val($('.inp-2').val());
			$('.inp-2').val(changetxt);
		}	

		//单选框
		function single(){
			return $(e.target).addClass('single-col').siblings().removeClass('single-col');
		}
		if($(e.target).attr('class')=='single1'){
			single();
			$('.inp-4').val('');
		} 
		if($(e.target).attr('class')=='single2'){
			single();
			$('.inp-4').val(time());
		} 
		if($(e.target).attr('class')=='single3'){
			single();
		} 

		// 搜索框
		if($(e.target).attr('class')=='ser'){
			if($('.inp-1').val()=='' || $('.inp-2').val())
			confirm('出发城市和到达城市不能为空哦');
		}
})

// 携带儿童说明
$('.child-pic').hover(function(){
	$('.txt').css('display','block');
},function(){
	$('.txt').css('display','none');
})

// 票价table点击事件
$('.tab-cen li').click(function(){
	$(this).addClass('cen-col').siblings().removeClass('cen-col');
	index=$(this).index();
	$('.tab-bot').children().eq($(this).index()).addClass('fir-dis').siblings().removeClass('fir-dis');
})

// 侧边栏
	// 返回顶部
$('.pic-top').mouseenter(function(){
	$('.backtop').css('display','block');
})
$('.backtop').mouseleave(function(){
	$(this).css('display','');
})
	// 意见反馈
$('.pic-1').mouseenter(function(){
	$('.back').css('display','block');
})
$('.back').mouseleave(function(){
	$(this).css('display','');
})
	// 二维码
$('.pic-2').mouseenter(function(){
	$('.pic-after').css('display','block');
	$(this).addClass('pic-enter');
	$(this).parent().css('background','#ff9d00');
})
$('.pic-2').mouseleave(function(){
	$('.pic-after').css('display','');
	$(this).removeClass('pic-enter');
	$(this).parent().css('background','');
})

	// 侧边栏滚动事件
$(window).scroll(function(){
	if($(window).scrollTop()>=600){
		$('aside').addClass('dis');
		$('.back-top').css('display','block');
	}	else{
		$('aside').removeClass('dis');
		$('.back-top').css('display','none');
	}
})
	// 窗口返回顶部
$('.backtop').click(function(){
	$('html,body').animate({'scrollTop':'0px'});
	$('aside').removeClass('dis');
	$('.back-top').css('display','none');
		console.log(11);		
})




