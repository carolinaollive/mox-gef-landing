const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    target.setAttribute('tabindex', '-1');
    window.setTimeout(() => target.focus({ preventScroll: true }), 420);
  });
});

const marqueeTrack = document.querySelector('.marquee-track');

if (marqueeTrack && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const updateMarquee = () => {
    const halfWidth = marqueeTrack.scrollWidth / 2;
    if (!halfWidth) return;

    const offset = (window.scrollY * 0.32) % halfWidth;
    marqueeTrack.style.transform = `translateX(${-offset}px)`;
  };

  updateMarquee();
  window.addEventListener('scroll', updateMarquee, { passive: true });
  window.addEventListener('resize', updateMarquee);
}

const interestForm = document.querySelector('.interest-form');

if (interestForm) {
  interestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = interestForm.querySelector('.form-note');
    if (note) {
      note.textContent = 'Form draft captured locally. We can wire this to the real destination next.';
    }
  });
}
