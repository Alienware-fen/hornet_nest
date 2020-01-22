$('.tab-top li').click(function(){
	$(this).addClass('dis').siblings().removeClass('dis');
	$('.top-cen').children().eq($(this).index()).css('display','block').siblings().css('display','none');
})


// 校验手机号码和密码长度
var reg=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
var reg1=/^[A-z0-9]{4,}$/;
		
$('.bot').click(function(){
		// 密码长度
	if(!$('.pass').val().match(reg1)){
			$('.pass-num').css('display','block');
			$('.acount').css('display','none');
			$('.acountnum').css('display','none');
			$('.emailmat').css('display','none');
		}
		// 手机号码格式不正确
	if(!$('.email').val().match(reg)){
			$('.acountnum').css('display','block');
			$('.pass-num').css('display','none');
			$('.emailmat').css('display','none');
			$('.acount').css('display','none');
		}
		// 账号为空
	if($('.email').val()==''){
			$('.acount').css('display','block');
			$('.acountnum').css('display','none');
			$('.pass-num').css('display','none');
			$('.emailmat').css('display','none');
	}
		
})