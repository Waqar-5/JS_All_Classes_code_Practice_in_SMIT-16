# Higher-Order Functions (HOF) in JavaScript

> This document explains **Higher-Order Functions** with practical examples, why they are considered HOFs, and how they work in JavaScript.

---

## Table of Contents

1. [What is a Higher-Order Function?](#what-is-a-higher-order-function)
2. [Examples of HOF](#examples-of-hof)

   * [1. Accepting a Function as Argument](#1-accepting-a-function-as-argument)
   * [2. Returning a Function](#2-returning-a-function)
   * [3. Using HOFs with Array Methods](#3-using-hofs-with-array-methods)
   * [4. Custom HOF for Repetition](#4-custom-hof-for-repetition)
   * [5. Dynamic HOF Returning Different Operations](#5-dynamic-hof-returning-different-operations)
   * [6. HOF with Callbacks and Parameters](#6-hof-with-callbacks-and-parameters)
   * [7. Real-World HOF Example: Event Listener](#7-real-world-hof-example-event-listener)
3. [Key Takeaways](#key-takeaways)

---

## What is a Higher-Order Function?

A **Higher-Order Function (HOF)** is a function that either:

1. **Accepts one or more functions as arguments**, or
2. **Returns a function as a result**

HOFs allow you to write **dynamic, reusable, and modular code** by passing behavior (functions) instead of just values.

---

## Examples of HOF

### 1️⃣ Accepting a Function as Argument

```js
function performOperation(a, b, operation) {
    return operation(a, b); // 'operation' is a function passed in
}

function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }

console.log(performOperation(5, 3, add));      // 8
console.log(performOperation(5, 3, multiply)); // 15
```

**Why it’s HOF:**

* `performOperation` accepts a function as an argument.
* The behavior changes dynamically based on the function passed.
* **Key Point:** Passing a function as an argument enables dynamic behavior.

---

### 2️⃣ Returning a Function

```js
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Why it’s HOF:**

* `makeMultiplier` returns a function.
* Creates reusable functions dynamically.
* **Key Point:** Returning functions is a powerful HOF pattern.

---

### 3️⃣ Using HOFs with Array Methods (map, filter, reduce)

```js
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

**Why it’s HOF:**

* `map`, `filter`, `reduce` accept functions as arguments.
* Allow dynamic transformation, selection, or accumulation.
* **Key Point:** Many built-in array methods are HOFs.

---

### 4️⃣ Custom HOF for Repetition

```js
function repeatAction(n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

function printIndex(index) {
    console.log(`This is repetition #${index}`);
}

repeatAction(3, printIndex);
```

**Why it’s HOF:**

* `repeatAction` executes any function passed to it multiple times.
* Makes code reusable and dynamic.
* **Key Point:** HOFs can run arbitrary callbacks multiple times.

---

### 5️⃣ Dynamic HOF Returning Different Operations

```js
function operationFactory(op) {
    if(op === "add") return (a, b) => a + b;
    if(op === "subtract") return (a, b) => a - b;
    if(op === "multiply") return (a, b) => a * b;
}

const addFunc = operationFactory("add");
const mulFunc = operationFactory("multiply");
console.log(addFunc(5, 7)); // 12
console.log(mulFunc(5, 7)); // 35
```

**Why it’s HOF:**

* `operationFactory` returns different functions dynamically.
* Allows flexible, modular code.
* **Key Point:** Returning different functions is a dynamic HOF pattern.

---

### 6️⃣ HOF with Callbacks and Parameters

```js
function greetUser(name, formatter) {
    return formatter(name);
}

function excitedGreeting(name) { return `Hello, ${name.toUpperCase()}! 😃`; }
function casualGreeting(name) { return `Hey, ${name}!`; }

console.log(greetUser("Waqar", excitedGreeting)); // Hello, WAQAR! 😃
console.log(greetUser("Waqar", casualGreeting));  // Hey, Waqar!
```

**Why it’s HOF:**

* Accepts a function (`formatter`) to define output behavior.
* Same function can produce different results based on callback.
* **Key Point:** HOF enables customizable behavior.

---

### 7️⃣ Real-World HOF Example: Event Listener

```js
const button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);

button.addEventListener("click", function() {
    alert("Button clicked! 🎉");
});
```

**Why it’s HOF:**

* `addEventListener` accepts a callback function.
* Function executed when the event occurs.
* **Key Point:** Many DOM methods are built-in HOFs.

---

## Key Takeaways

1. A **Higher-Order Function** either accepts functions as arguments or returns a function.
2. HOFs enable **dynamic, reusable, and modular code**.
3. Built-in array methods (`map`, `filter`, `reduce`) and DOM methods (`addEventListener`) are common HOF examples.
4. Returning functions or passing callbacks provides **flexible behavior** without rewriting code.

**✅ HOF Identification in Code:**

* Look for functions that **take another function as input**.
* Look for functions that **return a function as output**.
* Check if the function allows **dynamic behavior** based on the callback provided.
