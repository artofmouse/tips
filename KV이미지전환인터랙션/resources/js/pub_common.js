// 키비주얼롤링모션
function kv01_ani() {
	$("#kvb01").css({opacity : 1});
	$("#kvb02").css({opacity : 0});
	$("#kvb03").css({opacity : 0});

	$("#kv03").animate({opacity : 0}, 3000, function() {
		$("#kv01").css({opacity : 1});
		setTimeout(function() {
			kv02_ani();
		}, 4000);
	});

}
function kv02_ani() {
	$("#kvb01").css({opacity : 0});
	$("#kvb02").css({opacity : 1});
	$("#kvb03").css({opacity : 0});

	$("#kv01").animate({opacity : 0}, 3000, function() {
		$("#kv02").css({opacity : 1});
		setTimeout(function() {
			kv03_ani();
		}, 4000);
	});
}
function kv03_ani() {
	$("#kvb01").css({opacity : 0});
	$("#kvb02").css({opacity : 0});
	$("#kvb03").css({opacity : 1});

	$("#kv02").animate({opacity : 0}, 3000, function() {
		$("#kv03").css({opacity : 1});
		setTimeout(function() {
			kv01_ani();
		}, 4000);
	});
}
$(document).ready(function () {
	var today = new Date();
	var hours = today.getHours();

	// 상단키비주얼롤링
	$('.kv_area .slider_kv .kv01').css({
		opacity: 1
	});
	$('.kv_area .slider_kv .kv02').css({
		opacity: 0
	});
	$('.kv_area .slider_kv .kv03').css({
		opacity: 0
	});
	setTimeout(function () {
		kv02_ani();
	}, 4000);
	// 시간대별 키비주얼 제어
	if(hours >= 6 && hours < 16){
	
	} else if(hours >= 16 && hours < 19){
		
	} else if(hours >= 19 || hours < 6){
		
	}
});