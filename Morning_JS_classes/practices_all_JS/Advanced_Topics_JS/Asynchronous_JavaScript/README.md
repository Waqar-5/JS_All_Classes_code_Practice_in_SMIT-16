# Asynchronous JavaScript

Asynchronous JavaScript allows you to perform tasks that take time (like API calls, file reading, or timers) **without blocking the main thread**. Understanding this concept is crucial for building **efficient, non-blocking web applications**.

---

## Table of Contents

1. [What is Asynchronous JavaScript?](#what-is-asynchronous-javascript)
2. [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
3. [Event Loop](#event-loop)
4. [Callbacks](#callbacks)
5. [Promises](#promises)
6. [Async/Await](#asyncawait)
7. [Error Handling](#error-handling)
8. [Common Patterns](#common-patterns)
9. [Tips for Interviews & Exams](#tips-for-interviews--exams)

---

## What is Asynchronous JavaScript?

JavaScript runs on a **single-threaded** environment, which means it can do one thing at a time.
Asynchronous JavaScript allows certain tasks to **run in the background** while the main code continues execution.

**Example:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
This runs later
```

---

## Synchronous vs Asynchronous

| Synchronous                   | Asynchronous                                   |
| ----------------------------- | ---------------------------------------------- |
| Executes line by line         | Executes in background                         |
| Blocking: next line waits     | Non-blocking: next line runs immediately       |
| Simple to understand          | Requires understanding of Event Loop           |
| Examples: loops, calculations | Examples: fetch requests, timers, file reading |

---

## Event Loop

The **event loop** is the heart of asynchronous JavaScript. It checks the **call stack** and **task queue**, executing callbacks when the stack is empty.

**Example:**

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```

**Output:**

```
Start
End
Timeout
```

> Even with `0ms`, setTimeout runs after the current call stack is empty.

---

## Callbacks

A **callback** is a function passed into another function to run later.

**Example:**

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayBye() {
  console.log('Goodbye!');
}

greet('Alice', sayBye);
```

**Output:**

```
Hello, Alice
Goodbye!
```

> **Drawback:** Callback Hell (nested callbacks) can make code hard to read.

---

## Promises

A **Promise** represents the **future value** of an asynchronous operation.

**States:** Pending, Fulfilled, Rejected

**Example:**

```javascript
const fetchData = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve('Data received');
    } else {
      reject('Error occurred');
    }
  }, 2000);
});

fetchData
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

**Output (after 2 seconds):**

```
Data received
```

---

## Async/Await

**Async/Await** makes asynchronous code look synchronous, improving readability.

**Example:**

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data received'), 2000);
  });
}

async function getData() {
  console.log('Fetching data...');
  const data = await fetchData();
  console.log(data);
}

getData();
```

**Output:**

```
Fetching data...
Data received
```

---

## Error Handling

**With Promises:**

```javascript
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

**With Async/Await:**

```javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch(err) {
    console.error('Error:', err);
  }
}
```

---

## Common Patterns

1. **Promise Chaining**

```javascript
fetchData()
  .then(data => {
    console.log(data);
    return 'Next step';
  })
  .then(next => console.log(next));
```

2. **Parallel Execution with Promise.all**

```javascript
Promise.all([fetchData(), fetchData()])
  .then(results => console.log(results));
```

3. **Race with Promise.race**

```javascript
Promise.race([fetchData(), fetchData()])
  .then(fastest => console.log(fastest));
```

---

## Tips for Interviews & Exams

* Understand the **difference** between synchronous and asynchronous code.
* Explain **event loop**, call stack, and task queue clearly.
* Know **Callback Hell** and how Promises/Async-Await solve it.
* Be able to write **Promise chains** and use `async/await` with **try/catch**.
* Know **Promise.all**, `Promise.race` and **error handling**.
* Be ready to debug tricky asynchronous scenarios, like setTimeout inside loops.
* Remember: **`await` only works inside async functions**.

---

> Mastering asynchronous JavaScript is key for building responsive, high-performance web applications. Practice by converting callbacks to promises and then to async/await for better understanding.

```

---

I can make this file **directly downloadable as `README.md`** for you in one click, fully editable.  

Do you want me to create a **downloadable file link** right now?

```
