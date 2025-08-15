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
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 15,
        }
      }
    });

    // メインスライダーの初期化
    const mainSwiperInstance = new Swiper(mainSwiper, {
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: mainSwiper.querySelector('.swiper-button-next'),
        prevEl: mainSwiper.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: mainSwiper.querySelector('.swiper-pagination'),
        clickable: true,
      },
      thumbs: {
        swiper: thumbnailSwiperInstance,
      },
    });
  });
});
