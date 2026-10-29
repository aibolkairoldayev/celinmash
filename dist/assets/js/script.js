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

//container margins func
var wholeWidth = $(window).width();
var containerWidth = $('.container').width();
var containerMargin = (wholeWidth - containerWidth) / 2;
$('.value').css('margin-left', containerMargin + 'px');
$('.value__slider .arrowLeft').css('margin-right', containerMargin + 'px');
$('.value__slider .arrowRight').css('margin-right', containerMargin + 'px');

//burger open/close
$('.header__btn').on('click', function () {
    $(this).toggleClass('open');
    $('.burger').toggleClass('open');
});

$(window).on('resize', function () {
    if ($(window).width() > 992) {
        $('.header__btn, .burger').removeClass('open');
    }
});

//choose modal open/close
function openChoose() {
    $('.choose__right').addClass('show');
    $('body').css('overflow', 'hidden');
}
function closeChoose() {
    $('.choose__right').removeClass('show');
    $('body').css('overflow', 'unset');
}

//footer accordion func
$('.footer__item b').on('click', function () {
    const $item = $(this).closest('.footer__item');

    $('.footer__item').not($item).removeClass('show');
    $item.toggleClass('show');
});

//custom dropdown
$(function () {
    const selectSelector = '.custom-select';
    const triggerSelector = '.custom-select__trigger';
    const optionSelector = '.custom-select__option';

    function closeSelect($select) {
        $select.removeClass('is-open');

        $select.find(triggerSelector).attr('aria-expanded', 'false');
        $select.find('.custom-select__option').attr('tabindex', '-1');
    }

    function closeAllSelects($except) {
        $(selectSelector).each(function () {
            const $select = $(this);

            if (!$except || !$select.is($except)) {
                closeSelect($select);
            }
        });
    }

    function openSelect($select) {
    closeAllSelects($select);

    $select.addClass('is-open');
    $select.find(triggerSelector).attr('aria-expanded', 'true');

    const $options = $select.find(optionSelector).not('.is-disabled');
    const $selected = $options.filter('.is-selected').first();

    $options.removeClass('is-focused').attr('tabindex', '-1');
    if ($selected.length) {
        $selected.addClass('is-focused').attr('tabindex', '0');
    }
}

    function selectOption($select, $option) {
        if (!$option.length || $option.hasClass('is-disabled')) {
            return;
        }

        const text = $.trim($option.text());
        const value = $option.attr('data-value') ?? text;

        $select.find('.custom-select__value').text(text);

        $select.find('.custom-select__input').val(value).trigger('change');

        $select.find(optionSelector)
            .removeClass('is-selected is-focused')
            .attr('aria-selected', 'false')
            .attr('tabindex', '-1');

        $option
            .addClass('is-selected')
            .attr('aria-selected', 'true');

        closeSelect($select);
    }

    // Открытие и закрытие по клику
    $(document).on('click', triggerSelector, function () {
        const $select = $(this).closest(selectSelector);

        if ($select.hasClass('is-open')) {
            closeSelect($select);
        } else {
            openSelect($select);
        }
    });

    // Выбор варианта
    $(document).on('click', optionSelector, function () {
        const $option = $(this);
        const $select = $option.closest(selectSelector);

        selectOption($select, $option);
    });

    // Закрытие при клике за пределами dropdown
    $(document).on('click', function (event) {
        if (!$(event.target).closest(selectSelector).length) {
            closeAllSelects();
        }
    });

    // Управление клавиатурой
    $(document).on('keydown', function (event) {
        const $target = $(event.target);
        const $select = $target.closest(selectSelector);

        if (!$select.length) {
            return;
        }

        const isTrigger = $target.is(triggerSelector);
        const isOption = $target.is(optionSelector);

        if (!isTrigger && !isOption) {
            return;
        }

        const $options = $select.find(optionSelector).not('.is-disabled');
        const $current = $options.filter('.is-focused');
        let index = $options.index($current);

        if (event.key === 'Escape') {
            if ($select.hasClass('is-open')) {
                event.preventDefault();
                closeSelect($select);
                $select.find(triggerSelector).trigger('focus');
            }

            return;
        }

        if (event.key === 'Tab') {
            closeSelect($select);
            return;
        }

        if (
            isTrigger &&
            !event.altKey &&
            ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)
        ) {
            event.preventDefault();

            if (!$select.hasClass('is-open')) {
                openSelect($select);
                return;
            }
        }

        if (!$select.hasClass('is-open')) {
            return;
        }

        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();

            if (!$options.length) {
                return;
            }

            if (index < 0) {
                index = event.key === 'ArrowDown' ? -1 : 0;
            }

            index += event.key === 'ArrowDown' ? 1 : -1;

            if (index >= $options.length) {
                index = 0;
            }

            if (index < 0) {
                index = $options.length - 1;
            }

            $options.removeClass('is-focused').attr('tabindex', '-1');

            const $next = $options.eq(index);

            $next.addClass('is-focused').attr('tabindex', '0');
            $next[0].scrollIntoView({ block: 'nearest' });

            return;
        }

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();

            const $focused = $options.filter('.is-focused').first();

            if ($focused.length) {
                selectOption($select, $focused);
            }
        }
    });
});