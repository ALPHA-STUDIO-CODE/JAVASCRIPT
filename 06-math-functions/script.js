// Math.ceil(x)
console.log("------ The Math.ceil() ------");
console.log(
  "The Math.ceil() method rounds a number rounded UP to the nearest integer.",
);
console.log(Math.ceil(45.9)); // 45
console.log(Math.ceil(88.7)); // 88
console.log(Math.ceil(100.5)); // 101
console.log(Math.ceil(-45.9)); // -46
console.log(Math.ceil(-88.7)); // -89
console.log(Math.ceil(-100.5)); // -100

// Math.floor(x)
console.log("------ The Math.floor() ------");
console.log(
  "The Math.floor() method rounds a number DOWN to the nearest integer.",
);
console.log(Math.floor(0.6)); // 0
console.log(Math.floor(0.4)); // 0
console.log(Math.floor(5)); // 5
console.log(Math.floor(5.1)); // 6
console.log(Math.floor(-5.1)); // -6
console.log(Math.floor(5.9)); // 5

// Math.abs(x)
console.log("------ The Math.abs() ------");
console.log("The Math.abs() method returns the absolute value of a number.");
console.log(Math.abs(45)); // 45.9
console.log(Math.abs(null)); // 88.7
console.log(Math.abs("Hello")); // 100.5
console.log(Math.abs(3 - 2)); // 45.9
console.log(Math.abs(-88.7)); // 88.7
console.log(Math.abs(-100.5)); // 100.5

// Math.round(x)
console.log("------ The Math.round() ------");
console.log("The Math.round() method rounds a number to the nearest integer.");
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.49)); // 2
console.log(Math.round(-2.6)); // -3
console.log(Math.round(-2.5)); // -2
console.log(Math.round(-2.49)); // -2

// Math.f16round(x)
console.log("------ The Math.trunc() ------");
console.log(
  "The Math.trunc() method returns the integer part of a number and removes the decimals (does NOT round the number).",
);
console.log(Math.trunc(6.76)); // 6
console.log(Math.trunc(23.5)); // 23
console.log(Math.trunc(82.49)); // 82
console.log(Math.trunc(-6.76)); // -6
console.log(Math.trunc(-23.5)); // -23
console.log(Math.trunc(-82.49)); // -82
