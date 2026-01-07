# 📦 JavaScript `Set` – Complete Exam & Interview Notes

> **Beginner-friendly • Exam-oriented • Interview-ready • Clean & Professional**

This README explains **JavaScript Set** from **zero to advanced**, so **any beginner** can understand it in **one read** and confidently **crack exams, interviews, and MCQs**.

---

## 📌 What is a Set in JavaScript?

A **Set** is a **built-in JavaScript object** used to store **unique values only**.

> **Unique means:** no duplicate values are allowed.

```js
const mySet = new Set();
```

---

## ✅ Why Set Exists? (Very Important)

JavaScript introduced `Set` to solve problems like:

* ❌ Removing duplicate values from arrays
* 🔍 Faster searching than arrays
* 📦 Storing unique data (IDs, emails, tokens)
* 🧼 Cleaner & readable code

---

## 🧠 Key Characteristics of Set

| Feature       | Explanation                        |
| ------------- | ---------------------------------- |
| Unique values | Duplicate values are ignored       |
| Any data type | Numbers, Strings, Objects, Arrays  |
| Iterable      | Works with `for...of`              |
| Ordered       | Maintains insertion order          |
| No index      | Cannot access via index like array |

---

## 🔹 Creating a Set

### Empty Set

```js
const set = new Set();
```

### Set with Values

```js
const numbers = new Set([1, 2, 2, 3, 4]);
console.log(numbers); // Set {1, 2, 3, 4}
```

📌 **Duplicates are removed automatically**

---

## 🔹 Common Set Methods (Must Remember)

### ➕ `add(value)`

Adds a value to the Set

```js
set.add(10);
```

---

### 🔍 `has(value)`

Checks if value exists

```js
set.has(10); // true
```

---

### ❌ `delete(value)`

Removes a value

```js
set.delete(10);
```

---

### 🧹 `clear()`

Removes all values

```js
set.clear();
```

---

### 📏 `size`

Returns total elements

```js
set.size; // number
```

---

## 🔄 Iterating Over a Set

### Using `for...of`

```js
const fruits = new Set(["apple", "banana", "mango"]);

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 🔥 Real-Life Use Case (Very Important for Exams)

### Remove Duplicates from Array

```js
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4]
```

✔ Asked in **almost every JS interview**

---

## ⚖️ Set vs Array (Exam Favorite)

| Feature           | Set           | Array          |
| ----------------- | ------------- | -------------- |
| Duplicate allowed | ❌ No          | ✅ Yes          |
| Index access      | ❌ No          | ✅ Yes          |
| Search speed      | 🚀 Fast       | 🐢 Slower      |
| Use case          | Unique values | Ordered values |

---

## ⚖️ Set vs Object

| Feature       | Set   | Object              |
| ------------- | ----- | ------------------- |
| Key-Value     | ❌ No  | ✅ Yes               |
| Unique values | ✅ Yes | ❌ Values may repeat |
| Iteration     | Easy  | Needs methods       |

---

## 🧪 Special Rules (Very Important)

### ✔ NaN Handling

```js
const s = new Set();
s.add(NaN);
s.add(NaN);

console.log(s.size); // 1
```

---

### ✔ Object Reference Rule

```js
const s = new Set();
s.add({a:1});
s.add({a:1});

console.log(s.size); // 2
```

📌 Objects are compared by **reference**, not value

---

## 🧠 Internal Comparison Rule

Set uses **SameValueZero** algorithm:

* `NaN === NaN` → true
* `+0 === -0` → true

---

## ❌ What Set Cannot Do

* ❌ No index-based access
* ❌ No duplicate values
* ❌ No key-value pairs

---

## ⭐ Interview One-Liners (Must Memorize)

* `Set` stores **unique values only`
* Faster lookup than arrays
* Uses **SameValueZero** comparison
* Objects stored by reference
* Best for removing duplicates

---

## 🧠 When to Use Set?

Use `Set` when:

* You need **unique data**
* You want to **remove duplicates**
* You want **fast searching**
* Clean & readable code matters

---

## 📝 One-Line Summary

> **JavaScript Set is a powerful collection for handling unique values efficiently.**

---

✅ **This README is enough to crack:**

* 🎯 MCQs
* 💼 Interviews
* 📘 Exams
* 🧠 Conceptual questions

---

⭐ If you want next:

* 50–100 **MCQs** (Easy → Hard)
* **Code-level questions**
* `Set` vs `Map` combined notes

Just tell me 👍
