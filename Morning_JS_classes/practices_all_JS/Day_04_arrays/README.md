# JavaScript Arrays: Complete Guide

This `README.md` is a **comprehensive guide** for beginners and intermediate learners to understand **JavaScript arrays**, including adding, removing, and extracting elements. It includes **key points, examples, and exam-focused tips**.

---

## Topics Covered

15. Arrays
16. Arrays: Adding and Removing Elements
17. Arrays: Removing, Inserting, and Extracting Elements

---

## 15. Arrays

Arrays are **ordered collections of values** in JavaScript.

### Key Points

* Arrays store multiple values in a single variable.
* Can hold different data types (numbers, strings, objects, even other arrays).
* Elements are **indexed starting from 0**.
* Arrays are dynamic and can change in size.

### Syntax

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // 'Apple'
```

### Examples

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
console.log(numbers[2]); // 3
```

**Exam Tip:** Remember array indices start at 0. Accessing `arr[arr.length - 1]` gives the last element.

---

## 16. Arrays: Adding and Removing Elements

### Key Points

* Add elements at the **end**: `push()`
* Add elements at the **start**: `unshift()`
* Remove elements from **end**: `pop()`
* Remove elements from **start**: `shift()`
* Arrays are mutable (can be changed in place).

### Syntax & Examples

```javascript
let colors = ['Red', 'Green'];

// Add at end
colors.push('Blue');
console.log(colors); // ['Red', 'Green', 'Blue']

// Add at start
colors.unshift('Yellow');
console.log(colors); // ['Yellow', 'Red', 'Green', 'Blue']

// Remove from end
let lastColor = colors.pop();
console.log(lastColor); // 'Blue'
console.log(colors); // ['Yellow', 'Red', 'Green']

// Remove from start
let firstColor = colors.shift();
console.log(firstColor); // 'Yellow'
console.log(colors); // ['Red', 'Green']
```

**Exam Tip:** `push()` and `pop()` are faster than `shift()` and `unshift()` for large arrays because `shift()` and `unshift()` re-index all elements.

---

## 17. Arrays: Removing, Inserting, and Extracting Elements

### Key Points

* **splice()**: Remove or insert elements anywhere.
* **slice()**: Extract a portion without modifying the original array.
* **indexOf()** / **includes()**: Find element positions or check existence.

### Syntax & Examples

```javascript
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Remove 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // ['Apple', 'Cherry', 'Date']

// Insert at index 1
fruits.splice(1, 0, 'Blueberry');
console.log(fruits); // ['Apple', 'Blueberry', 'Cherry', 'Date']

// Replace 1 element at index 2
fruits.splice(2, 1, 'Mango');
console.log(fruits); // ['Apple', 'Blueberry', 'Mango', 'Date']

// Extract a portion (does not modify original)
let subFruits = fruits.slice(1, 3);
console.log(subFruits); // ['Blueberry', 'Mango']
console.log(fruits);    // ['Apple', 'Blueberry', 'Mango', 'Date']
```

**Exam Tips:**

* `splice(start, deleteCount, item1, item2, ...)` modifies array.
* `slice(start, end)` returns a new array.
* `indexOf(value)` returns index or -1 if not found.
* `includes(value)` returns boolean.

---

## ✅ Summary Tips for Exams

1. Arrays are zero-indexed.
2. `push` / `pop` for end operations; `shift` / `unshift` for start.
3. `splice` can insert, remove, or replace.
4. `slice` is for extr
