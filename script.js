// Hamburger menu toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const menu = document.getElementById('menu');

hamburgerIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Fade-in effect voor secties
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});

