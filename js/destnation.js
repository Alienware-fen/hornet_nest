
// 文本框的变化
$('.txt').focus(function(){
	$(this).css({'border':'1px solid #ff9e00','width':'380px','backgroundPosition':'-28px -139px'})
	$('.ser').addClass('serafter');
})
$('.txt').blur(function(){
	$(this).css({'border':'none','width':'130px','backgroundPosition':'-29px -109px'})
	$('.ser').removeClass('serafter');
})

// 导航栏的样式变化:颜色 上下边框 文字图标的显示
	// 鼠标移入导航栏的样式
	$('nav').hover(function(){
		$(this).addClass('nav-hover');
		$('h1').addClass('h1-hover');
		$('.nav-warp').addClass('nav-warp-hover');
		$('.pic').children('img').attr('src','../img/A14.png');
		$('.nav-warp .nav>li>a').css({'textDecoretion':'none','color':'#333'});
		$('.destnation>a').css('color','white');
	},function(){
		$(this).removeClass('nav-hover');
		$('h1').removeClass('h1-hover');
		$('.nav-warp').removeClass('nav-warp-hover');
		$('nav .pic').children('img').attr('src','../img/d14.png');
		$('.nav-warp .nav>li>a').css({'textDecoretion':'none','color':'white'});
	})

	// 鼠标移入具体导航栏
$('.nav>li').hover(function(){
	$(this).children().css('color','#ff9d00').siblings().css('color','');
	$('.destnation>a').css('color','white');
	if($(this).children().length==1){
		$(this).css('borderBottom','3px solid #ff9d00');	
	}
	else{
		if (($(this).children().attr('src')=='../img/A14.png') ){
			$(this).css('borderBottom','3px solid #ff9d00');
		}else{
			$(this).css('borderTop','3px solid #ff9d00');
			$(this).addClass('re');
			$(this).children().css('color','#ff9d00');
			$(this).children().addClass('current');
		}	
	}
},function(){
	$(this).children().css('color','#333');
	$(this).css({'borderBottom':'','borderTop':''})
	if($(this).children().length!=0){
		$(this).children().removeClass('current');
		$(this).removeClass('re');
	}
})


/* 设置当前页面的导航栏样式 */
$('.destnation').mouseenter(function(){
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

	//main  右下角日期
	var timernow=new Date();
	$('.over-pic .timer').children().html(timernow.getDate());
	// 灰姑娘的作品
	$('.who').hover(function(){
		$('.who-hover').slideDown();
	},function(){
		$('.who-hover').slideUp();
	})
	// 社交平台
	$('.over-pic .share').hover(function(){
		$('.wechat').slideDown();
	},function(){
		$('.wechat').slideUp();
	})
	// 点击箭头滚动
	$('.over-pic .down').click(function(){
		$('html,body').animate({'scrollTop':$('section').offset().top},800);
	})

	// section
	// 点击城市切换小城市
	$('.tab-top li').mouseenter(function(){	
		$(this).children('a').addClass('cur-a');
		$(this).siblings().children('a').removeClass('cur-a');
		$('.warp-tab-cen').children().eq($(this).index()).addClass('cur-city').siblings().removeClass('cur-city');	
	});
	// 切换季节
	$('.tab-top1 li').mouseenter(function(){
		$(this).children('a').addClass('cur-a');
		$(this).siblings().children('a').removeClass('cur-a');	
		$('.warp-pic').children().eq($(this).index()).addClass('sea-cur').siblings().removeClass('sea-cur');	
	});
	// 主题精选
	$('.tab-top2 li').mouseenter(function(){
		$(this).children('a').addClass('cur-a');
		$(this).siblings().children('a').removeClass('cur-a');	
		$('.warp-topic-desc').children().eq($(this).index()).addClass('topic-cur').siblings().removeClass('topic-cur');	
	});

	// 城市克隆
	   //南亚西亚 
// var listcity=[{
// 	title:'<a href="">马尔代夫</a>',
// 	desc:'<a href="">马累</a><a href="">阿雅达岛</a><a href="">薇拉瓦鲁岛</a><a href="">宁静岛</a>'
// },{
// 	title:'<a href="">阿联酋</a> <a href="">伊朗</a>',
// 	desc:'<a href="">迪拜</a><a href="">阿布扎比</a><a href="">德黑兰</a><a href="">伊斯法罕</a><a href="">设拉子</a>'
// },{
// 	title:'<a href="">斯里兰卡</a>',
// 	desc:'<a href="">科伦坡</a><a href="">康提 </a><a href="">努沃勒埃利耶</a><a href="">尼甘布</a>'
// },{
// 	title:'<a href="">尼泊尔</a>',
// 	desc:'<a href="">加德满都</a><a href="">博卡拉</a><a href="">巴德岗</a>'
// },{
// 	title:'<a href="">印度</a>',
// 	desc:'<a href="">新德里</a><a href="">孟买</a><a href="">阿格拉</a><a href="">斋普尔</a><a href="">瓦拉纳西</a>'
// }]
//  var tabdetical4=$('<div class="tab-detical4 "></div>');
//  var detical_left=$('<div class="detical-left"></div>'); 
//  var city_dl=$('<dl class="city-dl"></dl>');
//  var city_dt,city_dd;
//  for(var i=0;i<listcity.length;i++){
//  	city_dt=$('<dt class="city-dt"></dt>').eq(0).clone();
//  	city_dd=$('<dd class="city-dd"></dd>').eq(0).clone();
//  	city_dd.html(listcity[i].desc);
//  	city_dt.html(listcity[i].title);
//  	$(city_dl).append(city_dd);
//  	$(city_dl).append(city_dt);
//  	$(detical_left).append(city_dl);
//  	$(tabdetical4).append(detical_left);
//  	$('.warp-tab-cen').append(tabdetical4);
//  	if((2*i)%2==0){
//  		$(detical_left).eq(i).css('float','right');
//  		console.log(i);
//  	}else{
//  		$(detical_left).eq(i).css('float','left');
//  		console.log(i);
//  	}
//  }

// 季节克隆
