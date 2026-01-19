# JavaScript `call()` – 50 Professional Interview Questions with Answers

> This document contains 50 carefully curated questions and answers focusing on JavaScript's `call()` method, designed for interviews at top companies.

---

## **1. What is the primary purpose of call()?**

* **Answer:** To immediately invoke a function with a specified `this` context and individual arguments.

## **2. Difference between call() and apply()?**

* **Answer:** call() passes arguments individually, apply() passes arguments as an array.

## **3. Can call() change the context of `this`?**

* **Answer:** Yes, the first argument sets `this`.

## **4. Syntax of call()?**

* **Answer:** `func.call(thisArg, arg1, arg2, ...)`

## **5. Can call() be used for function borrowing?**

* **Answer:** Yes, e.g., `obj1.method.call(obj2, arg1, arg2)`.

## **6. Can call() be used with constructors?**

* **Answer:** Yes, `Constructor.call(obj, arg1, arg2)` can initialize properties on another object.

## **7. Does call() execute immediately?**

* **Answer:** Yes, it calls the function right away.

## **8. Can call() be used in strict mode?**

* **Answer:** Yes, and `this` is undefined if null or undefined is passed.

## **9. Can call() accept no arguments?**

* **Answer:** Yes, function is invoked with only the `this` context.

## **10. Can call() be used with array-like objects?**

* **Answer:** Yes, e.g., converting arguments: `Array.prototype.slice.call(arguments)`.

## **11. Example of function borrowing:**

```javascript
const person1 = {name: 'Alice'};
const person2 = {name: 'Bob'};
function greet(greeting){ return `${greeting}, ${this.name}`; }
greet.call(person2, 'Hello'); // Hello, Bob
```

## **12. Can call() be chained?**

* **Answer:** No, it executes immediately.

## **13. Difference between call() and bind()?**

* **Answer:** call() executes immediately, bind() returns a new function.

## **14. Can call() be used with arrow functions?**

* **Answer:** Yes, but arrow functions inherit `this` lexically and cannot be rebound.

## **15. Can call() be used for dynamic argument lists?**

* **Answer:** Yes, when the arguments are known individually.

## **16. Example with constructor:**

```javascript
function Person(name){ this.name = name; }
const obj = {};
Person.call(obj, 'Charlie');
console.log(obj.name); // Charlie
```

## **17. Can call() modify the original function?**

* **Answer:** No, it only executes it immediately.

## **18. Can call() be used with methods from other objects?**

* **Answer:** Yes, for method borrowing.

## **19. How to convert arguments to array using call():**

```javascript
function listArgs(){ return Array.prototype.slice.call(arguments); }
console.log(listArgs(1,2,3)); // [1,2,3]
```

## **20. Can call() work in ES6 classes?**

* **Answer:** Yes, methods can be invoked with different `this` context.

## **21. Can call() handle undefined `thisArg`?**

* **Answer:** Yes, in strict mode `this` becomes undefined, in non-strict mode it defaults to global object.

## **22. Example of explicit `this`:**

```javascript
function showName(){ console.log(this.name); }
const user = {name: 'David'};
showName.call(user); // David
```

## **23. Can call() be used with default parameters?**

* **Answer:** Yes, parameters not provided take default values.

## **24. Can call() help with functional programming?**

* **Answer:** Yes, by reusing functions across objects.

## **25. Can call() be used with setTimeout()?**

* **Answer:** Yes, to set the correct `this` in callbacks.

## **26. Example with array-like objects:**

```javascript
function getFirst(){ return Array.prototype.slice.call(arguments, 0, 1); }
console.log(getFirst(1,2,3)); // [1]
```

## **27. Can call() be used for method chaining?**

* **Answer:** No, it executes immediately; bind() is used for chaining.

## **28. Example of reusing Math.max with call():**

```javascript
const nums = [1,2,3];
console.log(Math.max.call(null, 1,2,3)); // 3
```

## **29. Can call() be used to invoke anonymous functions?**

* **Answer:** Yes, e.g., `(function(a,b){ return a+b; }).call(null,1,2);`

## **30. Can call() be used to borrow array methods?**

* **Answer:** Yes, e.g., `Array.prototype.slice.call(arguments)`.

## **31. Does call() accept multiple arguments?**

* **Answer:** Yes, each argument is passed individually.

## **32. Can call() be used for dynamic property assignment?**

* **Answer:** Yes, by invoking constructor functions on another object.

## **33. Can call() be used with apply()?**

* **Answer:** Rarely needed; they are alternatives for `this` binding.

## **34. Can call() be used in event handlers?**

* **Answer:** Yes, to ensure correct `this`.

## **35. Can call() accept null as `thisArg`?**

* **Answer:** Yes, treated as global object in non-strict mode.

## **36. Can call() be polyfilled?**

* **Answer:** Yes, for older browsers.

## **37. Example of call() with multiple arguments:**

```javascript
function multiply(a,b){ return a*b; }
console.log(multiply.call(null, 2,3)); // 6
```

## **38. Can call() help in inheritance?**

* **Answer:** Yes, by invoking parent constructors on child objects.

## **39. Difference between call() and normal invocation?**

* **Answer:** call() explicitly sets `this`, normal function call may have default or undefined `this`.

## **40. Can call() execute a function immediately inside another function?**

* **Answer:** Yes, it allows dynamic invocation with specific `this`.

## **41. Example with DOM:**

```javascript
function getNodeId(){ return this.id; }
const div = document.getElementById('myDiv');
console.log(getNodeId.call(div));
```

## **42. Can call() be used with default ES6 parameters?**

* **Answer:** Yes, it respects default values.

## **43. Can call() be used in strict mode?**

* **Answer:** Yes, with `this` being undefined if null/undefined.

## **44. Example of call() for dynamic method invocation:**

```javascript
function greet(){ return `Hi, ${this.name}`; }
const user = {name:'Eve'};
console.log(greet.call(user)); // Hi, Eve
```

## **45. Can call() be used for array manipulation?**

* **Answer:** Yes, e.g., `Array.prototype.push.call(arr, value)`.

## **46. Can call() be used with classes and inheritance?**

* **Answer:** Yes, for invoking parent constructors.

## **47. Can call() pass objects as arguments?**

* **Answer:** Yes, any type can be passed.

## **48. Can call() improve code reuse?**

* **Answer:** Yes, by allowing a function to operate on multiple objects.

## **49. Can call() be used for partial application?**

* **Answer:** Not directly; use bind() for partial application.

## **50. Best practices for call():**

* Use for **explicit this binding**.
* Use for **function borrowing**.
* Avoid in performance-critical loops if frequent invocation.
* Combine with constructor functions for dynamic object initialization.
* Use in strict mode to avoid global object pitfalls.

---

This document is **editable** and can be updated with more examples or advanced use cases to strengthen your JavaScript skills focused exclusively on `call()`.
