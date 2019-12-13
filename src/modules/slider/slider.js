
document.querySelectorAll('.slider_type_1').forEach(function (slider) {
    if (slider.querySelector('.glide')) {
        let glide = new Glide(slider.querySelector('.glide'), {
            direction: 'rtl'        
        }).mount();
        slider.parentNode.querySelector('.slider__arrow-left').removeEventListener('click', nextSlide)
        slider.parentNode.querySelector('.slider__arrow-left').addEventListener('click', nextSlide);
        slider.parentNode.querySelector('.slider__arrow-right').removeEventListener('click', prevSlide)
        slider.parentNode.querySelector('.slider__arrow-right').addEventListener('click', prevSlide);
        function nextSlide() {
            glide.go('>');
        }
        function prevSlide() {
            glide.go('<');
        }
    }
});

document.querySelectorAll('.slider_type_2').forEach(function (slider) {
    if (slider.querySelector('.glide')) {
        let perView = 2;
        let gap = 57;
        if (window.innerWidth <= 1200) {
            perView = 1;
            gap = 0;
        }
        let glide = new Glide(slider.querySelector('.glide'), {
            direction: 'rtl',
            perView: perView,
            gap: gap
        }).mount();
        slider.parentNode.querySelector('.slider__arrow-left').removeEventListener('click', nextSlide)
        slider.parentNode.querySelector('.slider__arrow-left').addEventListener('click', nextSlide);
        slider.parentNode.querySelector('.slider__arrow-right').removeEventListener('click', prevSlide)
        slider.parentNode.querySelector('.slider__arrow-right').addEventListener('click', prevSlide);
        function nextSlide() {
            glide.go('>');
        }
        function prevSlide() {
            glide.go('<');
        }
    }
});