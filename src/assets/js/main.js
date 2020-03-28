$(document).ready(function(){


  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
  menu.affix({offset: {top: $('#xxx').offset().top}});
  /*$(window).bind('scroll', function(e){
      if($('#sec2').offset().top)
        if($(window).scrollTop() > 100){
            if(!menu.hasClass('open')){
                menu.addClass('open');
            }
        }else{
      if(menu.hasClass('open')&&!menu.hasClass('mustFixed')){
        menu.removeClass('open');
      }
    }
    });*/


  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);

  });
  $(".navbarscroll").click(function (event) {
    event.preventDefault();
    var xxx = $('#xxx').offset().top;
    if ($(window).scrollTop() <= xxx)
      $('html,body').animate({scrollTop: xxx + 10}, 800);

  });

  var path = window.location.pathname;
  if (path == "/services") {
    $('html,body').animate({scrollTop: $('#services').offset().top - 80}, 800);
  }
  else if (path == "/products") {
    $('html,body').animate({scrollTop: $('#products').offset().top - 150}, 800);
  }
  else if (path == "/work") {


    $('html,body').animate({scrollTop: $('#work').offset().top - 80}, 800);
  }

  $('.productDetailTrigger').click(function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $('#productDetail').offset().top - 80}, 800);
  });

  $(".goToSec2").click(function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $('#sec2').offset().top - 80}, 800);
  });

  $(".goToServices").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $('#services').offset().top - 80}, 800);
  });

  $(".goToProducts").click(function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $('#products').offset().top - 150}, 800);
  });

  $(".goToWork").click(function(event){

    event.preventDefault();
    $('html,body').animate({scrollTop: $('#work').offset().top - 80}, 800);
  });
  $(".goToHome").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $('header').offset().top - 80}, 800);
  });
  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      /*wow.init();*/



});

