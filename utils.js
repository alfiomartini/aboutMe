import { textsWebDev } from "./webdev.js";

function getSlideHTML(title, text, index) {
  return `
    <div class="slide slide--${index}">
      <div class="testimonial">
        <h5 class="testimonial__header">
          ${title}
        </h5>
        <div class="testimonial__text">
          ${text}
        </div>
      </div>
    </div>
  `;
}

function stateHook(val) {
  let value = val;
  return [
    () => value,
    (stateVal) => {
      value = stateVal;
    },
  ];
}

const btnsCollection = document.querySelectorAll(".group__btn");

function activateGroupBtn(btn) {
  btnsCollection.forEach((btn) => btn.classList.remove("active"));
  btn.classList.add("active");
}

function initDevGallery(selector) {
  const slider = document.querySelector(`.slider.${selector}`);
  Object.entries(textsWebDev).forEach((entry, index) => {
    const [title, text] = entry;
    const html = getSlideHTML(title, text, index);
    slider.insertAdjacentHTML("beforeend", html);
  });
  const btnLeft = `<button class="slider__btn slider__btn--left ${selector}">
        <i class="fa-solid fa-arrow-left"></i>
      </button>`;
  const btnRight = `<button class="slider__btn slider__btn--right ${selector}">
     <i class="fa-solid fa-arrow-right"></i>
  </button>`;
  slider.insertAdjacentHTML("beforeend", btnLeft);
  slider.insertAdjacentHTML("beforeend", btnRight);
}

function getBtnLeft(selector) {
  return document.querySelector(`.slider__btn--left.${selector}`);
}

function getBtnRight(selector) {
  return document.querySelector(`.slider__btn--right.${selector}`);
}

function getSlides(selector) {
  return document.querySelectorAll(`.slider.${selector} > .slide`);
}

// note the closure in activateBtn (btnsCollection)
export {
  stateHook,
  activateGroupBtn,
  initDevGallery,
  getSlides,
  getBtnLeft,
  getBtnRight,
};
