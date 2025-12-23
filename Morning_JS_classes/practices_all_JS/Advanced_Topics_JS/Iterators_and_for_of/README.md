# JavaScript Iterators – Complete Notes & Key Points

This document contains **detailed notes on JavaScript Iterators**, designed for **developers, exams, and interviews**. It covers the **most important concepts, examples, and best practices** to help you **understand and remember iterators forever**.

---

## 🔹 What is an Iterator?

An **iterator** is an object that produces values one at a time. It provides a `.next()` method which returns an object with:

```javascript
{ value: <current value>, done: <true/false> }
```

* `value` → current value in iteration
* `done` → `true` if iteration is complete, otherwise `false`

---

## 🔹 Making an Object Iterable

To make an object iterable, implement `[Symbol.iterator]()`:

```javascript
const myIterable = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    const last = this.end;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const num of myIterable) {
  console.log(num); // 1 2 3
}
```

✅ **Teaches:** Custom iterator implementation.

---

## 🔹 Generator Functions

Generators are an elegant way to create iterators using `yield`:

```javascript
function* generateNumbers(limit) {
  let n = 1;
  while (n <= limit) {
    yield n++;
  }
}

for (const num of generateNumbers(5)) {
  console.log(num); // 1 2 3 4 5
}
```

* `yield` → produces a value and pauses the generator
* `.next()` → can manually get the next value

---

## 🔹 Key Loops: `for...of` vs `for...in`

| Loop Type  | Use Case                               | Iterates       |
| ---------- | -------------------------------------- | -------------- |
| `for...in` | Objects or arrays (keys/indexes)       | Keys / Indexes |
| `for...of` | Iterables like Array, String, Map, Set | Values         |

---

## 🔹 Key Points to Remember about Iterators

* ⚡ **[Symbol.iterator]** is the key to making objects iterable.
* 🔄 **`.next()`** returns `{ value, done }` and is the core of iteration.
* 🔁 **for...of** is always used with iterables; **for...in** is for object keys.
* 🎯 **Generators** provide an elegant way to create iterators using `yield`.
* ♻️ **Lazy evaluation** improves memory efficiency by generating values on demand.
* 🔀 **Custom logic** (filtering, skipping, stop conditions) can be implemented inside `next()`.
* 🗂 **Iterables include:** Arrays, Strings, Maps, Sets, and custom objects.
* ⏸ **Generators can pause/resume** and maintain internal state between yields.
* 🏗 **Real-world usage:** Data streaming, processing large collections, dynamic UI generation, and memory optimization.
* 🧠 **Remember:** Iterators = values, Iterables = objects that can be iterated, `for...of` = loop that uses iterator.


## 🔹 Key Points to Remember about Iterators

* ⚡ **[Symbol.iterator]** is the key to making objects iterable.
* 🔄 **`.next()`** returns `{ value, done }` and is the core of iteration.
* 🔁 **for...of** is always used with iterables; **for...in** is for object keys.
* 🎯 **Generators** provide an elegant way to create iterators using `yield`.
* ♻️ **Lazy evaluation** improves memory efficiency by generating values on demand.
* 🔀 **Custom logic** (filtering, skipping, stop conditions) can be implemented inside `next()`.
* 🗂 **Iterables include:** Arrays, Strings, Maps, Sets, and custom objects.
* ⏸ **Generators can pause/resume** and maintain internal state between yields.
* 🏗 **Real-world usage:** Data streaming, processing large collections, dynamic UI generation, and memory optimization.
* 🧠 **Remember:** Iterators = values, Iterables = objects that can be iterated, `for...of` = loop that uses i






# 📝 JavaScript for...of and for...in Loops – Complete Notes

This document covers **for...of** and **for...in** loops in JavaScript, including **syntax, examples, key points, and interview-focused notes**.

---

## 1️⃣ for...in Loop

* **Definition:** Loops over **enumerable property keys** of an object (including arrays, objects).
* **Syntax:**

```javascript
for (let key in object) {
  // code using object[key]
}
```

**Example: Object**

```javascript
const person = { name: 'Alice', age: 25, city: 'NY' };
for (let key in person) {
  console.log(key, person[key]);
}
// Output:
// name Alice
// age 25
// city NY
```

**Example: Array (keys/indexes)**

```javascript
const arr = ['a', 'b', 'c'];
for (let index in arr) {
  console.log(index, arr[index]);
}
// Output:
// 0 a
// 1 b
// 2 c
```

**✅ Tips:**

* Returns **keys/indexes**.
* Use for **objects and arrays if keys are needed**.
* Avoid for arrays when values are needed directly.

---

## 2️⃣ for...of Loop

* **Definition:** Loops over **iterable objects**, returning **values directly**.
* **Syntax:**

```javascript
for (let value of iterable) {
  // code using value
}
```

**Example: Array**

```javascript
const arr = [10, 20, 30];
for (let val of arr) {
  console.log(val);
}
// Output: 10 20 30
```

**Example: String**

```javascript
const word = 'HELLO';
for (let char of word) {
  console.log(char);
}
// Output: H E L L O
```

**Example: Map**

```javascript
const map = new Map([['Alice', 90], ['Bob', 85]]);
for (let [key, value] of map) {
  console.log(`${key} scored ${value}`);
}
// Output:
// Alice scored 90
// Bob scored 85
```

**✅ Tips:**

* Returns **values**.
* Works on **Arrays, Strings, Maps, Sets, generators**.
* Cannot iterate **plain objects** directly.

---

## 3️⃣ Key Differences Between for...in and for...of

| Feature          | for...in                      | for...of                            |
| ---------------- | ----------------------------- | ----------------------------------- |
| Iterates over    | Keys / Indexes                | Values                              |
| Works on         | Objects, Arrays (keys)        | Iterables (Array, String, Map)      |
| Returns          | Property names                | Property values                     |
| Good for         | Enumerating object properties | Traversing iterable values          |
| Skips prototype? | No, iterates inherited props  | No prototype iteration, values only |

**🚀 Memory Aid:**

* **in → index/key**
* **of → output/value**

---

## 4️⃣ Commonly Asked Interview Questions

1. Difference between **for...in** and **for...of**
2. Can **for...of** iterate objects? (No, unless object is iterable)
3. How to loop over object values? (Use `Object.values(obj)` with for...of)
4. Looping over Map and Set using for...of
5. Why **for...in** on arrays is not recommended for values
6. How to skip inherited properties in for...in? (Use `hasOwnProperty`)

---

## 5️⃣ Memory-Friendly Notes & Must-Know Points

* ⚡ **for...in = keys**
* 🔄 **for...of = values**
* 🏷️ **Objects → for...in**, **Arrays/Iterables → for...of**
* ♻️ **Skip prototype properties:** `if(obj.hasOwnProperty(key)) {...}`
* 🧠 **Maps and Sets:** Use for...of for key/value access
* 🧩 **Generators:** Works with for...of
* 🎯 **Interview Tip:** Know use-case scenarios, and when to use each loop.

