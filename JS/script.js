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
    document.addEventListener("DOMContentLoaded", function () {
        var swiper = new Swiper(".custom-swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: ".custom-swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
            },
            breakpoints: {
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".custom-3d-carousel", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: 30,  // Rotation angle
            stretch: 0,  // Stretch between slides
            depth: 250,  // Depth effect
            modifier: 1, // Intensity
            slideShadows: true, // Shadow effect
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,  // Adjust number of visible slides if needed
        spaceBetween: 20, 
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    
  });
  