var kv_area = $('.kv_area').height();
var kv_sub_area = $('.kv_sub_area').height();
var event_area = $('.event_area').height();
var guide_area = $('.guide_area').height();
var lastScrollTop = 0;

$(document).ready(function () {
	var scrollValue = $(this).scrollTop();
	// var kv_area = $('.kv_area').height();

	// 하단 스티키 제어
	if(scrollValue > kv_area ){
		$(".sticky_btn").addClass('active');
	} else{
		$(".sticky_btn").removeClass('active');
	}
});
$(window).scroll(function () { 
	var scrollValue = $(this).scrollTop();
	// console.log(scrollValue);
	if(scrollValue > kv_area ){
		$(".sticky_btn").addClass('active');
	} else{
		$(".sticky_btn").removeClass('active');
	}
	lastScrollTop = scrollValue;
});