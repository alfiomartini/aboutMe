import { Music } from "./music.js";
import { activateBtn, stateHook } from "./utils.js";

const music = new Music();

const navbar = document.querySelector(".navbar");
const navDropdownMusic = document.querySelector(".nav__dropdown--music");
const musicSection = document.querySelector(".music");
const btnsContainer = document.querySelector(".group__btns");

// testing btn selection;
// const btn = document.querySelector("button[data-group*='nicole cross']");
// console.log("chose btn", btn);

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
  activateBtn(btn);
  const group = btn.dataset.group;
  setGroup(group);
  music.youtube(getGroup());
});
