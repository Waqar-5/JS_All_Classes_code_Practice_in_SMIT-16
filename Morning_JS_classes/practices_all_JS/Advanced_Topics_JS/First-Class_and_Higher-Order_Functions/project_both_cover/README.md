# FCF + HOF Dynamic Calculator

> A **dynamic calculator project** demonstrating the use of **First-Class Functions (FCF)** and **Higher-Order Functions (HOF)** in JavaScript.

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

This project is a **web-based calculator** that performs addition, subtraction, multiplication, division, and power operations.
It highlights the use of **First-Class Functions** and **Higher-Order Functions** to handle dynamic operations with callbacks.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Key Concepts

* **First-Class Functions (FCF):** Functions stored in variables, objects, or passed as arguments.
* **Higher-Order Functions (HOF):** Functions that accept other functions as arguments or return functions.
* **Callback Functions:** Functions passed as arguments to HOFs to be executed later.
* **Event Handling:** Interacting with DOM buttons using `addEventListener()`.

---

## Features

* Dynamic calculation of multiple operations.
* Display of **result** instantly.
* Visual display of **concepts used** for each operation.
* Modern responsive design.

---

## Code Explanation

### 1️⃣ First-Class Functions

```js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Cannot divide by zero" : a / b; }
function power(a, b) { return Math.pow(a, b); }

const operations = { add, subtract, multiply, divide, power }; // FCF stored in object
```

### 2️⃣ Higher-Order Function

```js
function calculate(a, b, operationCallback) {
    return operationCallback(a, b); // HOF executes any function passed as argument
}
```

### 3️⃣ DOM Interactions & Event Handling

```js
const buttons = document.querySelectorAll(".operations button");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultValue = document.getElementById("resultValue");
const conceptValue = document.getElementById("conceptValue");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const opName = button.dataset.op;
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        const result = calculate(num1, num2, operations[opName]); // FCF + HOF
        resultValue.textContent = result;

        conceptValue.textContent = `Function Passed as Argument → Callback | calculate() → HOF | ${opName}() → FCF`;
    });
});
```

---

## Usage

1. Open `index.html` in a browser.
2. Enter numbers in the input fields.
3. Click on any operation button (Add, Subtract, Multiply, Divide, Power).
4. See the **result** and the **concepts used** displayed below.

---

## Screenshot

*(Add a screenshot of the calculator interface here)*

---

## Author

* Created by [Waqar Ali]
* Concepts focused on **FCF + HOF in JavaScript**

---

> This project is perfect for understanding **dynamic callbacks, first-class functions, higher-order functions, and modern JavaScript event handling**.
