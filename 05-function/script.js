// JavaScript Function are use to perform a task that are usually carried out multiply timed
console.log("-------------- Basic Function ----------------");

// Basic Function
// Basic function only have a function name and an empty parentheses
console.log("They take no value as input when they are called");
function basicFun() {
  let x = 20;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
  x++;
  console.log(x);
} // This function perform a repetitive task of increase x by 1

basicFun(); // This is use to call the function

console.log("-------------- Medium Function ----------------");

// Medium Function
// Medium function have a function name and take a value in its parentheses
console.log("They take value as input when they are called");
function mediumFun(inputVar) {
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
  inputVar++;
  console.log(inputVar);
} // This function perform a repetitive task of increase inputVar by 1

mediumFun(1); // This is use to call the function and provide it with a value when calling

console.log("-------------- CHALLENGE 1 ----------------");
// CHALLENGE 1
function getMilk(bottle) {
  console.log("Instruction to get milk from store");
  console.log("leave the house to the store");
  console.log("Get " + bottle + " bottles of milk");
  console.log("Bring it home");
}
getMilk(2);

console.log("-------------- CHALLENGE 2 ----------------");
// CHALLENGE 2
function buyMilk(money) {
  console.log(
    "Instruction to get milk from store with at specified amount of money",
  );
  console.log("leave the house to the store");
  console.log("Get $" + money + " worth of milk");
  console.log("Calculating...");
  // One milk is worth $0.5
  let milkGotten = Math.floor(money / 1.5); // Math.floor() is used to round down a number to it's nearest integer
  console.log("Got " + milkGotten + " bottles of milk");
  console.log("Bring it home");
}
buyMilk(8);

console.log("-------------- Advance Function ----------------");
// Advance Function
// Advance function have a function name and take a value in its parentheses
// and also return a value after it is called
console.log(
  "They take value as input when they are called and also return a value",
);
function advanceFun(provideInput) {
  let remain = Math.floor(provideInput / 2);
  console.log(provideInput + " is divisible by two " + remain + " times");

  return provideInput % 2; // This return the value of the function, It sh
}
let remain = advanceFun(15);
console.log("and having " + remain + " reminder");

console.log("-------------- CHALLENGE 3 ----------------");
// CHALLENGE 3
function purchaseMilk(numb) {
  console.log(
    "Instruction to get milk from store with at specified amount of money and return the change",
  );
  console.log("leave the house to the store");
  console.log("Get $" + numb + " worth of milk");
  console.log("Calculating...");
  // One milk is worth $0.5
  let milkGotten = Math.floor(numb / 1.5); // Math.floor() is used to round down a number to it's nearest integer
  console.log("Got " + milkGotten + " bottles of milk");
  console.log("Bring it home");
  return numb % 5;
}

let remainder = purchaseMilk(22);
console.log("Your change remains $" + remainder);
