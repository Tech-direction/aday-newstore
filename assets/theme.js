
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
    $('.shopify-section-group-header-group').addClass('shopify-section-header-hidden');
  }
  
    
});

$(function(){
  $('a[href^=#]').click(function() {
    var position = 0;
    var href= $(this).attr("href");
    if(href.indexOf('#') >= 0 && $(href).size() && href != '' && href != '#'){
      var target = $(href);
      try{
        position = target.offset().top;
      }catch(e){
      }
    }
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = Math.ceil(Math.pow(Math.abs((position - scrollY)), 0.7));
    if(speed){
      $('body, html').animate({scrollTop:position}, speed, 'swing');
    }
    return false;
  });
});