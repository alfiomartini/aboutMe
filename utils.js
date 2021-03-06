import { textsWebDev } from "./webdev.js";
import { textsLogic } from "./logic_in_cs.js";
import { hobbies } from "./hobbies.js";

function getSlideHTML(title, text, index, image) {
  return `
    <div class="slide slide--${index}">
      <div class="testimonial">
        <h5 class="testimonial__header">
          ${title}
        </h5>
        <div class="testimonial__text">
          <img src="${image}" alt="image" />
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

function initHobbiesGallery() {
  const slider = document.querySelector(`.slider.hobbies`);
  hobbies.forEach((hobby, index) => {
    const { image, text } = hobby;
    const slide = `<div class="slide hobbies">
      <img src="${image}" alt="Photo-${index}">
    </div>`;
    slider.insertAdjacentHTML("beforeend", slide);
  });
  const btnLeft = `<button class="slider__btn slider__btn--left hobbies">
        <i class="fa-solid fa-arrow-left"></i>
      </button>`;
  const btnRight = `<button class="slider__btn slider__btn--right hobbies">
     <i class="fa-solid fa-arrow-right"></i>
  </button>`;
  slider.insertAdjacentHTML("beforeend", btnLeft);
  slider.insertAdjacentHTML("beforeend", btnRight);
  const dots = document.createElement("div");
  dots.classList.add("dots", "hobbies");
  Object.entries(hobbies).forEach((_, index) => {
    const btn = `<button class="dots__dot hobbies" data-slide="${index}"></button>`;
    dots.insertAdjacentHTML("beforeend", btn);
  });
  slider.append(dots);
}

function initTextGallery(selector) {
  const slider = document.querySelector(`.slider.${selector}`);
  let content;
  if (selector === "webdev") content = textsWebDev;
  if (selector === "logic-in-cs") content = textsLogic;
  const { readme, images } = content;
  Object.entries(readme).forEach((entry, index) => {
    const [title, text] = entry;
    const html = getSlideHTML(title, text, index, images[index]);
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
  const dots = document.createElement("div");
  dots.classList.add("dots", `${selector}`);
  Object.entries(readme).forEach((_, index) => {
    const btn = `<button class="dots__dot ${selector}" data-slide="${index}"></button>`;
    dots.insertAdjacentHTML("beforeend", btn);
  });
  slider.append(dots);
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
  initTextGallery,
  getSlides,
  getBtnLeft,
  getBtnRight,
  initHobbiesGallery,
};
