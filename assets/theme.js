
/*===============================================================

	# anchor

===============================================================*/

/*$(document).on('click', 'a[href^="#"]', function() {
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
  }
  
    
});*/

$(document).ready(function(e) {

       $('a[data-area]').click(function() {
           var href = '#' + $(this).attr("data-area");
           var target = $(href == "#" || href == "" ? 'html' : href);
           console.log(target);
           var position = target.offset().top;
           $("html, body").animate({
               scrollLeft: position
           }, 550, "swing");
           return false;
       });
   });