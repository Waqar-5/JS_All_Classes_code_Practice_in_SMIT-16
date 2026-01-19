// ===============================
// 1️⃣ HOF that Accepts Function as Argument
// ===============================

// Define a function named performOperation
function performOperation(a, b, operation) { 
    // return the result of calling the passed-in function 'operation' with arguments a and b
    return operation(a, b); 
}

// Define a function named 'add' with two parameters x and y
function add(x, y) { 
    return x + y; // return the sum of x and y
}

// Define a function named 'multiply' with two parameters x and y
function multiply(x, y) { 
    return x * y; // return the product of x and y
}

// Select the button element with id 'callbackBtn' and attach a click event listener
document.getElementById("callbackBtn").addEventListener("click", () => {
    // Call performOperation with 5, 3, and the add function; store result in result1
    const result1 = performOperation(5, 3, add);
    // Call performOperation with 5, 3, and the multiply function; store result in result2
    const result2 = performOperation(5, 3, multiply);
    // Select the element with id 'callbackOutput' and set its text content to show both results
    document.getElementById("callbackOutput").textContent = `Add: ${result1}, Multiply: ${result2}`;
});


// ===============================
// 2️⃣ HOF that Returns Function
// ===============================

// Define a function named 'makeMultiplier' that takes a parameter 'factor'
function makeMultiplier(factor){
    // Return a new function that takes a parameter 'number'
    return function(number){
        // Multiply 'number' by 'factor' and return the result
        return number * factor;
    };
}

// When the button with id 'returnBtn' is clicked
document.getElementById("returnBtn").addEventListener("click", () => {
    // Call makeMultiplier with 2, which returns a new function, assign it to 'double'
    const double = makeMultiplier(2);
    // Call makeMultiplier with 3, which returns a new function, assign it to 'triple'
    const triple = makeMultiplier(3);
    // Show the output of calling double(5) and triple(4) in the element with id 'returnOutput'
    document.getElementById("returnOutput").textContent = `Double 5: ${double(5)}, Triple 4: ${triple(4)}`;
});


// ===============================
// 3️⃣ HOF with Array Methods
// ===============================

// Create an array named 'numbers' containing numbers 1 to 5
const numbers = [1, 2, 3, 4, 5];

// When the button with id 'arrayBtn' is clicked
document.getElementById("arrayBtn").addEventListener("click", () => {
    // Use the map HOF to square each element in numbers; store result in 'squared'
    const squared = numbers.map(num => num * num);
    // Use the filter HOF to keep only even numbers; store result in 'evenNumbers'
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    // Use the reduce HOF to sum all elements in the array; store result in 'sum'
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    // Display the results in the element with id 'arrayOutput'
    document.getElementById("arrayOutput").textContent =
        `Squared: ${squared.join(", ")} | Even: ${evenNumbers.join(", ")} | Sum: ${sum}`;
});


// ===============================
// 4️⃣ Dynamic Operations HOF
// ===============================

// Define a function named 'operationFactory' that takes parameter 'op'
function operationFactory(op) {
    // If op is "add", return a function that adds two numbers
    if(op === "add") return (a, b) => a + b;
    // If op is "subtract", return a function that subtracts two numbers
    if(op === "subtract") return (a, b) => a - b;
    // If op is "multiply", return a function that multiplies two numbers
    if(op === "multiply") return (a, b) => a * b;
}

// When the button with id 'dynamicBtn' is clicked
document.getElementById("dynamicBtn").addEventListener("click", () => {
    // Call operationFactory with "add" and store the returned function in 'addFunc'
    const addFunc = operationFactory("add");
    // Call operationFactory with "multiply" and store the returned function in 'mulFunc'
    const mulFunc = operationFactory("multiply");
    // Call the returned functions and display the results in the element with id 'dynamicOutput'
    document.getElementById("dynamicOutput").textContent =
        `Add: ${addFunc(5,7)}, Multiply: ${mulFunc(5,7)}`;
});


// ===============================
// 5️⃣ Repeat Action HOF
// ===============================

// Define a function named 'repeatAction' that takes number 'n' and a function 'action'
function repeatAction(n, action){
    // Loop from i = 0 to n-1
    for(let i = 0; i < n; i++){
        // Call the function 'action' with current index i
        action(i);
    }
}

// Define a function named 'printIndex' that takes a parameter 'index'
function printIndex(index){
    // Log the repetition message to console
    console.log(`This is repetition #${index}`);
}

// When the button with id 'repeatBtn' is clicked
document.getElementById("repeatBtn").addEventListener("click", () => {
    // Create an empty array to store logs
    let logs = [];
    // Call repeatAction with 3 repetitions and a function that pushes formatted message to logs
    repeatAction(3, i => logs.push(`Repetition #${i}`));
    // Display the logs as a comma-separated string in the element with id 'repeatOutput'
    document.getElementById("repeatOutput").textContent = logs.join(", ");
});
