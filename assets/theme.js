
/*===============================================================

	# anchor

===============================================================*/

$(document).on('click', 'a[href^="#"]', function() {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset();
  
  if(!$(this).hasClass('slide-trigger')) {
    $('html').animate({scrollTop:position.top}, speed, 'swing');
    return false;
  }
  else {
    scrollTop = $(window).scrollTop();
    $('html').animate({scrollTop:scrollTop}, speed, 'swing');
    window.history.replaceState(null, '', location.pathname + location.search);
  }
  
    
});
