/*$(window).on('load', function(){

  $.prototype.draggable = function() {
    var t;
    $(this).each(function(i,e) {
      $(e).mousedown(function(e2) {
        e2.preventDefault();
        t = $(e);
        $(e).data({
          down: true,
          x: e2.clientX,
          y: e2.clientY,
          left: $(e).scrollLeft(),
          top: $(e).scrollTop()
        });
      });
    });
    $(document).mousemove(function(e) {
      if($(t).data("down")) {
        e.preventDefault();
        $(t).scrollLeft($(t).data("x")+$(t).data("left")-e.clientX);
        $(t).scrollTop($(t).data("y")+$(t).data("top")-e.clientY);
      }
    }).mouseup(function(e) {
      $(t).data("down", false);
    });
  };
  $(".fuatured-blog").draggable();

});*/



$(window).on('load resize', function(){
/*	
	w_width = $(window).width();
	w_height = $(window).height();

  if( 990 < w_width ) {
    if(0 < $('.fuatured-blog').length ) {
      $('.fuatured-blog').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2500,
        centerMode: true,
        prevArrow: false,
        nextArrow: false,
        variableWidth: true,
        /*responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              dots: true,
              arrows: false,
            }
          }
        ]*/
      });
    }
  }
  else {
    if(0 < $('.fuatured-blog.slick-slider').length ) {
      $('.fuatured-blog.slick-slider').slick('unslick');
    }
  }
  */

});