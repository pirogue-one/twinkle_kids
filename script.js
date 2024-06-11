'use strict';

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