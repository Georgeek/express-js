(function ($) {
	"use strict"

	var	$window = $(window),
		$this = $(this),
		$face = $('.face'),
		$faces = $('.faces');

	$(document).ready(function() {
		mentoringBubbleClick();
	});

	$window.scroll(function() {
		scrollingSections();
	});

// scroll down faces pop up
	function scrollingSections() {
		var wScroll = $window.scrollTop();
		$('.video-strip').css('background-position', 'center -'+ wScroll +'px');

		// console.log(wScroll);
		if($('section.mentoring').offset().top - 500 < wScroll) {
			if( $window.width() > 640 ) {
				$faces.addClass('launched');

				if( !$face.hasClass('has-bubble-open')) {
					setTimeout(function() {
						$('.face:nth-child(3)').addClass('has-bubble-open');
					}, 500);
				}
			} else {
				mentoringNarrowStart();
			}
		}
	}

// mentoring section, resizing, activating differ tooltips
	$window.resize(function() {
		if( $window.width() > 640 ) {
			mentoringWideStart();
		} else {
			mentoringNarrowStart();
		}
	});

	function mentoringWideStart() {
		$faces.css({
			'top': '0',
			'left': '0'
		});

		$('.face:nth-child(3)').addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
	}

	function mentoringNarrowStart() {
		$faces.css({
			'top': '230px',
			'left': '0'
		});

		$face.first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
	}

// click faces on mentoring section
	function mentoringBubbleClick() {
		$face.on('click', onFaceClick);
	}

	function onFaceClick() {
		var $this = $(this),
			$siblings = $this.siblings(),
			$parent = $this.parent(),

			faceTop = $this.position().top,
			verticalMath = -1 * (faceTop - 230),
			faceLeft = $this.position().left,
			horizontalMath = 0 - faceLeft;

		if( $window.width() > 640 ) {
			$parent.css('top', verticalMath +'px');
		} else {
			if( $this.hasClass('back-btn') ) {
				mentoringNarrowStart();
			} else {
				$parent.css('left', horizontalMath +'px');
			}
		}
		if( !$this.hasClass('back-btn')) {
			$this.addClass('has-bubble-open');
			$siblings.removeClass('has-bubble-open');
		}
	}

})(jQuery);
