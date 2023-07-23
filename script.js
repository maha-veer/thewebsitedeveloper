$(document).ready(function () {
    $('#testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000
    });
    $('.nav-button').click(function () {
        $('.nav-humberger').toggleClass('fa-bars fa-window-close')
    });
});
