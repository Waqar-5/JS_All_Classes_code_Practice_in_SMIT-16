# Callback Functions in JavaScript - 50 Interview Questions & Answers

This file contains **50 questions and professional answers** on JavaScript Callback Functions, designed for interviews and exams.

---

## 50 Questions & Answers on Callback Functions

1. **What is a callback function?**

   * **Answer:** A function passed as an argument to another function to be executed later.

2. **Why are callback functions used in JavaScript?**

   * **Answer:** They are used for asynchronous operations, event handling, and to make code modular and reusable.

3. **What is the difference between synchronous and asynchronous callbacks?**

   * **Answer:** Synchronous callbacks run immediately in sequence, whereas asynchronous callbacks run after a task completes.

4. **Can a callback function be anonymous?**

   * **Answer:** Yes, it can be defined inline without a name.

5. **Can callbacks be named functions?**

   * **Answer:** Yes, named callbacks are preferred for readability and debugging.

6. **Give an example of a callback function in an array method.**

   * **Answer:** `numbers.forEach(num => console.log(num));`

7. **What is callback hell?**

   * **Answer:** It refers to deeply nested callbacks that are hard to read and maintain.

8. **How can callback hell be avoided?**

   * **Answer:** By using Promises, async/await, or breaking code into smaller, modular functions.

9. **What role does a callback play in asynchronous programming?**

   * **Answer:** It ensures code runs after an asynchronous task, like an API call or timer, completes.

10. **Can callbacks return values directly to the outer function?**

    * **Answer:** Not in asynchronous cases; callbacks must pass results via parameters or Promises.

11. **Give an example of a synchronous callback.**

    * **Answer:** `numbers.map(num => num * 2);`

12. **Give an example of an asynchronous callback.**

    * **Answer:** `setTimeout(() => console.log('Delayed'), 2000);`

13. **What parameters are passed to the forEach callback?**

    * **Answer:** `currentValue, index, array`

14. **What parameters are passed to the map callback?**

    * **Answer:** `currentValue, index, array`

15. **Can callbacks be used for event handling?**

    * **Answer:** Yes, e.g., `button.addEventListener('click', handleClick)`.

16. **Can a callback function throw an error?**

    * **Answer:** Yes, errors inside callbacks should be handled to avoid breaking code.

17. **Can a callback function call another callback?**

    * **Answer:** Yes, callbacks can be nested or chained.

18. **What is the difference between named and anonymous callbacks?**

    * **Answer:** Named callbacks have identifiers and can be reused; anonymous callbacks do not have names and are usually inline.

19. **Which array methods commonly use callbacks?**

    * **Answer:** `forEach()`, `map()`, `filter()`, `reduce()`, `some()`, `every()`

20. **Can a callback be passed as a property of an object?**

    * **Answer:** Yes, functions stored in objects can be used as callbacks.

21. **What is the advantage of using arrow functions as callbacks?**

    * **Answer:** Arrow functions provide concise syntax and lexically bind `this`.

22. **What happens if a callback is not provided where required?**

    * **Answer:** The code may throw an error or not perform the intended operation.

23. **What is the difference between a callback and a regular function?**

    * **Answer:** A callback is passed to another function to be executed later, whereas a regular function executes when called.

24. **Can asynchronous callbacks access variables from the outer scope?**

    * **Answer:** Yes, they can access variables due to JavaScript closures.

25. **Give an example of a callback using setTimeout.**

    * **Answer:** `setTimeout(() => console.log('Hello'), 1000);`

26. **Can a callback be recursive?**

    * **Answer:** Yes, a callback function can call itself directly or indirectly.

27. **How do callbacks handle multiple parameters?**

    * **Answer:** Additional parameters can be passed directly to the callback when invoked.

28. **What is the role of callbacks in Promises?**

    * **Answer:** They are used in `.then()` and `.catch()` to handle resolved and rejected states.

29. **Can callbacks be used in server-side JavaScript (Node.js)?**

    * **Answer:** Yes, callbacks are widely used in Node.js for asynchronous operations like file I/O.

30. **What is the difference between callback and event listener?**

    * **Answer:** Callbacks are functions passed to other functions; event listeners are callbacks triggered by specific events.

31. **Can a callback modify outer function variables?**

    * **Answer:** Yes, due to closures, a callback can access and modify outer scope variables.

32. **What is a common mistake with callbacks in loops?**

    * **Answer:** Using `var` can cause unexpected behavior; `let` is recommended to correctly bind loop values.

33. **Can callbacks be passed as arguments to multiple functions?**

    * **Answer:** Yes, the same callback function can be reused in multiple places.

34. **What is the role of callback in Node.js asynchronous methods?**

    * **Answer:** To execute code after I/O operations, like reading files or making HTTP requests.

35. **Can callbacks return a Promise?**

    * **Answer:** Yes, a callback can return a Promise to allow chaining with async operations.

36. **What is the difference between synchronous callback and normal function call?**

    * **Answer:** Both execute immediately, but a callback is designed to be passed and invoked by another function.

37. **Can callbacks cause memory leaks?**

    * **Answer:** Yes, if references are retained unnecessarily in closures.

38. **Are callbacks required in JavaScript?**

    * **Answer:** Not required, but essential for asynchronous programming and event handling.

39. **What is the main advantage of using callbacks?**

    * **Answer:** They allow asynchronous, modular, and reusable code.

40. **Can you chain multiple callbacks?**

    * **Answer:** Yes, one callback can call another to create a chain of operations.

41. **What is the difference between callback and Promise?**

    * **Answer:** Callbacks can be nested and lead to callback hell; Promises provide cleaner syntax and better error handling.

42. **Can callbacks be used in ReactJS?**

    * **Answer:** Yes, callbacks are commonly used for passing functions between components.

43. **How does a callback differ from a normal event handler?**

    * **Answer:** Event handlers are triggered by events; callbacks may be triggered by any function logic.

44. **What is a higher-order function in relation to callbacks?**

    * **Answer:** A function that accepts one or more functions as arguments or returns a function, often used with callbacks.

45. **Can callbacks be asynchronous and still return a value?**

    * **Answer:** Not directly; they must pass results via another callback or Promise.

46. **How do you prevent callback hell?**

    * **Answer:** Use Promises, async/await, modular functions, or named callbacks.

47. **What is the role of a callback in array.reduce()?**

    * **Answer:** It accumulates a single value by processing each element in the array.

48. **Can a callback function modify the array it iterates over?**

    * **Answer:** Yes, callbacks like `forEach` can modify the original array.

49. **What is the role of a callback in setInterval()?**

    * **Answer:** It executes repeatedly at specified intervals until cleared.

50. **Give an example of using a callback in an event listener.**

    * **Answer:** `button.addEventListener('click', () => alert('Button clicked'));`
