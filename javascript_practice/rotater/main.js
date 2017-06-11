'use strict';

$(function() {

	//config
	let width = 720,
		animationSpeed = 500,
		pause = 1000,
		currentSlide = 1;

	//cache DOM
	let $slider = $('#slider'),
		$slideContainer = $slider.find('.slides'),
		$slides = $slideContainer.find('.slide'); 


	let interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				currentSlide++;
				if(currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 720);
					$slideContainer.animate({'margin-left': '0'}, animationSpeed);
				}
			});
		}, pause);
	}

	function stopSlider() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();

});