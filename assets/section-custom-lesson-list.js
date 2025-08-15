document.addEventListener('DOMContentLoaded', function() {
  // Swiper.jsが読み込まれているかチェック
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper.js is not loaded');
    return;
  }

  // 各レッスンリストのスライダーを初期化
  const lessonSliders = document.querySelectorAll('.custom-lesson-list__swiper-container');

  lessonSliders.forEach((container, index) => {
    const mainSwiper = container.querySelector('.custom-lesson-list__main-swiper');
    const thumbnailSwiper = container.querySelector('.custom-lesson-list__thumbnail-swiper');

    // サムネイルスライダーの初期化
    const thumbnailSwiperInstance = new Swiper(thumbnailSwiper, {
      freeMode: true,
      lazy: true,
      watchSlidesProgress: true,
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        }
      }
    });

    // メインスライダーの初期化
    new Swiper(mainSwiper, {
      spaceBetween: 10,
      loop: true,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: false,
      pagination: false,
      thumbs: {
        swiper: thumbnailSwiperInstance,
      },
    });
  });
});
