# JavaScript `sort()` Method - Complete Notes & Reference

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Parameters](#parameters)
4. [Return Value](#return-value)
5. [How `sort()` Works](#how-sort-works)
6. [Examples](#examples)
7. [Sorting with Compare Function](#sorting-with-compare-function)
8. [Practical Use Cases](#practical-use-cases)
9. [Tips for Exams & Interviews](#tips-for-exams--interviews)
10. [Common Mistakes](#common-mistakes)

---

## Introduction

The `sort()` method in JavaScript is a **built-in array method** used to **sort elements** of an array **in place** and returns the **sorted array**. By default, it **sorts elements as strings** in ascending order, which can lead to unexpected results with numbers.

`sort()` is widely used in **data processing, UI sorting, and interview questions**.

---

## Syntax

```javascript
array.sort([compareFunction])
```

* **compareFunction (optional):** Function that defines the sort order.

  * `function(a, b)`
  * Returns negative number if `a` should come before `b`
  * Returns 0 if `a` and `b` are equal
  * Returns positive number if `a` should come after `b`

---

## Parameters

| Parameter         | Type              | Description                                                                |
| ----------------- | ----------------- | -------------------------------------------------------------------------- |
| `compareFunction` | Optional Function | Defines the sort order of elements. If omitted, sorts elements as strings. |

---

## Return Value

* **Returns:** The sorted array.
* **Modifies:** The original array in place.

---

## How `sort()` Works

1. Converts elements to strings (by default) and compares UTF-16 code units.
2. If a `compareFunction` is provided, it uses it to determine the order.
3. Modifies the array **in place**, meaning the original array is changed.
4. Returns a reference to the same array.

---

## Examples

### Sorting Strings

```javascript
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple','banana','cherry']
```

### Sorting Numbers (Incorrect Default Sort)

```javascript
const numbers = [10, 1, 21, 2];
numbers.sort();
console.log(numbers); // [1, 10, 2, 21]
```

### Sorting Numbers with Compare Function

```javascript
const numbers = [10, 1, 21, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1,2,10,21]
```

### Descending Order

```javascript
numbers.sort((a,b) => b - a);
console.log(numbers); // [21,10,2,1]
```

### Sorting Objects

```javascript
const users = [
  {name:'Alice', age:25},
  {name:'Bob', age:20},
  {name:'Charlie', age:30}
];
users.sort((a,b) => a.age - b.age);
console.log(users);
```

---

## Sorting with Compare Function

* Compare function helps avoid **string comparison issues**.
* Ascending numeric sort: `(a, b) => a - b`
* Descending numeric sort: `(a, b) => b - a`
* Custom sorting: `(a, b) => a.property.localeCompare(b.property)` for strings.

---

## Practical Use Cases

* Sorting numbers, strings, or objects in arrays.
* Sorting table rows dynamically in UI.
* Ranking scores in a game or leaderboard.
* Alphabetical or chronological ordering.

---

## Tips for Exams & Interviews

1. By default, `sort()` converts elements to **strings**.
2. Always use a **compare function** for numeric sorting.
3. `sort()` **modifies the original array**.
4. Understand **ascending vs descending** sorting.
5. Know how to sort **objects by properties**.
6. Useful for **real-world data sorting tasks**.
7. Remember: `sort()` is **stable in modern JS engines**.

---

## Common Mistakes

* Forgetting that `sort()` modifies the original array.
* Sorting numbers without a compare function leading to incorrect order.
* Using `sort()` on objects without a compare function.
* Confusing default string sort vs numeric sort.
* Ignoring localeCompare for proper string comparison.

---

> 🔹 **Pro Tip:** Always test your sort with a compare function when dealing with numbers or objects to avoid unexpected behavior. Mastery of `sort()` is crucial for **exams, interviews, and real-world coding tasks**.

---

This README is professionally formatted for **one-click download**, acting as a **complete PDF-style reference** to help beginners and interviewees **crack exams and interviews** on the `sort()` method in JavaScript.
