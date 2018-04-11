$(function() {
	
	$('#about_car').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: true,
		autoplay: false,
		smartSpeed: 700
	});

	$('#review_car').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		nav: true,
		autoplay: false,
		smartSpeed: 700,
		responsive: {
			0: {
				items: 1
			},
			950: {
				items: 2
			}
		},
		navText: ["&lsaquo;", "&rsaquo;	"]
	});

});
