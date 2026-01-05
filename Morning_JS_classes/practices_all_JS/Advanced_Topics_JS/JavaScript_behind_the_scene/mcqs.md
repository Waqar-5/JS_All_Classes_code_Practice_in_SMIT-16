# 📝 JavaScript Behind the Scenes — MCQs (50 Questions)

> **Most frequently asked MCQs in exams, quizzes, interviews, and online tests**
> Covers JavaScript internals: call stack, event loop, Web APIs, promises, queues, and starvation.

---

## 📌 Instructions

* Each question has **one correct answer**
* Difficulty ranges from **easy → moderate → tricky**
* **Answer key is provided at the bottom**

---

## 🧠 MCQs (1–50)

### 1. JavaScript is a ______ language.

A. Multi-threaded
B. Single-threaded
C. Multi-process
D. Parallel

---

### 2. Which component executes JavaScript code?

A. Browser
B. Compiler
C. JavaScript Engine
D. Operating System

---

### 3. V8 is a JavaScript engine developed by:

A. Mozilla
B. Microsoft
C. Google
D. Apple

---

### 4. Which data structure does the call stack follow?

A. Queue
B. Tree
C. Heap
D. Stack (LIFO)

---

### 5. What happens when the call stack is blocked?

A. Promises run faster
B. Event loop interrupts it
C. Entire program freezes
D. Web API stops

---

### 6. Which of the following is NOT part of JavaScript itself?

A. Variables
B. Functions
C. setTimeout
D. Operators

---

### 7. setTimeout belongs to:

A. JavaScript Engine
B. Call Stack
C. Web APIs
D. Event Loop

---

### 8. Web APIs are provided by:

A. JavaScript
B. Browser / Runtime
C. ECMAScript
D. HTML

---

### 9. Which queue handles setTimeout callbacks?

A. Microtask Queue
B. Job Queue
C. Task Queue
D. Call Stack

---

### 10. Task Queue follows which order?

A. LIFO
B. FIFO
C. Random
D. Priority-based

---

### 11. Which queue has higher priority?

A. Task Queue
B. Callback Queue
C. Microtask Queue
D. Call Stack

---

### 12. Promises are placed in:

A. Task Queue
B. Microtask Queue
C. Call Stack
D. Heap

---

### 13. async/await is built on top of:

A. Callbacks
B. setTimeout
C. Promises
D. Events

---

### 14. Which statement is true?

A. setTimeout executes immediately
B. Promises wait for timers
C. Microtasks run before tasks
D. Event loop runs once

---

### 15. What does the event loop do?

A. Executes JS code
B. Manages memory
C. Moves tasks to call stack
D. Creates promises

---

### 16. When does the event loop push tasks to the call stack?

A. Always
B. When call stack is empty
C. When Web API finishes
D. Randomly

---

### 17. setTimeout(fn, 0) means:

A. fn runs immediately
B. fn runs after microtasks
C. fn skips queue
D. fn runs before promises

---

### 18. fetch API works inside:

A. Call Stack
B. Heap
C. Web APIs
D. Task Queue

---

### 19. Which of the following is a microtask?

A. setTimeout
B. setInterval
C. Promise.then
D. DOM event

---

### 20. Which one causes UI freezing?

A. Async code
B. Promise
C. Long synchronous loop
D. fetch

---

### 21. FIFO means:

A. First In First Out
B. Fast In Fast Out
C. Function In Function Out
D. File In File Out

---

### 22. LIFO means:

A. Last In First Out
B. Long In First Out
C. Low In First Out
D. Loop In Function Out

---

### 23. What happens after all global code executes?

A. Program stops
B. Microtasks run
C. Task queue runs first
D. Web API clears

---

### 24. Which one is an example of Web API?

A. console.log
B. Promise
C. fetch
D. Variable

---

### 25. What is starvation?

A. Memory leak
B. CPU overload
C. Microtasks blocking tasks
D. Call stack overflow

---

### 26. Which situation causes starvation?

A. Too many setTimeouts
B. Infinite promises
C. Short loops
D. DOM events

---

### 27. Which queue can cause starvation?

A. Task Queue
B. Call Stack
C. Microtask Queue
D. Heap

---

### 28. How can starvation be fixed?

A. More promises
B. Blocking code
C. Yielding using setTimeout
D. Using sync loops

---

### 29. Which executes first?

A. setTimeout
B. Promise.then
C. DOM event
D. fetch request

---

### 30. Event loop continuously checks:

A. Memory heap
B. CPU usage
C. Call stack & queues
D. Network speed

---

### 31. JavaScript can handle async because of:

A. Threads
B. Event loop & Web APIs
C. Compiler
D. Heap only

---

### 32. Which is NOT a macro task?

A. setTimeout
B. setInterval
C. Promise.then
D. DOM event

---

### 33. Promise callbacks are executed:

A. Immediately
B. After timers
C. Before timers
D. Randomly

---

### 34. Which runs only when stack is empty?

A. Function call
B. Promise executor
C. Event loop
D. Variable assignment

---

### 35. Which statement is FALSE?

A. JS is single-threaded
B. Web APIs are part of JS
C. Promises use microtasks
D. Event loop schedules tasks

---

### 36. What happens if call stack never clears?

A. Promises execute
B. Timers execute
C. Nothing else runs
D. Event loop forces execution

---

### 37. Which one improves UI responsiveness?

A. Long loops
B. Blocking code
C. Async programming
D. Infinite promises

---

### 38. Which queue executes completely before others?

A. Task Queue
B. Microtask Queue
C. Call Stack
D. Heap

---

### 39. Which is true about setTimeout?

A. Exact timing guaranteed
B. Runs before promises
C. Minimum delay only
D. Blocks JS

---

### 40. Web APIs allow JS to:

A. Become multi-threaded
B. Block execution
C. Handle async tasks
D. Skip event loop

---

### 41. Which statement about promises is correct?

A. They block the stack
B. They are synchronous
C. They schedule microtasks
D. They run last

---

### 42. What is the job of the event loop?

A. Execute code
B. Create threads
C. Manage async execution
D. Compile JS

---

### 43. What does async keyword return?

A. Value
B. Callback
C. Promise
D. Undefined

---

### 44. Which can cause browser crash?

A. setTimeout
B. fetch
C. Infinite microtasks
D. DOM event

---

### 45. Which is NOT a Web API?

A. DOM
B. setTimeout
C. Event Loop
D. fetch

---

### 46. Which mechanism ensures non-blocking JS?

A. Heap
B. Event loop
C. Stack
D. Compiler

---

### 47. What happens first after promise resolves?

A. Goes to task queue
B. Goes to microtask queue
C. Executes immediately
D. Goes to heap

---

### 48. Which is best for delaying heavy work?

A. Promise
B. for loop
C. setTimeout
D. Sync function

---

### 49. Which of the following is correct order?

A. Task → Microtask → Stack
B. Stack → Task → Microtask
C. Stack → Microtask → Task
D. Microtask → Stack → Task

---

### 50. JavaScript behind the scenes mainly explains:

A. Syntax rules
B. UI design
C. How JS executes code internally
D. CSS rendering

---

## ✅ Answer Key

```
1. B   2. C   3. C   4. D   5. C
6. C   7. C   8. B   9. C   10. B
11. C  12. B  13. C  14. C  15. C
16. B  17. B  18. C  19. C  20. C
21. A  22. A  23. B  24. C  25. C
26. B  27. C  28. C  29. B  30. C
31. B  32. C  33. C  34. C  35. B
36. C  37. C  38. B  39. C  40. C
41. C  42. C  43. C  44. C  45. C
46. B  47. B  48. C  49. C  50. C
```

---

## 🎯 Final Note

If you score **40+ / 50**, you have a **strong grasp of JavaScript internals** and are well-prepared for exams and interviews.

Happy Learning 🚀
