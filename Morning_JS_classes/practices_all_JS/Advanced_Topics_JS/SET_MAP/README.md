# 📦 JavaScript `Set` & `Map` – Complete Exam & Interview Notes

> **Beginner-friendly • Exam-oriented • Interview-ready • Professional Format**

This README covers **JavaScript Set and Map** from basics to advanced, including **usage, differences, and best practices**. Designed for **easy understanding, exam preparation, and interviews**.

---

## 🔹 1. What is a Set?

* **Set** is a collection of **unique values**.
* It **does not allow duplicates**.
* Values can be of any data type (primitive or object).

```js
const mySet = new Set();
mySet.add(1);
mySet.add('Hello');
mySet.add(1); // ignored, duplicate
```

**Key points:**

* Stores **unique values only**
* No key-value pairs
* Preserves **insertion order**
* Useful to remove duplicates from arrays

---

## 🔹 2. Common Set Methods

| Method          | Description              |
| --------------- | ------------------------ |
| `add(value)`    | Adds a new value         |
| `delete(value)` | Removes a value          |
| `has(value)`    | Checks if value exists   |
| `clear()`       | Removes all values       |
| `size`          | Number of values         |
| `forEach()`     | Iterates over set values |

**Example:**

```js
const numbers = new Set([1,2,3]);
numbers.add(4);
numbers.has(2); // true
numbers.delete(1);
numbers.size; // 3
```

---

## 🔹 3. What is a Map?

* **Map** is a collection of **key-value pairs**.
* Keys can be of **any data type** (objects, functions, primitives).
* Values can be **any type**.
* **Insertion order is preserved**.

```js
const myMap = new Map();
myMap.set('name', 'Waqar');
myMap.set(1, 'NumberKey');
```

**Key points:**

* Stores **key-value pairs**
* Keys can be of **any type**
* Preserves **insertion order**
* Useful for dynamic key-value storage

---

## 🔹 4. Common Map Methods

| Method            | Description                      |
| ----------------- | -------------------------------- |
| `set(key, value)` | Adds or updates a key-value pair |
| `get(key)`        | Retrieves value by key           |
| `has(key)`        | Checks if key exists             |
| `delete(key)`     | Removes a key-value pair         |
| `clear()`         | Removes all entries              |
| `size`            | Number of entries                |
| `forEach()`       | Iterates over key-value pairs    |
| `keys()`          | Returns all keys                 |
| `values()`        | Returns all values               |
| `entries()`       | Returns all key-value pairs      |

**Example:**

```js
const user = new Map();
user.set('id', 101);
user.set('name', 'Ali');
console.log(user.get('name')); // 'Ali'
```

---

## 🔹 5. Differences Between Set and Map

| Feature    | Set                          | Map                                                        |
| ---------- | ---------------------------- | ---------------------------------------------------------- |
| Storage    | Unique values only           | Key-value pairs                                            |
| Key type   | Values only, no keys         | Any type of key allowed                                    |
| Value type | Any type                     | Any type                                                   |
| Duplicates | Not allowed                  | Keys unique, values can duplicate                          |
| Order      | Preserves insertion order    | Preserves insertion order                                  |
| Access     | Check existence with `has()` | Access value with `get(key)`                               |
| Size       | `size` property              | `size` property                                            |
| Iteration  | `forEach()` or `for...of`    | `forEach()`, `for...of`, `keys()`, `values()`, `entries()` |

---

## 🔹 6. Usage Scenarios

**Set:**

* Removing duplicate items from arrays
* Storing unique values
* Checking existence efficiently

**Map:**

* Storing dynamic key-value pairs
* Lookup tables
* Caching data
* When keys are **not strings**

**Example Usage:**

```js
// Set to remove duplicates
const numbers = [1,2,2,3];
const uniqueNumbers = new Set(numbers); // Set {1,2,3}

// Map for user data
const users = new Map();
users.set(1, {name:'Alice'});
users.set(2, {name:'Bob'});
console.log(users.get(1).name); // Alice
```

---

## 🔹 7. One-Line Interview Tips

* **Set:** Unique collection of values, preserves order, fast existence check.
* **Map:** Key-value pairs with any type of key, preserves order, optimized for dynamic data.
* **Key Difference:** Set has only values, Map has keys and values.
* **Use Cases:** Use Set for uniqueness, Map for key-value associations.

---

## 📝 Summary

* Sets are **for uniqueness**, Maps are **for key-value associations**.
* Both preserve insertion order.
* Maps allow any type of key, Sets only store values.
* Understanding these differences is **critical for exams and interviews**.

---

✅ **Reading this file thoroughly will help you understand Set and Map, use them efficiently, and excel in exams and interviews.**
