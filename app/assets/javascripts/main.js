$( document ).on('turbolinks:load', function() {
	"use strict";

	/*==============================
	Header
	==============================*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0){
			$('.header').addClass("header--active");
		} else {
			$('.header').removeClass("header--active");
		}
	});

	/*==============================
	Mobile navigation
	==============================*/
	$('.header__menu').on('click', function() {
		$(this).toggleClass('header__menu--active');
		$('.header__nav').toggleClass('header__nav--active');
		$('.header__btns').toggleClass('header__btns--active');
	});

	/*==============================
	Smooth scroll
	==============================*/
	var scroll = new SmoothScroll('[data-scroll]', {
		ignore: '[data-scroll-ignore]',
		header: '.header',
		speed: 600,
		offset: 0,
		easing: 'easeInOutCubic',
	});

    var tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/9orfbm4aywifrkscsmpex1dazyw6d7p8.js';
    document.body.appendChild(tidioScript);
    tidioChatApi.display(true);
    //$('.prettySocial').prettySocial();
});

