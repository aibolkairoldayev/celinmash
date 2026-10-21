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

//career page accordion func
$('.vacs__btn img').on('click', function() {
    $(this).closest('.vacs__item').toggleClass('show');
});

// main modal open/close
function openModal() {
    $('.appl2').addClass('open');
    $('body').css('overflow', 'hidden');
}
function closeModal() {
    $('.appl2').removeClass('open');
    $('body').css('overflow', 'unset');
}
$('.modal__bg').click(()=> {
    closeModal()
})

// career modal open/close
function openModal2() {
    $('.career-m').addClass('open');
    $('body').css('overflow', 'hidden');
}
function closeModal2() {
    $('.career-m').removeClass('open');
    $('body').css('overflow', 'unset');
}
$('.modal__bg').click(()=> {
    closeModal2()
})

// news page tabs func
$('.news2__tab').on('click', function () {
    const index = $(this).index();

    $('.news2__tab').removeClass('active');
    $(this).addClass('active');

    $('.news2__tabs').removeClass('active').eq(index).addClass('active');
    $('.news2__content').removeClass('active').eq(index).addClass('active');
});

//news page tabs 2nd level 
$('.news2__tab2').on('click', function () {
    const $tab = $(this);
    const index = $tab.index();

    // Находим родительскую группу табов
    const $tabsGroup = $tab.closest('.news2__tabs');

    // Определяем индекс группы: 0 или 1
    const groupIndex = $tabsGroup.index();

    // Находим соответствующую группу контента
    const $contentGroup = $('.news2__content').eq(groupIndex);

    // Переключаем active только внутри своей группы табов
    $tabsGroup.children('.news2__tab2').removeClass('active');
    $tab.addClass('active');

    // Переключаем active только внутри соответствующей группы контента
    $contentGroup.children('.news2__content2').removeClass('active');
    $contentGroup.children('.news2__content2').eq(index).addClass('active');
});