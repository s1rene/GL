document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelector('.header__numbers');

    numbers.addEventListener('mouseenter', () => {
        numbers.classList.add('open');
    });

    numbers.addEventListener('mouseleave', () => {
        numbers.classList.remove('open');
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});


