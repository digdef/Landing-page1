function slowScroll(id) {
	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, 500);
}
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){   
     $('.header').removeClass('fixed');
   } else {
     $('.header').addClass('fixed');
   }
   lastScrollTop = st;
});
function openMenu(){
  document.getElementById("sidebar").classList.toggle('active');
}