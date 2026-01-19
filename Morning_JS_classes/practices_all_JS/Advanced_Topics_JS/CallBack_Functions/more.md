# Callback Functions in JavaScript - Complete Guide

A **Callback Function** is a **function passed as an argument to another function** and is executed **later**, usually after a task completes. Callbacks are a core concept in JavaScript and essential for asynchronous programming, event handling, and array operations.

---

## 📌 Table of Contents

1. [Definition](#definition)
2. [Types of Callbacks](#types-of-callbacks)

   * Synchronous Callback
   * Asynchronous Callback
3. [Basic Examples](#basic-examples)
4. [Callbacks with Data](#callbacks-with-data)
5. [Callbacks in Asynchronous JS](#callbacks-in-asynchronous-js)
6. [Callbacks in Array Methods](#callbacks-in-array-methods)
7. [Arrow Function Callbacks](#arrow-function-callbacks)
8. [Callback Hell](#callback-hell)
9. [Best Practices](#best-practices)
10. [Common Interview Questions](#common-interview-questions)
11. [Summary](#summary)

---

## Definition

> A **callback function** is a function **passed to another function** to be **called later**.

**Key Points:**

* Executed **later**, not immediately
* Can be **named or anonymous**
* Forms the base for **Promises & async/await**
* Used in **events, timers, API calls, and array methods**

---

## Types of Callbacks

### Synchronous Callback

* Runs **immediately** after being passed to a function
* Common in array methods

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Waqar", () => console.log("Goodbye!"));
```

**Output:**

```
Hello Waqar
Goodbye!
```

### Asynchronous Callback

* Runs **later**, after a task completes (e.g., timer, API call)

```js
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

---

## Basic Example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Waqar", function() {
  console.log("Goodbye!");
});
```

---

## Callbacks with Data

```js
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(5, 3, result => console.log("Result is:", result));
```

---

## Callbacks in Array Methods

```js
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
```

**Output:**

```
2
4
6
8
```

Other methods: `map()`, `filter()`, `reduce()`, `some()`, `every()`

---

## Arrow Function Callbacks

```js
const squares = numbers.map(num => num * num);
console.log(squares);
```

* Short, modern syntax
* Preferred in React and modern JS frameworks

---

## Callback Hell

```js
login(user, () => {
  getProfile(() => {
    getPosts(() => {
      console.log("All done");
    });
  });
});
```

* Hard to read and maintain
* Solutions: **Promises**, **async/await**, **breaking into smaller functions**

---

## Best Practices

* Name your callbacks for easier debugging
* Avoid deeply nested callbacks
* Use arrow functions for concise syntax
* Combine with Promises for cleaner async code
* Handle errors inside callbacks

---

## Common Interview Questions

1. What is a callback function?
2. Difference between synchronous and asynchronous callbacks
3. What is callback hell and how to avoid it?
4. Explain callbacks in array methods (`map`, `filter`, `forEach`)
5. Real-life examples of callbacks

---

## Summary

* Callbacks are functions passed to other functions and executed later
* They are essential for **async tasks, events, timers, and array operations**
* Understanding callbacks is critical for any JavaScript developer
* Modern alternatives include **Promises** and **async/await**

---

**Author:** Waqar Ali
**Date:** 2026-01-19

```
You can **edit this file** to add more examples, notes, or advanced topics.
```
