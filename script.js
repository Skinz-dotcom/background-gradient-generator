// setting variables.

var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var randomButton = document.querySelector("#random");

// Functions

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  setGradientDisplay();
}

function setGradientDisplay() {
  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// event listeners.

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", function () {
  var first = getRandomColor();
  var second = getRandomColor();
  color1.value = first;
  color2.value = second;
  setGradient();
});

setGradient();
