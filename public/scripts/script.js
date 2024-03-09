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
const menuIcon = document.getElementById("menu-icon");
const navWrapper = document.querySelector("nav");
menuIcon.addEventListener("click", () => {
  navWrapper.classList.toggle("show-nav");
  // Toggle menu icon between bars and x
  if (navWrapper.classList.contains("show-nav")) {
    menuIcon.innerHTML =
      '<i class="fa-solid fa-bars" style="color: #ffffff;"></i>';
    // Move logo and nav-wrapper up
    navWrapper.style.transform = "translateX(-100%)";
  } else {
    menuIcon.innerHTML =
      '<i class="fa-solid fa-x" style="color: #ffffff;"></i>';
    // Move logo and nav-wrapper back to initial position
    navWrapper.style.transform = "initial";
  }
});
