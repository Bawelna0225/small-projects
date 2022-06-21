const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,        
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});