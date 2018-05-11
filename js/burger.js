
$(document).ready(function() {
    var $mobSlider = $( '#mob-menu' );
    var  $burger = $( '#icon-menu' );
    var  $close = $( '#icon-close' );
        $burger.click(function() {
            $burger.hide();
            $close.show();
            $mobSlider.show();
            $mobSlider.animate({
                left: '0px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });
        $close.click(function() {
            $close.hide();
            $burger.show();
            $mobSlider.animate({
                left: '-1000px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });
});

$(document).ready(function() {
    var $sliderScroll = $( '#scroll-mob-menu' );
    var  $burgerScroll = $( '#scroll-icon-menu' );
    var  $closeScroll = $( '#scroll-icon-close' );
    $burgerScroll.click(function() {
        $burgerScroll.hide();
        $closeScroll.show();
        $sliderScroll.show();
        $sliderScroll.animate({
            left: '0px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });

    $closeScroll.click(function() {
        $closeScroll.hide();
        $burgerScroll.show();
        $sliderScroll.animate({
            left: '-1000px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });
});
