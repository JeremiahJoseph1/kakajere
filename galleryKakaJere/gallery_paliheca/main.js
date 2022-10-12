//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change the icon

        if ($(faq).children('.faq__icon').children('svg').hasClass('fa-plus')) {
            $(faq).children('.faq__icon').children('svg').addClass('fa-minus');
            $(faq).children('.question__answer').children('p').toggle(500);
        } else {
            $(faq).children('.faq__icon').children('svg').addClass('fa-plus');
            $(faq).children('.question__answer').children('p').toggle(500);
        }
    })
})


//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";

}

closeBtn.addEventListener('click', closeNav)
