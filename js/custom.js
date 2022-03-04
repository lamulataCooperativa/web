jQuery(document).ready(function( $ ) {

    var controller = new ScrollMagic.Controller();

    if (!isMobileDevice() || window.innerWidth > 767) {
        /* Scroll Magic - scene Portada */

        var tweenPortadaLogo = TweenMax.to(".hero-logo img", 1, { opacity: '0' });
        var tweenPortadaText = TweenMax.to(".rotating", 1, { opacity: '0' });

        new ScrollMagic.Scene({ triggerElement: ".hero-logo", duration: window.innerHeight/4, triggerHook: 0, offset: -200})
            .setTween(tweenPortadaLogo)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: ".hero-logo", duration: window.innerHeight/4, triggerHook: 0, offset: -200})
            .setTween(tweenPortadaText)
            .addTo(controller)

        /* Scroll Magic - scene New Single */

        var tweenNewSingleTitle = TweenMax.to("#newSingle .section-title", 1, { opacity: '1' });
        var tweenNouCDVideo = new TimelineMax()
                .from("#newSingle .nouCD-content", 1.5, {scale: 0.4, opacity: 0})
                .to("#newSingle .nouCD-content", 1.5, {scale: 1, opacity: 1, delay: 7});

        new ScrollMagic.Scene({ triggerElement: "#newSingle", duration: window.innerHeight, triggerHook: 1, offset: 100})
            .setTween(tweenNewSingleTitle)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#newSingle", duration: window.innerHeight, triggerHook: 1, offset: 500})
            .setTween(tweenNouCDVideo)
            .addTo(controller)

        /* Scroll Magic - scene Qui som */

        var tweenAboutText = TweenMax.to(".about-content", 1, { opacity: '1' });

        new ScrollMagic.Scene({ triggerElement: "#about", duration: window.innerHeight/2, triggerHook: 1, offset: 300})
            .setTween(tweenAboutText)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#about", duration: window.innerHeight, triggerHook: 1, offset:  -500})
            .setClassToggle(".about-img", "zap")
            .addTo(controller)

        /* Scroll Magic - scene Maixat */

        var tweenMaixatTitle = TweenMax.to(".section-title", 1, { opacity: '1' });
        var tweenMaixatItem = TweenMax.to(".portfolio-item", 1, { opacity: '1', left: 0 });

        new ScrollMagic.Scene({ triggerElement: "#maixat", duration: window.innerHeight/2, triggerHook: 1, offset: 300})
            .setTween(tweenMaixatTitle)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#maixat", duration: window.innerHeight/2, triggerHook: 1, offset: 100})
            .setTween(tweenMaixatItem)
            .addTo(controller)

        /* Scroll Magic - scene Lletres */

        var tweenLletresItem = new TimelineMax()
                .from(".lletres-item", 1.5, {scale: 0.4, opacity: 0})
                .to(".lletres-item", 1.5, {scale: 1, opacity: 1, delay: 7});

        new ScrollMagic.Scene({ triggerElement: "#lletres", duration: window.innerHeight, triggerHook: 1, offset: 400})
            .setTween(tweenLletresItem)
            .addTo(controller)

        /* Scroll Magic - scene Tròpic del Mediterrani */

        var tweenNouCDTitle = TweenMax.to("#nouCD .section-title", 1, { opacity: '1' });
        var tweenNouCDLeft = TweenMax.to("#nouCD .nouCD-img", 1, { left: '0' });
        var tweenNouCDRight = TweenMax.to("#nouCD .nouCD-content", 1, { left: '0' });

        new ScrollMagic.Scene({ triggerElement: "#nouCD", duration: window.innerHeight, triggerHook: 1, offset: 100})
            .setTween(tweenNouCDTitle)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#nouCD", duration: window.innerHeight, triggerHook: 1, offset: -300})
            .setTween(tweenNouCDLeft)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#nouCD", duration: window.innerHeight, triggerHook: 0, offset: -300})
            .setClassToggle("#nouCD .nouCD-img > img", "img-complet")
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#nouCD", duration: window.innerHeight, triggerHook: 1, offset: -300})
            .setTween(tweenNouCDRight)
            .addTo(controller)

        /* Scroll Magic - scene Marenga */

        var tweenNouCDTitle = TweenMax.to("#marenga .section-title", 1, { opacity: '1' });
        var tweenNouCDLeft = TweenMax.to("#marenga .marenga-img", 1, { left: '0' });
        var tweenNouCDRight = TweenMax.to("#marenga .marenga-content", 1, { left: '0' });

        new ScrollMagic.Scene({ triggerElement: "#marenga", duration: window.innerHeight, triggerHook: 1, offset: 100})
            .setTween(tweenNouCDTitle)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#marenga", duration: window.innerHeight, triggerHook: 1, offset: -300})
            .setTween(tweenNouCDLeft)
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#marenga", duration: window.innerHeight, triggerHook: 0, offset: -300})
            .setClassToggle("#marenga .marenga-img > img", "img-complet")
            .addTo(controller)

        new ScrollMagic.Scene({ triggerElement: "#marenga", duration: window.innerHeight, triggerHook: 1, offset: -300})
            .setTween(tweenNouCDRight)
            .addTo(controller)

        /* Scroll Magic - scene Membres */

        var tweenMembers = TweenMax.staggerFromTo(".animate1", 2, {left: window.innerWidth}, {left: 0, ease: Back.easeOut}, 0.15);

        new ScrollMagic.Scene({triggerElement: "#team", duration: window.innerHeight/2, triggerHook: 1, offset: 400})
            .setTween(tweenMembers)
            .addTo(controller);

        var tweenMembers2 = TweenMax.staggerFromTo(".animate2", 2, {left: window.innerWidth}, {left: 0, ease: Back.easeOut}, 0.15);

        new ScrollMagic.Scene({triggerElement: "#team", duration: window.innerHeight/2, triggerHook: 1, offset: 600})
            .setTween(tweenMembers2)
            .addTo(controller);

        /*FI Scroll Magic*/
    } 

   

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    
    $(".portfolio-item").on("click", function() {
        $("#maixat .active").removeClass("active");
        $(this).addClass("active");

        if ($(".video-centered").find("iframe")[0].src != $(this).data("src") 
            && !$(this).parent().hasClass("disabled")) {
            $(".video-centered iframe").remove();
            $('<iframe width="1020" height="630" frameborder="0" allowfullscreen></iframe>')
                .attr("src", $(this).data("src"))
                .appendTo("#maixat .video-centered");

            if (isMobileDevice() || window.innerWidth <= 767) {
                $('html, body').animate({
                    scrollTop: $(".video-centered").offset().top - 100
                  });

            }
        }
    });


    // Preloader
    $(window).on('load', function() {
        $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
    });

    // Hero rotating texts
    $("#hero .rotating").Morphext({
        animation: "flipInX",
        separator: ",",
        speed: 3000
    });
    
    // Initiate the wowjs
    /* new WOW().init(); */
    
    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {opacity:'show'},
        speed: 400
    });
  
    // Mobile Navigation
    if( $('#nav-menu-container').length ) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
        $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
        $('body').append( $mobile_nav );
        $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
        $('body').append( '<div id="mobile-body-overly"></div>' );
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
        
        $(document).on('click', '.menu-has-children i', function(e){
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });
        
        $(document).on('click', '#mobile-nav-toggle', function(e){
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });
        
        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('body').hasClass('mobile-nav-active') ) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
    
    // Stick the header at top on scroll
    $("#header").sticky({topSpacing:0, zIndex: '50'});

    // Smoth scroll on page hash links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                
                var top_space = 0;
                
                if( $('#header').length ) {
                    top_space = $('#header').outerHeight();
                }
                
                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ( $(this).parents('.nav-menu').length ) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ( $('body').hasClass('mobile-nav-active') ) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                
                return false;
            }
        }
    });
    
    // Back to top button
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
        
    });
    
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    });

});
