// ARRAY
console.log("------ ARRAY ------");
console.log("An array is the collection of data or element that are related.");
let array = ["Banana", "Apples", "Oranges", "Blueberries"]; // Data that are enclosed inside [] is called an array
console.log(array);

// Retrieval of an Element
console.log("------ array[x] ------");
console.log(
  "This is use to retrieve an element from a array by specifying it's index.",
);
let getData = array[1]; // index number always start number from 0
console.log(getData);

// Length of Array
console.log("------ array.length ------");
console.log("This get the total item or element stored in an array.");
let lengthOfData = array.length;
console.log(lengthOfData);

console.log('------ array.includes("x") ------');
console.log("This check if an item or element stored in an array.");
let includesData = array.includes("Apple");
console.log(includesData); // It will return a true or false value

// Remove Element
console.log("------ array.shift() ------");
console.log("This remove the first element of an array.");
let removeFirstData = array.shift();
console.log(removeFirstData);
console.log(array);

console.log("--------------------------");

console.log("------ array.pop() ------");
console.log("This remove the last element of an array.");
let removeLastData = array.pop();
console.log(removeLastData);
console.log(array);

// Add Element
console.log("------ array.push() ------");
console.log("This add an element to the end of an array.");
let addData = array.push("Pawpaw");
console.log(addData);
console.log(array);

// Concat Element
console.log("------ array.concat() ------");
console.log(
  "This join two different arrays together without modifying the existing one.",
);
concatData = array.concat(["Mango", "Lemon"]); // The concat arrays are resign back to the variable array
console.log(concatData);
console.log("-----------");
console.log(array);

// Sort Element
console.log("------ array.sort() ------");
console.log("This sort the element in the array alphabetically.");
sortData = array.sort();
console.log(sortData);
