var colors = ["green", "red", "blue"];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");
btn.addEventListener("click", function () {
    //tomar numero random entre 0 y 3
    var randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
