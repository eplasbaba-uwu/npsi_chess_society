document.addEventListener('DOMContentLoaded', function () {
  const navEl = document.querySelector('.nav');
  const hamburgerEl = document.querySelector('.hamburger');
  const dropdownTriggerEl = document.querySelector('.nav__item.dropdown');
  const dropdownMenuEl = document.querySelector('.dropdown-menu');
  hamburgerEl.addEventListener('click', (e) => {
    e.stopPropagation();
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
  });
  dropdownTriggerEl.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenuEl.classList.toggle('dropdown-menu--open');
  });
  document.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
    dropdownMenuEl.classList.remove('dropdown-menu--open');
  });
  dropdownTriggerEl.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
