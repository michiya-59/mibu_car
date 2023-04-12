document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.getElementById("back-to-top");

  backToTopButton.addEventListener("click", function() {
    smoothScrollToTop();
  });
});

function smoothScrollToTop() {
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const easingFactor = easeInOutQuad(elapsedTime / 1000);
    const targetPosition = startPosition - startPosition * easingFactor;

    window.scrollTo(0, targetPosition);

    if (targetPosition > 0.5) {
      requestAnimationFrame(scroll);
    } else {
      window.scrollTo(0, 0);
    }
  }

  requestAnimationFrame(scroll);
}
