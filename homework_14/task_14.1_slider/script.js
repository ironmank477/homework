"use strict";

const slides = document.querySelectorAll(".slider__item");
const slider = document.querySelector(".slider");
const prev = document.querySelector(".slider__button-prev");
const next = document.querySelector(".slider__button-next");
let slideIndex = 1;
const dots = []

showSlides(slideIndex);

function showSlides(n) {
    buttonVisability();

    slides.forEach(item => item.classList.add("hidden"));

    slides[slideIndex - 1].classList.remove("hidden");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener("click", () => {
    plusSlides(-1)

   /* dots.forEach(dot => dot.style.opacity = '.5')
    dots[slideIndex - 1].style.opacity = '1';*/
});

next.addEventListener("click", () => {
    plusSlides(1)

    /*dots.forEach(dot => dot.style.opacity = '.5')
    dots[slideIndex - 1].style.opacity = '1';*/
});

function buttonVisability() {
    console.log(slideIndex);
    if (slideIndex === 1) {
        prev.classList.add("hidden");
        next.classList.remove("hidden");
    } else if (slideIndex === slides.length) {
        prev.classList.remove("hidden");
        next.classList.add("hidden");
    } else {
        prev.classList.remove("hidden");
        next.classList.remove("hidden");
    }
}

// indicators



/*slider.style.position = "relative";

const indicators = document.createElement('ol')

indicators.classList.add("slider__indicators");

slider.appendChild(indicators);



//

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    indicators.appendChild(dot);
    dots.push(dot);

    if (i === 0) {
        dot.style.opacity = '1';
    }

}*/
// Indicators

/*
dots.forEach(dot => {
    dot.addEventListener("click", (event) => {
        slideIndex = event.target.getAttribute("data-slide-to")

        dots.forEach(dot => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = '1';
    })
});*/
