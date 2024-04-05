let changeStyleBtn = document.querySelector(".changestyle").firstElementChild;
let cssPage = document.querySelectorAll("link")[0];

let mode = 0;

changeStyleBtn.addEventListener("click", () => {
    changeStyleBtn.classList.toggle(".clicked-div");
    changeStyleBtn.firstElementChild.classList.toggle(".clicked");

    if (mode === 0) {
        cssPage.href = "./sources/css/darkstyle.css";
        mode = 1;
    } else {
        cssPage.href = "./sources/css/lightstyle.css";
        mode = 0;
    };
});