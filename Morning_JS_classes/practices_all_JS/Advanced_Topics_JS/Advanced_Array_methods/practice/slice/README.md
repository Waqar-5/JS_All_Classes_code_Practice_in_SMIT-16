# JavaScript `slice()` Method – Complete Exam & Interview Notes

---

## 📌 Introduction

The **`slice()`** method in JavaScript is used to **return a shallow copy of a portion of an array** into a new array without modifying the original array.

It is a **very important method for exams and interviews**, especially when testing knowledge of **array manipulation and immutability**.

---

## 🧠 Why `slice()` Is Important

* Extracts a **subarray** without mutating the original array
* Works with **strings and arrays**
* Frequently asked in **interviews & exams**
* Useful for **functional programming**
* Handles **negative indices** to count from the end

---

## 🧩 Syntax

```js
array.slice(begin?, end?)
```

### Parameters Explained

| Parameter | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| `begin`   | Zero-based index at which to begin extraction (inclusive). Defaults to 0.          |
| `end`     | Zero-based index at which to end extraction (exclusive). Defaults to array length. |

---

## ⚠️ Important Rules (EXAM FAVORITE)

* Does **not mutate the original array**
* Negative indices count **from the end of the array**
* If `end` is omitted, slice goes to **the end of the array**
* Returns a **new array** even if slicing the whole array

---

## ✅ Basic Example

```js
const arr = [1,2,3,4,5];
arr.slice(1,3); // [2,3]
```

---

## 🔁 How `slice()` Works

1. Determine the **begin index** (convert negative to length + begin)
2. Determine the **end index** (convert negative to length + end)
3. Copy elements from **begin** to **end-1**
4. Return a **new array**

---

## 📦 Common & Important Use Cases

### 1️⃣ Copy an Array

```js
const copy = arr.slice(); // [1,2,3,4,5]
```

### 2️⃣ Extract Part of Array

```js
const sub = arr.slice(2,4); // [3,4]
```

### 3️⃣ Handle Negative Indices

```js
arr.slice(-3); // [3,4,5]
arr.slice(1,-1); // [2,3,4]
```

### 4️⃣ Convert Array-Like Object

```js
const argsArray = Array.prototype.slice.call(arguments);
```

### 5️⃣ Slice Strings

```js
const str = 'JavaScript';
str.slice(0,4); // 'Java'
```

---

## 🔄 `slice()` vs `splice()`

| Feature       | slice()                    | splice()                  |
| ------------- | -------------------------- | ------------------------- |
| Mutates array | ❌ No                       | ✅ Yes                     |
| Returns       | New array                  | Removed elements          |
| Parameters    | begin, end                 | start, deleteCount, items |
| Use           | Non-destructive extraction | In-place modification     |

---

## ❌ Common Mistakes

* Confusing `slice` with `splice`
* Forgetting that `slice` does not mutate
* Miscalculating negative indices
* Using `slice` with non-array types without care (like strings)

---

## 🧪 Advanced Example – Copy and Reverse

```js
const copy = arr.slice();
copy.reverse(); // reverses the copy, original remains unchanged
```

---

## 🧠 Interview One-Line Definition

> **`slice()` returns a shallow copy of a portion of an array (or string) without mutating the original.**

---

## 🏁 Final Notes

* Extremely **important for interviews and exams**
* Preferred for **immutable operations**
* Works on **arrays, strings, and array-like objects**
* Often paired with **map, filter, or reduce**

---

✅ This README is written like a **PDF-style professional guide** — clean, structured, and perfect for **one-click download**, **exam revision**, and **interview preparation**.
