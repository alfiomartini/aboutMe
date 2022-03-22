import { Music } from "./music.js";

const music = new Music();

const navDropdownMusic = document.querySelector(".nav__dropdown--music");
const musicSection = document.getElementById("music");

function navMusic(e) {
  const target = e.target;
  const group = target.dataset.group;
  // console.log(group);
  music.youtube(group);
}

navDropdownMusic.addEventListener("click", navMusic);
musicSection.addEventListener("click", music.selectVideo.bind(music));
