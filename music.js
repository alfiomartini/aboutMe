const Y2B_KEY = "AIzaSyCvrvgwxxdGsNiTKExH1UEGvs5rKLb8r3Q";
const API_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video";
const navDropdownMusic = document.querySelector(".nav__dropdown--music");

class Music {
  constructor(group = "") {
    this.group = group;
    this.videos = "";
    this.selected = "";
  }

  async youtube(group) {
    this.group = group;
    const resp = await fetch(`${API_URL}&key=${Y2B_KEY}&q=${group}`);
    const data = await resp.json();
    this.videos = data.items;
    this.selected = this.videos[0];
    console.log(this);
  }
}

export { Music };
