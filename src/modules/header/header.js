function menuBtn() {
    let btn = document.querySelector(".header__button"),
        menu = document.querySelector(".header__wrapper");
    
    btn.addEventListener("click", function() {
        menu.classList.toggle("header__wrapper_opened")
    });
}

menuBtn();
