(function ($) {

    "use strict";

    $(document).ready(function () {

        $('.main-slider').owlCarousel({
            loop: true,
            autoplay: false,
            dots:true,
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
                    dots: false,
                },

                1000: {
                    items: 1,
                    nav: false,
                    dots: true,
                }
            }
        })






        // masonry

      

        // manu off convars 

        $(".manu-off-convars").on("click", function(){
            $(".off-canvars-manu, .off-canvars-overlay").addClass("active");
            return false;
        });

        $(".manu-close, .off-canvars-overlay").on("click", function(){
            $(".off-canvars-manu, .off-canvars-overlay, .search-box").removeClass("active");
        });

        $(".fa-searchs").on("click", function(){
            $(".search-box, .off-canvars-overlay").addClass("active");
            return false;
        });

        $(function() {
            var header = $(".header");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 500) {
                    header.addClass("header-fixed");
                } else {
                    header.removeClass("header-fixed");
                }
            });
        });

    });


 


})(jQuery);