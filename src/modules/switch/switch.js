function tabs() {
    let tabItem = document.querySelectorAll(".switch__item"),
    tabList = document.querySelector(".switch__list"),
    tabWeb = document.querySelector(".switch__laptop"),
    tabApp = document.querySelector(".switch__phone"),
    tabSoft = document.querySelector(".switch__soft"),
    tabContent = document.querySelectorAll(".projects__list");

    
    function hideContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add("projects__list_visibility_hidden"); 
            tabItem[i].classList.remove("switch__item_active");
            
            if (tabItem[i].classList.contains("switch__laptop_active")) {
                tabWeb.classList.remove("switch__laptop_active");
            }

            if (tabItem[i].classList.contains("switch__phone_active")) {
                tabApp.classList.remove("switch__phone_active");
            }

            if (tabItem[i].classList.contains("switch__soft_active")) {
                tabSoft.classList.remove("switch__soft_active");
            }
        }
    }

    hideContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("projects__list_visibility_hidden")) {
            tabContent[b].classList.remove("projects__list_visibility_hidden");
            tabItem[b].classList.add("switch__item_active");  
            
            if (b == 0) {
                tabWeb.classList.add("switch__laptop_active");
            } else if (b == 1) {
                tabApp.classList.add("switch__phone_active");
            } else {
                tabSoft.classList.add("switch__soft_active");
            }
            
        }
    }   

    tabList.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("switch__item")) {
            for (let i = 0; i < tabItem.length; i++) {
                if (target == tabItems[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

tabs();
