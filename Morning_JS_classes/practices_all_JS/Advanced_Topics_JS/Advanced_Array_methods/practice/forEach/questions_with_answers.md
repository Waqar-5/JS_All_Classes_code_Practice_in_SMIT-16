# JavaScript forEach() – Top 30 Interview Questions & Answers

This README contains **30 most-asked interview questions** on  
**`Array.prototype.forEach()`**, with **clear explanations**.

These questions are commonly asked in:
- Frontend interviews
- JavaScript technical rounds
- React / Node.js interviews
- Written tests & viva

---

## 1. What is `forEach()` in JavaScript?

**Answer:**  
`forEach()` is an array method that executes a **callback function once for each element** of an array and is mainly used for **side effects**.

---

## 2. What does `forEach()` return?

**Answer:**  
`forEach()` always returns **`undefined`**.

---

## 3. Why does `forEach()` return undefined?

**Answer:**  
Because it is designed for **iteration and side effects**, not for creating or returning new values.

---

## 4. What type of function is passed to `forEach()`?

**Answer:**  
A **callback function**.

---

## 5. How many parameters does the `forEach()` callback accept?

**Answer:**  
Up to **three parameters**:
1. current value  
2. index  
3. original array  

---

## 6. What does the first callback parameter represent?

**Answer:**  
The **current element** being processed.

---

## 7. What does the second callback parameter represent?

**Answer:**  
The **index** of the current element.

---

## 8. What does the third callback parameter represent?

**Answer:**  
The **original array** on which `forEach()` was called.

---

## 9. Can you stop `forEach()` using `break`?

**Answer:**  
No. `forEach()` **cannot be stopped** using `break`, `continue`, or `return`.

---

## 10. What happens if you use `return` inside `forEach()`?

**Answer:**  
`return` only exits the **current callback execution**, not the loop.

---

## 11. Is `forEach()` synchronous or asynchronous?

**Answer:**  
`forEach()` is **synchronous**.

---

## 12. Does `forEach()` work properly with `async/await`?

**Answer:**  
No. `forEach()` does **not wait** for async operations.  
Use `for...of` instead.

---

## 13. Can `forEach()` modify the original array?

**Answer:**  
Yes, if you **explicitly change array elements** inside the callback.

---

## 14. Does `forEach()` create a new array?

**Answer:**  
No. It **does not create** a new array.

---

## 15. When should `forEach()` be used?

**Answer:**  
When you want to perform **side effects**, such as:
- logging
- updating DOM
- calling APIs
- modifying external variables

---

## 16. When should `forEach()` NOT be used?

**Answer:**  
When you need:
- a new array
- early exit
- returned values  
Use `map()`, `filter()`, or `reduce()` instead.

---

## 17. Can `forEach()` be chained with other array methods?

**Answer:**  
No, because it returns `undefined`.

---

## 18. What is `thisArg` in `forEach()`?

**Answer:**  
`thisArg` sets the value of `this` inside the callback function.

---

## 19. Where is `thisArg` passed?

**Answer:**  
As the **second argument** to `forEach()`.

```js
array.forEach(callback, thisArg);
## 20. Does forEach() skip empty slots in sparse arrays?
**Answer:**
Yes. Empty slots are skipped automatically.

## 21. What happens if an error is thrown inside forEach()?
**Answer:**
The loop stops immediately, and the error is propagated.

## 22. Can forEach() be nested?
**Answer:**
Yes. You can nest forEach() inside another forEach().

## 23. Can forEach() be used on objects?
**Answer:**
Not directly.
You must use Object.values(), Object.keys(), or Object.entries().

## 24. Can forEach() be replaced with a for loop?
**Answer:**
Yes. for or for...of loops can replace forEach() and allow early exit.

## 25. What is the main difference between forEach() and map()?
**Answer:**

forEach() → returns undefined

map() → returns a new array

## 26. What is the main difference between forEach() and filter()?
**Answer:**

forEach() → performs actions

filter() → returns a new filtered array

## 27. Why is forEach() called a higher-order function?
**Answer:**
Because it accepts a function as an argument.

## 28. What programming paradigm does forEach() belong to?
**Answer:**
Functional programming.

## 29. Is forEach() faster than a traditional for loop?
**Answer:**
No. Traditional for loops are generally slightly faster.

## 30. Give one interview sentence describing forEach().
**Answer:**

"forEach() is a synchronous array method used to execute a callback on each element for side effects and does not return a value."