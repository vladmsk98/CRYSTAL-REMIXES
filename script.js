document.addEventListener('DOMContentLoaded', () => {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
      audioElements.forEach(otherAudio => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
        }
      });
      audio.closest('.track-card').querySelector('h3').classList.add('active-track');
    });
    audio.addEventListener('pause', () => {
      setTimeout(() => {
        audio.closest('.track-card').querySelector('h3').classList.remove('active-track');
      }, 300);
    });
  });
});