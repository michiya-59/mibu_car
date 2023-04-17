function scrollToTop(duration) {
  const start = window.scrollY;
  const end = 0;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;

    window.scrollTo(0, start + (end - start) * progress);

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document.querySelector('#back-to-top').addEventListener('click', () => {
  scrollToTop(500);
});
