// Navbar Burger menu
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    burgerMenu.addEventListener('click',() => {
        navList.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    });
});

// Footer
const dateObj = new Date();
let year = dateObj.getUTCFullYear();

const footerText = document.querySelector(".footer-text");
footerText.textContent += ` ${year}`