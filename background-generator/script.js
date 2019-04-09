var array = [1,2,3,4,5,6,7,8];

var css = document.getElementById("css-code");
var hex = document.getElementById("hex-values");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color1Wrapper = document.getElementById("color1-wrapper");
var color2Wrapper = document.getElementById("color2-wrapper");

function setColor() {
    color1Wrapper.style.backgroundColor = color1.value;
    color2Wrapper.style.backgroundColor = color2.value;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function setRandomGradient() {
    randomColor1 = getRandomColor();
    randomColor2 = getRandomColor();
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    color1.value = randomColor1;
    color2.value = randomColor2;
    setColor();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    displayCode();
    setColor();
} 

function displayCode() {
    css.textContent = "background: " + body.style.background + ";";
    hex.textContent = "Hex Values: " + color1.value + " : " + color2.value;
}

setRandomGradient();
displayCode();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);