$(".items").slick({
	arrows: false,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
