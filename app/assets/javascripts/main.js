$(document).ready(function () {
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
	Partners slider
	==============================*/
	$('.partners__slider').owlCarousel({
		mouseDrag: true,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 500,
		responsive : {
			0 : {
				items: 3,
				margin: 20
			},
			576 : {
				items: 1,
				margin: 20
			},
			768 : {
				items: 3,
				margin: 20
			},
			992 : {
				items: 3,
				margin: 25
			},
			1200 : {
				items: 3,
				margin: 30
			}
		}
	});

	/*==============================
	Testimonial slider
	==============================*/
	$('.testimonial-slider').owlCarousel({
		mouseDrag: false,
		dots: true,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		smartSpeed: 500,
		margin: 0,
		responsive : {
			0 : {
				items: 1,
				margin: 15,
			},
			576 : {
				items: 1,
				margin: 0,
			},
			992 : {
				items: 2,
			},
			1200 : {
				items: 3,
			}
		}
	});

	/*==============================
	Section background img
	==============================*/
	$('.section--bg').each(function(){
		if ($(this).attr('data-bg')){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
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

	/*==============================
	Modal
	==============================*/
	$('.section__video').magnificPopup({
		removalDelay: 200,
		type: 'iframe',
		preloader: false,
		mainClass: 'mfp-fade',
	});

	/*==============================
	Switcher
	==============================*/
	$('.switcher__picker').on('click', function() {
		$('.switcher').toggleClass('switcher--open');
	});

	$('#color1').on('click', function() {
		$('#switch-color').attr('href','css/main-color1.css');
	});
	$('#color2').on('click', function() {
		$('#switch-color').attr('href','css/main-color2.css');
	});
	$('#color3').on('click', function() {
		$('#switch-color').attr('href','css/main-color3.css');
	});
	$('#color4').on('click', function() {
		$('#switch-color').attr('href','css/main-color4.css');
	});
});


(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);
