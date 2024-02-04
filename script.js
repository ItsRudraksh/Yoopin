const playBtn = document.getElementById("play-btn");
const video = document.getElementById("cycle-video");
let playing = false;

playBtn.addEventListener("click", () => {
  if (playing) {
    video.pause();
  } else {
    video.play();
  }

  playing = !playing;

  if (playing) {
    playBtn.innerHTML = `
    <i class="fa-sharp fa-solid fa-pause" style="color: #ffffff;"></i>
    `;
  } else {
    playBtn.innerHTML = `
    <i class="fa-sharp fa-solid fa-play" style="color: #ffffff"></i>
    `;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const spacer = document.querySelector(".spacer");

  window.addEventListener("scroll", function () {
    if (window.scrollY > spacer.offsetTop) {
      window.scrollTo(0, spacer.offsetTop);
    }
  });
});

const imageList = document.getElementById("image-list");
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.children.length;
  updateCarousel();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + imageList.children.length) % imageList.children.length;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * 100 + "%";
  imageList.style.transform = "translateX(" + translateValue + ")";
}

document.getElementById("left-arrow").addEventListener("click", prevImage);
document.getElementById("right-arrow").addEventListener("click", nextImage);
