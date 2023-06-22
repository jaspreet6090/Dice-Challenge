var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var count1 = 0;
var count2 = 0;

if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
    count1++;
    document.querySelector("h3").innerHTML = "Player 1 = "+ count1 +" ,  Player 2 = " + count2;
} else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆 ";
    count2++;
    document.querySelector("h3").innerHTML = "Player 1 = "+ count1 +" ,  Player 2 = " + count2;
} else{
    document.querySelector("h1").innerHTML = "Draw !!🤜🤛 Try Again ";
    document.querySelector("h3").innerHTML = "Player 1 = "+ count1 +" ,  Player 2 = " + count2;
}



