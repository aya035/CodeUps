
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

//要素の取得とスピードの設定
var box = $('.js-colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});