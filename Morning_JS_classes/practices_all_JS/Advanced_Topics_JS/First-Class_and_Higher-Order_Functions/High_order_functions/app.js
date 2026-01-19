// 1️⃣ HOF that Accepts a Function as Argument
// Define a function that performs an operation using a callback
function performOperation(a, b, operation) { // 'operation' is a function passed in
    return operation(a, b); // execute the passed function with a and b
}

// Define some functions to pass
function add(x, y) { return x + y; }        // simple addition function
function multiply(x, y) { return x * y; }   // simple multiplication function

// Call HOF with different callback functions
console.log(performOperation(5, 3, add));      // Output: 8
console.log(performOperation(5, 3, multiply)); // Output: 15
// ✅ HOF uses the passed function dynamically

console.log("********************************************************************");



// Key Point: Passing a function as argument allows dynamic behavior.

// 2️⃣ HOF that Returns a Function
// Function that returns another function
function makeMultiplier(factor) {       // outer function
    return function(number) {           // inner function returned
        return number * factor;         // multiplies input by factor
    };
}

const double = makeMultiplier(2);      // returns a function to double a number
const triple = makeMultiplier(3);      // returns a function to triple a number

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
// ✅ HOF returns a function, creating **dynamic reusable functions**
// Key Point: Returning functions is a powerful HOF pattern.



console.log("************************************************************");
// 3️⃣ Using HOFs with Array Methods (map, filter, reduce)

const numbers = [1, 2, 3, 4, 5];

// map: transform array elements
const squared = numbers.map(function(num) {  // map accepts a function as argument
    return num * num;                        // square each number
});
console.log(squared); // Output: [1,4,9,16,25]

// filter: select elements based on condition
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;                   // keep only even numbers
});
console.log(evenNumbers); // Output: [2,4]

// reduce: accumulate values
const sum = numbers.reduce(function(accumulator, num) {
    return accumulator + num;                // sum all numbers
}, 0);
console.log(sum); // Output: 15
// Key Point: map, filter, and reduce are built-in HOFs that accept callback functions.

console.log("****************************************************************");

// 4️⃣ Custom HOF for Repetition
// HOF that repeats an action n times
function repeatAction(n, action) { // 'action' is a function
    for(let i = 0; i < n; i++) {   // repeat n times
        action(i);                 // execute the passed function
    }
}

// Example callback function
function printIndex(index) {
    console.log(`This is repetition #${index}`);
}

// Call HOF
repeatAction(3, printIndex);
/* Output:
This is repetition #0
This is repetition #1
This is repetition #2
*/
// Key Point: You can pass any function to a HOF to make it reusable and dynamic.

console.log("************************************************************");
// 5️⃣ HOF Returning Different Operations (Dynamic HOF)
// HOF that returns a different function based on input
function operationFactory(op) {
    if(op === "add") return (a, b) => a + b;
    if(op === "subtract") return (a, b) => a - b;
    if(op === "multiply") return (a, b) => a * b;
}

const addFunc = operationFactory("add");       // HOF returns addition function
const mulFunc = operationFactory("multiply");  // HOF returns multiplication function

console.log(addFunc(5, 7)); // Output: 12
console.log(mulFunc(5, 7)); // Output: 35
// Key Point: HOF can return different functions dynamically, making your code flexible and modular.

console.log("****************************************************************");
// 6️⃣ HOF with Callbacks and Parameters
// HOF that accepts a function and extra parameters
function greetUser(name, formatter) {  // 'formatter' is a function
    return formatter(name);            // execute the callback
}

// Callback function
function excitedGreeting(name) {
    return `Hello, ${name.toUpperCase()}! 😃`;
}

function casualGreeting(name) {
    return `Hey, ${name}!`;
}

console.log(greetUser("Waqar", excitedGreeting)); // Output: Hello, WAQAR! 😃
console.log(greetUser("Waqar", casualGreeting));  // Output: Hey, Waqar!
// Key Point: HOF allows different behavior for the same function call, depending on the callback.

console.log("***************************************************************");
// 7️⃣ Real-World HOF Example: Event Listener

// HOF in action: addEventListener
const button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);

// addEventListener is a HOF because it accepts a callback function
button.addEventListener("click", function() {
    alert("Button clicked! 🎉"); // this function is passed as argument
});
// Key Point: Many DOM methods (addEventListener) are built-in HOFs in JavaScript.