# Synchronous JavaScript - 30 Questions & Answers

This section contains **30 professional questions and answers** on Synchronous JavaScript, suitable for interviews and exams.

---

## Questions and Answers

1. **What is synchronous JavaScript?**

   * **Answer:** JavaScript code that executes line by line, blocking the main thread until each operation completes.

2. **Difference between synchronous and asynchronous JavaScript?**

   * **Answer:** Synchronous code runs sequentially and blocks execution, whereas asynchronous code runs in the background allowing other operations to continue.

3. **What happens if a synchronous function takes a long time?**

   * **Answer:** The main thread is blocked, delaying execution of subsequent code.

4. **Give an example of synchronous JavaScript operation.**

   * **Answer:** `console.log('Hello')`, `Math.sqrt(16)`, `JSON.parse('{"a":1}')`

5. **Does synchronous code use Event Loop?**

   * **Answer:** No, synchronous code executes directly on the call stack.

6. **What is blocking in JavaScript?**

   * **Answer:** When a synchronous operation prevents further code execution until it completes.

7. **What is the call stack?**

   * **Answer:** A stack that keeps track of functions being executed in order.

8. **What is the output?**

```javascript
console.log('A');
console.log('B');
console.log('C');
```

* **Answer:** A B C

9. **Do synchronous loops block the main thread?**

   * **Answer:** Yes, heavy loops can block the main thread.

10. **Can synchronous JavaScript run in background?**

    * **Answer:** No, it always blocks the main thread.

11. **Is reading a file with fs.readFileSync synchronous or asynchronous?**

    * **Answer:** Synchronous.

12. **Difference between fs.readFileSync and fs.readFile in Node.js?**

    * **Answer:** `fs.readFileSync` blocks execution until reading is complete; `fs.readFile` is asynchronous and non-blocking.

13. **What is the effect of a long synchronous computation on UI?**

    * **Answer:** It blocks rendering and can make UI unresponsive.

14. **How to identify synchronous code?**

    * **Answer:** Code that executes sequentially and doesn’t use callbacks, Promises, or async/await.

15. **Is JSON.parse synchronous or asynchronous?**

    * **Answer:** Synchronous.

16. **Is console.log synchronous or asynchronous?**

    * **Answer:** Synchronous.

17. **Can synchronous code throw exceptions?**

    * **Answer:** Yes, exceptions can be caught using try/catch.

18. **Example of synchronous loop?**

```javascript
for(let i=0;i<5;i++){
  console.log(i);
}
```

* **Answer:** Logs 0 1 2 3 4 sequentially.

19. **Difference between synchronous and asynchronous AJAX?**

    * **Answer:** Synchronous AJAX blocks code until response; asynchronous AJAX allows other code to run.

20. **What is the output?**

```javascript
let x=5;
let y=x*2;
console.log(y);
```

* **Answer:** 10

21. **Does synchronous code use microtasks or macrotasks?**

    * **Answer:** No, it runs directly on the call stack.

22. **Difference between blocking and non-blocking operations?**

    * **Answer:** Blocking operations wait until completion; non-blocking operations allow other code to run concurrently.

23. **Can synchronous functions return promises?**

    * **Answer:** No, synchronous functions return immediate values.

24. **Example of synchronous mathematical operation?**

* **Answer:** `Math.pow(2,3)` returns 8 immediately.

25. **Does synchronous JavaScript affect performance of other tasks?**

    * **Answer:** Yes, it can block other code, slowing down execution.

26. **Is alert() synchronous or asynchronous?**

    * **Answer:** Synchronous; it blocks code until user dismisses it.

27. **Difference between synchronous loops and async loops?**

    * **Answer:** Synchronous loops block execution; async loops (with promises/await) allow non-blocking execution.

28. **How to handle errors in synchronous code?**

    * **Answer:** Use try/catch blocks.

29. **Does synchronous JavaScript run on the main thread?**

    * **Answer:** Yes, all synchronous code executes on the main thread.

30. **Why is understanding synchronous code important?**

    * **Answer:** To avoid blocking the main thread, ensure UI responsiveness, and optimize performance for better user experience.
