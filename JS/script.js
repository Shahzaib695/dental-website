document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,  // Default for mobile
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { 
                slidesPerView: 2, 
                centeredSlides: false, 
                spaceBetween: 20,
            },
            1024: { 
                slidesPerView: 3, 
                centeredSlides: false, 
                spaceBetween: 30,
            }
        }
    });
});
