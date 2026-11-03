/* Core Data Viewer video (How we work › platform hub, MEMORY.md §6.6).
   The video (6 MB) has preload="none": it starts only when it scrolls into view and pauses when it leaves.
   With "reduce motion", without IntersectionObserver, or if the browser refuses to play, the poster stays. */
(function () {
  var video = document.querySelector(".hub__video");
  if (!video || !("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // playback speed from _data/platform.yml (viewer_video_speed); default speed is kept again after loading
  var speed = parseFloat(video.getAttribute("data-speed")) || 1;
  video.defaultPlaybackRate = speed;
  video.playbackRate = speed;

  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var playing = video.play();
        if (playing && playing.catch) playing.catch(function () { /* not playable: keep the poster */ });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.25 }).observe(video);
})();
