document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: "auto", // This allows dynamic sizing
        centeredSlides: true,   // Center the slide properly
        spaceBetween: 10,       // Adjust spacing
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            468:{
                slidesPerView: 1,
                centeredSlides: false, 
                spaceBetween: 20,
            },
            768: { 
                slidesPerView: 2,
                centeredSlides: false, 
                spaceBetween: 40,
            },
            1024: { 
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 40,
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".dentistSwiper", {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: false, // Disable pagination bullets

        breakpoints: {
            468: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 40,
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".ChooseSwiper", {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: false, // Disable pagination bullets

        breakpoints: {
            468: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 40,
            }
        }
    });
});

