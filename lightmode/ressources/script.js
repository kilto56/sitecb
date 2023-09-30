let buttonRedirectionMainPageOne = document.getElementById("mainredirectionbuttonone");
let buttonRedirectionMainPageTwo = document.getElementById("mainredirectionbuttontwo");

buttonRedirectionMainPageOne.addEventListener("click", redirectOne);
buttonRedirectionMainPageTwo.addEventListener("click", redirectTwo);

function redirectOne() {
    location.replace("le-club.html");
};

function redirectTwo() {
    location.replace("à-propos.html")
};