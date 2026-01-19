# JavaScript `apply()` – 50 Professional Interview Questions with Answers

> This document contains 50 carefully curated questions and answers focusing on JavaScript's `apply()` method, designed for interviews at top companies.

---

## **1. What is the primary purpose of apply()?**

* **Answer:** To immediately invoke a function with a specified `this` and arguments passed as an array.

## **2. Difference between call() and apply()?**

* **Answer:** call() passes arguments individually, apply() passes arguments as an array.

## **3. Can apply() change the context of `this`?**

* **Answer:** Yes, the first argument sets `this`.

## **4. Syntax of apply()?**

* **Answer:** `func.apply(thisArg, [arg1, arg2, ...])`

## **5. Can apply() be used for function borrowing?**

* **Answer:** Yes, e.g., `obj1.method.apply(obj2, argsArray)`.

## **6. How is apply() useful with Math.max()?**

* **Answer:** `Math.max.apply(null, [1,2,3])` returns 3.

## **7. Can apply() accept no arguments?**

* **Answer:** Yes, e.g., `func.apply(obj)`.

## **8. What happens if apply() is used with null as thisArg?**

* **Answer:** `this` defaults to the global object in non-strict mode; undefined in strict mode.

## **9. Can apply() be used with array-like objects?**

* **Answer:** Yes, e.g., converting arguments to an array: `Array.prototype.slice.apply(arguments)`.

## **10. Difference between apply() and bind()?**

* **Answer:** apply() executes immediately, bind() returns a new function.

## **11. Can you use apply() to pass arguments dynamically?**

* **Answer:** Yes, it is designed for dynamic argument lists.

## **12. Example of apply() for summing numbers:**

```javascript
function sum(a, b, c) { return a + b + c; }
console.log(sum.apply(null, [1,2,3])); // 6
```

## **13. Can apply() be chained?**

* **Answer:** No, it executes immediately and returns the function result.

## **14. Can apply() be used with constructor functions?**

* **Answer:** Not directly for creating new instances; use `call()` or `new` instead.

## **15. Is apply() slower than call()?**

* **Answer:** Slightly slower due to array handling, but generally negligible.

## **16. Can apply() be used in strict mode?**

* **Answer:** Yes, works normally; `this` is undefined if null or undefined is passed.

## **17. Can apply() be used in ES6 classes?**

* **Answer:** Yes, methods can be invoked with a different `this` context.

## **18. How to use apply() for array operations?**

* **Answer:** `Math.min.apply(null, array)` finds minimum in an array.

## **19. Can apply() accept more than one array as argument?**

* **Answer:** No, only a single array of arguments.

## **20. Can you pass an empty array to apply()?**

* **Answer:** Yes, function is called with no arguments.

## **21. Example of function borrowing with apply():**

```javascript
const person1 = {name: 'Alice'};
const person2 = {name: 'Bob'};
function greet(greeting){ return `${greeting}, ${this.name}`; }
console.log(greet.apply(person2, ['Hello'])); // Hello, Bob
```

## **22. Can apply() work with DOM methods?**

* **Answer:** Yes, e.g., `Math.max.apply(null, nodeListValues)`.

## **23. Can apply() be used with variable number of arguments?**

* **Answer:** Yes, ideal for variadic functions.

## **24. Can apply() be used in functional programming?**

* **Answer:** Yes, for dynamic argument application.

## **25. Example of converting arguments to array:**

```javascript
function listArgs(){ return Array.prototype.slice.apply(arguments); }
console.log(listArgs(1,2,3)); // [1,2,3]
```

## **26. Can apply() modify the original function?**

* **Answer:** No, executes function immediately but does not modify it.

## **27. Can apply() be used with arrow functions?**

* **Answer:** Yes, but arrow functions inherit `this` and cannot be rebound.

## **28. How to use apply() to merge arrays?**

* **Answer:** `Array.prototype.push.apply(arr1, arr2)` merges arr2 into arr1.

## **29. Can apply() be used to invoke methods on different objects?**

* **Answer:** Yes, primary use case is function borrowing.

## **30. Example with DOM elements:**

```javascript
const nodeList = document.querySelectorAll('div');
const nodesArray = Array.prototype.slice.apply(nodeList);
```

## **31. Can apply() throw errors?**

* **Answer:** Yes, if first argument is not an object and strict mode is used.

## **32. Can apply() pass undefined as arguments array?**

* **Answer:** Yes, treated as no arguments.

## **33. Can apply() be used for constructor inheritance?**

* **Answer:** Yes, via constructor function borrowing.

## **34. Can apply() be used in React components?**

* **Answer:** Rarely; mostly for utility functions with dynamic args.

## **35. How is apply() different from spreading arguments?**

* **Answer:** ES6 spread `[...args]` can replace apply in modern JS.

## **36. Can apply() improve code reuse?**

* **Answer:** Yes, allows borrowing and dynamic argument application.

## **37. Can apply() be combined with call()?**

* **Answer:** Usually unnecessary; they serve similar purposes.

## **38. Can apply() be used to invoke a function multiple times?**

* **Answer:** Yes, call it repeatedly with different `this` or args.

## **39. Can apply() handle nested arrays?**

* **Answer:** No, only top-level array is used as arguments.

## **40. Can apply() change object properties indirectly?**

* **Answer:** Yes, if function modifies `this` object.

## **41. Can apply() be used with default parameters?**

* **Answer:** Yes, extra parameters not provided take default values.

## **42. Example of using apply() with Math.min:**

```javascript
const nums = [10, 5, 20];
console.log(Math.min.apply(null, nums)); // 5
```

## **43. Can apply() be polyfilled?**

* **Answer:** Yes, older browsers may require custom polyfills.

## **44. Difference between apply() and rest parameters?**

* **Answer:** apply() is pre-ES6 way to pass array as arguments; rest parameters are modern replacement.

## **45. Can apply() be used to call anonymous functions?**

* **Answer:** Yes, e.g., `(function(a,b){ return a+b; }).apply(null,[1,2]);`

## **46. Can apply() be used to bind `this` permanently?**

* **Answer:** No, bind() is required for permanent binding.

## **47. Can apply() be used for method chaining?**

* **Answer:** No, it executes immediately; bind() is needed for chaining.

## **48. Example of summing dynamic arguments:**

```javascript
function sum(){ return Array.prototype.reduce.apply(arguments, [(a,b)=>a+b,0]); }
```

## **49. Can apply() handle large argument arrays?**

* **Answer:** Yes, but extremely large arrays may cause stack overflow.

## **50. Best practices for apply():**

* Use for dynamic argument arrays.
* Use for function borrowing.
* Prefer ES6 spread syntax in modern code.
* Avoid binding `this` permanently; use bind() if needed.
* Ensure correct `thisArg` in strict mode.

---

This document is **editable** and can be updated with more examples or advanced use cases to strengthen your JavaScript skills focused exclusively on `apply()`.
