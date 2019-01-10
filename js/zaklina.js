(function($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

    window.sr = ScrollReveal();

    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery);

$(window).scroll(function() {
    if ($(document).scrollTop() == 0) {
        $("a#pocetna").toggleClass("active");
    }
});
jQuery(window).scroll(function() {
    jQuery(document).scrollTop() > 500 ? jQuery("a.w-toplink").addClass("active") : jQuery("a.w-toplink").removeClass("active")
}), jQuery(document).ready(function() {
    jQuery(".w-toplink").click(function() {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    })
}), jQuery(document).ready(function() {
    jQuery('a[href^="#vrh"]').on("click", function(e) {
        e.preventDefault();
        var t = this.hash,
            o = jQuery(t);
        jQuery("html, body").stop().animate({
            scrollTop: o.offset().top
        }, 900, "swing", function() {
            window.location.hash = t
        })
    })
}), jQuery(window).scroll(function() {
    jQuery(document).scrollTop() > 500 ? jQuery("a.w-toplink").addClass("active") : jQuery("a.w-toplink").removeClass("active")
}), jQuery(document).ready(function() {
    jQuery(".w-toplink").click(function() {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    })
}), $(document).ready(function() {
    $('a[href^="#vrh"]').on("click", function(e) {
        e.preventDefault();
        var t = this.hash,
            o = $(t);
        $("html, body").stop().animate({
            scrollTop: o.offset().top
        }, 900, "swing", function() {
            window.location.hash = t
        })
    })
});

$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 2000);
});