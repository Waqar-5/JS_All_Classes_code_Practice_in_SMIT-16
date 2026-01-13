# JavaScript `findIndex()` Method

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Parameters](#parameters)
4. [Return Value](#return-value)
5. [Examples](#examples)

   * [Basic Usage](#basic-usage)
   * [No Match Case](#no-match-case)
   * [Using Index](#using-index)
   * [Practical Example](#practical-example)
6. [Comparison with `find()`](#comparison-with-find)
7. [When to Use `findIndex()`](#when-to-use-findindex)
8. [Tips for Exams & Interviews](#tips-for-exams--interviews)

---

## Introduction

The `findIndex()` method is an **array method** in JavaScript used to **find the index of the first element** in an array that satisfies a given **condition** (callback function).

If no element satisfies the condition, it returns **-1**.

---

## Syntax

```javascript
array.findIndex(callback(element, index, array), thisArg)
```

---

## Parameters

| Parameter  | Type     | Description                                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------------------------- |
| `callback` | Function | Function to test each element of the array. It takes 3 arguments: `element`, `index`, and `array`. |
| `thisArg`  | Optional | Value to use as `this` inside the callback function.                                               |

**Callback Function Arguments:**

* `element` → The current element being processed.
* `index` → The index of the current element.
* `array` → The array `findIndex()` was called on.

---

## Return Value

* Returns the **index** of the first element that passes the test.
* Returns **-1** if no element satisfies the condition.

---

## Examples

### Basic Usage

```javascript
const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex(num => num > 25);
console.log(index); // Output: 2
```

---

### No Match Case

```javascript
const numbers = [10, 20, 30];
const index = numbers.findIndex(num => num > 50);
console.log(index); // Output: -1
```

---

### Using Index in Callback

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const index = fruits.findIndex((fruit, idx) => fruit.length === 6);
console.log(index); // Output: 1 ('banana')
```

---

### Practical Example: Updating Array

```javascript
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const idx = users.findIndex(u => u.id === 2);
if (idx !== -1) {
  users[idx].name = 'Robert';
}

console.log(users);
/* Output:
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Robert' }
]
*/
```

---

## Comparison with `find()`

| Method        | Returns        | Use Case                              |
| ------------- | -------------- | ------------------------------------- |
| `find()`      | Element        | Get the element itself                |
| `findIndex()` | Index (number) | Get the position/index of the element |

Example:

```javascript
const arr = [1,2,3,4];
console.log(arr.find(x => x > 2));      // 3
console.log(arr.findIndex(x => x > 2)); // 2
```

---

## When to Use `findIndex()`

* When you need the **index** of an element rather than the element itself.
* Useful for **updating or removing** elements in an array.
* Works well with objects in arrays.

---

## Tips for Exams & Interviews

1. Remember that `findIndex()` **stops execution once a match is found**.
2. Returns **-1** if no element passes the test.
3. Can access `index` and `array` inside the callback, which can help in complex logic.
4. Commonly compared with `find()`—know the difference.
5. Useful in **CRUD operations** on arrays of objects.
6. Always check for `-1` before updating/removing elements to avoid errors.

---

> 🔹 **Pro Tip:** Combine `findIndex()` with `splice()` to remove elements dynamically:

```javascript
const arr = [10, 20, 30];
const idx = arr.findIndex(n => n === 20);
if (idx !== -1) arr.splice(idx, 1);
console.log(arr); // [10, 30]
```

---

This README provides **all key points** for `findIndex()` to help beginners **understand, implement, and ace exams/interviews**.
