const humburger = document.querySelector('.humburger');
const mylogo = document.querySelector('.my-logo');
const navbar = document.querySelector('.nav_bar');
const clsbtn = document.querySelector('.close-btn');
humburger.addEventListener('click', () => {
  humburger.classList.replace('humburger', 'non-visible');
  mylogo.classList.replace('my-logo', 'non-visible');
  navbar.classList.replace('nav_bar', 'nav_bar_mobile');
});

clsbtn.addEventListener('click', () => {
  navbar.classList.replace('nav_bar_mobile', 'nav_bar');
  humburger.classList.replace('non-visible', 'humburger');
  mylogo.classList.replace('non-visible', 'my-logo');
});