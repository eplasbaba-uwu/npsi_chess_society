document.addEventListener('DOMContentLoaded', function () {
  const navEl = document.querySelector('.nav');
  const hamburgerEl = document.querySelector('.hamburger');
  const dropdownTriggerEl = document.querySelector('.nav__item.dropdown');
  const dropdownMenuEl = document.querySelector('.dropdown-menu');

  hamburgerEl.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
  });

  dropdownTriggerEl.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document
    dropdownMenuEl.classList.toggle('dropdown-menu--open');
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
    dropdownMenuEl.classList.remove('dropdown-menu--open');
  });

  // Prevent the dropdown from closing when clicking inside it
  dropdownTriggerEl.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document
  });
});
