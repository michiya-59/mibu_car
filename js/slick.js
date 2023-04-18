// TOPページ
$(function () {
  $(".slider").slick({
    variableWidth: false,
    centerMode: true,
    slidesToShow: 2.33, //表示するスライドの数
    arrows: true, //矢印非表示
    responsive: [
      {
        breakpoint: 769, // タブレットの場合のブレークポイント
        settings: {
          slidesToShow: 1, // 1度に表示するスライド数を3に変更
        }
      },
    ]
  });
});

$(function () {
  $(".company-slider").slick({
    autoplay: true, // 自動再生
    cssEase: 'linear',// アニメーション
    speed: 600, // フェードアニメーションの速度設定
    autoplaySpeed: 2000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    arrows: false, //矢印非表示
  });
});

// 中古車詳細ページ
$(function () {
  $(".detail-slider").slick({
    autoplay: false,
    arrows: false,
    fade: true,
    asNavFor: ".detail-thumbnail",
  });
  $(".detail-thumbnail").slick({
    slidesToShow: 10,
    asNavFor: ".detail-slider",
    focusOnSelect: true,
  });
});