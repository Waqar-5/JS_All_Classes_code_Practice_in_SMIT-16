# ⚡ Higher-Order Functions: Key Points (Interview Focused)

> This document covers the **most important and frequently asked concepts** about Higher-Order Functions (HOFs) in interviews and exams.

---

## 1. Definition

* A **Higher-Order Function (HOF)** is a function that either:

  1. Takes **one or more functions as arguments**.
  2. Returns a **function as its result**.
* HOFs rely on **first-class functions**, as functions are treated as values.

## 2. Core Features

* Can accept **functions as parameters**.
* Can **return functions**.
* Can be **anonymous** or **named**.
* Enable **function composition, currying, and chaining**.
* Can work with **synchronous and asynchronous functions**.

## 3. Common Examples

* **JavaScript Built-ins:** `map()`, `filter()`, `reduce()`, `forEach()`, `sort()`, `setTimeout()`
* **Python Examples:** `map()`, `filter()`, `reduce()` (from functools), decorators
* **Custom HOF:**

```js
const compose = (f, g) => x => f(g(x));
const double = n => n * 2;
const square = n => n * n;
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // 36
```

## 4. Advantages / Why Important

* **Code Reusability:** Abstracts repeated logic.
* **Modularity:** Functions can be passed around dynamically.
* **Functional Programming:** Enables pure functions, composition, pipelines.
* **Async Handling:** Useful in callbacks, promises, and middleware.
* **React Patterns:** Used in hooks, event handlers, HOCs, and render props.

## 5. Relation with First-Class Functions

* HOFs **cannot exist without first-class functions**.
* Every HOF **relies on treating functions as values**, passing them or returning them.
* First-class functions = building block; HOFs = advanced application.

## 6. Common Interview Questions

* Explain HOF vs first-class function.
* Examples of HOFs in JS/Python.
* Difference between passing `fn` and `fn()`.
* Implement compose, curry, or debounce using HOF.
* How HOFs improve React hooks or middleware.
* How HOFs enable function pipelines and modular code.

## 7. Tips for Interviews

* Remember **pass by reference vs invocation** (`fn` vs `fn()`).
* Practice **array methods** (`map`, `filter`, `reduce`) as HOFs.
* Understand **currying and composition**.
* Know **real-world use cases** in React, middleware, and async code.
* Be able to write **custom HOFs** quickly.

---

> **Quick Mental Model:**
>
> * First-Class Function = a value
> * HOF = a function that manipulates or produces values that are functions
