$(document).ready(function () {

    //slider
    $(function () {
        var slider = $('.slider');

        slider.each(function () {
            var sliderWrapper = $(this).find('.slider__wrapper');

            if ($(this).length && $(this).hasClass('slider-trust')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                });
            }
        });
    });

});