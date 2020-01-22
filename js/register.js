var reg=/^[0-9]{11}&/;
	function bot(){
		if(!inp.value.match(reg)){
			pho.innerHTML='<span class="phoformat">手机号码格式不正确</span>'
		}
	}
inp.onfocus=function(){
	pho.innerHTML='';
	inp.value='';
}
			