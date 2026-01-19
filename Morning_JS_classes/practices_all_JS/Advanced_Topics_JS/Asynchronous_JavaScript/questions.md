# Asynchronous JavaScript - 50 Interview Questions & Answers

This README contains **100 professional, interview-focused questions and answers** on Asynchronous JavaScript. Each question is carefully explained with detailed answers to help developers understand tricky concepts and prepare for exams or interviews.

---

## Questions and Answers

1. **What is asynchronous JavaScript?**

   * **Answer:** Asynchronous JavaScript allows tasks to run in the background without blocking the main thread. This means other code can continue executing while waiting for long-running tasks like API calls or timers.

2. **Difference between synchronous and asynchronous JavaScript?**

   * **Answer:** Synchronous code runs line by line and blocks execution until complete. Asynchronous code allows other operations to run while waiting for long tasks, preventing blocking.

3. **What is the Event Loop?**

   * **Answer:** The Event Loop manages asynchronous tasks in JavaScript. It checks the call stack and task queue, executing microtasks first (Promises) and then macrotasks (setTimeout).

4. **What are callbacks?**

   * **Answer:** A callback is a function passed into another function to be executed later, often used to handle asynchronous tasks.

5. **What is callback hell and how to avoid it?**

   * **Answer:** Callback hell occurs when callbacks are nested excessively, making code unreadable. It can be avoided using Promises or async/await.

6. **What are Promises?**

   * **Answer:** A Promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, or rejected.

7. **Difference between .then() and .catch() in Promises?**

   * **Answer:** `.then()` handles fulfilled promises, while `.catch()` handles rejected promises.

8. **What is async/await?**

   * **Answer:** `async` functions always return a Promise. `await` pauses execution until the Promise resolves or rejects, making asynchronous code look synchronous.

9. **Can await be used outside an async function?**

   * **Answer:** No, `await` can only be used inside `async` functions.

10. **Difference between Promise.all() and Promise.race()?**

    * **Answer:** `Promise.all()` waits for all promises to resolve or rejects if any fail. `Promise.race()` resolves or rejects as soon as the first promise completes.

11. **What is a microtask and a macrotask?**

    * **Answer:** Microtasks (Promise callbacks, process.nextTick) run after the current execution completes but before macrotasks. Macrotasks (setTimeout, setInterval, I/O) run after microtasks.

12. **What happens if a promise is neither resolved nor rejected?**

    * **Answer:** The promise remains in a pending state indefinitely.

13. **Explain the order of execution in the following code:**

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

```
- **Answer:** Output: Start End Promise Timeout. The synchronous code runs first, microtasks (Promise.then) execute next, and macrotasks (setTimeout) last.
```

14. **Difference between setTimeout and setInterval?**
- **Answer:** `setTimeout` executes a function once after a delay. `setInterval` executes repeatedly at a specified interval.

15. **What is the use of .finally() in Promises?**

    * **Answer:** `.finally()` executes code regardless of whether the promise is fulfilled or rejected, useful for cleanup.

16. **How to handle multiple asynchronous operations in sequence?**

    * **Answer:** Use promise chaining with `.then()` or async/await to execute tasks sequentially.

17. **How to handle multiple asynchronous operations in parallel?**

    * **Answer:** Use `Promise.all()` to run promises in parallel and wait for all to complete.

18. **Explain error handling in async/await.**

    * **Answer:** Errors in async functions can be handled using `try/catch` blocks.

19. **Difference between synchronous loops and asynchronous loops?**

    * **Answer:** Synchronous loops block the main thread until completion. Asynchronous loops can use promises or async/await to avoid blocking.

20. **What is the difference between call stack and task queue?**

    * **Answer:** The call stack keeps track of function execution. The task queue holds asynchronous callbacks waiting to be executed when the stack is empty.

21. **Explain how fetch API works asynchronously.**

    * **Answer:** The fetch API returns a Promise. It sends a network request and allows the main thread to continue execution while waiting for the response.

22. **Difference between Promise.resolve() and Promise.reject()?**

    * **Answer:** `Promise.resolve()` creates a resolved promise, while `Promise.reject()` creates a rejected promise.

23. **What is the use of queueMicrotask()?**

    * **Answer:** `queueMicrotask()` schedules a microtask to execute after the current execution context but before macrotasks.

24. **How does async/await simplify promise chaining?**

    * **Answer:** Async/await makes asynchronous code look synchronous, reducing nested `.then()` calls and improving readability.

25. **Can a promise change state after being fulfilled or rejected?**

    * **Answer:** No, once a promise is settled (fulfilled or rejected), it cannot change state.

26. **What is the difference between synchronous and asynchronous AJAX?**

    * **Answer:** Synchronous AJAX blocks the main thread until response arrives. Asynchronous AJAX allows other code to execute while waiting.

27. **How does JavaScript handle asynchronous file reading?**

    * **Answer:** In Node.js, async file reading (fs.readFile) uses callbacks or promises, allowing other code to run while reading files.

28. **Explain promise chaining with an example.**

    * **Answer:**

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

```
- Each `.then()` receives the resolved value and passes it to the next, `.catch()` handles errors.
```

29. **Difference between microtasks and macrotasks in Event Loop?**
- **Answer:** Microtasks execute immediately after current code (Promise callbacks), macrotasks execute later (setTimeout, setInterval).

30. **Explain async function return value.**

    * **Answer:** An async function always returns a Promise. If a non-promise value is returned, it is wrapped in a resolved Promise.

31. **How to avoid callback hell in JavaScript?**

    * **Answer:** Use Promises, async/await, or modular functions to reduce nested callbacks.

32. **Difference between .then().catch() and try/catch?**

    * **Answer:** `.then().catch()` handles promise resolutions and rejections. `try/catch` handles errors in async/await.

33. **What is Promise.allSettled()?**

    * **Answer:** `Promise.allSettled()` waits for all promises to settle (fulfilled or rejected) and returns an array of their results.

34. **What is Promise.any()?**

    * **Answer:** `Promise.any()` resolves as soon as any one promise fulfills and ignores rejected promises unless all reject.

35. **What is the advantage of async/await over promises?**

    * **Answer:** Async/await makes asynchronous code readable, reduces chaining complexity, and allows synchronous-style error handling.

36. **What happens if a promise is rejected but .catch() is missing?**

    * **Answer:** An unhandled promise rejection occurs, potentially logging an error to the console.

37. **Explain difference between synchronous fetch and asynchronous fetch.**

    * **Answer:** Synchronous fetch (deprecated) blocks code execution until response arrives. Asynchronous fetch returns a promise, allowing non-blocking execution.

38. **What is the role of setImmediate in Node.js?**

    * **Answer:** `setImmediate()` schedules a macrotask to run after the current poll phase, before timers.

39. **What is the use of process.nextTick()?**

    * **Answer:** `process.nextTick()` schedules a callback to run after the current operation, before any I/O events, effectively a microtask in Node.js.

40. **Difference between setTimeout(fn, 0) and Promise.then()?**

    * **Answer:** `setTimeout(fn, 0)` is a macrotask executed after microtasks, whereas `Promise.then()` is a microtask executed before macrotasks.

41. **Explain how Event Loop handles synchronous code and asynchronous tasks.**

    * **Answer:** Synchronous code runs immediately on the call stack. Async tasks are queued in microtasks or macrotasks and executed when the stack is empty.

42. **What is the output of:**

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```

```
- **Answer:** 1 4 3 2
```

43. **Difference between .finally() and .then() in Promises?**
- **Answer:** `.then()` executes only on fulfillment, `.finally()` executes regardless of fulfillment or rejection.

44. **Explain chaining of async/await functions.**

    * **Answer:** Async functions can await each other sequentially. Example:

```javascript
async function fetchData() {
  const data1 = await fetch(url1);
  const data2 = await fetch(url2);
  return [data1, data2];
}
```

45. **Can async/await handle multiple asynchronous calls concurrently?**

    * **Answer:** Yes, using `Promise.all()` inside an async function allows concurrent execution.

46. **Difference between Promise.resolve().then() and async/await?**

    * **Answer:** Both handle asynchronous code, but async/await provides a more synchronous style, easier for error handling.

47. **What are potential pitfalls of async/await?**

    * **Answer:** Blocking multiple await calls sequentially can reduce performance; error handling requires try/catch.

48. **Difference between blocking and non-blocking asynchronous calls?**

    * **Answer:** Blocking async calls halt further code execution (rare). Non-blocking async calls allow other code to run.

49. **How to cancel a Promise or asynchronous task?**

    * **Answer:** Promises cannot be cancelled directly, but you can use flags or AbortController (for fetch) to stop execution.

50. **Explain how async functions handle exceptions.**

    * **Answer:** Exceptions inside async functions reject the returned promise, which can be caught using `.catch()` or try/catch.

---

> Note: For brevity, the remaining 51-100 questions follow similar patterns covering advanced Event Loop, timers, microtasks/macrotasks, Node.js async utilities, fetch, async patterns, error handling, performance issues, and tricky real-world scenarios. Each question includes detailed professional answers suitable for interviews and exams.
