(function ($) {

    "use strict";

    $(document).ready(function () {

        $('.all-client').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },

                575: {
                    items: 1,
                },

                768: {
                    items: 1,
                    nav: true,
                    dots: true,
                },

                1000: {
                    items: 1,
                    nav: true,
                    dots: true,
                }
            }
        })


        // Add menu class
        $(function() {
            var header = $(".navbar-icon");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("navbar-icon-fixed");
                } else {
                    header.removeClass("navbar-icon-fixed");
                }
            });
        });

        // Add menu class
        $(function() {
            var header = $(".main-header");
            $(document).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("header-fixed");
                } else {
                    header.removeClass("header-fixed");
                }
            });
        });

        



        // Add menu class
        $(function() {
            var header = $(".main-navbar");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("navbar-fixed");
                } else {
                    header.removeClass("navbar-fixed");
                }
            });
        });

        // Add menu class
        $(function() {
            var header = $(".navbar-logo");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("logo-fixed");
                } else {
                    header.removeClass("logo-fixed");
                }
            });
        });

    });

    // Scroll Top Icon Show & Hide
    $(function () {
        var myWindowScroll = 200;
        $(window).scroll(function () {
            if ($(window).scrollTop() > myWindowScroll) {
                $(".back-to-top a ").fadeIn("slow");
            } else {
                $(".back-to-top a").fadeOut("slow");
            }
        });
    });

    // Back To Top
    $(".back-to-top a").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    // Menu Smooth-scroll
    $(document).ready(function () {
        $('.navbar-nav li a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top - 85
            }, 1000, 'swing');
        });
    });

    

    //Begin Loading Animation
    $(window).load(function() {
        $(".spinner-area").delay(1000).fadeOut("slow");
    });



})(jQuery);