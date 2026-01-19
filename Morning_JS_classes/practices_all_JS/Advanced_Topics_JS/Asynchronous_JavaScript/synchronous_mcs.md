# Synchronous JavaScript - MCQs

This section contains **30 multiple choice questions (MCQs)** on Synchronous JavaScript, commonly asked in interviews and exams. The **answer key** is provided at the end.

---

## MCQs

1. Which of the following is true about synchronous JavaScript?

   * A) Executes line by line
   * B) Runs in the background
   * C) Uses Event Loop for async tasks
   * D) Does not block the main thread

2. In synchronous JavaScript, what happens when a function takes a long time to execute?

   * A) The next line executes immediately
   * B) Execution waits until the function completes
   * C) It runs in a separate thread
   * D) JavaScript skips it

3. Which of the following is synchronous?

   * A) fetch API
   * B) setTimeout
   * C) console.log
   * D) Promise.then

4. Which statement is true about blocking in JavaScript?

   * A) Only asynchronous code blocks
   * B) Synchronous code can block the main thread
   * C) JavaScript never blocks
   * D) setTimeout causes blocking

5. What is the output?

```javascript
console.log('A');
console.log('B');
console.log('C');
```

* A) A B C
* B) A C B
* C) C A B
* D) B C A

6. Which of the following is a **feature** of synchronous execution?

   * A) Line-by-line execution
   * B) Event Loop
   * C) Callback queues
   * D) Promise chaining

7. Which of these will block the main thread?

   * A) A heavy for loop
   * B) setTimeout
   * C) Promise.then
   * D) fetch

8. Which type of function is executed immediately and completely before moving to the next line?

   * A) Synchronous
   * B) Asynchronous
   * C) Async/Await
   * D) Promise

9. Which statement is true about execution order?

   * A) Asynchronous functions always execute first
   * B) Synchronous functions execute in order
   * C) setTimeout always blocks execution
   * D) Promises are synchronous

10. What is the effect of synchronous loops on performance?

* A) Improves performance
* B) Can block UI and main thread
* C) Runs in background
* D) Converts to asynchronous tasks

11. Which of the following does not use the Event Loop?

* A) console.log
* B) setTimeout
* C) fetch
* D) Promise.then

12. Which of these executes immediately?

* A) Synchronous functions
* B) setTimeout functions
* C) Promise.then callbacks
* D) fetch API

13. Which is **true about synchronous AJAX calls**?

* A) Blocks the main thread
* B) Uses promises
* C) Executes in background
* D) Runs asynchronously

14. Which of the following is **not a synchronous operation**?

* A) console.log
* B) JSON.parse
* C) fetch API
* D) Math.sqrt

15. What happens when a synchronous function throws an error?

* A) Execution stops immediately
* B) It is caught by Event Loop
* C) Next line executes
* D) It converts to asynchronous function

16. Which of these is a **common synchronous operation**?

* A) Reading a local file using fs.readFileSync
* B) setTimeout
* C) fetch
* D) Promise.then

17. Synchronous JavaScript is also called:

* A) Blocking JavaScript
* B) Non-blocking JavaScript
* C) Event-driven JavaScript
* D) Async JavaScript

18. Which is **faster** for immediate operations?

* A) Synchronous code
* B) Asynchronous code
* C) Promises
* D) Async/Await

19. Which statement about synchronous loops is true?

* A) They do not block execution
* B) They block execution until complete
* C) They run in background
* D) They use microtasks

20. Which of the following is a synchronous way to read data in Node.js?

* A) fs.readFileSync
* B) fs.readFile
* C) fetch
* D) setTimeout

21. What is the output?

```javascript
let x = 5;
let y = x * 2;
console.log(y);
```

* A) 10
* B) Promise {10}
* C) Undefined
* D) Error

22. Which of these is a drawback of synchronous JavaScript?

* A) Can block UI
* B) Cannot execute in order
* C) Always asynchronous
* D) Uses promises

23. Which is true for synchronous error handling?

* A) Use try/catch
* B) Use .catch
* C) Use async/await
* D) Use setTimeout

24. Which of the following executes **line by line**?

* A) Synchronous JavaScript
* B) Async/Await
* C) Promises
* D) setTimeout

25. What happens when a synchronous function takes time to execute?

* A) It blocks subsequent code
* B) It runs asynchronously
* C) It is ignored
* D) It uses microtask queue

26. Which of these is **always executed in order**?

* A) Synchronous code
* B) setTimeout callbacks
* C) Promise.then callbacks
* D) fetch API responses

27. Which statement is correct?

* A) All synchronous code blocks the main thread
* B) Synchronous code never blocks
* C) Synchronous code runs in background
* D) Synchronous code uses microtasks

28. Which of the following operations is synchronous?

* A) console.log
* B) fetch API
* C) setTimeout
* D) Promise.then

29. Which type of JavaScript execution ensures previous code finishes before the next executes?

* A) Synchronous
* B) Asynchronous
* C) Promise
* D) Async/Await

30. Which of the following is true for synchronous functions in browsers?

* A) They block rendering until complete
* B) They run in the background
* C) They are non-blocking
* D) They use event queue

---

## Answer Key

1. A
2. B
3. C
4. B
5. A
6. A
7. A
8. A
9. B
10. B
11. A
12. A
13. A
14. C
15. A
16. A
17. A
18. A
19. B
20. A
21. A
22. A
23. A
24. A
25. A
26. A
27. A
28. A
29. A
30. A
