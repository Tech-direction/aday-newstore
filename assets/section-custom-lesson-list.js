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

    // サムネイルスライダーの初期化（全画面サイズで）
    const thumbnailSwiperInstance = new Swiper(thumbnailSwiper, {
      slidesPerView: 5,
      spaceBetween: 10,
      freeMode: true,
      lazy: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          slidesPerView: 5,
        },
        480: {
          slidesPerView: 3,
        },
      },
    });

    // メインスライダーの初期化
    const mainSwiperOptions = {
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
    };

    new Swiper(mainSwiper, mainSwiperOptions);
    });

  // 直接チェックアウトボタンの処理
  const checkoutButtons = document.querySelectorAll('.custom-lesson-list__button a[data-variant-id]');

  checkoutButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      const variantId = this.getAttribute('data-variant-id');
      const quantity = 1;

      // カートに商品を追加してからチェックアウトにリダイレクト
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity
        })
      })
      .then(response => response.json())
      .then(data => {
        // 成功したらチェックアウトページにリダイレクト
        window.location.href = '/checkout';
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        // エラーが発生した場合は通常のリンクにフォールバック
        window.location.href = this.href;
      });
    });
  });



});
