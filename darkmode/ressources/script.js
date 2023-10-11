let buttonRedirectionMainPageOne = document.getElementById("mainredirectionbuttonone");
let buttonRedirectionMainPageTwo = document.getElementById("mainredirectionbuttontwo");

buttonRedirectionMainPageOne.addEventListener("click", redirectionOne);
buttonRedirectionMainPageTwo.addEventListener("click", redirectionTwo);

function redirectionOne() {
    location.replace("le-club.html");
};

function redirectionTwo() {
    location.replace("à-propos.html");
};