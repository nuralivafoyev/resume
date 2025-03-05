// var swiper = new Swiper (".swiper", {
//     initialSlide: 3,
//     loop: true,
//     centeredSlides: true,
//     allowTouchMove: true,
//     speed: 900,
//     effect: "coverflow",
//     grabCursor: true,
//     coverflowEffect: {
//         rotate: -10,
//         strech: -45,
//         depth: 90,
//         modifier: 1,
//         slideShadows: true
//     },
//     mousewheel: {
//         thresholdDelta: 50,
//         sensicivity: 1,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             spaceBetween: 20
//         },
//         600: {
//             slidesPerView: 3,
//         },
//         1200: {
//             slidesPerView: 7,
//         },
//     },
// });

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 15}%)`;
}

// Slayderni avtomatik ravishda harakatlantirish
function autoSlide() {
    setInterval(() => {
        moveSlide(1); // Slayderni oldinga siljitish
    }, 3000); // 3000 millisekund (3 sekund)
}

// Boshlanishda avtomatik slayderni ishga tushurish
autoSlide();
