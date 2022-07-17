const button = document.querySelector('.switch-options')
const video = document.querySelector('.video-container')
video.volume = 0;

function pauseVideo() {
  if (button.classList.contains('off')) {
    video.play()
    button.classList.remove('off')
  } else {
    video.pause()
    button.classList.add('off')
  }
}

/* PRELOADER */
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
