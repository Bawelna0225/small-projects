const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    '@0.50': {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    '@1.00': {
      slidesPerView: 2,
      spaceBetween: 50,
    },
        '@1.25': {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});
// Now you can use all slider methods like
