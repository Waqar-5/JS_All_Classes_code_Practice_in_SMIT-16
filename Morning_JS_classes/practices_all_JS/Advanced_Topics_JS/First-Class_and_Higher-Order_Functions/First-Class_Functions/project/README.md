# FCF Playground - Interactive Learning Tool

> 🎨 **FCF Playground** is an interactive project designed to teach and demonstrate **First-Class Functions (FCF)** in JavaScript. Users can interactively explore different ways functions can be used in modern JavaScript.

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

FCF Playground allows users to **experiment with first-class functions interactively**. It demonstrates storing functions in variables, arrays, objects, returning functions, and passing functions as arguments (callbacks).

The project is perfect for **beginners and intermediate developers** to understand how functions are treated as first-class citizens in JavaScript.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Key Concepts

* **First-Class Functions (FCF):** Functions can be stored in variables, arrays, or objects.
* **Higher-Order Functions (HOF):** Functions that accept other functions as arguments or return functions.
* **Callback Functions:** Functions passed as arguments and executed later.
* **Dynamic Function Calls:** Accessing and invoking functions dynamically using arrays, objects, or return values.

---

## Features

* Run **function-in-variable examples** interactively.
* Explore **functions stored in arrays** and execute them dynamically.
* Understand **functions in objects** and call them using property names.
* **Return functions from functions** (factory pattern) and execute them.
* **Pass functions as arguments** to demonstrate callbacks.
* Modern **responsive design** with interactive buttons.

---

## Code Explanation

### 1️⃣ Function in Variable

```js
function greet(name) {
    return `Hello, ${name}!`;
}
const greetVar = greet;
```

* Store a function in a variable and call it dynamically.

### 2️⃣ Functions in Array

```js
const operations = [
    function(a, b){ return a + b; },
    function(a, b){ return a - b; },
    function(a, b){ return a * b; }
];
```

* Store multiple functions in an array and execute using `map`.

### 3️⃣ Functions in Object

```js
const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b
};
```

* Functions as object properties, callable via keys.

### 4️⃣ Return Function from Function

```js
function multiplier(factor){
    return function(number){ return number * factor; };
}
```

* Return functions dynamically; supports closures.

### 5️⃣ Pass Function as Argument (Callback)

```js
function executeOperation(a, b, operation){
    return operation(a,b);
}
```

* Functions passed as arguments and executed inside HOF.

---

## Usage

1. Open `index.html` in a browser.
2. Click on any card's **Run Example** button.
3. Observe the result in the output field.
4. Experiment with modifying the code in `script.js` for dynamic learning.

---

## Screenshot

*(Add screenshot of the FCF Playground interface here)*

---

## Author

* Developed by [Your Name]
* Focused on teaching **First-Class Functions interactively in JavaScript**.

---

> This project is ideal for learning **FCF, HOF, and callback concepts** with hands-on interaction.
