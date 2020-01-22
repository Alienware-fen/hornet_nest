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
	$('.index').mouseenter(function(){
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


// main
	// 当前时间
	var time=new Date();
	$('.day-time').html(time.getDate());

	// var timer=mon.toUTCString();！！！！！！！！！
	$('.mon-year').html('/'+time.getMonth()+1+'.'+time.getFullYear());
	
	// 文字克隆
	var list=[{
		title:'来！看【圣淘沙名胜世界】如何实现关于亲子游的一切美好幻想！',
		dis:'图片来自于<a href="http://www.mafengwo.cn/singapore.html" target="_blank">新加坡</a>，此目的地共收藏了<a href="http://www.mafengwo.cn/photo/mdd/10754.html" target="_blank" >861030</a>张<a href="/travel-scenic-spot/mafengwo/10754.html" target="_blank">新加坡</a>图片。本片由<a href="http://www.mafengwo.cn/u/34490113.html" target="_blank">十月爱溜哒</a>荣誉出品！'
	},{
		title:'来自《一个女生的古巴独行记》（附11日自由行攻略',
		dis:'图片来自于<a href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/11684.html" target="_blank">古巴</a>，此目的地共收藏了<a href="http://www.mafengwo.cn/photo/mdd/11684.html" target="_blank" >28690</a>张<a href="/travel-scenic-spot/mafengwo/11684.html" target="_blank">古巴</a>图片。本片由<a href="http://www.mafengwo.cn/u/34521028.html" target="_blank">yeonee</a>荣誉出品！'
	},{
		title:'“丝路首城，文君故里” 邛崃的名字里，有千年历史、百年饮食',
		dis:'图片来自于<a href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/19375.html" target="_blank">邛崃</a>，此目的地共收藏了<a href="http://www.mafengwo.cn/photo/mdd/19375.html" target="_blank">20709</a></font>张<a href="/travel-scenic-spot/mafengwo/19375.html" target="_blank">邛崃</a>图片。本片由<a href="http://www.mafengwo.cn/u/71409809.html" target="_blank">二喵喵喵喵</a>荣誉出品！'
	},{
		title:'丝路未半，韶华向远',
		dis:'图片来自于<a href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/48878.html" target="_blank">乌兹别克斯坦</a>，此目的地共收藏了<a href="http://www.mafengwo.cn/photo/mdd/48878.html" target="_blank" >3105</a>张<a href="/travel-scenic-spot/mafengwo/48878.html" target="_blank">乌兹别克斯坦</a>图片。本片由<a href="http://www.mafengwo.cn/u/321294.html" target="_blank">TINO</a>荣誉出品！'
	}];

	var newh3,newp;
	for(var i=0;i<list.length;i++){
		newh3=$('<h3 class="title-pic"></h3>').eq(0).clone();
		newh3.html(list[i].title);
		newp=$('<p class="show-info"></p>').eq(0).clone();
		newp.html(list[i].dis);
		$('main').append(newh3);
		$('main').append(newp);
	}
	
	// 轮播图--点击
	$('.small-pic li').click(function(){
		$(this).addClass('bor').siblings().removeClass('bor');
		$('.warp-pic').children().eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
		$('main h3').eq($(this).index()).addClass('view-h3').siblings().removeClass('view-h3');
		$('main p').eq($(this).index()).addClass('view-p').siblings().removeClass('view-p');

	})

	// 定时器--轮播图自动显示
	var timer;
	var n=0;
	function gogo(){
		timer=setInterval(function(){
			n++;
			if(n==$('.warp-pic').children().length) n=0;
			$('.small-pic').children().eq(n).addClass('bor').siblings().removeClass('bor');
			$('.warp-pic').children().eq(n).fadeIn(1000).siblings().fadeOut(1000);
			$('main h3').eq(n).addClass('view-h3').siblings().removeClass('view-h3');
			$('main p').eq(n).addClass('view-p').siblings().removeClass('view-p');
		},3000)
	}
	gogo();
	$('.warp-pic').mouseenter(function(){
			clearInterval(timer);
		})
	$('.warp-pic').mouseleave(function(){
			gogo();
		})

	//table栏
	$('.tab-top li').click(function(){
		$(this).children().addClass('view-icon');
		$(this).siblings().children().removeClass('view-icon');
		$('.tab-bot').children().eq($(this).index()).addClass('view-tab').siblings().removeClass('view-tab');
	})


// 侧边栏
// 第一个轮播图
	// 滑动事件
	var m=0,timerul;
	function ulgo(){
		timerul=setInterval(function(){
			m++;
			if(m==$('.travel-pic').children().length) m=0;
			$('.travel-pic').stop().animate({'left':-260*m+'px'},800);
			$('.warp-nav li').eq(m).addClass('col').siblings().removeClass('col');

			if(m==$('.new-pic').children().length) m==0;
			$('.new-pic').stop().animate({'left':-260*m+'px'},800);
			$('.warp-nav1 li').eq(m).addClass('col').siblings().removeClass('col');
		},3000)
	}
	ulgo();
	$('.warp-ul').mouseenter(function(){
		clearInterval(timerul);
	});
	$('.warp-ul').mouseleave(function(){
		ulgo();
	})

	// 点击事件
	$('.warp-nav li').click(function(){
		m=$(this).index();
		$(this).addClass('col').siblings().removeClass('col');
		$('.travel-pic').stop().animate({'left':-260*$(this).index()+'px'},800);
	})
	// 第二个轮播点击事件
	$('.warp-nav1 li').click(function(){
		m=$(this).index();
		$(this).addClass('col').siblings().removeClass('col');
		$('.new-pic').stop().animate({'left':-260*$(this).index()+'px'},800);
	})




	// 右边table栏事件
		// 头部--切换热门游记和最新发表
	$('.rigtab-top li').click(function(){
		$(this).addClass('curcol').siblings().removeClass('curcol');
		$('.warp-all').children().eq($(this).index()).fadeIn(2000).siblings().fadeOut(2000);
		$('html,body').animate({'scrollTop':$('.sec-rig').offset().top},2100);
	})

	//section右边标签克隆
		// 热门城市--第一页
	var list2=[{
		src:'img/index/cen2.jpg',
		desc:'<b>在 新疆 ， 我看见过生长一棵树的时间， 长老一个人的时间，</b><br><span class="span-cen"> 河流干涸，绿洲变成沙漠的时间...... 新疆 给了我一种脱离时间的可能， 一直向后走的可能。 新疆 一直作为远方而存在， 她的地域...</span><br><span class="span-bot"><a class="pic-1">新疆</a><span class="span-by">,by</span><a class="pic-2">米央Mia</a><span class="pic-3">5769/50</span><span class="pic-4">215</span>'
	},{
		src:'img/index/cen3.jpg',
		desc:'<b>掸邦高原明珠·蒲甘万塔之城——佛国缅甸攻略</b><br><span class="span-cen"> 【写在前面】 几乎走遍了 东南亚 的所有国家，每个国家都有自己的画面， 菲律宾 马来西亚 的碧蓝大海， 柬埔寨 古老的五个“玉米头”， 想起来都是一张张美丽的明信片， 这个小长假，我们去...</span><br><span class="span-bot"><a class="pic-1">缅甸</a><span class="span-by">,by</span><a class="pic-2">米央Mia</a><span class="pic-3">269/90</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen4.jpg',
		desc:'<b>25岁 | 辞旅100天，29143公里自驾粤桂贵渝川藏疆甘青宁蒙黑吉...</b><br><span class="span-cen"> 河流干涸，绿洲变成沙漠的时间...... 新疆 给了我一种脱离时间的可能， 一直向后走的可能。 新疆 一直作为远方而存在， 她的地域...</span><br><span class="span-bot"><a class="pic-1">西藏</a><span class="span-by">,by</span><a class="pic-2">小猴子</a><span class="pic-3">2569/70</span><span class="pic-4">295</span></span>'
	},{
		src:'img/index/cen5.jpg',
		desc:'<b>及时行乐｜一人30天游遍半个中国😜</b><br><span class="span-cen">这只是一场普通旅行，因为我们都是凡人 辞职是定了，毕业后第一份3年的职场 不知道怎么说，千言万语不如千里之行 虽有千般好与不好，但是我还是心存感激 我把我千千万万个难熬的瞬间，千言...</span><br><span class="span-bot"><a class="pic-1">西北</a><span class="span-by">,by</span><a class="pic-2">米Mia</a><span class="pic-3">669/60</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen6.jpg',
		desc:'<b>鸟取之味，一份来自冬日的食补清单</b><br><span class="span-cen">如果你现在有那么点饿，请谨慎打开这篇游记 原本进入冬季减肥计划中的我，朋友一句“海鲜又吃不胖”，再一次把我带入了深坑…… 无法抗拒蟹的我，还是被 日本 的蟹季给深深勾引了过去。 一入...</span><br><span class="span-bot"><a class="pic-1">鸟取市</a><span class="span-by">,by</span><a class="pic-2">叶先生</a><span class="pic-3">2324/70</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen7.jpg',
		desc:'<b>我和我的祖国【2019 · 点亮全国】</b><br><span class="span-cen">恭喜点亮全国 29岁生日，我立下flag： 30岁前，我要完成【点亮全国】的成就！ 于是6月 西藏 ，10月 新疆 ，最后两个脚印， 终于补全了 中国 的足迹地图。 当当当当~~~撒花~~ 每一个省份全部...</span><br><span class="span-bot"><a class="pic-1">北京</a><span class="span-by">,by</span><a class="pic-2">小猫咪</a><span class="pic-3">4893/70</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen8.jpg',
		desc:'<b>枫红千枝复万枝——从关西到关东11日古建筑历史游（含吃）</b><br><span class="span-cen"> 河流干涸，绿洲变成沙漠的时间...... 新疆 给了我一种脱离时间的可能， 一直向后走的可能。 新疆 一直作为远方而存在， 她的地域...</span><br><span class="span-bot"><a class="pic-1">日本</a><span class="span-by">,by</span><a class="pic-2">外星人</a><span class="pic-3">5759/70</span><span class="pic-4">895</span></span>'
	},{
		src:'img/index/cen8.jpg',
		desc:'<b>从古罗马到奥斯曼~#14天逆时针星月国环游记#</b><br><span class="span-cen">忙忙碌碌的2019就要过完，之前很早就从花样姐姐上领略到了 土耳其 的风光，还有周传雄的那首《蓝色 土耳其 》，小时候地理课的欧亚分界线，历史课上被大唐打残的突厥.....无不让人对这个神...</span><br><span class="span-bot"><a class="pic-1">土耳其</a><span class="span-by">,by</span><a class="pic-2">百里屠苏</a><span class="pic-3">2989/70</span><span class="pic-4">2325</span></span>'
	},{
		src:'img/index/h9.jpg',
		desc:'<b>邂逅一场浪漫 体验新奇人生 阳光沙滩深海丛林</b><br><span class="span-cen">❤Scheduling.我们要出发啦 🌈写在前面的话 今年年初和妈妈一起去了遥远的 埃及 ,在 红海 的度假酒店呆了三天,看到了不用滤镜就蔚蓝的像水晶一样的海,所以回国之后一直对海岛生活念念不忘,5...</span><br><span class="span-bot"><a class="pic-1">巴厘岛</a><span class="span-by">,by</span><a class="pic-2">甜甜pluto</a><span class="pic-3">2239/70</span><span class="pic-4">284</span>'
	}];

	var newimg,newdesc,newdiv;
	for(var i=0;i<list2.length;i++){
		newimg=$('<img src="" alt="" >').eq(0).clone();
		newimg.attr('src',(list2[i].src));
		newdesc=$('<p class="desc-p"></p>').eq(0).clone();
		newdesc.html(list2[i].desc);
		newdiv=$('<div class="desc-con"></div>');
		$(newdiv).append(newimg);
		$(newdiv).append(newdesc);
		$('.hot-con').append(newdiv);
	}

	// 热门城市--第二页
	var list3=[{
		src:'img/index/cen2.jpg',
		desc:'<b>在 新疆 ， 我看见过生长一棵树的时间， 长老一个人的时间，</b><br><span class="span-cen"> 河流干涸，绿洲变成沙漠的时间...... 新疆 给了我一种脱离时间的可能， 一直向后走的可能。 新疆 一直作为远方而存在， 她的地域...</span><br><span class="span-bot"><a class="pic-1">新疆</a><span class="span-by">,by</span><a class="pic-2">米央Mia</a><span class="pic-3">5769/50</span><span class="pic-4">215</span>'
	},{
		src:'img/index/cen3.jpg',
		desc:'<b>掸邦高原明珠·蒲甘万塔之城——佛国缅甸攻略</b><br><span class="span-cen"> 【写在前面】 几乎走遍了 东南亚 的所有国家，每个国家都有自己的画面， 菲律宾 马来西亚 的碧蓝大海， 柬埔寨 古老的五个“玉米头”， 想起来都是一张张美丽的明信片， 这个小长假，我们去...</span><br><span class="span-bot"><a class="pic-1">缅甸</a><span class="span-by">,by</span><a class="pic-2">米央Mia</a><span class="pic-3">269/90</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen4.jpg',
		desc:'<b>25岁 | 辞旅100天，29143公里自驾粤桂贵渝川藏疆甘青宁蒙黑吉...</b><br><span class="span-cen"> 河流干涸，绿洲变成沙漠的时间...... 新疆 给了我一种脱离时间的可能， 一直向后走的可能。 新疆 一直作为远方而存在， 她的地域...</span><br><span class="span-bot"><a class="pic-1">西藏</a><span class="span-by">,by</span><a class="pic-2">小猴子</a><span class="pic-3">2569/70</span><span class="pic-4">295</span></span>'
	},{
		src:'img/index/cen5.jpg',
		desc:'<b>及时行乐｜一人30天游遍半个中国😜</b><br><span class="span-cen">这只是一场普通旅行，因为我们都是凡人 辞职是定了，毕业后第一份3年的职场 不知道怎么说，千言万语不如千里之行 虽有千般好与不好，但是我还是心存感激 我把我千千万万个难熬的瞬间，千言...</span><br><span class="span-bot"><a class="pic-1">西北</a><span class="span-by">,by</span><a class="pic-2">米Mia</a><span class="pic-3">669/60</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen6.jpg',
		desc:'<b>鸟取之味，一份来自冬日的食补清单</b><br><span class="span-cen">如果你现在有那么点饿，请谨慎打开这篇游记 原本进入冬季减肥计划中的我，朋友一句“海鲜又吃不胖”，再一次把我带入了深坑…… 无法抗拒蟹的我，还是被 日本 的蟹季给深深勾引了过去。 一入...</span><br><span class="span-bot"><a class="pic-1">鸟取市</a><span class="span-by">,by</span><a class="pic-2">叶先生</a><span class="pic-3">2324/70</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen7.jpg',
		desc:'<b>我和我的祖国【2019 · 点亮全国】</b><br><span class="span-cen">恭喜点亮全国 29岁生日，我立下flag： 30岁前，我要完成【点亮全国】的成就！ 于是6月 西藏 ，10月 新疆 ，最后两个脚印， 终于补全了 中国 的足迹地图。 当当当当~~~撒花~~ 每一个省份全部...</span><br><span class="span-bot"><a class="pic-1">北京</a><span class="span-by">,by</span><a class="pic-2">小猫咪</a><span class="pic-3">4893/70</span><span class="pic-4">215</span></span>'
	},{
		src:'img/index/cen8.jpg',
		desc:'<b>枫红千枝复万枝——从关西到关东11日古建筑历史游（含吃）</b><br><span class="span-cen"> 河流干涸，绿洲变成沙漠的时间...... 新疆 给了我一种脱离时间的可能， 一直向后走的可能。 新疆 一直作为远方而存在， 她的地域...</span><br><span class="span-bot"><a class="pic-1">日本</a><span class="span-by">,by</span><a class="pic-2">外星人</a><span class="pic-3">5759/70</span><span class="pic-4">895</span></span>'
	},{
		src:'img/index/cen8.jpg',
		desc:'<b>从古罗马到奥斯曼~#14天逆时针星月国环游记#</b><br><span class="span-cen">忙忙碌碌的2019就要过完，之前很早就从花样姐姐上领略到了 土耳其 的风光，还有周传雄的那首《蓝色 土耳其 》，小时候地理课的欧亚分界线，历史课上被大唐打残的突厥.....无不让人对这个神...</span><br><span class="span-bot"><a class="pic-1">土耳其</a><span class="span-by">,by</span><a class="pic-2">百里屠苏</a><span class="pic-3">2989/70</span><span class="pic-4">2325</span></span>'
	},{
		src:'img/index/h8.jpg',
		desc:'<b>DIY走遍新西兰亲子游实用手记（南岛篇）</b><br><span class="span-cen">新西兰亲子游实用手记说明   新西兰 亲子游原本行程包含 汤加 王国4日游，由于 汤加 王国突发登革热，考虑孩子们健康安全问题，故临时改变行程，以 新西兰 北岛4日游取代 汤加 行程，演变...</span><br><span class="span-bot"><a class="pic-1">九州</a><span class="span-by">,by</span><a class="pic-2">柠檬树</a><span class="pic-3">2239/70</span><span class="pic-4">284</span>'
	}];

	var newimg3,newdesc3,newdiv3;
	for(var i=0;i<list3.length;i++){
		newimg3=$('<img src="" alt="" >').eq(0).clone();
		newimg3.attr('src',(list3[i].src));
		newdesc3=$('<p class="desc-p"></p>').eq(0).clone();
		newdesc3.html(list3[i].desc);
		newdiv3=$('<div class="desc-con"></div>');
		$(newdiv3).append(newimg3);
		$(newdiv3).append(newdesc3);
		$('.hot-con2').append(newdiv3);
	}

	// 点击页数进入热门游记--最新发表下一页
	var nextn=0;
	$('.warp-page li').click(function(){
		nextn=$(this).index();
		console.log(nextn);
		$(this).addClass('col-li').siblings().removeClass('col-li');
		$('.warp-con').children().eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
		$('.new-con').children().eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);


})
	// 点击进入下一页
	$('.next-page').click(function(){
		console.log(11);
		$('.warp-page li').eq(nextn+1).addClass('col-li').siblings().removeClass('col-li');
		$('.warp-con').children().eq(nextn+1).fadeIn(1000).siblings().fadeOut(1000);
		$('.new-con').children().eq(nextn+1).fadeIn(1000).siblings().fadeOut(1000);
		nextn++;
	})

	// 点击筛选事件
	$('.sel').click(function(){
		$('.sel-desc').css('display','block');
	});
	$('.del').click(function(){
		$('.sel-desc').css('display','none');
	})
	$('.del').hover(function(){
		$('.del').addClass('del-enter');
		$('.del').removeClass('del-leave');
	},function(){
		$('.del').addClass('del-leave');
		$('.del').removeClass('del-enter');
	})
		
	// 侧边栏样式
	// 返回顶部
$('.pic-top').mouseenter(function(){
	$('.backtop').css('display','block');
})
$('.backtop').mouseleave(function(){
	$(this).css('display','');
})
	// 意见反馈
$('aside .pic-1').mouseenter(function(){
	$('.back').css('display','block');
})
$('.back').mouseleave(function(){
	$(this).css('display','');
})
	// 二维码
$('aside .pic-2').mouseenter(function(){
	$('.pic-after').css('display','block');
	$(this).addClass('pic-enter');
	$(this).parent().addClass('back-pic');
})
$('aside .pic-2').mouseleave(function(){
	$('.pic-after').css('display','');
	$(this).removeClass('pic-enter');
	$(this).parent().removeClass('back-pic')
})


	// 侧边栏滚动事件
$(window).scroll(function(){
		// 绝对定位
	if($(window).scrollTop()>=2000){
		$('.back-top').css('display','block');
		$('.scroll-before').removeClass('dis');
		$('.scroll-before').addClass('abu');
	}
	// 固定定位
	if($(window).scrollTop()>=$('section').offset().top && $(window).scrollTop()<2000){
		$('.back-top').css('display','block');
		$('.scroll-before').addClass('dis');
		$('.scroll-before').removeClass('abu');
	}
	if($(window).scrollTop()<$('section').offset().top){
		$('.back-top').css('display','none');
		$('.scroll-before').removeClass('dis');
	}
})
	// 窗口返回顶部
$('.backtop').click(function(){
	$('html,body').animate({'scrollTop':'0px'},1000);
	$('aside').removeClass('dis abu');
	$('.back-top').css('display','none');		
})

