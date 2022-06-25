var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "gradientDicee/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "gradientDicee/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins"
}
else {
    document.querySelector("h1").textContent = "Match Draw!"
}