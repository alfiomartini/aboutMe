const Y2B_KEY = "AIzaSyB84APJ17MV7CujVm02jk-eYMFFiAM6nBk";
const maxResults = 10;
const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&type=video`;

const musicThumbnails = document.querySelector(".thumbnails");

import { activateGroupBtn } from "./utils.js";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

class Music {
  constructor(group = "") {
    this.group = group;
    this.videos = "";
    this.selected = "";
  }

  async youtube(group) {
    this.group = group.toLowerCase();
    const resp = await fetch(`${API_URL}&key=${Y2B_KEY}&q=${group}`);
    const data = await resp.json();
    this.videos = data.items;
    this.selected = this.videos[0];
    this.renderThumbnails();
    this.renderSelected();
    const btn = document.querySelector(`button[data-group*="${this.group}"]`);
    activateGroupBtn(btn);
  }

  selectVideo(e) {
    const videoId = e.target.closest(".thumbnail").dataset.id;
    this.selected = this.videos.find((video) => video.id.videoId === videoId);
    this.renderSelected();
  }

  renderSelected() {
    const iframeElem = document.querySelector(".selected__container");
    if (iframeElem) iframeElem.remove();
    const videoId = this.selected.id.videoId;
    const title = this.selected.snippet.title;
    const publishedAt = this.selected.snippet.publishedAt;
    const date = new Date(publishedAt);
    const month = months[date.getMonth()];
    const monthDay = date.getDate();
    const year = date.getFullYear();
    const publicationDate = `${month} ${monthDay}, ${year}`;
    const html = `<div class="selected__container">
        <iframe  src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameBorder={0}" allowFullScreen title="${title}" class="selected">
        </iframe>
        <div class="selected__title">${title} - ${publicationDate}</div>
      </div>`;
    musicThumbnails.insertAdjacentHTML("afterbegin", html);
  }

  renderThumbnails() {
    const maxTitleSize = 30;
    musicThumbnails.innerHTML = "";
    const thumbImages = this.videos.map((video) => {
      let title = video.snippet.title;
      title = title.slice(0, maxTitleSize) + "...";
      return `<div  class="thumbnail" data-id=${video.id.videoId}>
        <img src="${video.snippet.thumbnails.medium.url}"/>
        <div class="thumbnail__title">${title}</div>
      </div>`;
    });
    thumbImages.forEach((img) =>
      musicThumbnails.insertAdjacentHTML("beforeend", img)
    );
  }
}

export { Music };
