$(document).ready(function() {
    $("#owl-carusel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        pagination:true,
        center: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});