"use strict";

const slides = document.querySelectorAll(".slider__item");
const prev = document.querySelector(".slider__button-prev");
const next = document.querySelector(".slider__button-next");
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
        buttonVisability()
    }

    if (n < 1) {
        slideIndex = slides.length ;
        buttonVisability()
    }

    slides.forEach(item => item.classList.add("hidden"));

    slides[slideIndex -1].classList.remove("hidden");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener("click", () => {
    plusSlides(-1)
});

next.addEventListener("click", () => {
    plusSlides(1)
});

function buttonVisability() {
    if(slideIndex === 1) {
        prev.classList.add("hidden");
        next.classList.remove("hidden");
    } else {
        prev.classList.remove("hidden");
        next.classList.add("hidden");
    }
}
