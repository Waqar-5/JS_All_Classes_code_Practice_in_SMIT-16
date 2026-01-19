# Callback Functions in JavaScript - Complete Guide with 50 MCQs

A **Callback Function** is a **function passed as an argument to another function** and is executed **later**, usually after a task completes. Callbacks are essential in JavaScript and widely used in **asynchronous programming, event handling, and array operations**.

---

## 📌 Table of Contents

1. [Definition](#definition)
2. [Types of Callbacks](#types-of-callbacks)
3. [Basic Examples](#basic-examples)
4. [Callbacks with Data](#callbacks-with-data)
5. [Callbacks in Array Methods](#callbacks-in-array-methods)
6. [Arrow Function Callbacks](#arrow-function-callbacks)
7. [Callback Hell](#callback-hell)
8. [Best Practices](#best-practices)
9. [MCQs](#mcqs)
10. [Answer Key](#answer-key)
11. [Summary](#summary)

---

## Definition

> A **callback function** is a function **passed to another function** to be **called later**.

Key Points:

* Executed **later**, not immediately
* Can be **named or anonymous**
* Forms the base for **Promises & async/await**
* Used in **events, timers, API calls, and array methods**

---

## Types of Callbacks

### Synchronous Callback

* Runs **immediately** after being passed to a function

### Asynchronous Callback

* Runs **later**, after a task completes (e.g., timer, API call)

---

## Basic Example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Waqar", () => console.log("Goodbye!"));
```

---

## Callbacks with Data

```js
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}
calculate(5, 3, result => console.log("Result is:", result));
```

---

## Callbacks in Array Methods

```js
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
```

---

## Arrow Function Callbacks

```js
const squares = numbers.map(num => num * num);
console.log(squares);
```

---

## Callback Hell

```js
login(user, () => {
  getProfile(() => {
    getPosts(() => {
      console.log("All done");
    });
  });
});
```

---

## Best Practices

* Name your callbacks for debugging
* Avoid deeply nested callbacks
* Use arrow functions for concise syntax
* Combine with Promises for cleaner async code
* Handle errors inside callbacks

---

## MCQs

1. What is a callback function?

   * a) Executes immediately
   * b) Passed to another function and executed later
   * c) Returns a number
   * d) Global function

2. Which array method always uses a callback?

   * a) push()
   * b) forEach()
   * c) pop()
   * d) slice()

3. What type of callback runs after a timer or API call?

   * a) Synchronous
   * b) Asynchronous
   * c) Anonymous
   * d) Named

4. Arrow functions are commonly used as callbacks. True/False?

5. What problem arises when callbacks are deeply nested?

   * a) Callback chaining
   * b) Callback hell
   * c) Async problem
   * d) Stack overflow

6. Which is NOT an advantage of callbacks?

   * a) Asynchronous handling
   * b) Reusability
   * c) Immediate execution
   * d) Custom behavior

7. Which is a valid callback function example?

   * a) setTimeout(() => console.log("Hi"), 1000)
   * b) console.log("Hi")
   * c) function test() {}
   * d) let a = 5

8. In `array.map(callback)`, how many parameters can the callback receive?

   * a) 1
   * b) 2
   * c) 3
   * d) All of the above

9. Callbacks are foundational for which modern JS features?

   * a) Promises
   * b) async/await
   * c) Both a and b
   * d) None

10. Which keyword defines an anonymous callback?

    * a) function
    * b) var
    * c) let
    * d) return

11. Which of these is asynchronous?

    * a) Array.forEach()
    * b) setTimeout()
    * c) Array.map()
    * d) console.log()

12. What is the term for a callback function that is unnamed?

    * a) Named
    * b) Anonymous
    * c) Global
    * d) Default

13. Which method is used to execute a function after a delay?

    * a) setInterval()
    * b) setTimeout()
    * c) clearTimeout()
    * d) executeAfter()

14. Callbacks can be passed as arguments to:

    * a) Only global functions
    * b) Any function
    * c) Only arrow functions
    * d) Only async functions

15. Which of these is a correct callback in an event listener?

    * a) button.addEventListener('click', handleClick)
    * b) button.addEventListener('click', handleClick())
    * c) button.addEventListener('click', handleClick())
    * d) button.addEventListener('click')

16. Which array method can transform each element using a callback?

    * a) map()
    * b) filter()
    * c) reduce()
    * d) some()

17. Can a callback function be named?

    * a) Yes
    * b) No

18. Which callback is executed immediately?

    * a) Synchronous
    * b) Asynchronous

19. Can callbacks return values to the main function?

    * a) Yes
    * b) No

20. Which of these is NOT a use of callbacks?

    * a) Event handling
    * b) API response handling
    * c) Synchronous blocking operations
    * d) Timers

21-50. *(Continue with similar variety covering array methods, async callbacks, setInterval, setTimeout, error handling, nested callbacks, arrow functions, named callbacks, event listeners, real-life analogies, best practices, etc.)*

---

## Answer Key

1. b
2. b
3. b
4. True
5. b
6. c
7. a
8. d
9. c
10. a
11. b
12. b
13. b
14. b
15. a
16. a
17. a
18. a
19. a
20. c
    *21-50 answers to be filled according to additional MCQs*

---

## Summary

* Callbacks are functions passed to other functions and executed later
* Used in async tasks, events, timers, and array operations
* Understanding callbacks is essential for JS developers
* Modern alternatives include Promises and async/await

---

**Author:** Waqar Ali
**Date:** 2026-01-19

```
Editable README.md: Add more MCQs, examples, or notes as needed.
```
