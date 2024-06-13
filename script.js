'use strict';

//header fixed 

const header = document.querySelector('.header-fixed');
const headerH = document.querySelector('.header-fixed').clientHeight;
const navOne = document.querySelector('.nav-one');
const navTwo = document.querySelector('.nav-two');
const navThree = document.querySelector('.nav-three');
const navFour = document.querySelector('.nav-four');
const navFive = document.querySelector('.nav-five');
const navSix = document.querySelector('.nav-six');
const height = document.querySelector('.modal_menu-container')

document.onscroll = function () {

    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
        header.style.backgroundColor = '#FFFFFF';
        navOne.style.color = '#85AFC8';
        navTwo.style.color = '#85AFC8';
        navThree.style.color = '#85AFC8';
        navFour.style.color = '#85AFC8';
        navFive.style.color = '#85AFC8';
        navSix.style.color = '#85AFC8';
        height.style.height = '100vh'
    }

    else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
        header.removeAttribute('style');
        navOne.removeAttribute('style');
        navTwo.removeAttribute('style');
        navThree.removeAttribute('style');
        navFour.removeAttribute('style');
        navFive.removeAttribute('style');
        navSix.removeAttribute('style');
    }
} 

// аккордеон

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener("click", event => {

        accordionItem.classList.toggle("active");
        const accordionItemBody = accordionItem.querySelector(".accordion-body");
        const accArrow = accordionItem.querySelector('.accordion-arrow');
        if (accordionItem.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            accArrow.style.transform = "rotate(90deg)";
        } else {
            accordionItemBody.style.maxHeight = 0;
            accArrow.style.transform = "rotate(0)";
        }

    });
});

// modal 

//menu - hamburger

const closeBtn = document.querySelector('#close');
const modalMenu = document.querySelector('.modal_menu-container');
const mobMenu = document.querySelector('#menu-burger');

mobMenu.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalMenu.style.display = 'none';
})


//выпадающий список

const customSelect = document.querySelectorAll(".custom-select");
for (let i = 0; i < customSelect.length; i++) {
    const el = customSelect[i];
const selectBtn = el.querySelector(".select-button");

const selectedValue = el.querySelector(".selected-value");
const optionsList = el.querySelectorAll(".select-dropdown li");

// add click event to select button
selectBtn.addEventListener("click", () => {
    // preventDefault();
  // add/remove active class on the container element
  el.classList.toggle("active");
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      el.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      el.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});
}
