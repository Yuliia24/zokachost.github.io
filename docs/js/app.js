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
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });

  var swiper = new Swiper('.comment-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });