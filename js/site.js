const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('.abstract-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const abstract = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const nextState = !expanded;

    button.setAttribute('aria-expanded', String(nextState));
    button.textContent = nextState ? 'Abstract −' : 'Abstract +';

    if (abstract) {
      abstract.hidden = !nextState;
    }
  });
});

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear();
}
