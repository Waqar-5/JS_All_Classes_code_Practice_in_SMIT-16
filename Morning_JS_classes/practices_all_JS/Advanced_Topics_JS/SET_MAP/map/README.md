# 📦 JavaScript `Map` – Complete Exam & Interview Notes

> **Beginner-friendly • Exam-oriented • Interview-ready • Clean & Professional**

This README explains **JavaScript Map** from **zero to advanced**, so **any beginner** can understand it in **one read** and confidently **crack exams, interviews, and MCQs**.

---

## 📌 What is a Map in JavaScript?

A **Map** is a built-in JavaScript object used to store **key-value pairs**, where:

* Keys can be **any data type** (objects, functions, primitives)
* Values can also be **any data type**
* **Insertion order is preserved**

```js
const myMap = new Map();
```

---

## ✅ Why Map Exists? (Very Important)

Use `Map` when:

* You need **keys of any type**
* Order of insertion matters
* You require **fast lookups, additions, deletions**
* Cleaner and more readable key-value structure than plain objects

---

## 🧠 Key Characteristics of Map

| Feature              | Explanation                             |
| -------------------- | --------------------------------------- |
| Key-value pairs      | Stores keys and their associated values |
| Any data type as key | Number, String, Object, Function, etc.  |
| Iterable             | Can use `for...of`                      |
| Ordered              | Preserves insertion order               |
| Size property        | `map.size` gives total elements         |
| Unique keys          | Duplicate keys overwrite old value      |

---

## 🔹 Creating a Map

### Empty Map

```js
const map = new Map();
```

### Map with Values

```js
const map = new Map([
  ['name', 'Waqar'],
  ['age', 25]
]);
```

---

## 🔹 Common Map Methods (Must Know)

### ➕ `set(key, value)`

Adds a new key-value pair

```js
map.set('city', 'Karachi');
```

### 🔍 `get(key)`

Returns the value for the key

```js
map.get('name'); // 'Waqar'
```

### ❌ `delete(key)`

Removes a key-value pair

```js
map.delete('age');
```

### 🧹 `clear()`

Removes all entries

```js
map.clear();
```

### 📏 `size`

Returns total key-value pairs

```js
map.size;
```

### 🔍 `has(key)`

Checks if a key exists

```js
map.has('name'); // true
```

---

## 🔄 Iterating Over a Map

### Using `for...of`

```js
for (let [key, value] of map) {
  console.log(key, value);
}
```

### Using `forEach`

```js
map.forEach((value, key) => {
  console.log(key, value);
});
```

---

## 🔹 Real-Life Use Case (Very Important for Exams)

### Storing User Data

```js
const users = new Map();
users.set(1, {name: 'Alice', age: 30});
users.set(2, {name: 'Bob', age: 25});

console.log(users.get(1).name); // Alice
```

---

## ⚖️ Map vs Object (Exam Favorite)

| Feature         | Map                                  | Object                               |
| --------------- | ------------------------------------ | ------------------------------------ |
| Key types       | Any                                  | Strings & Symbols only               |
| Insertion order | ✅ Preserved                          | ❌ Not guaranteed                     |
| Size property   | ✅ `map.size`                         | ❌ Needs `Object.keys(obj).length`    |
| Iteration       | ✅ `for...of`                         | ✅ Needs `for...in` or Object methods |
| Performance     | Fast for frequent additions/removals | Slower for dynamic keys              |

---

## ⚖️ Map vs Set

| Feature        | Map                  | Set                  |
| -------------- | -------------------- | -------------------- |
| Key-value pair | ✅                    | ❌ (values only)      |
| Uniqueness     | Unique keys          | Unique values        |
| Lookup         | Fast                 | Fast                 |
| Common use     | Storing associations | Storing unique items |

---

## 🧠 Special Rules (Very Important)

### ✔ Duplicate Keys

```js
map.set('name', 'Waqar');
map.set('name', 'Ali');
console.log(map.get('name')); // Ali
```

### ✔ Object Keys

```js
const obj = {};
map.set(obj, 'value');
console.log(map.get(obj)); // 'value'
```

---

## ❌ What Map Cannot Do

* ❌ Cannot store duplicate keys (but values can repeat)
* ❌ No built-in index access like arrays

---

## ⭐ Interview One-Liners (Must Memorize)

* Map stores **key-value pairs with keys of any type**
* Maintains **insertion order**
* Provides **fast lookups**
* Methods: `set()`, `get()`, `has()`, `delete()`, `clear()`, `size`
* Objects as keys are allowed

---

## 🧠 When to Use Map?

Use `Map` when:

* You need **dynamic keys** (any type)
* Frequent additions/removals are required
* Order matters
* You need **fast key lookup**

---

## 📝 One-Line Summary

> **JavaScript Map is a powerful key-value collection that preserves insertion order and supports keys of any data type.**

---

✅ **This README is enough to crack:**

* 🎯 MCQs
* 💼 Interviews
* 📘 Exams
* 🧠 Conceptual questions
