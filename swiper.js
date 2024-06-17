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

//модальные окна слайдера
const docSlides = document.querySelectorAll('.swiper-slide-docs img');
const popup = document.querySelector('.popup-image');
const popupImage = popup.querySelector('#popup-image');
const closePopup = document.querySelector('#popup-close');
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

let currentIndex = 0;

docSlides.forEach((item, index) => {
  item.addEventListener('click', () => {
    popupImage.src = item.getAttribute('src');
    popup.classList.toggle('popup-hidden');
    currentIndex = index;
  });
})

closePopup.addEventListener('click', () => {
  popup.classList.toggle('popup-hidden');
})

arrowPrev.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = docSlides.length - 1;
  } else {
    currentIndex--;
  }
  popupImage.src = docSlides[currentIndex].getAttribute('src');
})

arrowNext.addEventListener('click', () => {
  if (currentIndex === docSlides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  popupImage.src = docSlides[currentIndex].getAttribute('src');
})
