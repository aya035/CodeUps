
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
  $(".js-hamburger,.js-sp-nav, .js-sp-nav a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").fadeToggle();
    $("html").toggleClass("is-fixed");
  });

  //リサイズ処理
  $(window).resize(function () {
    if (window.matchMedia("(min-width:768px)").matches) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-sp-nav").fadeOut();
    }
  });

  //スライダー
  var swiper = new Swiper('.js-mv-swiper', {
    // Optional parameters
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
    delay: 3000,
    },
  });


  var swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    slidesPerView: 1.26,
    breakpoints: {
      768: {
        slidesPerView: 3.49,
        spaceBetween: 40
      }
    },
    spaceBetween: 24,
    speed: 2000,
    autoplay: {
    delay: 1000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ページトップボタン
  $(document).ready(function(){
    var pageTop = $("#page-top");
    pageTop.hide();
    $(window).on("scroll",function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    
    // フッター手前でストップ
    $("#page-top").hide();
    $(window).on("scroll", function () {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      var footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $("#page-top").css({
          "position": "absolute",
          "bottom": footHeight + 20
        });
      } else {
        $("#page-top").css({
          "position": "fixed",
          "bottom": 20
        });
      }
    });
    pageTop.click(function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          500
        );
        return false;
    });
  });
});