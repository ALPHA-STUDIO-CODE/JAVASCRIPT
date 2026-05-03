//A string is a set of character that is enclosed in a quote ""
let string = "Alpha Studio Code";
console.log(string + " is a string");

//String Concatenation
// This is the joining two or more string t for  a single string
//Prompt for introduction
let userName = prompt("What is your username?"); // Prompt user for their name
alert("Welcome back " + userName + "!"); // Alert user with a welcome message
console.log("Welcome back " + userName + "!");

//String.length property
// To get the length of a string
console.log("The length if this string is: " + string.length);

//String.length Challenge
let userPost = prompt("Write a short post");
let characterWrithen = userPost.length;
let characterLeft = 280 - userPost.length;
alert(
  "You have written " +
    characterWrithen +
    " character, you are having " +
    characterLeft +
    " left!",
);
console.log(
  "You have written " +
    characterWrithen +
    " character, you are having " +
    characterLeft +
    " left!",
);

//String.slice Challenge
let slicedPost = prompt("Write a short post");
let postDisplay = slicedPost.slice(0, 280);
alert(postDisplay);
console.log(postDisplay);

// Case changing
console.log("WELCOME BACK " + string.toUpperCase());
console.log("welcome back " + postDisplay.toLowerCase());

// Case changing challenge
let yourName = prompt("What is your name?");
let firstCha = yourName.slice(0, 1).toUpperCase();
let restCha = yourName.slice(1, -1).toLowerCase();
alert("Welcome onboard " + firstCha + restCha + "!");
console.log("Welcome onboard " + firstCha + restCha + "!");
