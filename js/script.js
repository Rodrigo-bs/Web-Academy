/* scroll animation */

const sections = document.querySelectorAll('.section-animation');
const buttons = document.querySelectorAll('.nav-menu a');

console.log(buttons)

function activeScrollAnimation() {
    sections.forEach((section, key) => {
        if (section.getBoundingClientRect().top - (window.innerHeight * .5) < 0) {
            section.classList.add('active-animation');
            buttons.forEach(button => button.classList.remove('active-button-nav'));
            buttons[key].classList.add('active-button-nav');
        }
    })
}

window.addEventListener('scroll', activeScrollAnimation);

/* menu mobile */

const buttonMenu = document.querySelector('.menu-mobile-button');
const menuMobile = document.querySelector('.nav-menu');

function activeMenuMobile() {
    buttonMenu.classList.toggle('active-button-menu');
    menuMobile.classList.toggle('active-menu-mobile')
}

buttonMenu.addEventListener('click', activeMenuMobile);