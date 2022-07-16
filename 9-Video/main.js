const button = document.querySelector('.switch-options')
const video = document.querySelector('.video-container')

function pauseVideo() {
  if (button.classList.contains('off')) {
    video.play()
    button.classList.remove('off')
  } else {
    video.pause()
    button.classList.add('off')
  }
}