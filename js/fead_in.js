$(document).ready(function () {
  function checkVisibleElements() {
    $(".slide-up").each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("visible");
      }
    });
  }

  checkVisibleElements(); // 初期表示時にチェック
  $(window).on("scroll", checkVisibleElements); // スクロール時にチェック
});
