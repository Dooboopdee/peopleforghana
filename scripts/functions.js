$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Look how far #accordian is from the top of the DOM
	if (wScroll > $('#ghanaFlag').offset().top) {
		console.log("hi");

		$('#ghanaFlag').addClass('isShowing');
	}
});