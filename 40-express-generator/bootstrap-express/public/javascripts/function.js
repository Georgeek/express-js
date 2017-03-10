(function ($) {
	"use strict"
	
	var 
		$window = $(window),
		$face = $('.face'),
		$faces = $('.faces');

	$window.scroll(function() {
		youtubeVidScroll();
		startMentoring();
	});

	$(function() {
		mentoringBubbleClick();
	});

	$window.resize(function() {
		if( $(window).width() > 640 ) {
			mentoringWideStart();
		} else {
			mentoringNarrowStart();
		}
	});

	function youtubeVidScroll() {
		var wScroll = $(window).scrollTop();
		$('.video-strip').css('background-position', 'center -'+ wScroll +'px');
	}

	function mentoringBubbleClick() {
		$face.on('click', function() {
			var faceTop = $(this).position().top,
				verticalMath = -1 * (faceTop - 230),
				faceLeft = $(this).position().left,
				horizontalMath = 0 - faceLeft;

			if( $window.width() > 640 ) {
				$(this).parent().css('top', + verticalMath +'px');
			} else {
				if( $(this).hasClass('back-btn') ) {
					mentoringNarrowStart();
				} else {
					$(this).parent().css('left', + horizontalMath +'px');
				}
			}
			if( !$(this).hasClass('back-btn')) {
				$(this).addClass('has-bubble-open')
				.siblings().removeClass('has-bubble-open');
			}
		});
	}

	function startMentoring() {
		var wScroll = $(window).scrollTop();
		// console.log(wScroll);
		if($('section.mentoring').offset().top - 300 < wScroll) {
			if( $window.width() > 640 ) {
				$('.faces').addClass('launched');
				
				if( !$('.face').hasClass('has-bubble-open') && $(this).hasClass('back-btn')) {
					setTimeout(function() {
						$('.face:nth-child(3)').addClass('has-bubble-open');
					}, 500);
				}
			} else {
				mentoringNarrowStart();
			}
		}
	}

	function mentoringWideStart() {
		$('.faces').css({
			'top': '0',
			'left': '0'
		});
		$('.face:nth-child(3)').addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
	}

	function mentoringNarrowStart() {
		$('.faces').css({
			'top': '230px',
			'left': '0'
		});
		$('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
	}

})(jQuery);
