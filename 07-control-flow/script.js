// Love Calculator Challenge
// Get input from user
prompt("Name of first person");
prompt("Name of second person");
// Ignore the input from user :)

let random = Math.random() * 100; // Math.random() is use to generate random number between 0 to 0.999999999
random = Math.floor(random + 1); // Math.floor() is used to round down a number to is's nearest integer
console.log("Your love score is " + random + "%.");

// CONTROL FLOW

// If statement
// Upgrade the love calculator
console.log("------ If statement ------");
console.log(
  "Use the JavaScript if statement to execute a block of code when a condition is true.",
);
let loveScore = Math.random() * 100; // Math.random() is use to generate random number between 0 to 0.999999999
loveScore = Math.floor(loveScore + 1); // Math.floor() is used to round down a number to is's nearest integer
if (loveScore >= 70) {
  console.log("Your love score is " + loveScore + "%, what a perfect match!");
}
if (loveScore < 70) {
  console.log("Your love score is " + loveScore + "%.");
}

// Else Statement
// Optimize the love calculator better
console.log("------ Else statement ------");
console.log(
  "Use the JavaScript else statement to specify a block of code to be executed if a condition is false.",
);
let loveScore2 = Math.random() * 100; // Math.random() is use to generate random number between 0 to 0.999999999
loveScore2 = Math.floor(loveScore2 + 1); // Math.floor() is used to round down a number to is's nearest integer
if (loveScore2 >= 70) {
  console.log("Your love score is " + loveScore2 + "%, what a perfect match!");
} else {
  console.log("Your love score is " + loveScore2 + "%.");
}

// Else Statement
// Optimize the love calculator to advance stage
console.log("------ Else statement ------");
console.log(
  "Use the JavaScript else if statement to specify a new condition if the first is false.",
);
let loveScore3 = Math.random() * 100; // Math.random() is use to generate random number between 0 to 0.999999999
loveScore3 = Math.floor(loveScore3 + 1); // Math.floor() is used to round down a number to is's nearest integer
if (loveScore3 >= 70) {
  console.log("Your love score is " + loveScore3 + "%, what a perfect match!");
  alert("Your love score is " + loveScore3 + "%, what a perfect match!");
} else if (loveScore3 <= 69 && loveScore3 >= 40) {
  console.log("Your love score is " + loveScore3 + "%, still a good match! ");
  alert("Your love score is " + loveScore3 + "%, still a good match! ");
} else {
  console.log("Your love score is " + loveScore3 + "%, Oil and water!");
  alert("Your love score is " + loveScore3 + "%, Oil and water!");
}
