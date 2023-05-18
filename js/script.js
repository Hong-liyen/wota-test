/*global $,document,window */

$(document).ready(function () {
	var items = $('.overlapblackbg, .slideLeft');
	var wsmenucontent = $('.wsmenucontent');
	var menuopen = function() {
		$(items).removeClass('menuclose').addClass('menuopen');
		$('body').addClass('overflow-hidden');
	}
	var menuclose = function() { 
		$(items).removeClass('menuopen').addClass('menuclose');
		$('body').removeClass('overflow-hidden');
	}
	$('#navToggle').click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
		else {$(menuopen)}
	});
	wsmenucontent.click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
	});
	$('#navToggle,.overlapblackbg').on('click', function(){
		$('.wsmenucontainer').toggleClass( "mrginleft" );
	});
	
	$('.wsmenu-list li').has('.wsmenu-submenu, .megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	$('.megamenu li').has('.submenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	$('.wsmenu-list li').has('.wsmenu-submenu, .megamenu').children('a').append('<i class="arrow fa fa-angle-down d-none d-xl-inline-flex"></i>');
	$('.wsmenu-click').click(function(){
		$(this).siblings('.wsmenu-submenu').slideToggle('slow').parent('li').siblings().children('.wsmenu-submenu, .megamenu').slideUp('slow');
		$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate').parents('li').siblings().children('.wsmenu-click').children('.wsmenu-arrow').removeClass('wsmenu-rotate');
		$(this).siblings('.megamenu').slideToggle('slow').parent('li').siblings().children('.wsmenu-submenu, .megamenu').slideUp('slow');
	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop>50){
			$('body').addClass('scroll');
		}else{
			$('body').removeClass('scroll');
		}
	});

	$('#search').click(function(){
		$('#search-wrap').toggle();
	});
	new WOW().init();

	$(".slider_prd").slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
		breakpoint: 1280,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
		}
		},
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		}
		}
	]
	});

	var index_swiper = new Swiper('.banner .swiper-container', {
		effect: 'fade',
		speed:1000,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.banner .swiper-pagination',
        	clickable: true,
		},
		navigation: {
			nextEl: '.banner .swiper-button-next',
			prevEl: '.banner .swiper-button-prev',
		},
	});

	$('.gallery').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 0,
		speed: 7000,
		cssEase: "linear",
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});
