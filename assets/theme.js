
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
    console.log(position.left);
    $('html').animate({scrollTop:$(this).offset().top}, speed, 'swing');
    $('html').animate({scrollLeft:position.left}, speed, 'swing');
  }
  
    return false;
});