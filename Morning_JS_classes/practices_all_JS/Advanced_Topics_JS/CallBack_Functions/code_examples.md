# Callback Functions in JavaScript - Code Examples

This README.md contains **comprehensive and professional code examples** of JavaScript **Callback Functions** with detailed comments on each line for deep understanding.

---

## 1. Basic Synchronous Callback

```js
// Function that accepts a callback function
function greet(name, callback) {
  console.log("Hello " + name); // Print greeting message
  callback(); // Call the callback function after greeting
}

// Calling greet with an anonymous callback
greet("Waqar", () => {
  console.log("Goodbye!"); // Executed after the greeting
});
```

---

## 2. Callback with Parameters

```js
// Function to perform a calculation and return result via callback
function calculate(a, b, callback) {
  const result = a + b; // Sum two numbers
  callback(result); // Pass result to callback
}

// Using the callback to print result
calculate(5, 3, function(sum) {
  console.log("The sum is: " + sum); // Logs: The sum is: 8
});
```

---

## 3. Array Method Callbacks

```js
const numbers = [1, 2, 3, 4]; // Array of numbers

// Using forEach callback to print each number
numbers.forEach(function(num, index) {
  console.log(`Index ${index}: ${num}`); // Print index and value
});

// Using map callback to create new array of squares
const squares = numbers.map(num => num * num); // Square each number
console.log(squares); // Logs: [1, 4, 9, 16]

// Using filter callback to get even numbers
const evens = numbers.filter(num => num % 2 === 0); // Keep only even numbers
console.log(evens); // Logs: [2, 4]
```

---

## 4. Asynchronous Callback with setTimeout

```js
console.log("Start"); // Print Start first

// Asynchronous callback after 2 seconds
setTimeout(() => {
  console.log("Executed after 2 seconds"); // Runs after delay
}, 2000);

console.log("End"); // Print End immediately
```

---

## 5. Nested Callbacks (Callback Hell Example)

```js
function login(user, callback) {
  console.log(`User ${user} logged in`); // Simulate login
  callback(); // Execute next step
}

function getProfile(callback) {
  console.log("Fetching profile...");
  callback();
}

function getPosts(callback) {
  console.log("Fetching posts...");
  callback();
}

// Nested callbacks
login("Waqar", function() {
  getProfile(function() {
    getPosts(function() {
      console.log("All tasks completed!"); // Final message
    });
  });
});
```

---

## 6. Using Callbacks in Node.js Style (Error-First Callback)

```js
// Simulate reading file with error-first callback
function readFile(fileName, callback) {
  const error = false; // Simulate no error
  const data = "File content"; // Sample data
  if (error) {
    callback(new Error("File not found"), null); // Pass error
  } else {
    callback(null, data); // Pass data
  }
}

// Using the callback
readFile("sample.txt", (err, content) => {
  if (err) {
    console.error(err.message); // Handle error
  } else {
    console.log(content); // Print file content
  }
});
```

---

## 7. Callback with Multiple Parameters

```js
function multiplyAndDivide(a, b, callback) {
  const multiply = a * b; // Multiply two numbers
  const divide = a / b; // Divide a by b
  callback(multiply, divide); // Pass both results to callback
}

multiplyAndDivide(10, 2, (mul, div) => {
  console.log(`Multiply: ${mul}, Divide: ${div}`); // Logs: Multiply: 20, Divide: 5
});
```

---

## 8. Using Arrow Functions as Callbacks

```js
const fruits = ["Apple", "Banana", "Cherry"];

// Arrow function callback in forEach
fruits.forEach(fruit => console.log(fruit)); // Prints each fruit

// Arrow function in map
const fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths); // Logs: [5, 6, 6]
```

---

## 9. Real-Life Example: API Simulation

```js
function fetchData(url, callback) {
  console.log(`Fetching data from ${url}...`);
  setTimeout(() => { // Simulate async API call
    const data = { id: 1, name: "Waqar" };
    callback(data); // Pass data to callback
  }, 2000);
}

fetchData("https://api.example.com/user", data => {
  console.log("Received data:", data); // Logs after 2 seconds
});
```

---

## 10. Using Callbacks with Events

```js
// Simulate a button click
const button = { addEventListener: (event, callback) => callback() };

button.addEventListener("click", () => {
  console.log("Button clicked!"); // Callback executed when button clicked
});
```

---

**Tips:**

* Always comment each part of your code to understand the flow.
* Use callbacks for asynchronous tasks and modular code.
* Combine with Promises or async/await for complex async flows.
* Practice these examples by modifying them to see different behaviors.
