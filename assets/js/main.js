(function($){
	jQuery(document).ready(function(){
		$("button.mobile-button").click(function(){
				  $(".menu-area").slideToggle();
				});
		$(".footer-top-area h3").click(function(){
				  $(this).toggleClass("arrow-change").next('ul,.single-footer-select-option,.hola,.newsletter-area form,.social-area').slideToggle();
				});
				
	});
})(jQuery);


  
