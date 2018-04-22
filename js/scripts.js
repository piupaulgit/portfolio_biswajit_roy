/*****************************************/

/* Author: radekthemes */
/* Template: Ross - Personal Portfolio */
/* Version: 1.0 */

/*****************************************/

//Document on ready functions
$(document).ready(function(){
  "use strict";

/*************************/
/*       PRELOADER       */
/*************************/
  //After 2s preloader is fadeOut
  $('.preloader').delay(2000).fadeOut('slow');
  setTimeout(function() {
    //After 2.5s, the no-scroll class of the body will be removed
    $('body').removeClass('no-scroll');
  }, 2000); //Here you can change preloader time

  /*************************/
  /*  EFFECT AFTER SCROLL  */
  /*************************/
  $(window).on('scroll',function() {
    var buttonUp = $('.button-up');
    var navbarFixedTop = $('.navbar-fixed-top');
    //Adding background for .navbar after scroll more than 280
    if ($('.navbar').offset().top > 280) {
      $(navbarFixedTop).addClass('top-nav-collapse');
      $(buttonUp).fadeIn(300);
    } else {
      //Removing all adding styles
      $(navbarFixedTop).removeClass('top-nav-collapse');
      $(buttonUp).fadeOut(300);
    }
  });

  //Close the menu by clicking on the link
  $('.navbar-nav li a').on('click', function() {
   //Check if window is small enough so dropdown is created
   var toggle = $('.navbar-toggle').is(':visible');
   if (toggle) {
     //After click on link in menu navbar is close
     $('.navbar-collapse').collapse('hide');
   }
  });

  /*************************/
  /*      SMOOTH SCROLL    */
  /*************************/
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 96,
              }, 1000);
              return false;
          }
    }
  });

  /*************************/
  /* OWLCAROUSEL OPTIONS */
  /*************************/
  var owl = $('.owl-carousel');
      owl.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed :900,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:1
          },
          1000:{
            items:1
          }
        }
    });

    /********************/
    /*    WOW.JS INIT   */
    /********************/
    new WOW().init();

    /********************/
    /*    MIXITUP.JS   */
    /********************/
    $('.mixitup-wrapper').mixItUp();

    //Adding/removing active class to portfolio filter buttons
    var portfolioFilter = $('.filter-button li');
    $(portfolioFilter).on('click', function(){
      //Remove active class from button
      $(portfolioFilter).removeClass('active');
      //Add active class to clicked button
      $(this).addClass('active');
    });

}); //end jquery document ready