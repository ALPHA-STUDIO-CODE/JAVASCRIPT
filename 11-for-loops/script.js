// for Loop
// Used the for loop to automate our fizz buzz challenge function for a faster function

let output = [];

function fizzBuzz() {
  for (let count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
console.log("Call fizzbuzz function to see the result");
