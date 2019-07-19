var swiperFirst = new Swiper ('.swiper-container-first', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})

var swiperSecond = new Swiper ('.swiper-container-second', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})