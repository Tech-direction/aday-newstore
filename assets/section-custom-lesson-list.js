document.addEventListener('DOMContentLoaded', function() {

  // -------------------------------------
  // スライダーの初期化
  // -------------------------------------
  // Swiper.jsが読み込まれているかチェック -------------------------------------
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper.js is not loaded');
    return;
  }

  // 各レッスンリストのスライダーを初期化 -------------------------------------
  const lessonSliders = document.querySelectorAll('.custom-lesson-list__swiper-container');

  lessonSliders.forEach((container, index) => {
    const mainSwiper = container.querySelector('.custom-lesson-list__main-swiper');
    const thumbnailSwiper = container.querySelector('.custom-lesson-list__thumbnail-swiper');

    // サムネイルスライダーの初期化 -------------------------------------
    const thumbnailSwiperInstance = new Swiper(thumbnailSwiper, {
      slidesPerView: 5,
      spaceBetween: 10,
      freeMode: true,
      lazy: true,
      navigation: false,
      pagination: false,
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

    // メインスライダーの初期化 -------------------------------------
    const mainSwiperOptions = {
      spaceBetween: 10,
      loop: true,
      lazy: true,
      navigation: false,
      pagination: false,
      thumbs: {
        swiper: thumbnailSwiperInstance,
      },
    };

    new Swiper(mainSwiper, mainSwiperOptions);
    });

  // -------------------------------------
  // 直接チェックアウトボタンの処理
  // -------------------------------------
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

  // -------------------------------------
  // 詳しく見るボタンの処理
  // -------------------------------------
  const detailButtons = document.querySelectorAll('.custom-lesson-list__detail-content-button');

  // slideToggle相当の関数 -------------------------------------
  function slideToggle(element, duration = 300) {
    const isVisible = element.style.display !== 'none';

    if (isVisible) {
      // 閉じる
      slideUp(element, duration);
    } else {
      // 開く
      slideDown(element, duration);
    }
  }

  // slideDown関数 -------------------------------------
  function slideDown(element, duration) {
    element.style.display = 'block';
    element.style.overflow = 'hidden';

    const height = element.scrollHeight;
    element.style.height = '0px';

    // 強制的にリフロー
    element.offsetHeight;

    element.style.transition = `height ${duration}ms ease-in-out`;
    element.style.height = height + 'px';

    setTimeout(() => {
      element.style.height = '';
      element.style.overflow = '';
      element.style.transition = '';
    }, duration);
  }

  // slideUp関数 -------------------------------------
  function slideUp(element, duration) {
    element.style.overflow = 'hidden';
    element.style.height = element.scrollHeight + 'px';

    // 強制的にリフロー
    element.offsetHeight;

    element.style.transition = `height ${duration}ms ease-in-out`;
    element.style.height = '0px';

    setTimeout(() => {
      element.style.display = 'none';
      element.style.height = '';
      element.style.overflow = '';
      element.style.transition = '';
    }, duration);
  }

  // 詳しく見るボタンのメイン処理 -------------------------------------
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const detailContent = this.closest('.custom-lesson-list__detail-content--about').querySelector('.custom-lesson-list__detail-content-inner');
      const isOpen = detailContent.classList.contains('is-open');

      if (isOpen) {
        // 閉じる
        detailContent.classList.remove('is-open');
        this.classList.remove('is-open');
        this.textContent = '詳しく見る';
        slideUp(detailContent, 300);
      } else {
        // 開く
        detailContent.classList.add('is-open');
        this.classList.add('is-open');
        this.textContent = '閉じる';
        slideDown(detailContent, 300);
      }
    });
  });

});
