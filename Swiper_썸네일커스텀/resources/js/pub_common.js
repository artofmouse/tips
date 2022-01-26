
var mySwiper = new Swiper('.swiper-container', {
	effect: 'fade', // 페이드 효과 사용
	loop: false,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
		renderBullet: function (index, className) {
			if (index == 0) {
				return '<span class="' + className + '"></span>';
			} else {
				// return '<span class="' + className + '"><img src="../resources/images/sec2_thum' + (index) + '.png" alt="크레온"></span>';
				return '<span class="' + className + '"></span>';
			}
		},
	},
	simulateTouch: false,
	autoplayDisableOnInteraction:true,
	stopOnLastSlide: true,
	disableOnInteraction: true,
	// mousewheel: {
	// 	invert: false,
	// },
})
// mySwiper.on('slideChange', function () {
// 	var current_idx = mySwiper.realIndex
// 	// console.log(current_idx);
// 	if (current_idx == 3) {
// 		mySwiper.autoplay.stop();
// 		setTimeout(function () {
// 			$('html').animate({ scrollTop: swiper_off_area }, 400);
// 		}, 2000);
// 	}
// });
$(window).scroll(function () { 
	var scrollValue = $(this).scrollTop();
	// console.log(scrollValue);
	if(scrollValue > kv_area ){
		$(".sticky_btn").addClass('active');
	} else{
		$(".sticky_btn").removeClass('active');
	}
	if (scrollValue > lastScrollTop){
		// console.log('downscroll');
		if(scrollValue > swiper_on_area && scrollValue < swiper_off_area){
			mySwiper.autoplay.start();
			// console.log('start')
		} else if(scrollValue <= swiper_on_area || scrollValue >= swiper_off_area){
			mySwiper.autoplay.stop();
			setTimeout(function () {
				mySwiper.slideTo(0);
			}, 100);
		}
	} else {
		// upscroll code
		if(scrollValue > swiper_on_area && scrollValue < swiper_re_on_area){
			mySwiper.autoplay.start();
			// console.log('start')
		} else if(scrollValue <= swiper_on_area || scrollValue >= swiper_off_area){
			mySwiper.autoplay.stop();
			setTimeout(function () {
				mySwiper.slideTo(0);
			}, 100);
		}
	}
	lastScrollTop = scrollValue;
});