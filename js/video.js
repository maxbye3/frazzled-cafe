const video = document.getElementById('video-element');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
  video.play();
});

video.addEventListener('play', function() {
  playButton.style.display = 'none';
});

video.addEventListener('pause', function() {
  playButton.style.display = 'block';
});

video.addEventListener('click', function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});