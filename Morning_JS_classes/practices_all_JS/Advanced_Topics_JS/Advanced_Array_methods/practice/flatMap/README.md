# JavaScript `flatMap()` Method - Complete Notes & Reference

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Parameters](#parameters)
4. [Return Value](#return-value)
5. [How `flatMap()` Works](#how-flatmap-works)
6. [Examples](#examples)
7. [Practical Use Cases](#practical-use-cases)
8. [Tips for Exams & Interviews](#tips-for-exams--interviews)
9. [Common Mistakes](#common-mistakes)

---

## Introduction

The `flatMap()` method in JavaScript is a combination of **`map()` and `flat()` (with depth 1)**. It first applies a **mapping function** to each element of the array and then **flattens the result by one level**. This method is useful for **transforming nested arrays** in a concise and efficient way.

It is frequently asked in **interviews and exams** to assess array manipulation skills and knowledge of modern JavaScript methods.

---

## Syntax

```javascript
arr.flatMap(callback(currentValue, index, array))
```

* `callback`: Function that produces an element of the new Array.

  * `currentValue` – The current element being processed.
  * `index` – The index of the current element.
  * `array` – The array `flatMap` was called upon.

---

## Parameters

| Parameter  | Type     | Description                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| `callback` | Function | Function that returns an array or element for each element in the original array. |

---

## Return Value

* Returns a **new array** after applying the mapping function and flattening one level.
* Does **not modify** the original array.

---

## How `flatMap()` Works

1. Maps each element to a new array or value using the provided callback.
2. Flattens the result by **one level**.
3. Returns a **new array**, leaving the original array unchanged.

---

## Examples

### Basic Example

```javascript
const arr = [1,2,3];
const result = arr.flatMap(x => [x*2]);
console.log(result); // [2,4,6]
```

### Flatten Nested Arrays One Level

```javascript
const arr = [1,2,3];
const result = arr.flatMap(x => [[x*2]]);
console.log(result); // [[2],[4],[6]] (flattened 1 level)
```

### Remove Empty Elements

```javascript
const arr = ['hello', '', 'world'];
const result = arr.flatMap(x => x.split(''));
console.log(result); // ['h','e','l','l','o','w','o','r','l','d']
```

### Combining Map and Flat

```javascript
const arr = [1,2,3];
const result = arr.map(x => [x*2]).flat();
console.log(result); // [2,4,6]
// Equivalent to arr.flatMap(x => [x*2])
```

---

## Practical Use Cases

* Flattening arrays returned by mapping functions.
* Transforming nested API data.
* Generating arrays of arrays and flattening in one step.
* Cleaning arrays with empty or sparse elements.
* Useful in functional programming patterns.

---

## Tips for Exams & Interviews

1. `flatMap()` is **shallow** (flattens only 1 level).
2. Original array remains **unchanged**.
3. Can replace `map().flat()` for concise code.
4. Useful for transforming and flattening arrays in **one step**.
5. Commonly used with strings, numbers, or objects.
6. Understand difference from `flat()` and `map()` separately.

---

## Common Mistakes

* Expecting `flatMap()` to flatten more than one level.
* Forgetting it returns a **new array**.
* Using it on non-array return values incorrectly.
* Confusing with `flat()` alone.

---

> 🔹 **Pro Tip:** Whenever you need to map an array and flatten the result by one level, use `flatMap()` for cleaner and optimized code. For deeper flattening, use `flat()` with `map()` or `flat(Infinity)`.

---

This README is **professionally formatted** for **one-click download**, providing **complete notes to crack exams and interviews** on the JavaScript `flatMap()` method.
