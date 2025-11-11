
document.addEventListener('DOMContentLoaded', function () {
  const featuredVoicesSwiper = document.querySelector('.featured-voices-swiper');
  if (!featuredVoicesSwiper) return;

  const swiper = new Swiper(featuredVoicesSwiper, {
    loop: true,
    allowTouchMove: false,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 0,
    },
    navigation: false,
    pagination: false,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      989: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      }
    }
  });
});
