const portfolio = {};

portfolio.smoothScroll = () => {
    $("a").smoothScroll({
      easing: "swing",
      speed: 900
    });
  };

  portfolio.arrowUp = () => {
  $('.arrowUpContainer').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
}

$(function(){
    portfolio.smoothScroll()
    portfolio.arrowUp()


})





