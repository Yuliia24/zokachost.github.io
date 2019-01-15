$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});



var swiper = new Swiper('.intro-swiper', {
	
	navigation: {
		nextEl: '.swiper-intro-next',
		prevEl: '.swiper-intro-prev',
	},
});