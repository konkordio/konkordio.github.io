/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : cropar
Author          : ThemePaa
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - ThemePaa
========================================================================*/
  

(function($){
    "use strict"
    var CROP = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    CROP.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Header Class
    ----------------------*/
    CROP.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".header").addClass("fixed-header")
        });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    CROP.MenuClose = function(){
      $('s.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    CROP.HeaderScroll = function(){
        $('header a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    CROP.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.header').addClass('fixed-header');
        }
        else {
           $('.header').removeClass('fixed-header');
        }
    }    

    /*--------------------
        * Progress Bar 
    ----------------------*/
    CROP.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    CROP.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

  

    /*--------------------
    * owl Slider
    ----------------------*/
    CROP.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 2
              },
              1140: {
                items: 3
              }
            }
        });
    }

    
    // Window on Load
    $(window).on("load", function(){
      CROP.WebLoad();
    });

    $(document).on("ready", function(){
        CROP.ClientSlider(),
        CROP.MenuClose(),
        CROP.Counter(),
        CROP.ProgressBar(),
        CROP.HeaderScroll(),
        CROP.HeaderSticky();
    });

    $(window).on("scroll", function(){
        CROP.Counter(),
        CROP.ProgressBar(),
        CROP.HeaderFixed();
    });

})(jQuery);


