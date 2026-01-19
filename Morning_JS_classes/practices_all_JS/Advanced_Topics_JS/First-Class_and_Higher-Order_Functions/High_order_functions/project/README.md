# HOF Playground - Interactive Higher-Order Functions Learning Tool

> ⚡ **HOF Playground** is an interactive project designed to teach and demonstrate **Higher-Order Functions (HOF)** in JavaScript. Users can interactively explore different ways functions can be passed, returned, and used dynamically.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Key Concepts](#key-concepts)
4. [Features](#features)
5. [Code Explanation](#code-explanation)
6. [Usage](#usage)
7. [Screenshot](#screenshot)

---

## Project Overview

HOF Playground allows users to **experiment with Higher-Order Functions interactively**. It demonstrates passing functions as arguments, returning functions from functions, using HOFs with arrays, dynamic function generation, and repeating actions with callbacks.

This project is ideal for **beginners and intermediate developers** to understand how HOFs provide **dynamic and reusable function capabilities** in JavaScript.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Key Concepts

* **Higher-Order Functions (HOF):** Functions that accept other functions as arguments or return functions.
* **Callbacks:** Functions passed as arguments to other functions to execute later.
* **Dynamic Function Selection:** HOFs can return different functions based on parameters.
* **Array Methods as HOFs:** `map`, `filter`, and `reduce` are built-in HOFs in JavaScript.
* **Reusable and Modular Code:** HOFs allow writing flexible, maintainable code.

---

## Features

* Run **functions as arguments** examples interactively.
* Explore **functions returned from functions** (dynamic factory pattern).
* Apply **array methods** using HOFs like `map`, `filter`, and `reduce`.
* Use **dynamic operations** to generate different functions on demand.
* **Repeat actions** multiple times dynamically using callbacks.
* Responsive **interactive design** with buttons and output fields.

---

## Code Explanation

### 1️⃣ Function as Argument

```js
performOperation(a, b, operation) // HOF that accepts a function as argument
```

* Accepts a function (`operation`) and executes it dynamically with provided arguments.

### 2️⃣ Function Returned from Function

```js
makeMultiplier(factor) // HOF returns a new function
```

* Returns a function to multiply a number by the given factor, supporting reusable behavior.

### 3️⃣ Array HOFs

```js
numbers.map(...), numbers.filter(...), numbers.reduce(...)
```

* Built-in HOFs that accept functions as callbacks to transform, filter, or reduce data arrays.

### 4️⃣ Dynamic Operations

```js
operationFactory(op) // returns different function based on op
```

* Generates different operations dynamically (add, multiply, subtract).

### 5️⃣ Repeat Action

```js
repeatAction(n, action) // executes a callback multiple times
```

* Accepts a function and repeats it n times, demonstrating dynamic reusable code.

---

## Usage

1. Open `index.html` in a modern browser.
2. Click on any card's **Run Example** button.
3. Observe the output in the designated output fields.
4. Modify `script.js` to experiment with different HOF patterns.

---

## Screenshot

*(Add screenshot of the HOF Playground interface here)*

---

## Author

* Developed by [Your Name]
* Focused on **teaching Higher-Order Functions interactively** for learning and portfolio purposes.

---

> This project is ideal for understanding **HOF, callbacks, dynamic functions, and array manipulations** in a hands-on, interactive environment.
