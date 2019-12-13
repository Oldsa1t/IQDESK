function tabs() {
    let controls = document.querySelectorAll('.switch__item');
    let tabs = document.querySelectorAll('.projects__list');
    controls.forEach(function (control) {
        control.addEventListener('click', switchActive);
    });

    function switchActive(e) {
        e.preventDefault();
        let type = '';
        if (this.querySelector('.switch__image').classList.contains('switch__laptop')) {
            type = 'laptop';
        } else if (this.querySelector('.switch__image').classList.contains('switch__phone')) {
            type = 'phone';
        } else if (this.querySelector('.switch__image').classList.contains('switch__soft')) {
            type = 'soft';
        }        
        controls.forEach(function (control) {
            control.classList.remove('switch__item_active');
            control.querySelector('.switch__image').classList.remove('switch__laptop_active');
            control.querySelector('.switch__image').classList.remove('switch__phone_active');
            control.querySelector('.switch__image').classList.remove('switch__soft_active');
        });
        let activeClass = 'switch__' + type + '_active';       
        this.querySelector('.switch__image').classList.add(activeClass);
        this.classList.add('switch__item_active');
        tabs.forEach(function (tab) {
            tab.classList.remove('projects__list_active');
        });
        document.querySelector('.projects__list_' + type).classList.add('projects__list_active');
    }

}

tabs();