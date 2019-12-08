window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    
    let menu = document.querySelector(".menu"),
        menuBtn = document.querySelector(".header__hamburger");

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("menu__active");
        menuBtn.classList.toggle("header__hamburger--active");      
    });
});
