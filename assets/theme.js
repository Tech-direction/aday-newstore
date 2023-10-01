$(window).on('scroll', function(){
  
});


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
    //return false;
  }
  else {
    scrollTop = $(window).scrollTop();
    $('html').animate({scrollTop:scrollTop}, speed, 'swing');

    let href = $(this).attr("href");
    setTimeout(hash_link_url_adjust , 0);
    
    $('.shopify-section-group-header-group').css('top', 'calc(-1 * var(--header-height))');
      setTimeout(function(){
        $('.shopify-section-group-header-group').addClass('shopify-section-header-hidden');
        $('.shopify-section-group-header-group.shopify-section-header-hidden').attr('style', '');
    },40);

    $(this).parents('.slide-trigger-wrapper').find('.slide-trigger').removeClass('active');
    if($(this).hasClass('slide-next')) {
      $(this).parents('.slide-trigger-wrapper').find('.slide-trigger.slide-prev').addClass('active');
    }
    if($(this).hasClass('slide-prev')) {
      $(this).parents('.slide-trigger-wrapper').find('.slide-trigger.slide-next').addClass('active');
    }
  }
});

function hash_link_url_adjust(href){
  let sp = location.href.split("#");
  history.pushState(null, null, sp[0])
};


/*===============================================================

	# edit account

===============================================================*/

$(document).on('click', '.account_edit', function() {

  if(!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('.account_edit_form').addClass('active');
  }
  else {
    $(this).removeClass('active');
    $('.account_edit_form').removeClass('active');
  }

});


