$(document).ready(function () {
    /*start the loading page */
    jQuery(".loader").fadeOut(3000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.nav-button').click(function(){
        $('.mobile-content').addClass('active-nav');
    });
    $('.circle-time').click(function(){
        $('.work-time').toggleClass('active-time');
    });
    $('.mobile-close').click(function(){
        $('.mobile-content').removeClass('active-nav');
    });
    $('.first-card-header').click(function(){
        $('.first-card-header').toggleClass('active-arrow');
        $('.second-card-header').removeClass('active-arrow');
    });
    $('.second-card-header').click(function(){
        $('.second-card-header').toggleClass('active-arrow');
        $('.first-card-header').removeClass('active-arrow');
    });
    //swipper header screen 
    var swiper = new Swiper('.swiper-header', {
        effect: 'cube',
        loop: true,
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
    });
    //start swipper article
    var swiper = new Swiper('.swiper-article', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            650:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1000:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
     //start swipper locations
     var swiper = new Swiper('.swiper-partner', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            650:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1000:{
                slidesPerView: 7,
                spaceBetween: 30,
            }
        }
    });
});