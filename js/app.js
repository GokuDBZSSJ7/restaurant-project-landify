const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});