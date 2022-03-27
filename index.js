import { Music } from "./music.js";
import { activateGroupBtn, getSlides, stateHook } from "./utils.js";
import { initTextGallery, getBtnLeft, getBtnRight } from "./utils.js";
import { initHobbiesGallery } from "./utils.js";

const music = new Music();

const navbar = document.querySelector(".navbar");
const navDropdownMusic = document.querySelector(".nav__dropdown--music");
const musicSection = document.querySelector(".music");
const btnsContainer = document.querySelector(".group__btns");

function navMusicDropdown(e) {
  e.stopPropagation(); // avoids going into musicSection element
  const target = e.target;
  setGroup(target.dataset.group);
  music.youtube(getGroup());
}

// initialize music section
const [getGroup, setGroup] = stateHook(null);
if (getGroup()) music.youtube(getGroup());

// using delegation - smooth scrolling
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  let href = e.target.href;
  const index = href.indexOf("#");
  href = href.slice(index);
  const section = document.querySelector(href);
  section.scrollIntoView({ behavior: "smooth" });
});

// using delegation - gets song's list using dropdown menu
navDropdownMusic.addEventListener("click", navMusicDropdown);

// using delegation
musicSection.addEventListener("click", music.selectVideo.bind(music));

// using delegation - get song's list using btns
btnsContainer.addEventListener("click", function (e) {
  // stop here to avoid reaching listener in 'musicSection'
  e.stopPropagation();
  const btn = e.target;
  activateGroupBtn(btn);
  const group = btn.dataset.group;
  setGroup(group);
  music.youtube(getGroup());
});

// slides
function gotoSlide(slides, slideNum) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideNum) * 200}%)`;
  });
}

function updateLeftSlide(slides, getSlide, setSlide) {
  let current = getSlide();
  setSlide(--current);
  if (getSlide() === -1) setSlide(slides.length - 1);
  gotoSlide(slides, getSlide());
}

function updateRightSlide(slides, getSlide, setSlide) {
  let current = getSlide();
  setSlide(++current);
  if (getSlide() === slides.length) setSlide(0);
  gotoSlide(slides, getSlide());
}

// update dots
function updateDot(slideNum, selector) {
  const dots = document.querySelectorAll(`.dots__dot.${selector}`);
  dots.forEach((dot, index) => {
    if (slideNum === index) dot.classList.add("dots__dot--active");
    else dot.classList.remove("dots__dot--active");
  });
}
// initialize Webdev Slide Galleries
const [currSlideWeb, setSlideWeb] = stateHook(0);

initTextGallery("webdev");
//  get slides
const webdevSlides = getSlides("webdev");
gotoSlide(webdevSlides, currSlideWeb());
updateDot(currSlideWeb(), "webdev");

const webBtnLeft = getBtnLeft("webdev");
const webBtnRight = getBtnRight("webdev");

webBtnLeft.addEventListener("click", () => {
  updateLeftSlide(webdevSlides, currSlideWeb, setSlideWeb);
  updateDot(currSlideWeb(), "webdev");
});

webBtnRight.addEventListener("click", () => {
  updateRightSlide(webdevSlides, currSlideWeb, setSlideWeb);
  updateDot(currSlideWeb(), "webdev");
});

// initialize Logic Slide Galleries
const [currSlideLogic, setSlideLogic] = stateHook(0);

initTextGallery("logic-in-cs");
//  get slides
const logicSlides = getSlides("logic-in-cs");
gotoSlide(logicSlides, currSlideLogic());
updateDot(currSlideWeb(), "logic-in-cs");

const logicBtnLeft = getBtnLeft("logic-in-cs");
const logicBtnRight = getBtnRight("logic-in-cs");

logicBtnLeft.addEventListener("click", () => {
  updateLeftSlide(logicSlides, currSlideLogic, setSlideLogic);
  updateDot(currSlideLogic(), "logic-in-cs");
});

logicBtnRight.addEventListener("click", () => {
  updateRightSlide(logicSlides, currSlideLogic, setSlideLogic);
  updateDot(currSlideLogic(), "logic-in-cs");
});

// initialize Logic Slide Galleries
const [currSlideHobbies, setSlideHobbies] = stateHook(0);

initHobbiesGallery();
//  get slides
const hobbiesSlides = getSlides("hobbies");
gotoSlide(hobbiesSlides, currSlideHobbies());
updateDot(currSlideHobbies(), "hobbies");

const hobbiesBtnLeft = getBtnLeft("hobbies");
const hobbiesBtnRight = getBtnRight("hobbies");

hobbiesBtnLeft.addEventListener("click", () => {
  updateLeftSlide(hobbiesSlides, currSlideHobbies, setSlideHobbies);
  updateDot(currSlideHobbies(), "hobbies");
});

hobbiesBtnRight.addEventListener("click", () => {
  updateRightSlide(hobbiesSlides, currSlideHobbies, setSlideHobbies);
  updateDot(currSlideHobbies(), "hobbies");
});
