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
	Hovarable dropdown
	==============================*/
      $('#dropdownMenuLink2').mouseenter(function(){
		  console.log("entered");
		  $('.dropdown-menu').css(
			  {"display":"block",
			  "background-color": "#fff",
			  "padding": "15px 10px",
			  "border-radius":"6px",
			  "box-shadow":"0 16px 56px 0 rgba(0,0,0,0.1)",
			  "transition": "0.3s ease"
			});
		  $('.dropdown-menu').click(() =>{
				$(".dropdown-menu").removeClass("header__dropdown-menu");
				$('.dropdown-menu').hide();
			})		
	  });
	
	  $('.dropdown-menu').mouseleave(function(){
			$('.dropdown-menu').hide();		
	})
	/*==============================
	Mobile navigation
	==============================*/
	$('.header__menu').on('click', function() {
		$(this).toggleClass('header__menu--active');
		$('.header__nav').toggleClass('header__nav--active');
		$("#drop").toggleClass('header__dropdown-menu');
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

