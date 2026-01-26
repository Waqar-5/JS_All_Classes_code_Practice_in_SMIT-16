// A function is a block of code designed to perform a task repeatedly whenever invoked.

// It helps avoid code repetition and makes code organized and readable.


// Function Declaration Syntax:

// function functionName(parameters) {
  // code block
// }


// function → keyword to declare a function.

// functionName → legal variable-style name for the function.

// parameters → optional placeholders for input data.

// Curly braces {} → enclose the code block.

// Calling/Invoking a Function:

// js
// Copy code
// functionName();  // executes the function
// Parentheses () are required to invoke.

// Functions can be called anywhere after they are defined (usually defined before main code).


// Basic Functions in JS
// Example 1: Simple function
// function to greet user
function greet(){
    console.log("Hello, welcome!");
}

greet(); // calling function



console.log("**********************************************************");


// Example 2: Function with multiple statements
function showDate(){
    var now = new Date(); // current date and time
    console.log("Today is: " + now.toDateString());
    console.log("Time now is: " + now.getHours() + ":" + now.getMinutes());
}
showDate(); // calls the function


// Example 2: Function with multiple statements
// Function triggered by a button

function alertMessage() {
  alert("Button clicked! This is a JS function in action.");
}
// Use in HTML: <button onclick="alertMessage()">Click Me</button>




console.log("*************************************************");



// types of functions 
/*
13 Major Types of Functions in JavaScript

Named Functions – Regular functions with a name.

Anonymous Functions – Functions without a name, usually stored in variables.

Arrow Functions – ES6 concise syntax.

Immediately Invoked Function Expressions (IIFE) – Runs as soon as defined.

Callback Functions – Functions passed as arguments to another function.

Recursive Functions – Functions that call themselves.

Generator Functions – Functions that can pause and resume using yield.

Async Functions – Functions that return a promise and can use await.

Constructor Functions – Functions used to create objects with new.

Method Functions – Functions inside objects/classes.

Higher-Order Functions – Functions that take or return other functions.

Nested Functions – Functions defined inside other functions.

Dynamic/Anonymous Class Methods – Functions added dynamically to objects or classes.
*/


//1. Named Functions
// Named functions are the standard way to declare a function with a name. You can call it anywhere after its declaration.

// Example 1: Simple greeting

function greet(name) { 
    console.log("hello " + name + "!"); //// Prints a personalized greeting
}

greet("Ali"); //Call the function with argumenet "ali"

console.log("***************************************************");

function add(a, b){
    return a + b; // Returns the sum of a and b
}
console.log(add(5, 10)); // output 15

console.log("*****************************************");


// Example 3: Factorial calculation
function Factorial(n){
    var result = 1;
    for(var i = 1; i <= n; i++){
        result *= i // Multiply numbers from 1 to n
    }
    return result;
}

console.log(Factorial(5)); // output 120


console.log("*******************************************");
// 2. Anonymous Functions

// Anonymous functions are functions without a name. Often assigned to a variable or used as callbacks.

// / Example 1: Greeting using a variable

var greet = function(name) {
  console.log("Hello " + name + "!");
};
greet("Bob"); // Prints "Hello Bob!

console.log("*************************************************");


// Example 2: Multiplying numbers
var multiply = function(a, b) {
    return a * b;
};

console.log(multiply(6, 7)); // output 42


console.log("******************************************************");
// Example 3: Filtering an array

var numbers = [1, 2, 3, 4, 5];
var evenNmbers = numbers.filter(function(num) {
    return num % 2 === 0; // only keep even numbers
});
console.log(evenNmbers); // output [2, 4]


/*
Key Points for Anonymous Functions:

No name is given; often assigned to a variable.

Cannot be called before the declaration.

Commonly used for callbacks, event handlers, or array methods.
 */


console.log("************************************************");


// 3. Arrow Functions (ES6)

// Arrow functions are concise syntax for anonymous functions.

// Example 1: Simple greeting
var greetArrow = (name1) => console.log("Hi " + name1 + "!");
greetArrow("Khan")


console.log("******************************************************");


// / Example 2: Add two numbers
const addArrow = (a, b) => a + b;
console.log(addArrow(8, 12)); // output 20


// Example 3: Squaring numbers in an array
var nums = [1, 2, 3, 4];
var squared = nums.map(num => num * num);
console.log(squared); // output [1, 4, 9, 16]

/*
Shorter syntax, especially for simple expressions.

Do not have their own this context.

Ideal for callbacks, array methods, and one-line functions.
*/


console.log("************************************************");
// 4. Immediately Invoked Function Expressions (IIFE)
// Runs automatically when defined

// Example 1: Simple IIFE
(function() {
    console.log("This runs immediately!");
})();

// Example 2: Calculate sum immediately
var total = (function(a, b) {
    return a + b;
})(10, 20);
console.log("Sum from IIFE: " + total);

// IIFE is useful for initialization or creating private scopes
console.log("************************************************");
// 5. Callback Functions
// Functions passed as arguments to other functions

// Example 1: Simple callback
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
}
greetUser("Ali", function() {
    console.log("This is a callback function!");
});

// Example 2: Array operation using callback
var nums = [1, 2, 3];
nums.forEach(function(num) {
    console.log("Number: " + num);
});
// Callback functions are essential in asynchronous JS and array operations
console.log("************************************************");
// 6. Recursive Functions
// Functions that call themselves

// Example 1: Factorial using recursion
function factorialRec(n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}
console.log("Factorial(5): " + factorialRec(5)); // 120

// Example 2: Fibonacci series
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6): " + fibonacci(6)); // 8
console.log("************************************************");
// 7. Generator Functions
// Functions that can pause and resume using yield

// Example 1: Simple generator
function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = genNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// Example 2: Infinite generator
function* infiniteGen() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const infGen = infiniteGen();
console.log(infGen.next().value); // 0
console.log(infGen.next().value); // 1


console.log("************************************************");
// 8. Async Functions
// Functions that return a promise and can use await

// Example 1: Simple async function
async function fetchData() {
    return "Data fetched!";
}
fetchData().then(data => console.log(data)); // "Data fetched!"

// Example 2: Using await with async
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedMessage() {
    await wait(1000); // wait 1 second
    console.log("This message is delayed by 1 second");
}
delayedMessage();

console.log("************************************************");
// 9. Constructor Functions
// Used to create objects with the 'new' keyword

// Example 1: Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, I'm " + this.name);
    };
}
var person1 = new Person("Ali", 25);
person1.greet(); // "Hello, I'm Ali"

// Example 2: Book constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
}
var book1 = new Book("JS Guide", "John");
console.log(book1.title + " by " + book1.author);

console.log("************************************************");
// 10. Method Functions
// Functions defined inside objects or classes

// Example 1: Object method
var car = {
    brand: "Toyota",
    start: function() {
        console.log(this.brand + " car started!");
    }
};
car.start();

// Example 2: Class method
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound");
    }
}
let dog = new Animal("Dog");
dog.speak();

console.log("************************************************");
// 11. Higher-Order Functions
// Functions that take or return other functions

// Example 1: Function returning function
function greetHOF(message) {
    return function(name) {
        console.log(message + ", " + name);
    };
}
var helloGreet = greetHOF("Hello");
helloGreet("Ali");

// Example 2: Function taking function as argument
function operate(a, b, operation) {
    return operation(a, b);
}
function multiply(a, b) { return a * b; }
console.log(operate(5, 6, multiply)); // 30

console.log("************************************************");
// 12. Nested Functions
// Functions defined inside other functions

// Example 1: Nested greeting
function outer(name) {
    function inner() {
        console.log("Hi " + name + "!");
    }
    inner();
}
outer("Ali");

// Example 2: Math calculation with nested
function calculate(a, b) {
    function sum() { return a + b; }
    function product() { return a * b; }
    console.log("Sum: " + sum());
    console.log("Product: " + product());
}
calculate(5, 3);

console.log("************************************************");
// 13. Dynamic/Anonymous Class Methods
// Functions added dynamically to objects or classes

// Example 1: Add method to existing object
var obj = {name: "Ali"};
obj.sayHi = function() { console.log("Hi " + this.name); };
obj.sayHi();

// Example 2: Dynamic method in class
class Calculator {}
Calculator.prototype.add = function(a, b) { return a + b; };
var calc = new Calculator();
console.log("Addition: " + calc.add(10, 20));

console.log("************************************************");
