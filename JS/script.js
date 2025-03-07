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
