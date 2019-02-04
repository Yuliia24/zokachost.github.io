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

var swiper = new Swiper('.system-container', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	pagination: {
	  el: '.swiper-system',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-system-next',
	  prevEl: '.swiper-system-prev',
	},
  });

  var swiper = new Swiper('.comment-container', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: '.swiper-comment',
	  clickable: true,
	},
	});
	


//pop-up
$('.open__menu').on('click', function(){
	$('.pop-up').addClass('active');
	$('.pop-up__bg').fadeIn();
});
$('.pop-up__bg').on('click', function(){
	$('.pop-up').removeClass('active');
	$('.pop-up__bg').fadeOut();
});