$(function () {

    $('.header-slider').slick({
        dots: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/up-arrow.svg" alt="arrow-icon"></button> ',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icon/down-arrow.svg" alt="arrow-icon"></button> ',
        vertical: true,
    });

    $('.product__name').slick({
        asNavFor: '.product__content',
        slidesToScroll: 1,
        slidesToShow: 6,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev-product"><img src="images/icon/arrow-2.svg" alt="arrow-icon"></button> ',
        nextArrow: '<button type="button" class="slick-next-product"><img src="images/icon/arrow-1.svg" alt="arrow-icon"></button> ',
        vertical: true,
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 4,

                }
            },
           
    ],
        
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.product__name',
        arrows: false,
    });

    $('.menu__button').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

});