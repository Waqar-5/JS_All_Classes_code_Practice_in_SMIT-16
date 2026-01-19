# Callback Functions in JavaScript - Detailed Explanation

This README.md contains **a complete line-by-line explanation** of all callback function examples from the practice file, to help you fully understand the concept.

---

## 1. Basic Synchronous Callback

```js
function greet(name, callback) {
  console.log("Hello " + name); // Print greeting message
  callback(); // Execute the callback function passed as argument
}

greet("Waqar", () => {
  console.log("Goodbye!"); // This arrow function is the callback
});
```

**Explanation:**

* `greet` takes two parameters: `name` and `callback`.
* `callback()` executes the function passed as argument.
* Flow: Prints "Hello Waqar" → Executes callback → Prints "Goodbye!".
* **Type:** Synchronous callback

---

## 2. Callback with Parameters

```js
function calculate(a, b, callback) {
  const result = a + b;
  callback(result); // Pass result to callback
}

calculate(5, 3, function(sum) {
  console.log("The sum is: " + sum);
});
```

**Explanation:**

* `callback(result)` passes the calculated sum to the callback function.
* Anonymous function `function(sum){...}` is the callback.
* Flow: 5 + 3 = 8 → callback executed → prints "The sum is: 8".

---

## 3. Array Method Callbacks

```js
const numbers = [1, 2, 3, 4];

numbers.forEach(function(num, index) {
  console.log(`Index ${index}: ${num}`);
});

const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);
```

**Explanation:**

* `forEach`, `map`, and `filter` **accept callback functions**.
* Callback executes for each array element.
* Arrow functions or anonymous functions can be used as callbacks.

---

## 4. Asynchronous Callback with setTimeout

```js
console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds"); // Callback function
}, 2000);

console.log("End");
```

**Explanation:**

* Arrow function `() => {...}` is the callback.
* Executes **after 2 seconds**, making it asynchronous.
* Flow: Prints "Start" → Schedules callback → Prints "End" → After 2s prints "Executed after 2 seconds".

---

## 5. Nested Callbacks (Callback Hell)

```js
login("Waqar", function() {
  getProfile(function() {
    getPosts(function() {
      console.log("All tasks completed!");
    });
  });
});
```

**Explanation:**

* Multiple callbacks are nested.
* Each function calls the next step via its callback.
* This pattern is called **callback hell**.

---

## 6. Node.js Style Error-First Callback

```js
readFile("sample.txt", (err, content) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("File Content:", content);
  }
});
```

**Explanation:**

* `(err, content) => {...}` is the callback.
* Node.js convention: **first argument = error**, second = data.
* Callback decides what to do depending on error or success.

---

## 7. Callback with Multiple Parameters

```js
multiplyAndDivide(10, 2, (mul, div) => {
  console.log(`Multiply: ${mul}, Divide: ${div}`);
});
```

**Explanation:**

* Callback receives **multiple parameters** from main function.
* `mul` and `div` are values passed from `multiplyAndDivide`.
* Executed after calculation is done.

---

## 8. Arrow Functions as Callbacks

```js
fruits.forEach(fruit => console.log(fruit));
```

**Explanation:**

* Arrow function is the callback.
* Executes for each element in the array.

---

## 9. Real-Life Example: API Simulation

```js
fetchData("https://api.example.com/user", data => {
  console.log("Received data:", data);
});
```

**Explanation:**

* `data => {...}` is the callback.
* Executes **after asynchronous API simulation** (2 seconds delay).

---

## 10. Event Callback

```js
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

**Explanation:**

* Arrow function is the callback.
* `addEventListener` calls it **when the event occurs**.

---

## ✅ Key Takeaways

1. Callback function = **function passed as argument to another function**.
2. Can be **synchronous** (runs immediately) or **asynchronous** (runs later).
3. Can **accept parameters** from the main function.
4. Can be **anonymous** or **named**.
5. Nested callbacks → **callback hell**, avoid using Promises/async-await.
6. Used in **array methods, Node.js, events, timers, and async operations**.
