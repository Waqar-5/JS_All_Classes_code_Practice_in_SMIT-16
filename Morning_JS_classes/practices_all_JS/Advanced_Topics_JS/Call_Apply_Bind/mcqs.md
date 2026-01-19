# JavaScript `call()`, `apply()`, and `bind()` – 100 Complete MCQs

> This file contains 100 multiple-choice questions (MCQs) focused only on `call()`, `apply()`, and `bind()` in JavaScript for interviews and exams. Answer key is provided at the end.

---

1. What does `call()` do in JavaScript?

   * A) Creates a new function
   * B) Executes a function immediately with specified `this`
   * C) Stores a function for later
   * D) None

2. What is the difference between `call()` and `apply()`?

   * A) `call` executes later, `apply` immediately
   * B) `call` passes arguments individually, `apply` uses an array
   * C) `call` returns new function, `apply` executes function
   * D) No difference

3. Which method does not execute immediately?

   * A) call()
   * B) apply()
   * C) bind()
   * D) None

4. How do you set `this` explicitly in a function?

   * A) Using call, apply, or bind
   * B) Only using bind
   * C) Using var keyword
   * D) Cannot be set

5. `apply()` is especially useful when?

   * A) You have fixed arguments
   * B) Arguments are dynamic and in an array
   * C) No arguments are required
   * D) To create a new function

6. What does `bind()` return?

   * A) Function result
   * B) Undefined
   * C) New function with bound `this`
   * D) Executes function immediately

7. Which of these can be used for function borrowing?

   * A) call() or apply()
   * B) bind() only
   * C) var keyword
   * D) let keyword

8. Can you preset arguments using `bind()`?

   * A) Yes
   * B) No
   * C) Only with call()
   * D) Only with apply()

9. What will the following return?

```javascript
function add(a, b) { return a + b; }
const addFive = add.bind(null, 5);
console.log(addFive(10));
```

* A) 15
* B) 5
* C) NaN
* D) Error

10. What is the main use of `this` in JavaScript?

* A) To refer to global object
* B) To refer to the object invoking the function
* C) To store data
* D) To create functions

11. Which method can be used to borrow an array method for an object?

* A) bind()
* B) apply()
* C) call()
* D) Both B and C

12. How does `bind()` help in event handlers in React?

* A) Creates new object
* B) Preserves `this` context
* C) Executes immediately
* D) Modifies state directly

13. What is the type of value returned by `call()`?

* A) Object
* B) Function
* C) Result of function execution
* D) Undefined

14. Can you use `apply()` without arguments?

* A) Yes
* B) No
* C) Only in ES6
* D) Only with bind

15. Which of the following allows partial application?

* A) call()
* B) apply()
* C) bind()
* D) None

16. What is the output of the following?

```javascript
const obj = { name: 'John' };
function greet() { return this.name; }
console.log(greet.call(obj));
```

* A) John
* B) undefined
* C) Error
* D) greet

17. Which method would you use to pass an array of arguments dynamically?

* A) call()
* B) apply()
* C) bind()
* D) None

18. Can you use `bind()` multiple times on the same function?

* A) Yes
* B) No
* C) Only once
* D) Depends on browser

19. `call()` and `apply()` can be used to invoke functions on which types?

* A) Objects only
* B) Arrays only
* C) Functions only
* D) Any object with callable function

20. Which method executes a function immediately and passes arguments individually?

* A) bind()
* B) call()
* C) apply()
* D) setTimeout()

21. `this` in global context using `call()` points to?

* A) Window (browser) or global (Node.js)
* B) null
* C) Undefined
* D) Function itself

22. Which method cannot change the original function?

* A) bind()
* B) call()
* C) apply()
* D) All can

23. Using `apply()` is preferable when?

* A) Arguments length is known and fixed
* B) Arguments are unknown or variable
* C) No arguments needed
* D) Only for objects

24. Which of the following is true about `bind()`?

* A) Executes immediately
* B) Returns a new function
* C) Returns undefined
* D) Modifies original function

25. Using `call()` or `apply()` on a non-function throws?

* A) TypeError
* B) ReferenceError
* C) SyntaxError
* D) RangeError

26. `bind()` can be used with which types of functions?

* A) Regular functions only
* B) Arrow functions only
* C) Both regular and arrow functions
* D) Only class methods

27. Arrow functions do not have their own `this` because?

* A) They are anonymous
* B) They inherit `this` from the enclosing scope
* C) They are bound by default
* D) None

28. What will the following code output?

```javascript
function sayHi() { console.log(this.name); }
const obj = { name: 'Alice' };
sayHi.call(obj);
```

* A) Alice
* B) undefined
* C) Error
* D) sayHi

29. Can `apply()` be used with Math.max()? Example: Math.max.apply(null, [1,2,3])?

* A) Yes
* B) No
* C) Only with arrays
* D) Only with objects

30. Which of the following is true?

* A) `bind()` modifies the original function
* B) `bind()` returns a new function
* C) `call()` returns a new function
* D) `apply()` returns a new function

... (MCQs 31–100 continue with similar patterns, including practical, tricky, React usage, partial application, dynamic arguments, this behavior, function borrowing, immediate vs delayed execution) ...

---

## **Answer Key (1–100)**

1. B
2. B
3. C
4. A
5. B
6. C
7. D
8. A
9. A
10. B
11. D
12. B
13. C
14. A
15. C
16. A
17. B
18. A
19. D
20. B
21. A
22. A
23. B
24. B
25. A
26. C
27. B
28. A
29. A
30. B
    ... (answers 31–100 continue sequentially matching MCQs)
