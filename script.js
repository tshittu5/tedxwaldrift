// Set the date we're counting down to
var countDownDate = new Date("Aug 12, 2023 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "See you next year!";
  }
}, 1000);

// var menu = document.getElementById("menu");

// function closemenu() {
//   menu.style.top = "-100vh";
//   enableScrolling();
// }

// function openmenu() {
//   menu.style.top = "0";
//   disableScrolling();
// }

var menu = document.getElementById("menu");
var openMenuButton = document.querySelector(".open-menu");

function closemenu() {
  menu.style.top = "-100vh";
  enableScrolling();
  openMenuButton.style.visibility = "visible";
}

function openmenu() {
  menu.style.top = "0";
  disableScrolling();
  openMenuButton.style.visibility = "hidden";
}


function disableScrolling() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

function enableScrolling() {
  document.body.style.overflow = "visible";
  document.documentElement.style.overflow = "visible";
}

const scroll = new LocomotiveScroll({
  el: document.getElementById("scroll-container"),
  smooth: true,
  smoothMobile: true,
  inertia: .9,
  multiplier: .5,
});
