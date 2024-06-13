'use strict';

const swiper = new Swiper('.swiper-docs', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.docs-button-next',
    prevEl: '.docs-button-prev',
  },
});

const swiperPart = new Swiper('.swiper-partners', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev',
  },
});