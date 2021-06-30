const Header = document.querySelector('.header');
const burger = document.querySelector('.humbergur');
const cancelIcon = document.querySelector('.cancelIcon');
const HTML = document.querySelector('html');
burger.addEventListener('click', () => {
  Header.classList.add('mobMenu');
  HTML.classList.add('newHTML');
});
cancelIcon.addEventListener('click', () => {
  Header.classList.remove('mobMenu');
  HTML.classList.remove('newHTML');
});

const menuLink = document.querySelectorAll('.menuLink');
menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    Header.classList.remove('mobMenu');
    HTML.classList.remove('newHTML');
  });
});
