$(document).ready(function () {
    var ov = $('.ov'),
        htmlBody = $('html, body'),
        modal = $('.modal');

    ov.on('click', function () {
        $(this).removeClass('-active');
        $('.aside').removeClass('-active');
        htmlBody.css('overflow-y', 'auto');
        modal.removeClass('modal--active');
    });

    //main-section-image-slide
    $(function () {
        var imageSliderLeft = $('.section-main-image-slider-left'),
            imageItemLeft = imageSliderLeft.find('.image-item'),
            imageSliderRight = $('.section-main-image-slider-right'),
            imageItemRight = imageSliderRight.find('.image-item'),
            n = 0;

        setInterval(function () {
            var lengthArr = imageItemLeft.length,
                currentItem = $(imageItemLeft[n]);

            imageItemLeft.removeClass('-active');
            currentItem.addClass('-active');

            if (n < lengthArr - 1) {
                n++
            } else {
                n = 0;
            }

        }, 5000);

        setInterval(function () {
            var lengthArr = imageItemRight.length,
                currentItem = $(imageItemRight[n]);

            imageItemRight.removeClass('-active');
            currentItem.addClass('-active');

            if (n < lengthArr - 1) {
                n++
            } else {
                n = 0;
            }

        }, 5000);
    });

    //input-mask
    $('.phoneMask').mask('+7 (999) 999-99-99');

    //modal
    $(function () {
        var modalLink = $('*[data-modal]'),
            modalClose = $('.modal__close');

        modalLink.on('click', function () {
            if ($('#' + $(this).data('modal')).length) {
                $('#' + $(this).data('modal')).addClass('modal--active');

                if (!ov.hasClass('-active')) {
                    ov.addClass('-active');
                }
            }
        });

        modalClose.on('click', function () {
            $(this).parents('.modal').removeClass('modal--active');

            if (!modal.hasClass('modal--active')) {
                ov.removeClass('-active');
            }
        });
    });

    //link-border
    $(function () {
        var link = $('.link.link-border');

        if (link.length) {
            link.each(function () {
                var borderWidth = $(this).data('border-width'),
                    borderLength = $(this).data('border-length'),
                    borderColor = $(this).data('border-color'),
                    borderOffset = $(this).data('border-offset');

                if (borderWidth === undefined) {
                    borderWidth = 1;
                }
                if (borderLength === undefined) {
                    borderLength = 10;
                }
                if (borderColor === undefined) {
                    borderColor = '#fff';
                }
                if (borderOffset === undefined) {
                    borderOffset = 2;
                }

                $(this).append('<span class="border -tl" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-top: solid '+ borderWidth +'px '+ borderColor +'; border-left: solid '+ borderWidth +'px '+ borderColor +'; top:'+ borderOffset +'px; left:'+ borderOffset +'px;"></span>');
                $(this).append('<span class="border -tr" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-top: solid '+ borderWidth +'px '+ borderColor +'; border-right: solid '+ borderWidth +'px '+ borderColor +'; top:'+ borderOffset +'px; right:'+ borderOffset +'px;"></span>');
                $(this).append('<span class="border -bl" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-bottom: solid '+ borderWidth +'px '+ borderColor +'; border-left: solid '+ borderWidth +'px '+ borderColor +'; bottom:'+ borderOffset +'px; left:'+ borderOffset +'px;"></span>');
                $(this).append('<span class="border -br" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-bottom: solid '+ borderWidth +'px '+ borderColor +'; border-right: solid '+ borderWidth +'px '+ borderColor +'; bottom:'+ borderOffset +'px; right:'+ borderOffset +'px;"></span>');
            });
        }
    });

    //slider
    $(function () {
        var slider = $('.slider');

        slider.each(function () {
            var sliderWrapper = $(this).children('.slider__wrapper');

            if ($(this).length && $(this).hasClass('slider-main')) {

                var sliderNavItem = $(this).parent().find('.slider__wrapper-nav .nav__item');

                $(sliderNavItem[0]).find('.link').addClass('link-border');

                if (sliderNavItem.length) {
                    sliderNavItem.each(function () {
                        var sliderNavItemLink = $(this).find('.link'),
                            borderLength = 13,
                            borderColor = '#353380',
                            borderOffset = 2,
                            borderWidth = 3;

                        sliderNavItemLink.append('<span class="border -tl" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-top: solid '+ borderWidth +'px '+ borderColor +'; border-left: solid '+ borderWidth +'px '+ borderColor +'; top:'+ borderOffset +'px; left:'+ borderOffset +'px;"></span>');
                        sliderNavItemLink.append('<span class="border -tr" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-top: solid '+ borderWidth +'px '+ borderColor +'; border-right: solid '+ borderWidth +'px '+ borderColor +'; top:'+ borderOffset +'px; right:'+ borderOffset +'px;"></span>');
                        sliderNavItemLink.append('<span class="border -bl" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-bottom: solid '+ borderWidth +'px '+ borderColor +'; border-left: solid '+ borderWidth +'px '+ borderColor +'; bottom:'+ borderOffset +'px; left:'+ borderOffset +'px;"></span>');
                        sliderNavItemLink.append('<span class="border -br" style="width:' + borderLength +'px; height:' + borderLength + 'px; border-bottom: solid '+ borderWidth +'px '+ borderColor +'; border-right: solid '+ borderWidth +'px '+ borderColor +'; bottom:'+ borderOffset +'px; right:'+ borderOffset +'px;"></span>');
                    });
                }

                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    responsive: [
                        {
                            breakpoint: 1440,
                            settings: {
                                arrows: false
                            }
                        }
                    ]
                });

                sliderWrapper.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    sliderNavItem.each(function () {
                        if ($(this).index() === currentSlide) {
                            $(this).addClass('-active');
                            $(this).find('.link').addClass('link-border');
                        } else {
                            $(this).removeClass('-active');
                            $(this).find('.link').removeClass('link-border');
                        }
                    });
                });


                sliderNavItem.click(function () {
                    if (!$(this).hasClass('-active')) {
                        sliderNavItem.removeClass('-active');
                        sliderNavItem.find('.link').removeClass('link-border');
                        $(this).addClass('-active');
                        $(this).find('.link').addClass('link-border');
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
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                dots: true,
                                slidesToShow: 1,
                                adaptiveHeight: true
                            }
                        }
                    ]
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

            if ($(this).length && $(this).hasClass('news__header')) {
                sliderWrapper.slick({
                    infinite: false,
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    arrows: true,
                    focusOnSelect: true,
                    swipeToSlide: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 6,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2,
                            }
                        }
                    ]
                });
            }

            if ($(this).length && $(this).hasClass('slider-detail')) {
                $(this).find('.slider-vertical__wrapper').slick({
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    vertical: true,
                    focusOnSelect: true,
                    asNavFor: $(this).find('.slider-content__wrapper'),
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                vertical: false
                            }
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                vertical: false,
                                slidesToShow: 2,
                            }
                        }
                    ]
                });

                $(this).find('.slider-content__wrapper').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    asNavFor: $(this).find('.slider-vertical__wrapper'),
                })
            }

            if ($(this).length && $(this).hasClass('slider-catalog')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: true
                            }
                        }
                    ]
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
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                arrows: false,
                                dots: true,
                                adaptiveHeight: true
                            }
                        }
                    ]
                });
            }

            if ($(this).length && $(this).hasClass('slider-recommend')) {
                sliderWrapper.slick({
                    infinite: false,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                arrows: false,
                                autoplay: true,
                                autoplaySpeed: 4000,
                                swipeToSlide: true,
                            }
                        }
                    ]
                });
            }

            if ($(this).length && $(this).hasClass('slider-video')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true,
                    variableWidth: true,
                    focusOnSelect: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: false,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: false,
                                arrows: false,
                                dots: true,
                            }
                        }
                    ]
                });
            }

            if ($(this).length && $(this).hasClass('slider-dsc-catalog')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $(this).find('.slider-button-prev'),
                    nextArrow: $(this).find('.slider-button-next'),
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                dots: true,
                            }
                        }
                    ]
                });
            }

            if ($(this).length && $(this).hasClass('news-block') && ($(window).width() < 1199)) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });
            }

            if ($(this).length && $(this).hasClass('slider-demo')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    asNavFor: $(this).find('.slider__content .item__wrapper'),
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false,
                            }
                        }
                    ]
                });

                $(this).find('.slider__content .item__wrapper').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    asNavFor: sliderWrapper,
                    prevArrow: $(this).find('.slider-arrow-prev'),
                    nextArrow: $(this).find('.slider-arrow-next'),
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false,
                            }
                        }
                    ]
                });
            }
        });
    });

    //field-number-count
    $(function () {
        var field = $('.field-number-count');

        if (field.length) {
            field.each(function () {
                var input = $(this).find('.input-number'),
                    arrowPrev = $(this).find('.input-arrow-prev'),
                    arrowNext = $(this).find('.input-arrow-next');

                arrowPrev.on('click', function () {
                    if (input.val() > 0) {
                        input.val(Number(input.val()) - 1);
                    }
                });

                arrowNext.on('click', function () {
                    input.val(Number(input.val()) + 1);
                });
            });
        }
    });

    //catalog-header-button
    $(function () {
        var catalogHeaderButton = $('.catalog-header-button');

        if (catalogHeaderButton.length) {
            catalogHeaderButton.each(function () {
                var link = $(this).find('.link');

                link.on('click', function () {
                    link.removeClass('-active');
                    $(this).addClass('-active');
                });
            });
        }
    });

    //shades-block
    $(function () {
        var shadesBlock = $('.shades-block'),
            shadesList = shadesBlock.find('.shades__list'),
            shadesContent = shadesBlock.find('.shades__content'),
            shadesInfo = shadesBlock.find('.shades__info-wrapper'),
            shadesListItem = shadesList.find('.shades__item'),
            shadesInfoListItem = shadesInfo.find('.shades__info-item'),
            shadesListItemLength = shadesList.find('.shades__item').length,
            shadesButton = shadesBlock.find('.shades__button .link'),
            shadesArrowPrev = shadesBlock.find('.shades__arrows .shades-button-prev'),
            shadesArrowNext = shadesBlock.find('.shades__arrows .shades-button-next'),
            shadesListItemActive = shadesList.find('.shades__item.-active'),
            shadesListItemActiveWidth = shadesListItemActive.outerWidth(true),
            shadesListItemActiveIndex = shadesList.find('.shades__item.-active').index();

        function shadesListItemIndex() {
            var zindexLeft = 1,
                zindexRight = shadesListItemLength,
                shadesListWidth = shadesList.width();

            shadesListItemActive = shadesList.find('.shades__item.-active');
            shadesListItemActiveIndex = shadesList.find('.shades__item.-active').index();

            shadesListItemActive.css('z-index', (shadesListItemLength + 1));

            for (var i = 0; i < shadesListItemLength; i++) {
                if (i < shadesListItemActiveIndex) {
                    $(shadesListItem[i]).css('margin-right', '-' + ($(shadesListItem[i]).width() - (shadesListWidth - shadesListItemActiveWidth) / (shadesListItemLength - 1)) + 'px').css('z-index', zindexLeft);

                    zindexLeft = zindexLeft + 1;
                }

                if (i > shadesListItemActiveIndex) {

                    $(shadesListItem[i]).css('margin-left', '-' + ($(shadesListItem[i]).width() - (shadesListWidth - shadesListItemActiveWidth) / (shadesListItemLength - 1)) + 'px').css('z-index', zindexRight);

                    zindexRight = zindexRight - 1;
                }
            }
        }

        $(window).on('resize', function () {
            if (!shadesContent.hasClass('-opened')) {
                shadesListItemIndex();
            }
        });

        var dataContent, dataId;

        function shadesTabInfo() {
            dataContent = shadesContent.find('.shades__item.-active').data('content');
            shadesInfoListItem.removeClass('-active');
            shadesInfo.find('.shades__info-item[data-info=' + dataContent + ']').addClass('-active');
        }

        shadesListItemIndex();

        shadesTabInfo();

        shadesListItem.on('click', function () {
            shadesListItem.removeClass('-active');
            shadesListItem.removeAttr('style');
            $(this).addClass('-active');

            if (!shadesContent.hasClass('-opened')) {
                shadesListItemIndex();
            }

            shadesTabInfo();
        });

        shadesArrowPrev.on('click', function () {
            var indexActivePrev = 0;
            if (shadesList.find('.shades__item.-active').index() !== 0) {
                indexActivePrev = shadesList.find('.shades__item.-active').index() - 1;
            } else {
                indexActivePrev = shadesListItemLength - 1;
            }

            shadesListItem.removeClass('-active');
            shadesListItem.removeAttr('style');
            $(shadesListItem[indexActivePrev]).addClass('-active');

            shadesListItemIndex();
            shadesTabInfo();
        });

        shadesArrowNext.on('click', function () {
            var indexActiveNext = 0;
            if (shadesList.find('.shades__item.-active').index() !== (shadesListItemLength - 1)) {
                indexActiveNext = (shadesList.find('.shades__item.-active').index() + 1);
            } else {
                indexActiveNext = 0;
            }
            shadesListItem.removeClass('-active');
            shadesListItem.removeAttr('style');
            $(shadesListItem[indexActiveNext]).addClass('-active');

            shadesListItemIndex();
            shadesTabInfo();
        });

        shadesButton.on('click', function () {
            if ($(this).hasClass('-active')) {
                $(this).removeClass('-active');
                $(this).html('Развернуть');
                shadesContent.removeClass('-opened');

                shadesListItemIndex();
            } else {
                shadesListItem.removeAttr('style');
                $(this).addClass('-active');
                $(this).html('Скрыть');
                shadesContent.addClass('-opened');
            }
        });
    });

    //need-tab-block
    $(function () {
        var needTabBlock = $('.need-tab-block'),
            needContent = $('.nt__content'),
            needHeader = $('.nt__header'),
            needHeaderItem = needHeader.find('.list__item'),
            needContentItem = needContent.find('.content__item');

        var headerData, contentData;

        function activeContentItem() {
            headerData = needHeader.find('.list__item.-active').data('id');
            needContentItem.removeClass('-active');
            needContent.find('.content__item[data-content=' + headerData + ']').addClass('-active');
        }

        activeContentItem();

        needHeaderItem.on('click', function () {
            if (!$(this).hasClass('-active')) {
                needHeaderItem.removeClass('-active');
                $(this).addClass('-active');
                activeContentItem();
            }
        });


        needContentItem.each(function () {
            var needButton = $(this).find('.item__button .link'),
                needTextSkipped = $(this).find('.item__text .-skipped');

            needButton.on('click', function () {
                if ($(this).hasClass('-active')) {
                    $(this).removeClass('-active');
                    $(this).html('Разверуть');
                    needTextSkipped.slideUp();
                } else {
                    $(this).addClass('-active');
                    $(this).html('Скрыть');
                    needTextSkipped.slideDown();
                }
            });
        });
    });

    //header-menu
    $(function () {
        var headerMenu = $('.header .header__nav'),
            headerOpener = $('.header .header__menu');

        headerOpener.on('click', function () {
            if ($(this).hasClass('-active')) {
                $(this).removeClass('-active');
                headerMenu.removeClass('-active');
                ov.removeClass('-active');
                htmlBody.css('overflow-y', 'auto');
            } else {
                $(this).addClass('-active');
                headerMenu.addClass('-active');
                ov.addClass('-active');
                htmlBody.css('overflow-y', 'hidden');
            }
        });
    });

    //aside-mobile
    $(function () {
        var aside = $('.aside'),
            asideOpener = $('.content-open-filter'),
            asideClose = $('.aside__close');

        asideOpener.on('click', function () {
            $(this).addClass('-active');
            aside.addClass('-active');
            ov.addClass('-active');
            htmlBody.css('overflow-y', 'hidden');
        });

        asideClose.on('click', function () {
            aside.removeClass('-active');
            ov.removeClass('-active');
            htmlBody.css('overflow-y', 'auto');
        });
    });
});