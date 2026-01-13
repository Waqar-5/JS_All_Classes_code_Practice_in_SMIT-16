// JavaScript reverse() Method – Complete Examples

// 1. Reverse a simple array

// Example: Reverse an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using reverse() to reverse the array in place
numbers.reverse();

console.log(numbers); 
// Output: [5, 4, 3, 2, 1]
// Notes: reverse() modifies the original array

console.log("*******************************************************");

// 2. Reverse an array of strings

// Example: Reverse an array of strings
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Reverse the order of fruits
fruits.reverse();

console.log(fruits); 
// Output: ["Date", "Cherry", "Banana", "Apple"]


console.log("*************************************************");
// 3. Reverse a copy of an array (keep original unchanged)
let colors = ["Red", "Green", "Blue", "Yellow"];

// Using spread operator to copy the array and then reverse
let reversedColors = [...colors].reverse();

console.log(colors); // Original array remains: ["Red", "Green", "Blue", "Yellow"]
console.log(reversedColors); // Reversed copy: ["Yellow", "Blue", "Green", "Red"]


console.log("********************************************************8");

// 4. Reverse a string
// Strings don’t have reverse(), so we convert to array first
let word = "Hello";


// Convert string to array of characters, reverse it, then join back
let reversedWord = word.split('').reverse().join('');

console.log(reversedWord);
// Output: "olleH"

console.log("*************************************************");

// 5. Reverse each word in a sentence
let sentence = "JavaScript is awesome";

// Split sentence into words, reverse each word, join back
let reversedWords = sentence
  .split(" ")       // ["JavaScript", "is", "awesome"]
  .map(word => word.split("").reverse().join("")) 
  // ["tpircSavaJ", "si", "emosewa"]
  .join(" ");

console.log(reversedWords); 
// Output: "tpircSavaJ si emosewa"

console.log("******************************************************");
// 6. Reverse a number
let num = 12345;

// Convert number to string, reverse it, then convert back to number
let reversedNum = Number(num.toString().split("").reverse().join(""));

console.log(reversedNum); 
// Output: 54321

console.log("**********************************************************************");
// 7. Reverse a nested array


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Reverse the outer array (rows)
matrix.reverse();

console.log(matrix); 
/* Output:
[
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3]
]
*/



console.log("*************************************************************");
// 8. Reverse inner arrays too

let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Reverse both outer and inner arrays
let fullyReversed = matrix2.reverse().map(row => row.reverse());

console.log(fullyReversed);
/* Output:
[
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
]
*/

console.log("******************************************************************");
// 9. Reverse and filter (real-world example)
let messages = [
  { user: "Alice", msg: "Hello" },
  { user: "Bob", msg: "Hi" },
  { user: "Charlie", msg: "Hey" }
];

// Reverse messages to show latest first
let latestMessages = [...messages].reverse().filter(m => m.user !== "Bob");

console.log(latestMessages);
/* Output:
[
  { user: "Charlie", msg: "Hey" },
  { user: "Alice", msg: "Hello" }
]
*/

console.log("******************************************************************");
// 10. Reverse using a for loop (manual way)


let arr = [10, 20, 30, 40, 50];
let reversedArr = [];

// Loop from end to start
for(let i = arr.length - 1; i >= 0; i--){
  reversedArr.push(arr[i]); // Add elements in reverse order
}

console.log(reversedArr); 
// Output: [50, 40, 30, 20, 10]



/*

Key Notes About reverse()

Modifies the original array. If you want to keep the original, make a copy first ([...array] or .slice()).

Works only on arrays. For strings, convert to array first.

Can be combined with other array methods like map(), filter(), join().

Useful in real-world scenarios like chat apps (latest first), number reversal, palindrome checking, or data visualization.
*/

