// Generate random number from 1 to 6 for player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Create a dynamic relative file part to the dice image for player 1
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomImageSource1 = "./images/" + randomDiceImage1;

// Set the source for the image
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// ----------------------------------------------------
// Set the source for the image using if else statement
// if (randomNumber1 == 1) {
//   document.getElementById("player1").setAttribute("src", "./images/dice1.png");
// } else if (randomNumber1 == 2) {
//   document.getElementById("player1").setAttribute("src", "./images/dice2.png");
// } else if (randomNumber1 == 3) {
//   document.getElementById("player1").setAttribute("src", "./images/dice3.png");
// } else if (randomNumber1 == 4) {
//   document.getElementById("player1").setAttribute("src", "./images/dice4.png");
// } else if (randomNumber1 == 5) {
//   document.getElementById("player1").setAttribute("src", "./images/dice5.png");
// } else if (randomNumber1 == 6) {
//   document.getElementById("player1").setAttribute("src", "./images/dice6.png");
// } else {
//   document.getElementById("player1").setAttribute("src", "./images/dice6.png");
// }
// ----------------------------------------------------

// // Generate random number from 1 to 6 for player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create a dynamic relative file part to the dice image for player 2
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "./images/" + randomDiceImage2;

// Set the source for the image
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// ----------------------------------------------------
// Set the source for the image using if else statement
// if (randomNumber2 == 1) {
//   document.getElementById("player2").setAttribute("src", "./images/dice1.png");
// } else if (randomNumber2 == 2) {
//   document.getElementById("player2").setAttribute("src", "./images/dice2.png");
// } else if (randomNumber2 == 3) {
//   document.getElementById("player2").setAttribute("src", "./images/dice3.png");
// } else if (randomNumber2 == 4) {
//   document.getElementById("player2").setAttribute("src", "./images/dice4.png");
// } else if (randomNumber2 == 5) {
//   document.getElementById("player2").setAttribute("src", "./images/dice5.png");
// } else if (randomNumber2 == 6) {
//   document.getElementById("player2").setAttribute("src", "./images/dice6.png");
// } else {
//   document.getElementById("player2").setAttribute("src", "./images/dice6.png");
// }
// ----------------------------------------------------

// Determine the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "This is a Draw!";
}
