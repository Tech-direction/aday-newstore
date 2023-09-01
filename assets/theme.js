
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
  }
  else {
    $('html').animate({scrollTop:$(this).offset().top}, speed, 'swing');
    if($(this).hasClass('next')) {
      $('html').animate({scrollRight:position.right}, speed, 'swing');
    }
  }
  
    return false;
});