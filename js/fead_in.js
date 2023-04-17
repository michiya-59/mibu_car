function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function slideIn() {
  const slideInElements = document.querySelectorAll('.slide-in');

  slideInElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('DOMContentLoaded', slideIn);
window.addEventListener('scroll', slideIn);
