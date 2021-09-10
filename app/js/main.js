$(document).ready(function () {

    //slider
    $(function () {
        var slider = $('.slider');

        slider.each(function () {
            var sliderWrapper = $(this).find('.slider__wrapper');

            if ($(this).length && $(this).hasClass('slider-main')) {
                var sliderWrapperNav = $(this).find('.slider__wrapper-nav');

                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    asNavFor: sliderWrapperNav,
                });

                sliderWrapperNav.slick({
                    infinite: true,
                    slidesToScroll: 1,
                    slidesToShow: 12,
                    focusOnSelect: true,
                    variableWidth: true,
                    arrows: false,
                    asNavFor: sliderWrapper,
                });
            }

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

            if ($(this).length && $(this).hasClass('slider-recommend')) {
                sliderWrapper.slick({
                    infinite: false,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                });
            }

            if ($(this).length && $(this).hasClass('slider-video')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true,
                    centerPadding: '60px',
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                });
            }

            if ($(this).length && $(this).hasClass('slider-demo')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    asNavFor: $(this).find('.slider__content .item__wrapper'),
                });

                $(this).find('.slider__content .item__wrapper').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    asNavFor: sliderWrapper,
                    prevArrow: $(this).find('.slider-arrow-prev'),
                    nextArrow: $(this).find('.slider-arrow-next'),
                });
            }
        });
    });

});