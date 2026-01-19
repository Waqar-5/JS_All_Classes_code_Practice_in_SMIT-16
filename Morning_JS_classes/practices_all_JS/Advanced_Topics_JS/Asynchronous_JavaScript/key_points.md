# Asynchronous JavaScript - Key Points, Concepts & Study Guide

This README contains **all important key points, concepts, and tips** every developer must know about Asynchronous JavaScript. It helps **enhance coding skills, prepare for interviews, and improve understanding** of tricky asynchronous behaviors.

---

## **Most Important Key Points for Asynchronous JavaScript**

### 1. Single-Threaded Nature

* JavaScript runs on a **single thread**.
* Only one task executes at a time.
* Asynchronous JavaScript prevents blocking the main thread during long-running tasks (API calls, timers, I/O).
* **Tip:** Identify synchronous vs asynchronous operations.

### 2. Event Loop

* Core mechanism for asynchronous behavior.
* Monitors the **call stack**, **microtask queue**, and **macrotask queue**.
* **Execution Order:**

  1. Synchronous code (call stack)
  2. Microtasks (Promises, queueMicrotask, process.nextTick)
  3. Macrotasks (setTimeout, setInterval, setImmediate, I/O events)
* **Tip:** Knowing the Event Loop is crucial for predicting code execution order.

### 3. Callbacks

* Functions passed as arguments to other functions to execute later.
* Can cause **callback hell** if deeply nested.
* **Tip:** Use Promises or async/await to avoid callback hell.

### 4. Promises

* Represent a **future value**: `pending`, `fulfilled`, or `rejected`.
* **Methods:**

  * `.then()` → handles fulfilled promises.
  * `.catch()` → handles rejected promises.
  * `.finally()` → executes regardless of the state.
* **Promise Utilities:**

  * `Promise.all()` → wait for all promises.
  * `Promise.race()` → resolves/rejects as soon as one completes.
  * `Promise.allSettled()` → waits for all to settle.
  * `Promise.any()` → resolves if any fulfills.

### 5. Async/Await

* `async` functions **always return a Promise**.
* `await` pauses execution until the Promise resolves.
* Simplifies Promise chaining and improves readability.
* **Tip:** Always use try/catch to handle errors in async functions.

### 6. Microtasks vs Macrotasks

* **Microtasks:** Executed after current code but before macrotasks. (Promises, queueMicrotask)
* **Macrotasks:** Executed after microtasks. (setTimeout, setInterval, I/O events)
* Understanding this helps **predict code execution order**.

### 7. Timers

* **setTimeout(fn, delay)** → execute once after delay.
* **setInterval(fn, interval)** → execute repeatedly at intervals.
* **setImmediate (Node.js)** → execute after current poll phase.
* **process.nextTick (Node.js)** → execute microtask before I/O.

### 8. Fetch API / AJAX

* `fetch()` is asynchronous and returns a Promise.
* Allows **non-blocking HTTP requests**.
* **Tip:** Always check `response.ok` to handle HTTP errors.

### 9. Error Handling

* Promises: use `.catch()`.
* Async/Await: use try/catch.
* **Tip:** Always handle errors to prevent unhandled rejections.

### 10. Best Practices

* Avoid callback hell → prefer Promises/async-await.
* Use `Promise.all()` for parallel execution.
* Use `await` for sequential execution.
* Understand Event Loop for debugging tricky code.
* Avoid blocking the main thread with synchronous heavy tasks.
* Use AbortController to cancel fetch requests if needed.

### 11. Common Pitfalls

* Multiple await calls sequentially may reduce performance.
* Misunderstanding microtasks vs macrotasks can lead to unexpected results.
* Ignoring error handling in Promises or async/await.
* Blocking UI with long synchronous operations.

---

> This README serves as a **complete study guide** for mastering Asynchronous JavaScript, improving coding skills, and preparing for interviews and exams.
