
function rollDice(){
var randomNumber = Math.floor(Math.random()*6) + 1;
var randomDice = "dice"+randomNumber+".png";
var randomSource = "images/"+randomDice;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDice2 = "dice"+randomNumber2+".png";
var randomSource2 = "images/"+randomDice2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomSource2);


if(randomNumber>randomNumber2){
    document.getElementById("title").innerHTML = "Player 1 Win!"
}
else if(randomNumber<randomNumber2){
    document.getElementById("title").innerHTML = "Player 2 Win!"
}
else{
    document.getElementById("title").innerHTML = "Drawl!"
}
}