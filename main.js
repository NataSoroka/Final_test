window.onload = function () {
    var arr_content = document.querySelectorAll(".content .block");
    function MenuItem(name) {
        this.name = name;
        this.click = function () {
            var num = +this.getAttribute("data-num-content");
            document.querySelector(".menu .active").classList.toggle("active");
            this.classList.toggle("active");
            document.querySelector(".content .visible").classList.toggle("visible");
            arr_content[num].classList.toggle("visible");
        };
        this.over = function () {
            this.classList.toggle("hover");
            if(this.classList.contains("active")){
                this.style.opacity = "1";
            }
        };
        this.out = function () {
            this.classList.toggle("hover");
        }
    }
    var arr=[];
    for (var i=1; i<=arr_content.length; i++){
        arr.push(new MenuItem("Item "+i));
    }
    var menu = document.querySelector(".menu");
    var wrapMenu = document.createElement("div");
    menu.appendChild(wrapMenu);
    for (i=0; i<arr.length; i++) {
        var item = document.createElement("div");
        item.classList.add("item-menu");
        item.innerHTML = arr[i].name;
        item.setAttribute("data-num-content", i);
        item.addEventListener("click", arr[i].click);
        item.addEventListener("mouseover", arr[i].over);
        item.addEventListener("mouseout", arr[i].out);
        wrapMenu.appendChild(item);
    }
    document.querySelector(".menu .item-menu:first-child").classList.add("active");
    document.querySelector(".content .block:first-child").classList.add("visible");

    var copyright = document.createElement("div");
    copyright.classList.add("copyright");
    copyright.innerHTML = "© 2017 Nata.net";
    menu.appendChild(copyright);
}