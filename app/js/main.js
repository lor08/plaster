$(document).ready(function () {
    //slider
    $(function () {
        var slider = $('.slider');

        slider.each(function () {
            var sliderWrapper = $(this).children('.slider__wrapper');

            if ($(this).length && $(this).hasClass('slider-main')) {

                var sliderNavItem = $(this).parent().find('.slider__wrapper-nav .nav__item');

                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                });

                sliderWrapper.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    sliderNavItem.each(function () {
                        if ($(this).index() == currentSlide) {
                            $(this).addClass('-active');
                        } else {
                            $(this).removeClass('-active');
                        }
                    });
                });


                sliderNavItem.click(function () {
                    if (!$(this).hasClass('-active')) {
                        sliderNavItem.removeClass('-active');
                        $(this).addClass('-active');
                        sliderWrapper.slick('slickGoTo', $(this).index());
                    }
                });
            }

            if ($(this).length && $(this).hasClass('slider-double-video')) {

                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                });

                var sliderItem = $(this).find('.slider__item');

                sliderItem.each(function () {
                    var videoImage = $(this).find('.video-image'),
                        video = $(this).find('.video');

                    videoImage.click(function () {
                        $(this).fadeOut();
                        video.get(0).play();
                    });
                });
            }

            if ($(this).length && $(this).hasClass('slider-catalog')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
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