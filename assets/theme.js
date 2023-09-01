
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
    $('.section-header').addClass('shopify-section-header-hidden');
    $('.section-header').style('top': 0);
  }
  
    
});

(function(){
  window.addEventListener("click" , check_click);

  function check_click(e){
    let target = e.target;
    if(!target || target.tagName !== "A"){return;}
    let href = target.getAttribute("href");
    if(href.indexOf("#") === -1){return;}
    if(href.match(/^[http:|https:|\/\/]/)){return;}
    setTimeout(hash_link_url_adjust , 0);
  }

  function hash_link_url_adjust(href){
    let sp = location.href.split("#");
    history.pushState(null, null, sp[0])
  };
})()