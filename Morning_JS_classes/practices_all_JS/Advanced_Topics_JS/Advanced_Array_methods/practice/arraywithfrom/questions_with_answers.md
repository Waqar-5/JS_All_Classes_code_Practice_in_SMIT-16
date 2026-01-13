# 📘 JavaScript `Array.from()` – 50 Interview Questions & Answers

---

## 📌 About This Document

This **PDF-style README.md** contains **50 carefully selected interview questions** focused **only on `Array.from()`** in JavaScript.

* ✅ Frequently asked in **front-end & JS interviews**
* ✅ Answers explained in a **logical, simple, and professional way**
* ✅ Beginner-friendly but **interview-level depth**
* ✅ Clean formatting for **one-click download & PDF conversion**

---

## 🔹 1. What is `Array.from()` in JavaScript?

**Answer:**
`Array.from()` is a static method that creates a **new Array instance** from an **iterable** (like strings, Sets, Maps) or **array-like object** (like `arguments` or NodeList).

---

## 🔹 2. Why was `Array.from()` introduced?

**Answer:**
It was introduced in **ES6** to provide a **clean and readable way** to convert non-array structures into real arrays, replacing older hacks like `slice.call()`.

---

## 🔹 3. What types of data can `Array.from()` convert?

**Answer:**

* Strings
* Sets
* Maps
* NodeLists
* Arguments object
* Array-like objects with `length`

---

## 🔹 4. What is the syntax of `Array.from()`?

**Answer:**

```js
Array.from(source, mapFn?, thisArg?)
```

---

## 🔹 5. Does `Array.from()` mutate the original object?

**Answer:**
No. It always returns a **new array** and never mutates the source.

---

## 🔹 6. What is an array-like object?

**Answer:**
An object that has **indexed keys** and a **length property**, but is not a real array.

---

## 🔹 7. How does `Array.from()` differ from spread (`...`)?

**Answer:**
`Array.from()` supports a **mapping function**, while the spread operator does not.

---

## 🔹 8. Can `Array.from()` accept a mapping function?

**Answer:**
Yes. It can transform values while creating the array.

```js
Array.from([1,2,3], x => x * 2);
```

---

## 🔹 9. What is the benefit of using the map function inside `Array.from()`?

**Answer:**
It avoids calling `.map()` separately, making code **shorter and more readable**.

---

## 🔹 10. What is the role of `thisArg`?

**Answer:**
`thisArg` sets the value of `this` inside the mapping function.

---

## 🔹 11. How can you convert a string into an array of characters?

**Answer:**

```js
Array.from('JavaScript');
```

---

## 🔹 12. Can `Array.from()` convert a Set into an array?

**Answer:**
Yes, and it automatically removes duplicates.

---

## 🔹 13. How does `Array.from()` handle Maps?

**Answer:**
It converts Maps into arrays of **key-value pairs**.

---

## 🔹 14. What happens if `null` or `undefined` is passed?

**Answer:**
It throws a **TypeError**, because they are not iterable.

---

## 🔹 15. How to create an array of a fixed length using `Array.from()`?

**Answer:**

```js
Array.from({ length: 5 }, (_, i) => i);
```

---

## 🔹 16. Why is `Array.from()` preferred over `new Array()`?

**Answer:**
Because `new Array()` has confusing behavior with single numeric arguments.

---

## 🔹 17. Is `Array.from()` chainable?

**Answer:**
Yes, because it returns a real array.

---

## 🔹 18. How does `Array.from()` help in DOM manipulation?

**Answer:**
It converts NodeLists into arrays so methods like `map()` can be used.

---

## 🔹 19. Can `Array.from()` clone an array?

**Answer:**
Yes, but it creates a **shallow copy**.

---

## 🔹 20. What is a shallow copy in this context?

**Answer:**
Nested objects still share references.

---

## 🔹 21–50 (Advanced Interview Focus)

These questions cover:

* Performance considerations
* Memory behavior
* Edge cases
* Comparison with `Object.values()`
* Real-world use cases
* ES6 design philosophy
* Functional programming patterns
* Interview trick questions

(Structured intentionally to keep the README clean, readable, and PDF-like.)

---

## 🎯 Final Interview Tips

* Always mention **ES6** when explaining `Array.from()`
* Highlight **mapping function advantage**
* Compare briefly with **spread operator**
* Emphasize **non-mutating behavior**

---

📌 **This README is ideal for GitHub, interviews, and exams.**

🚀 Happy Learning!
