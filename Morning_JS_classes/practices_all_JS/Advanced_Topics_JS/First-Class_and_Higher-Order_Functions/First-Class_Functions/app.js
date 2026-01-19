// 1️⃣ Assigning Functions to Variables
// // Define a function that adds two numbers
function add(a, b){  // function 'add' takes two parameters a and b
    return a + b;  // returns the sum of a and b
}

// Assign the function "add" to a variable called 'sum'
const sum = add;               // sum now holds a reference to the function 'add'

// Call the function using the new variable
console.log(sum(5, 3));      // Output: 8
// Explanation: Functions can be stored in variables and called using the variable name

// ✅ Key Point: Storing a function in a variable is a core feature of FCF.

console.log("*****************************************************");


// 2️⃣ Passing Functions as Arguments (Callbacks)
// Function that accepts another function as an argument
function executeOperation(a, b, operation){  // 'operation' is a function passed in
    return operation(a, b);  // execute the passed function
}

// Define a function to multiply numbers
function multiply(x, y) {
    return x * y   // multiply x and y
}


// Pass 'multiply' as a first-class function to 'executeOperation'
console.log(executeOperation(4, 5, multiply)); // Output: 20
// Explanation: 'multiply' is treated like a value and passed to another function
// ✅ Key Point: Passing a function as an argument is only possible because functions are first-class.

console.log("********************************************************");
// 3️⃣ Returning Functions from Functions
// Function that returns another function
function greet(message) { // outer function 'greet' takes a message
    return function(name) {              // inner function returned takes 'name'
        console.log(`${message}, ${name}`); // prints message with name
    }
}

// Call 'greet' and store the returned function
const sayHello = greet("Hello"); // 'sayHello' now holds the inner function

// Call the returned function
sayHello("Waqar");                    // Output: Hello, Waqar!
// Explanation: Functions can be returned from other functions and stored in variables
// ✅ Key Point: Returning functions is only possible because functions are first-class citizens.

console.log("*****************************************************************");

// 4️⃣ Storing Functions in Arrays
// Create an array of functions
// Create an array of functions
const operations = [
    function(a, b) { return a + b; },  // addition function
    function(a, b) { return a - b; },  // subtraction function
    function(a, b) { return a * b; },  // multiplication function
    function(a, b) { return a / b; }   // division function
];

// Call functions from the array
console.log(operations[0](10, 5)); // Output: 15 (add)
console.log(operations[1](10, 5)); // Output: 5 (subtract)
console.log(operations[2](10, 5)); // Output: 50 (multiply)
console.log(operations[3](10, 5)); // Output: 2 (divide)
// Explanation: Functions can be stored in arrays like any other value

// ✅ Key Point: Arrays can hold functions, making it easy to iterate or call dynamically.


console.log("***************************************************");
// 5️⃣ Storing Functions in Objects
// Object storing multiple first-class functions
const calculator = {
    add: function(a, b) { return a + b; },       // addition
    subtract: function(a, b) { return a - b; },  // subtraction
    multiply: function(a, b) { return a * b; },  // multiplication
    divide: function(a, b) { return a / b; }     // division
};

// Call functions from the object
console.log(calculator.add(7, 3));       // Output: 10
console.log(calculator.subtract(7, 3));  // Output: 4
console.log(calculator.multiply(7, 3));  // Output: 21
console.log(calculator.divide(7, 3));    // Output: 2.3333
// Explanation: Functions can be stored as object properties for modular design
// ✅ Key Point: Objects can hold FCFs, which is useful for modular and reusable code.


console.log("***************************************************************");
// 6️⃣ Dynamic Function Selection
// Function that selects an operation dynamically
function dynamicCalculate(a, b, operationName) {
    const operations = {
        add: (x, y) => x + y,       // arrow function as FCF
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y
    };
    return operations[operationName](a, b); // call the function dynamically
}

console.log(dynamicCalculate(8, 4, "add"));      // Output: 12
console.log(dynamicCalculate(8, 4, "multiply")); // Output: 32
// Explanation: First-class functions allow dynamic function selection at runtime
// ✅ Key Point: Dynamic behavior is possible because functions are first-class.



console.log("****************************************************");

// 7️⃣ First-Class Functions with Array Methods
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use first-class functions with map
const squared = numbers.map(function(num) {
    return num * num;  // this function is a FCF passed to map
});

console.log(squared); // Output: [1,4,9,16,25]
// Explanation: map expects a function, and we pass it as a first-class function
// ✅ Key Point: Many JavaScript built-in methods rely on FCFs for flexibility.

console.log("*************************************************");

// 8️⃣ Returning Functions Dynamically (Factory Pattern)
// Factory function that returns different math operations
function operationFactory(op) {
    if(op === "square") return function(x) { return x * x; };
    if(op === "cube") return function(x) { return x * x * x; };
}

// Get functions dynamically
const square = operationFactory("square"); // FCF returned
const cube = operationFactory("cube");     // FCF returned

console.log(square(5)); // Output: 25
console.log(cube(3));   // Output: 27
// Explanation: Functions returned from a function demonstrate FCF capability
// ✅ Key Point: Factories, dynamic operations, and closures are all possible because of FCF.
