$(window).scroll(function() {
	youtubeVidScroll();
});

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();
	$('.video-strip').css('background-position', 'center -'+ wScroll +'px');
	// console.log(wScroll);
}

$(function() {
	mentoringBubbleClick();
});

function mentoringBubbleClick() {
	$('.face').on('click', function() {
		var faceTop = $(this).position().top,
			verticalMath = faceTop - 230;
		
		console.log(verticalMath);
		$(this).addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');

		// when i click a face get the distance of the face from its parent
		// and then move the whole container up 115px + count oh hover
		// after we add is-open class to the face, pop the baloon
		$

	});
}
