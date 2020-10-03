; (function () {
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
		header.classList.toggle('is-active');
	};
})();