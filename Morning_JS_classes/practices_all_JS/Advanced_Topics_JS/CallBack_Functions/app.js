// ===============================
// Callback Function Practice File
// ===============================

// 1. Basic Synchronous Callback



function greet(name, callback) {
    console.log("Hello " + name); // Print greeting message
    callback(); // Call the callback function after greeting   
}

greet("Waqar", () => {
    console.log("GoodBye!"); // Executed after the greeting
})


console.log("******************************************************************");

// 2. Callback with Parameters
function calcaulate(a, b, callback) {
    const result = a + b; // Sum two numbers
    callback(result); // Pass result to callback
}

calcaulate(5, 3, function(sum) {
    console.log("This sum is: " + sum); // logs: The sum is: 8
});

console.log("****************************************************");

// 3. Array Method Callbacks
const numbers = [1, 2, 3, 4]; // Array of numbers

numbers.forEach(function(num, index) { 
    console.log(`Index ${index}: ${num}`); // Print index and value   
})

console.log("**********************************************************");
const squares = numbers.map(num => num * num);; // Square each number
console.log("Squares: ", squares); // Logs: [1, 4, 9, 16]

console.log("********************************************************");
const evens = numbers.filter(num => num % 2 === 0); // Keep only even numbers
console.log("Even Numbers:", evens); // Logs: [2, 4]


console.log("***********************************************************");
// 4. Asynchronous Callback with setTimeout

console.log("Start");

setTimeout(() => {
    console.log("Executed after 2 seconds"); // funs after delay
}, 2000)

console.log("End");

console.log("**********************************************");
// 5. Nested Callbacks (Callback Hell Example)
function login(user, callback){
    console.log(`User ${user} Logged in`);
    callback()
}

function getProfile(callback){
    console.log("Fetching Profiler...");
    callback()
}

function getPosts(callback){
    console.log("Fetching posts...");
    callback();
}

login("Waqar ", function() {
    getProfile(function() {
        getPosts(function() {
            console.log("All tasks completed!"); // Final message
        })
    })
})



console.log("************************************************");
// 6. Node.js Style Error-First Callback

function readFile(fileName, callback){
    const error = false; // Simulate no error
    const data = "File content"; // Sample data
    if(error){
        callback(new Error("File not Found"), null);
    } else {
        callback(null, data)
    }
}


readFile("Sample.txt", (err, content) => {
    if(err){
        console.log(err.message); //  Handle error
    } else{
        console.log("File Content:", content); // Print file content
    }
});


console.log("***********************************************************");

// 7. Callback with Multiple Parameters
function multiplyAndDivide(a, b, callback){
    const multiply = a * b; // Multiply two numbers
    const divide = a / b; // Divide a by b
    callback(multiply, divide); // Pass both results
}

multiplyAndDivide(10, 2, (mul, div) => {
    console.log(`Multiply: ${mul}, Divide: ${div}`); // Logs: Multiply: 20, Divide: 5
})


console.log("************************************************************");

// 8. Using Arrow Functions as Callbacks
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(fruit => console.log(fruit)); // Print each fruit

const fruitLengths = fruits.map(fruit => fruit.length);
console.log("Fruit Lengths:", fruitLengths); // Logs: [5, 6, 6]


console.log("*******************************************************");
// 9. Real-Life Example: API Simulation
function fetchData(url, callback){
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const data = {id: 1, name: "Waqar"};
        callback(data) //  Pass data to callback
    }, 2000)
}

fetchData("https://api.example.com/user", data => {
  console.log("Received data:", data); // Logs after 2 seconds
});

console.log("************************************************************");

// 10. Using Callbacks with Events (Simulation)
const button = { addEventListener: (event, callback) => callback() };

button.addEventListener("click", () => {
  console.log("Button clicked!"); // Callback executed when button clicked
});





