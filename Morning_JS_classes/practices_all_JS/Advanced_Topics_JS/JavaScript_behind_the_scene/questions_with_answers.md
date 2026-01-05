# 🎯 JavaScript Behind the Scenes — Interview Questions & Answers (40)

> **A carefully structured, interview-focused Q&A guide** covering how JavaScript works behind the scenes.
> Suitable for **freshers, mid-level, and senior developers**.

---

## 🧠 Section 1: JavaScript Engine & Execution Model

### 1. What is a JavaScript Engine?

**Answer:**
A JavaScript engine is a program that executes JavaScript code. It parses, compiles, and executes JS.

---

### 2. What is V8?

**Answer:**
V8 is Google’s JavaScript engine written in C++. It is used in Chrome and Node.js and uses JIT compilation.

---

### 3. Is JavaScript interpreted or compiled?

**Answer:**
JavaScript is **JIT-compiled**. It is parsed and compiled into machine code at runtime.

---

### 4. What are the main components of a JS engine?

**Answer:**

* Call Stack
* Memory Heap
* Garbage Collector
* Parser & Compiler

---

### 5. What is the Global Execution Context (GEC)?

**Answer:**
It is the default execution context created when a JS program starts.

---

## 🧑‍🍳 Section 2: Call Stack & Execution Context

### 6. What is the Call Stack?

**Answer:**
The call stack is a data structure that tracks function execution using LIFO order.

---

### 7. Why is JavaScript called single-threaded?

**Answer:**
Because it has only one call stack and can execute one task at a time.

---

### 8. What happens when the call stack is blocked?

**Answer:**
The entire program freezes; no async callbacks can execute.

---

### 9. What is LIFO in the call stack?

**Answer:**
Last function pushed onto the stack is executed first.

---

### 10. Can the event loop interrupt the call stack?

**Answer:**
No. The event loop only works when the call stack is empty.

---

## 🏭 Section 3: Web APIs

### 11. Are Web APIs part of JavaScript?

**Answer:**
No. Web APIs are provided by the browser or runtime environment.

---

### 12. Give examples of Web APIs.

**Answer:**

* setTimeout / setInterval
* fetch / XMLHttpRequest
* DOM APIs
* Events

---

### 13. What happens to async code like setTimeout?

**Answer:**
It is sent to the Web API, not the call stack.

---

### 14. Where does fetch work?

**Answer:**
fetch is handled by the Web API (network layer).

---

### 15. Can Web APIs run in parallel?

**Answer:**
Yes, they work independently of the call stack.

---

## 📬 Section 4: Queues (Macro & Micro)

### 16. What is the Task Queue?

**Answer:**
A queue that holds callbacks from setTimeout, DOM events, etc.

---

### 17. What is the Microtask Queue?

**Answer:**
A queue that holds promise callbacks and async/await tasks.

---

### 18. Which queue has higher priority?

**Answer:**
The Microtask Queue.

---

### 19. Why are promises executed first?

**Answer:**
To allow faster UI updates and predictable async behavior.

---

### 20. Are both queues FIFO?

**Answer:**
Yes, both task and microtask queues follow FIFO.

---

## 👀 Section 5: Event Loop

### 21. What is the Event Loop?

**Answer:**
A mechanism that continuously checks the call stack and queues to schedule execution.

---

### 22. What is the event loop execution order?

**Answer:**

1. Call stack empty
2. Execute all microtasks
3. Execute one task

---

### 23. Why does setTimeout(fn, 0) not run immediately?

**Answer:**
Because it must wait for the call stack and microtasks to finish.

---

### 24. Can the event loop skip microtasks?

**Answer:**
No. It must complete all microtasks before tasks.

---

### 25. Does the event loop ever stop?

**Answer:**
No, it runs continuously while the program is active.

---

## ⚡ Section 6: Promises & async/await

### 26. Where are promises resolved?

**Answer:**
In the Web API, then moved to the Microtask Queue.

---

### 27. What is async/await under the hood?

**Answer:**
It is syntactic sugar over promises.

---

### 28. Does await block the call stack?

**Answer:**
No, it only pauses the async function.

---

### 29. Why are promises called microtasks?

**Answer:**
Because they have higher priority execution.

---

### 30. Can multiple promises cause issues?

**Answer:**
Yes, they can cause starvation.

---

## 🛑 Section 7: Starvation & Edge Cases

### 31. What is starvation in JavaScript?

**Answer:**
A condition where microtasks continuously run and block task queue execution.

---

### 32. What causes starvation?

**Answer:**
Infinite or deeply nested promises.

---

### 33. What are symptoms of starvation?

**Answer:**
UI freeze, delayed timers, unresponsive browser.

---

### 34. How can starvation be fixed?

**Answer:**
By yielding control using setTimeout or breaking promise chains.

---

### 35. Is starvation common in real apps?

**Answer:**
Rare, but possible in poorly designed async loops.

---

## 🧠 Section 8: Advanced & Tricky Questions

### 36. Why does JavaScript need Web APIs?

**Answer:**
To handle async operations without blocking the call stack.

---

### 37. What happens if the call stack never clears?

**Answer:**
No async callback will execute.

---

### 38. Difference between macro task and microtask?

**Answer:**
Microtasks have higher priority and run before macrotasks.

---

### 39. Why is event loop important for performance?

**Answer:**
It ensures non-blocking behavior and smooth UI.

---

### 40. One-line summary of JS behind the scenes?

**Answer:**

> JavaScript uses a single-threaded call stack with Web APIs, queues, and an event loop to handle async tasks efficiently.

---

## ⭐ Final Tip

If you can explain these 40 questions clearly, you are **interview-ready** for JavaScript internals.

Happy Interviewing 🚀
