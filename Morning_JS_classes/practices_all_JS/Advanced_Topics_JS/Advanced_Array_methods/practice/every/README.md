# JavaScript `every()` Method - Complete Notes & Reference

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Parameters](#parameters)
4. [Return Value](#return-value)
5. [How `every()` Works](#how-every-works)
6. [Examples](#examples)
7. [Comparison with `some()`](#comparison-with-some)
8. [Practical Use Cases](#practical-use-cases)
9. [Tips for Exams & Interviews](#tips-for-exams--interviews)
10. [Common Mistakes](#common-mistakes)

---

## Introduction

The `every()` method is a **built-in array method** in JavaScript that tests whether **all elements** in the array pass the test implemented by the provided **callback function**.

It is widely used in **data validation, conditional checks, and interview questions**.

---

## Syntax

```javascript
array.every(callback(element, index, array), thisArg)
```

* **callback:** Function to execute on each element.
* **element:** Current element being processed.
* **index:** Index of the current element.
* **array:** Array `every()` was called on.
* **thisArg (optional):** Value to use as `this` inside callback.

---

## Parameters

| Parameter  | Type     | Description                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| `callback` | Function | Function to test each element. It takes 3 arguments: `element`, `index`, `array`. |
| `thisArg`  | Optional | Value to use as `this` inside callback function.                                  |

---

## Return Value

* **Boolean:** `true` if **all elements** satisfy the condition.
* `false` if **any element** fails the test.

---

## How `every()` Works

1. Iterates the array **from start to end**.
2. Calls the **callback function** on each element.
3. Returns **false immediately** if any element fails the test.
4. Stops further iteration once a failure is found.
5. Returns **true** if all elements pass.

---

## Examples

### Basic Usage

```javascript
const numbers = [10, 20, 30];
const allAbove5 = numbers.every(num => num > 5);
console.log(allAbove5); // true
```

### Element Fails Test

```javascript
const numbers = [1,2,3];
console.log(numbers.every(num => num > 2)); // false
```

### Accessing Index and Array

```javascript
const fruits = ['apple','banana','cherry'];
const allStrings = fruits.every((fruit, idx, arr) => typeof fruit === 'string');
console.log(allStrings); // true
```

### Using with Objects

```javascript
const users = [{id:1,active:true},{id:2,active:true}];
const allActive = users.every(u => u.active);
console.log(allActive); // true
```

---

## Comparison with `some()`

| Method    | Returns | Use Case                                                   |
| --------- | ------- | ---------------------------------------------------------- |
| `every()` | Boolean | Checks if **all elements** satisfy the condition           |
| `some()`  | Boolean | Checks if **at least one element** satisfies the condition |

---

## Practical Use Cases

* **Validation:** Ensure all inputs meet criteria.
* **Checking array of objects:** Ensure all objects have a specific property.
* **Conditional logic:** Run code only if all elements satisfy condition.
* **Forms or data validation:** Ensure every field is valid.

---

## Tips for Exams & Interviews

1. Returns **true/false**, never the element or index.
2. Stops iterating **once a failure is found**.
3. Can access **element, index, and array** inside callback.
4. Use arrow functions for concise code.
5. Often compared with `some()` to demonstrate understanding.
6. Works on sparse arrays, skips empty slots.
7. Ideal for **data validation and all-pass conditions**.

---

## Common Mistakes

* Expecting `every()` to return elements instead of boolean.
* Forgetting it **stops after first failure**, not checking all elements.
* Using on **non-array objects**.
* Confusing with `some()` or `find()`.

---

> 🔹 **Pro Tip:** `every()` is essential for ensuring **all elements meet a condition**, making it highly useful in **real-world projects and coding interviews**.

---

This README is formatted professionally for **one-click download**, acting as a **complete PDF-style reference** to help beginners and interviewees **crack exams and interviews** on the `every()` method in JavaScript.
