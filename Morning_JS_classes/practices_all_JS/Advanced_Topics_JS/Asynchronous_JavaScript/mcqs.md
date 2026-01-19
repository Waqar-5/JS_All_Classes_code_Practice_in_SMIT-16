# Asynchronous JavaScript - MCQs

This section contains **70 multiple choice questions (MCQs)** on Asynchronous JavaScript, commonly asked in interviews and exams. The **answer key** is provided at the end.

---

## MCQs

1. Which of the following is true about asynchronous JavaScript?

   * A) Blocks the main thread
   * B) Executes in the background
   * C) Only works with synchronous code
   * D) Cannot be used with timers

2. What is the purpose of `setTimeout`?

   * A) To stop code execution
   * B) To run code after a delay
   * C) To make code synchronous
   * D) To execute immediately

3. Which of these is **not a state** of a Promise?

   * A) Pending
   * B) Fulfilled
   * C) Rejected
   * D) Completed

4. Which method is used to handle fulfilled promises?

   * A) .catch()
   * B) .finally()
   * C) .then()
   * D) .wait()

5. Which method is used to handle rejected promises?

   * A) .then()
   * B) .catch()
   * C) .finally()
   * D) .resolve()

6. `async` keyword is used to:

   * A) Make a function synchronous
   * B) Declare a function that returns a promise
   * C) Stop execution
   * D) Handle errors automatically

7. `await` can only be used:

   * A) Outside a function
   * B) Inside an async function
   * C) Inside loops only
   * D) In the global scope only

8. What will the following code output?

```javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
```

* A) A B C
* B) A C B
* C) B A C
* D) C A B

9. Which of the following can cause callback hell?

   * A) Nested callbacks
   * B) Using promises
   * C) Using async/await
   * D) Using loops

10. `Promise.all`:

* A) Resolves after all promises are fulfilled
* B) Resolves after the first promise is fulfilled
* C) Always rejects
* D) Converts callbacks to promises

11. `Promise.race` returns:

* A) The first promise that resolves or rejects
* B) All promises resolved
* C) All promises rejected
* D) The last promise resolved

12. Which of these is a **microtask**?

* A) setTimeout
* B) setInterval
* C) Promise.then
* D) console.log

13. Which function schedules **repeated execution**?

* A) setTimeout
* B) setInterval
* C) requestAnimationFrame
* D) clearTimeout

14. What does `.finally()` do in a Promise?

* A) Handles success
* B) Handles failure
* C) Executes regardless of outcome
* D) Cancels promise

15. What will be logged first?

```javascript
console.log('X');
setTimeout(() => console.log('Y'), 0);
Promise.resolve().then(() => console.log('Z'));
```

* A) X Y Z
* B) X Z Y
* C) Z X Y
* D) Y X Z

16. Error handling in async/await is done using:

* A) .then()
* B) try/catch
* C) .finally()
* D) throw keyword only

17. Which of the following is true about the Event Loop?

* A) Handles synchronous code only
* B) Handles asynchronous code
* C) Runs in the background thread
* D) Blocks the main thread

18. Which of these is **not asynchronous**?

* A) fetch API
* B) setTimeout
* C) console.log
* D) Promise.then

19. How do you chain promises?

* A) Using nested functions
* B) Using `.then().then()`
* C) Using await only
* D) Using setTimeout

20. Which statement is true about async functions?

* A) They always return undefined
* B) They return a Promise
* C) They return a callback
* D) They block the main thread

21. What is the default state of a new Promise?

* A) Fulfilled
* B) Rejected
* C) Pending
* D) Completed

22. What will this code output?

```javascript
async function test() {
  return 5;
}
console.log(test());
```

* A) 5
* B) Promise {5}
* C) undefined
* D) Error

23. Which method is used to convert a callback to a Promise?

* A) Promise.resolve
* B) Promise.reject
* C) new Promise()
* D) setTimeout

24. What is the difference between setTimeout and setInterval?

* A) setTimeout runs repeatedly, setInterval runs once
* B) setTimeout runs once, setInterval runs repeatedly
* C) Both run repeatedly
* D) Both run once

25. Which of these is a **macro task**?

* A) Promise.then
* B) setTimeout
* C) queueMicrotask
* D) MutationObserver

26. What is the output?

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

* A) Start End Timeout Promise
* B) Start End Promise Timeout
* C) Promise Start End Timeout
* D) End Start Promise Timeout

27. Which of the following ensures sequential execution of asynchronous tasks?

* A) Nested callbacks
* B) Promise chaining
* C) Async/Await
* D) All of the above

28. How can you cancel a scheduled setTimeout?

* A) clearTimeout(id)
* B) cancelTimeout(id)
* C) clearInterval(id)
* D) setTimeout(null)

29. Which method runs a function after all promises are resolved?

* A) Promise.race
* B) Promise.all
* C) Promise.resolve
* D) Promise.catch

30. What is a common problem with callbacks?

* A) Callback Hell
* B) Promise chaining
* C) Async/Await
* D) Event Loop

31. Which of the following is true about fetch API?

* A) It is synchronous
* B) Returns a Promise
* C) Blocks the main thread
* D) Cannot handle JSON

32. Which will execute first?

```javascript
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
```

* A) 1 2 3
* B) 1 3 2
* C) 3 1 2
* D) 2 1 3

33. How do you handle multiple asynchronous operations together?

* A) Promise.all
* B) Nested callbacks
* C) Async/Await individually
* D) setTimeout

34. What is the output?

```javascript
setTimeout(() => console.log('A'), 1000);
setTimeout(() => console.log('B'), 0);
console.log('C');
```

* A) C B A
* B) B C A
* C) A B C
* D) C A B

35. What is the main advantage of Async/Await?

* A) Makes code synchronous
* B) Handles errors automatically
* C) Simplifies promise handling
* D) Stops code execution

36. Which statement about promises is false?

* A) They always resolve
* B) They can be chained
* C) They have states
* D) They handle async operations

37. Which keyword converts a function to return a Promise?

* A) await
* B) async
* C) then
* D) return

38. What will this output?

```javascript
console.log('X');
setTimeout(() => console.log('Y'), 0);
Promise.resolve().then(() => console.log('Z'));
```

* A) X Y Z
* B) X Z Y
* C) Z X Y
* D) Y X Z

39. Which of the following is true about microtasks?

* A) Executed before macrotasks
* B) Executed after macrotasks
* C) Only runs in async functions
* D) Never used in browsers

40. Which function is used to create a promise manually?

* A) Promise.resolve()
* B) Promise.reject()
* C) new Promise((resolve, reject) => {})
* D) async function

41. What is the output?

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

* A) Start End Timeout Promise
* B) Start End Promise Timeout
* C) End Start Promise Timeout
* D) Promise Start End Timeout

42. How can you handle rejected promises?

* A) .then()
* B) .catch()
* C) .finally()
* D) throw

43. Which is the correct way to fetch data using async/await?

* A) const data = fetch(url)
* B) const data = await fetch(url)
* C) fetch(url).then(data)
* D) fetch(url)

44. What will this output?

```javascript
async function test() {
  return 'Done';
}
console.log(await test());
```

* A) Done
* B) Promise {Done}
* C) Error
* D) undefined

45. How do you schedule a function to execute repeatedly every second?

* A) setTimeout(func, 1000)
* B) setInterval(func, 1000)
* C) async func()
* D) Promise.all()

46. Which of the following can cause blocking in JavaScript?

* A) fetch API
* B) Long-running synchronous loops
* C) setTimeout
* D) Promise.then

47. How do you convert a callback-based function to return a promise?

* A) async function
* B) new Promise()
* C) setTimeout
* D) try/catch

48. What is the output?

```javascript
console.log('Start');
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

* A) Start Promise End
* B) Start End Promise
* C) Promise Start End
* D) End Start Promise

49. What is the main problem solved by promises?

* A) Blocking code
* B) Callback Hell
* C) Event Loop
* D) setTimeout delays

50. Which of the following is true about Event Loop?

* A) Processes call stack only
* B) Processes call stack and task queue
* C) Processes promises only
* D) Processes synchronous code only

51. Which is the first task to execute?

```javascript
setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
console.log('C');
```

* A) A
* B) B
* C) C
* D) None

52. How can you run multiple asynchronous operations in parallel?

* A) Async/Await sequentially
* B) Promise.all
* C) Nested callbacks
* D) setTimeout

53. Which of the following is false about async/await?

* A) Makes async code readable
* B) Works only with promises
* C) Blocks main thread
* D) Can use try/catch for error handling

54. Which statement is true about setInterval?

* A) Runs once
* B) Runs repeatedly at specified interval
* C) Converts callbacks to promises
* D) Blocks main thread

55. How do you cancel setInterval?

* A) clearInterval(id)
* B) cancelInterval(id)
* C) clearTimeout(id)
* D) setInterval(null)

56. Which of these runs **first** in the event loop?

* A) Macrotask
* B) Microtask
* C) setTimeout
* D) setInterval

57. How do you handle multiple promise rejections?

* A) .then()
* B) .catch()
* C) Promise.allSettled
* D) Promise.resolve

58. Which of these is correct syntax to create a promise?

* A) new Promise((resolve, reject) => {})
* B) Promise()
* C) async function
* D) await Promise()

59. Which statement about async functions is true?

* A) Always return undefined
* B) Always return a promise
* C) Blocks the main thread
* D) Cannot handle errors

60. What is the output?

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

* A) Start End Timeout Promise
* B) Start End Promise Timeout
* C) End Start Promise Timeout
* D) Promise Start End Timeout

61. Which of the following is **not asynchronous**?

* A) fetch
* B) setTimeout
* C) console.log
* D) Promise.then

62. Which function executes **after the call stack is empty**?

* A) setTimeout
* B) console.log
* C) Synchronous loops
* D) None

63. Which of these ensures sequential execution of asynchronous tasks?

* A) Nested callbacks
* B) Promise chaining
* C) Async/Await
* D) All of the above

64. Which of these is the correct way to handle promise rejection?

* A) .then()
* B) .catch()
* C) .finally()
* D) async

65. Which of the following is a **common interview question** for async JavaScript?

* A) Difference between synchronous and asynchronous
* B) Event Loop execution order
* C) Callback Hell problem
* D) All of the above

66. Which is used for asynchronous HTTP requests?

* A) fetch API
* B) console.log
* C) setTimeout
* D) setInterval

67. Which of these returns a promise immediately resolved?

* A) Promise.resolve(value)
* B) Promise.reject(value)
* C) new Promise(resolve => {})
* D) async function

68. What will this output?

```javascript
async function test() {
  return 'Done';
}
test().then(console.log);
```

* A) Done
* B) Promise {Done}
* C) undefined
* D) Error

69. Which of the following is true about `.then()`?

* A) Returns a new promise
* B) Returns undefined
* C) Blocks main thread
* D) Cannot be chained

70. What is the output?

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```

* A) 1 4 3 2
* B) 1 3 4 2
* C) 1 2 3 4
* D) 1 4 2 3

---

## Answer Key

1. B
2. B
3. D
4. C
5. B
6. B
7. B
8. B
9. A
10. A
11. A
12. C
13. B
14. C
15. B
16. B
17. B
18. C
19. B
20. B
21. C
22. B
23. C
24. B
25. B
26. B
27. D
28. A
29. B
30. A
31. B
32. B
33. A
34. A
35. C
36. A
37. B
38. B
39. A
40. C
41. B
42. B
43. B
44. C
45. B
46. B
47. B
48. B
49. B
50. B
51. C
52. B
53. C
54. B
55. A
56. B
57. C
58. A
59. B
60. B
61. ... for you users...
