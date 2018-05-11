$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            $('#scroll-header').fadeIn();
            $('#mob-menu').hide();
            $('#icon-close').hide();
            $('#icon-menu').show();

        } else {
            $('#scroll-header').fadeOut(0.1);
        }
    });

    $("#scroll-to-content").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 80
        }, 1000);
    });

    $("#scroll-to-main-section").click(function() {
        $('html, body').animate({
            scrollTop: $("#up-section").offset().top - 120
        }, 1000);
    });


    function scrollToElement(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top - 80
        }, 1000);
    }

    $('#menu a, #mob-menu a, #scroll-menu a, #scroll-mob-menu a').click(function (e) {
        e.preventDefault();
        scrollToElement(this.dataset.scroll)
    });
});