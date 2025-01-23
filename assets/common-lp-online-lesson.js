$(function() {

  $('a').on('click', function(event) {
    var href = $(this).attr('href'); // アンカーリンクのhref属性を取得
    if (href && href.startsWith('#')) { // hrefが存在し、#で始まる場合のみ処理を実行
      event.preventDefault(); // デフォルトのリンク動作を防ぐ
      var target = $(href); // アンカーリンクのターゲット要素
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80 // ターゲット要素の位置までスクロール（80pxのオフセットを設定）
        }, 500); // スクロールの速度（ミリ秒）
      }
    }
  });

});