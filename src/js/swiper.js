// new Swiper('.card-wrapper', {
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },

//   spaceBetween: 20, // Slight gap between slides for a better appearance
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerView: 'auto',

  // Ensure navigation is linked to the custom buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

