const portfolio = {};

portfolio.smoothScroll = () => {
    $("a").smoothScroll({
      easing: "swing",
      speed: 900
    });
  };

$(function(){
    portfolio.smoothScroll()


})





