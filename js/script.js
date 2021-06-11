$(function () {

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});

	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		/* nextArrow: '<button type="button" class="slick-prev">Previous</button>' */
	});
	  
})