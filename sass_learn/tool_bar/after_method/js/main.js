require.config({
	paths : {
		jquery : '/public_js/jquery-1.7-min'
	}
});

require(['jquery'], function($){
	// $("body").css("background","red");
	$("#backtopBtn").on({
		click : function(){
			$('body').animate({"scrollTop":0},500);
		}
	})
})