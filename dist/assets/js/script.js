//preloader close
$(document).ready(()=>{
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });

});

setTimeout(function() {
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });
}, 3000);

// big menu open/close
$(document).ready(function () {
    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.header__bot').toggleClass('show');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header__bot, .open-menu').length) {
            $('.header__bot').removeClass('show');
        }
    });
});

// submenu navigation
$('.submenu__item').on('click', function (e) {
    e.preventDefault();

    const index = $(this).index();

    // Переключаем active у пунктов меню
    $('.submenu__item').removeClass('active');
    $(this).addClass('active');

    // Переключаем active у соответствующего контента
    $('.submenu__content').removeClass('active');
    $('.submenu__content').eq(index).addClass('active');
});

// main page projects tabs func
$('.projects__tab').on('click', function (e) {
    e.preventDefault();

    const index = $(this).index();

    // Переключаем active у пунктов меню
    $('.projects__tab').removeClass('active');
    $(this).addClass('active');

    // Переключаем active у соответствующего контента
    $('.projects__content').removeClass('active');
    $('.projects__content').eq(index).addClass('active');
});