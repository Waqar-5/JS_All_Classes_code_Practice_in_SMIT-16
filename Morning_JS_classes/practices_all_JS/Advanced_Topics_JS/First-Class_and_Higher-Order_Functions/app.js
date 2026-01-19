// 1️⃣ First-Class Functions

// In JavaScript, functions are first-class citizens, meaning they can be:

// Assigned to variables

// Passed as arguments

// Returned from other functions

// Example 1: Function assigned to a variable

// Define a function that adds two numbers
function add(a, b){
    return a + b; // return the sum of a and b
}

// Assign the function 'add' to a variable
const sum = add; 
// now 'sum' holds a reference to the 'add' function

console.log(sum(5, 3)); 
// Output: 8
// Explanation: 'sum' works just like 'add' because functions are first-class


console.log("*********************************************************");


// Example 2: Function returned from another function
// Function that returns another function
function greet(message){
    // Returns an inner function
    return function(name){
        console.log(`${message}, ${name}!`);
    }
}

// call greet, it returns a function
const sayHello = greet("Hello");

sayHello("Waqar");
// Output: Hello, Waqar!
// Explanation: 'greet' returns a function, demonstrating first-class behavior


console.log("**************************************************************");
// Example 3: Function stored in an array
// Functions can be stored in arrays
const operations = [
    function (x, y) { return x + y}, // Addition
    function(x, y) { return x - y; },  // subtraction
    function(x, y) { return x * y; }   // multiplication
];

console.log(operations[0](10, 5)); // Output: 15
console.log(operations[1](10, 5)); // Output: 5
console.log(operations[2](10, 5)); // Output: 50


console.log("*********************************************************");
// 2️⃣ Higher-Order Functions (HOF)

// A Higher-Order Function is a function that:

// Takes other functions as arguments, or

// Returns a function
// Example 1: Function as an argument
// Higher-Order Function that executes a function passed to it

function processNumbers(a, b, operation){
     // 'operation' is a function passed as argument
    return operation(a, b);
}

// Define a function for multiplication
function multiply(x, y) {
    return x * y;
}

console.log(processNumbers(5, 3, multiply)); 
// Output: 15
// Explanation: 'processNumbers' uses the function passed to it, this is HOF

console.log("**********************************************************************");

// Example 2: Returning a function (HOF)
// HOF that returns a function
function makeMultiplier(factor) {
    return function(number) {
        return number * factor; // multiplies number by factor
    };
}

const double = makeMultiplier(2); // returns a function that doubles
const triple = makeMultiplier(3); // returns a function that triples

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


console.log("***************************************************");
// Example 3: Using built-in HOFs (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];

// map: applies a function to each element
const squares = numbers.map(function(num) {
    return num * num; // square each number
});
console.log(squares); // Output: [1, 4, 9, 16, 25]

// filter: selects elements based on a condition
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; // only even numbers
});
console.log(evenNumbers); // Output: [2, 4]

// reduce: reduces array to a single value
const sums = numbers.reduce(function(acc, curr) {
    return acc + curr; // accumulate sum
}, 0);
console.log(sums); // Output: 15

console.log("******************************************************");
// 3️⃣ Combining First-Class + Higher-Order

// Array of functions (first-class)
const operationsArray = [
    function(x, y) { return x + y; },
    function(x, y) { return x - y; },
    function(x, y) { return x * y; },
];

// Higher-Order Function that applies all operations
function applyAllOperations(x, y, operations) {
    return operations.map(op => op(x, y));
}

console.log(applyAllOperations(6, 3, operationsArray));
// Output: [9, 3, 18]
// Explanation: 'applyAllOperations' takes an array of functions and applies them to x and y
