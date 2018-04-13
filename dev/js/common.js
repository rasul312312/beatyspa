$(document).ready(function () {
    var SliderFor = $('.slider-for');
    var SliderNav = $('.slider-nav');
    var SliderNews = $('.slider_news');
    var InformationSlider = $('.infromation_slider');
    var PrinciplesSlider = $('.principles-slider');
    var PhoneUs = $('.phone_us');
    var GalleryContent = $('.gallery-content');
    var CosmeticBoutique = $('.cosmetic-boutique-slider');
    var SetWidth = parseInt($('.uk-container').css('margin-left').split('px')[0]) + 40;


    if (SliderFor !== undefined && SliderFor !== null) {
        SliderFor.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 900,
            asNavFor: '.slider-nav',
            lazyLoad: 'ondemand'
        });
    }
    if (SliderFor !== undefined && SliderFor !== null) {
        SliderFor.on('lazyLoaded', function (event, slick, currentSlide, nextSlide) {
            UIkit.update(event = 'update');
        });
    }
    if (SliderNav !== undefined && SliderNav !== null) {
        SliderNav.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: true,
            dots: false,
            speed: 900,
            appendArrows: $(".home-slider"),
            appendDots: $(".home-slider"),
            nextArrow: '<span class="arrow-left uk-box-shadow-hover-large" uk-icon="icon: arrow-left" id="arrow-left"></span>',
            prevArrow: '<span class="arrow-right uk-box-shadow-hover-large" uk-icon="icon: arrow-right" id="arrow-right"></span>',
            centerMode: false,
            focusOnSelect: true

        });
    }

    if (SliderNews !== undefined && SliderNews !== null) {
        SliderNews.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 900,
            nextArrow: '<span class="arrow-left uk-box-shadow-hover-large" uk-icon="icon: arrow-left" id="arrow-left"></span>',
            prevArrow: '<span class="arrow-right uk-box-shadow-hover-large" uk-icon="icon: arrow-right" id="arrow-right"></span>',
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
            ]
        });
    }

    if (PrinciplesSlider !== undefined && PrinciplesSlider !== null) {
        PrinciplesSlider.slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: false,
            speed: 900,
            nextArrow: '<span class="arrow-right uk-box-shadow-hover-large" uk-icon="icon: arrow-right" id="arrow-right"></span>',
            prevArrow: ' <span class="arrow-left uk-box-shadow-hover-large" uk-icon="icon: arrow-left" id="arrow-left"></span>',
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if (InformationSlider !== undefined && InformationSlider !== null) {
        InformationSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 900,
            nextArrow: '<span class="arrow-right uk-box-shadow-hover-large" uk-icon="icon: arrow-right" id="arrow-right"></span>',
            prevArrow: ' <span class="arrow-left uk-box-shadow-hover-large" uk-icon="icon: arrow-left" id="arrow-left"></span>',
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if (CosmeticBoutique !== undefined && CosmeticBoutique !== null) {
        CosmeticBoutique.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 900,
            nextArrow: '<span class="arrow-right uk-box-shadow-hover-large" uk-icon="icon: arrow-right" id="arrow-right"></span>',
            prevArrow: '<span class="arrow-left uk-box-shadow-hover-large" uk-icon="icon: arrow-left" id="arrow-left"></span>',
            centerMode: false,
            focusOnSelect: true

        });
    }

    $('.home-slider .text').css({ "padding-left": SetWidth + "px" })
    $(window).resize(function () {
        var SetWidth = parseInt($('.uk-container').css('margin-left').split('px')[0]) + 40;
        $('.home-slider .text').css({ "padding-left": SetWidth + "px" })
    })

    if (PhoneUs !== undefined && PhoneUs !== null) {
        PhoneUs.mask('(996) 000-00-00-00');
    }
    if (GalleryContent !== undefined && GalleryContent !== null) {
        GalleryContent.mixItUp();
    }
    if (GalleryContent !== undefined && GalleryContent !== null) {
        GalleryContent.lightGallery({
            selector: '.item'
        });
    }

});


