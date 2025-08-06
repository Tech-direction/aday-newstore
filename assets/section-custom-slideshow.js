document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.custom-slideshow__container');
  if (!slider) return;

  const swiper = new Swiper(slider, {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        speed: 500,
      },
    },
  });
});