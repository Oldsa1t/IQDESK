function tabs() {
    let tabItem = document.querySelectorAll(".switch__item"),
    tabList = document.querySelector(".switch__list"),
    tabWeb = document.querySelector(".switch__laptop"),
    tabApp = document.querySelector(".switch__phone"),
    tabSoft = document.querySelector(".switch__soft"),
    tabContent = document.querySelectorAll(".projects__list");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add("projects__list_visibility_hidden");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("projects__list_visibility_hidden")) {
            tabContent[b].classList.remove("projects__list_visibility_hidden");
        }
    }
    
    tabList.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("switch__item")) {
            for (let i = 0; i < tabItem.length; i++) {
                if (target == tabItem[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

tabs();