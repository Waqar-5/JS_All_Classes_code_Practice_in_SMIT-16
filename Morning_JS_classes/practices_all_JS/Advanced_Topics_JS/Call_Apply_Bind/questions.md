# JavaScript `call()`, `apply()`, and `bind()` – 50 Professional Interview Questions with Answers

> This document contains 50 carefully curated questions and answers focusing on JavaScript's `call()`, `apply()`, and `bind()` methods, designed for interviews at top companies.

---

## **1. What is the difference between call() and apply() in JavaScript?**

* **Answer:** `call()` accepts arguments individually, while `apply()` accepts arguments as an array.

## **2. Does bind() execute the function immediately?**

* **Answer:** No, it returns a new function with the specified `this` context.

## **3. How can you borrow a method from one object to another using call()?**

* **Answer:** By using `object1.method.call(object2, args...)`, object2 can use object1's method.

## **4. Can bind() be used for partial function application?**

* **Answer:** Yes, arguments can be preset in bind() for partial application.

## **5. What is the output of the following?**

```javascript
const obj = { name: 'Alice' };
function greet(greeting) { return `${greeting}, ${this.name}`; }
console.log(greet.call(obj, 'Hello'));
```

* **Answer:** Hello, Alice

## **6. When should you prefer apply() over call()?**

* **Answer:** When arguments are already in an array or dynamic in number.

## **7. Can bind() be chained?**

* **Answer:** Yes, multiple bind calls can be chained but only the first binding of `this` takes effect.

## **8. What happens if call() is used without a first argument?**

* **Answer:** `this` defaults to the global object (window in browser, global in Node.js) or undefined in strict mode.

## **9. How can you use call() to invoke a constructor function?**

* **Answer:** `Constructor.call(obj, args...)` can invoke the constructor in the context of another object.

## **10. Difference between bind() and call() in terms of execution?**

* **Answer:** `call()` executes immediately, `bind()` returns a new function to execute later.

## **11. Can apply() be used with Math.max()? Example?**

* **Answer:** Yes. `Math.max.apply(null, [1,2,3])` returns 3.

## **12. Can bind() be used to fix the `this` in event handlers?**

* **Answer:** Yes, especially in React class components to ensure `this` refers to the component instance.

## **13. What is the output of:**

```javascript
function foo(){ return this; }
console.log(foo.call(null));
```

* **Answer:** `null` in strict mode; global object in non-strict mode.

## **14. Can arrow functions use bind()?**

* **Answer:** No, arrow functions do not have their own `this`; bind() cannot change it.

## **15. How do call(), apply(), and bind() affect arguments?**

* **Answer:** call() – individual args; apply() – array; bind() – preset args, returns new function.

## **16. What is function borrowing and how is it implemented?**

* **Answer:** Using call() or apply() to use a method of another object without copying it.

## **17. What is the use of bind() in timers like setTimeout()?**

* **Answer:** Ensures the correct `this` context in callbacks.

## **18. What is the difference between call() and bind() regarding return values?**

* **Answer:** call() returns the function result, bind() returns a new function.

## **19. Can apply() accept no arguments?**

* **Answer:** Yes, you can call `func.apply(obj)` with an empty array.

## **20. Example of using bind() with preset arguments:**

```javascript
function multiply(a, b){ return a*b; }
const double = multiply.bind(null, 2);
double(5); // 10
```

* **Answer:** Demonstrates partial application.

## **21. Can you use call() or apply() with an array-like object?**

* **Answer:** Yes, e.g., `Array.prototype.slice.call(arguments)`.

## **22. How do call(), apply(), and bind() affect performance?**

* **Answer:** call() and apply() execute immediately and may have minimal overhead; bind() creates a new function object.

## **23. How can bind() help in method chaining?**

* **Answer:** It can preset `this` while returning a callable function for chainable calls.

## **24. What will happen if bind() is used on a constructor function?**

* **Answer:** The bound function can still be used as a constructor with `new`, but `this` is ignored for binding.

## **25. Can call() change the value of `this` in strict mode?**

* **Answer:** Yes, it explicitly sets `this` even in strict mode.

## **26. Why is apply() useful in variadic functions?**

* **Answer:** Allows passing arguments as an array dynamically.

## **27. Can bind() be used on a method from another object?**

* **Answer:** Yes, it creates a new function bound to the specified object.

## **28. Difference between bind() and arrow functions in setting `this`?**

* **Answer:** bind() sets `this` explicitly; arrow functions inherit `this` lexically and cannot be rebound.

## **29. Can you call a method of an object on another object using apply()?**

* **Answer:** Yes, e.g., `obj1.method.apply(obj2, argsArray)`.

## **30. Can call() be used with constructor functions?**

* **Answer:** Yes, `Constructor.call(obj, args)` executes the constructor in context of obj.

## **31. What is the result of `bind()` without arguments?**

* **Answer:** Returns a copy of the original function with the same `this` context.

## **32. Can apply() be used to find maximum in an array?**

* **Answer:** Yes, `Math.max.apply(null, [1,2,3])`.

## **33. Can bind() help in callback functions?**

* **Answer:** Yes, it ensures callbacks maintain the correct `this`.

## **34. Does call() affect the original function?**

* **Answer:** No, it executes it immediately but does not modify the original function.

## **35. Can you borrow array methods using call()?**

* **Answer:** Yes, e.g., `Array.prototype.slice.call(arguments)`.

## **36. What happens if bind() is applied on a bound function?**

* **Answer:** Subsequent binding ignores the first binding of `this` but preset arguments can be added.

## **37. Example of function borrowing with call():**

```javascript
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };
function sayName(){ return this.name; }
sayName.call(person2); // 'Bob'
```

* **Answer:** Demonstrates borrowing a method from one object to another.

## **38. Difference between call() and apply() in syntax?**

* **Answer:** call(obj, arg1, arg2), apply(obj, [arg1, arg2]).

## **39. Can bind() preset multiple arguments?**

* **Answer:** Yes, all arguments can be preset in order.

## **40. How is `this` determined when using call()?**

* **Answer:** The first argument passed to call() sets `this`.

## **41. How is `this` determined when using apply()?**

* **Answer:** Same as call(), the first argument sets `this`.

## **42. Why is bind() preferred in React class methods?**

* **Answer:** To maintain the correct `this` context when passing methods as props or callbacks.

## **43. Can bind() be used in functional programming?**

* **Answer:** Yes, to create partially applied functions.

## **44. Example of using call() with array-like object:**

```javascript
function sum(){ return Array.prototype.reduce.call(arguments, (a,b)=>a+b,0); }
sum(1,2,3); //6
```

* **Answer:** Demonstrates converting arguments to an array using call().

## **45. Can bind() be used with setTimeout?**

* **Answer:** Yes, e.g., `setTimeout(func.bind(this), 1000)` ensures correct `this`.

## **46. Does call() accept array as arguments?**

* **Answer:** No, arguments must be listed individually.

## **47. Does apply() accept individual arguments?**

* **Answer:** No, arguments must be in an array.

## **48. Can bind() be used to change arguments later?**

* **Answer:** Yes, preset arguments are fixed, but additional arguments can be passed when calling the new function.

## **49. What happens if call() is used with undefined?**

* **Answer:** `this` defaults to global object in non-strict mode; undefined in strict mode.

## **50. Difference between call(), apply(), and bind() in one line?**

* **Answer:** call() – executes immediately with args individually, apply() – executes immediately with args array, bind() – returns new function with bound `this` and preset args.

---

This set of 50 professional questions and answers covers **most asked interview questions for top companies** regarding `call()`, `apply()`, and `bind()`, with practical examples, tricky scenarios, and best practices.
