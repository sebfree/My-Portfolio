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

    $('.hamburger').click(function(){
        // toggle class show on the menu
            $("nav").toggleClass('show');
           $(".hamburger").toggleClass('show');
           $(".exitResponsive").toggleClass('show');
        })
        $('.exitResponsive').click(function(){
            $("nav").toggleClass('show');
           $(".hamburger").toggleClass('show');
           $(".exitResponsive").toggleClass('show');
        })
    
    // write a function that listens to a click on the exit icon
    // toggle class show on the menu
    });






