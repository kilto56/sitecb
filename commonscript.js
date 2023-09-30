let buttonRedirectionMainPageOne = document.getElementById("mainredirectionbuttonone");
let buttonRedirectionMainPageTwo = document.getElementById("mainredirectionbuttontwo");

buttonRedirectionMainPageOne.addEventListener("click", redirectOne);
buttonRedirectionMainPageTwo.addEventListener("click", redirectTwo);

function redirectOne() {
    location.replace("../sitecb/lightmode/le-club.html");
};

function redirectTwo() {
    location.replace("../sitecb/lightmode/à-propos.html")
};