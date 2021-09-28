/* Template Name: Landrick - Saas & Software Landing Page Template
   Author: Shreethemes
   E-mail: shreethemes@gmail.com
   Created: August 2019
   Version: 2.5
   Updated: July 2020
   File Description: Main JS file of the template
*/

/****************************/
/*         INDEX            */
/*===========================
 *     01.  Loader          *
 *     02.  Menu            *
 *     03.  Sticky Menu     *
 *     03.  Back to top     *
 ===========================*/

! function ($) {
    "use strict";
    // Loader 
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });

        $('a.page-scroll').click(function () {
            if (location.pathname == "/" || this.hash == "#contact") {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 20
                    }, 300);
                    return false;
                }
            }
            else {
                window.location = "/" + this.hash;
            }
        });

        // Menu
        function toggleNav() {
            if ($(window).width() < 992) {
                $('.navbar-toggle').toggleClass('open');
                $('#navigation').slideToggle(200);
            }
        }

        $('.navbar-toggle').on('click', function (event) {
            toggleNav();
        });

        $('.navigation-menu>li>a').on('click', function (event) {
            if ($("#navigation").css("display") == "block") {
                toggleNav();
            }
        });

        $(document).on("click", function (event) {
            var $trigger = $(".navbar-toggle");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                if (
                    $("#navigation").css("display") == "block"
                    && $("#navigation").css("overflow") !== "hidden"
                ) {
                    toggleNav();
                }
            }
        });

        $('.navigation-menu>li').slice(-1).addClass('last-elements');

        $('.menu-arrow,.submenu-arrow').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });

        // $(".navigation-menu a").each(function () {
        //     if (this.href == window.location.href) {
        //         $(this).parent().addClass("active");
        //         $(this).parent().parent().parent().addClass("active");
        //         $(this).parent().parent().parent().parent().parent().addClass("active");
        //     }
        // });

        // Clickable Menu
        $(".has-submenu a").click(function () {
            // if (window.innerWidth < 992) {
            //     if ($(this).parent().hasClass('open')) {
            //         $(this).siblings('.submenu').removeClass('open');
            //         $(this).parent().removeClass('open');
            //     } else {
            //         $(this).siblings('.submenu').addClass('open');
            //         $(this).parent().addClass('open');
            //     }
            // }
        });

        $('.mouse-down').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 72
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });



    //Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });

    //Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    //Popover
    $(function () {
        $('[data-toggle="popover"]').popover()
    });
}(jQuery)

$(document).ready(function () {
    //Feather icon
    feather.replace()
});

$(document).change(function () {
    //Feather icon
    feather.replace()
});