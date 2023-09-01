
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

    let href = $(this).attr("href");
    setTimeout(hash_link_url_adjust , 0);


		$('.shopify-section-group-header-group').css('top': '0');

    
    
  }
  
    
});

function hash_link_url_adjust(href){
  let sp = location.href.split("#");
  history.pushState(null, null, sp[0])
};