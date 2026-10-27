// main page main banner
$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        },
       
    ],
});

$('.trustus__items').slick({
    slidesToShow: 4.5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3.5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2.5
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1.5
            }
        },
       
    ],
});

$('.projects__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM1 7.36401V8.36401H16V7.36401V6.36401H1V7.36401Z" fill="white"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM1 7.36401V8.36401H16V7.36401V6.36401H1V7.36401Z" fill="white"/></svg></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1.2,
            }
        },
       
    ],
});

$('.news__items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM1 7.36401V8.36401H16V7.36401V6.36401H1V7.36401Z" fill="white"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM1 7.36401V8.36401H16V7.36401V6.36401H1V7.36401Z" fill="white"/></svg></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
            }
        },
       
    ],
});

$('.value__slider').slick({
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: true,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM1 7.36401V8.36401H16V7.36401V6.36401H1V7.36401Z" fill="white"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM1 7.36401V8.36401H16V7.36401V6.36401H1V7.36401Z" fill="white"/></svg></div>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        },
       
    ],
});