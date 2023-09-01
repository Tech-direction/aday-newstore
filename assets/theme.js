
/*===============================================================

	# anchor

===============================================================*/

$(document).on('click', 'a[href^="#"]', function() {
	
	delay = 0;
  h_header = $('.contents-header').height();
	
	w_width = $(window).width();
	if(w_width < 769 ) {
		modal_close();
		$('html,body').attr('style','');
		$('html,body').scrollTop(scroll_top);
		delay = 1000;
	}
  
  href = $(this).attr("href");
	
	setTimeout(function(){
		var speed = 400;
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - h_header;
		
		$('body,html').animate({scrollTop:position}, speed, 'swing');

		return false;
	},delay);
});