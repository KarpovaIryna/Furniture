	"use strict";
	let menuBtn = document.querySelector('.hamburger');
	let menu = document.querySelector('.ba-nav');
	let header = document.querySelector('.ba-header');
	menuBtn.addEventListener('click', function(event) {
		menu.classList.toggle('is-active');
		menuBtn.classList.toggle('is-active');
		header.classList.toggle('is-active');
	});
	menu.onclick = function (event) {
		let link = event.target.closest('a');
		if (!link) return;
		menu.classList.remove('is-active');
		menuBtn.classList.remove('is-active');
		header.classList.remove('is-active');
	};
//------------------------=Slider=-----------------------
	$('.ba-slider').slick({
		slide: '.ba-slide',
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.ba-slider__prev',
		nextArrow: '.ba-slider__next',
		responsive: [
		  {
			 breakpoint: 1024,
			 settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			 }
		  },
		  {
			 breakpoint: 640,
			 settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			 }
		  },
		  {
			 breakpoint: 640,
			 settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				arrows: false,
			 }
		  }
		]
	 });
//---------------------=Gallery=-------------------
	 $('[data-fancybox]').fancybox({
		protect: true,
	});