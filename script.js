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


//header fixed 

const header = document.querySelector('.header-fixed');
const headerH = document.querySelector('.header-fixed').clientHeight;
const navOne = document.querySelector('.nav-one');
const navTwo = document.querySelector('.nav-two');
const navThree = document.querySelector('.nav-three');
const navFour = document.querySelector('.nav-four');
const navFive = document.querySelector('.nav-five');
const navSix = document.querySelector('.nav-six');

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