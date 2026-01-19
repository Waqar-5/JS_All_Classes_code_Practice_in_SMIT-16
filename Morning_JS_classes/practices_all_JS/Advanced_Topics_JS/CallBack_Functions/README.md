# Callback Functions in JavaScript

A **Callback Function** is a **function passed as an argument to another function** and is executed **later**, usually after a task completes. Callbacks are fundamental in JavaScript and widely used in **asynchronous programming, event handling, and array operations**.

---

## 📌 Table of Contents

1. [Definition](#definition)
2. [Why Use Callbacks?](#why-use-callbacks)
3. [Basic Example](#basic-example)
4. [Callback with Data](#callback-with-data)
5. [Callbacks in Asynchronous JavaScript](#callbacks-in-asynchronous-javascript)
6. [Callbacks in Array Methods](#callbacks-in-array-methods)
7. [Arrow Function Callbacks](#arrow-function-callbacks)
8. [Real-Life Analogy](#real-life-analogy)
9. [Callback Hell](#callback-hell)
10. [Best Practices](#best-practices)
11. [Common Interview Questions](#common-interview-questions)
12. [Summary](#summary)

---

## Definition

> A **callback function** is a function **passed to another function** to be **called later** at the appropriate time.

**Key Points:**

* Not executed immediately
* Often used in **async operations**
* Can be **named or anonymous**
* Forms the foundation for **Promises & async/await**

---

## Why Use Callbacks?

* To **wait for tasks** (like API calls, timers)
* To **customize behavior** in functions
* To **handle results** of operations
* To make code **modular and reusable**

---

## Basic Example

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Waqar", sayBye);
```

**Output:**

```
Hello Waqar
Goodbye!
```

**Explanation:**
`sayBye` is passed into `greet` and **called after greeting**.

---

## Callback with Data

```javascript
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(5, 3, function(answer) {
  console.log("Result is:", answer);
});
```

**Output:**

```
Result is: 8
```

**Explanation:**
The callback **receives data** from another function, making it **dynamic and reusable**.

---

## Callbacks in Asynchronous JavaScript

### Example: `setTimeout`

```javascript
setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);
```

* JavaScript waits **2 seconds**
* Then the callback function executes
* This is how JS handles **async behavior**

---

## Callbacks in Array Methods

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
  console.log(num * 2);
});
```

**Output:**

```
2
4
6
8
```

Other examples:

* `map()`
* `filter()`
* `reduce()`
* `some()`, `every()`

---

## Arrow Function Callbacks

```javascript
const squares = numbers.map(num => num * num);
console.log(squares);
```

* Short, **modern syntax**
* Used extensively in **functional JS**
* Preferred in **React** and modern JS frameworks

---

## Real-Life Analogy

📞 Imagine ordering food 🍕:

* You say: “Call me when the food is ready.”
* The restaurant **calls you back** once done.
* That “call me later” function is a **callback**.

---

## Callback Hell (Pyramid of Doom)

```javascript
login(user, () => {
  getProfile(() => {
    getPosts(() => {
      console.log("All done");
    });
  });
});
```

❌ Hard to read and maintain

**Solution:**

* Use **Promises**
* Use **async/await**
* Break functions into smaller, reusable pieces

---

## Best Practices

* Always **name your callbacks** for better debugging
* Avoid **deeply nested callbacks**
* Use **arrow functions** for concise syntax
* Combine callbacks with **Promises** for cleaner async code
* Handle **errors** inside callbacks

---

## Common Interview Questions

1. What is a callback function?
2. Difference between **synchronous** and **asynchronous callbacks**
3. What is **callback hell** and how do you avoid it?
4. Explain callback in **array methods** like `map`, `filter`
5. Real-life examples of callbacks

---

## Summary

* A callback is a **function passed to another function**
* It is executed **later**, often after a task
* Used in **async tasks, events, timers, arrays**
* Modern JS uses **Promises & async/await** to improve readability
* Understanding callbacks is **essential for every JS developer**

---

**Author:** Waqar Ali
**Topic:** JavaScript Callbacks
**Date:** 2026-01-19

---

```
You can **edit this file** as needed. Add your own examples, notes, or advanced topics.
```
