let changeStyleBtn = document.querySelector(".btn-contain-changestyle");
let btn = document.querySelector(".btn-changestyle");
let cssPage = document.querySelectorAll("link")[0];
let logo = document.querySelector("#img-header");


let mode = 0;

changeStyleBtn.addEventListener("click", () => {
    changeStyleBtn.classList.toggle("clicked-div");
    btn.classList.toggle("clicked");

    if (mode === 0) {
        cssPage.href = "./sources/css/darkstyle.css";
        logo.src = "./photos/logocbgoldcarré.png";
        mode = 1;
    } else {
        cssPage.href = "./sources/css/lightstyle.css";
        logo.src = "./photos/logocbcarré.png";
        mode = 0;
    };
});