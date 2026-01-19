# 🧠 50 Interview Questions: First-Class Functions

> **Professional, tricky, and most asked in interviews**
> Focused entirely on **First-Class Functions**.
> Each question includes an **accurate and concise answer** for quick revision.

---

## 📘 Questions & Answers

### 1. What does it mean for a function to be first-class?

**Answer:** It means functions are treated like any other value; they can be stored in variables, passed as arguments, returned from other functions, or stored in data structures.

### 2. Can a first-class function be anonymous?

**Answer:** Yes, first-class functions can be anonymous (no name) and still be assigned or passed around.

### 3. Give an example of storing a function in a variable in JavaScript.

**Answer:** `const greet = () => console.log('Hello');`

### 4. Can functions be stored in arrays in JavaScript?

**Answer:** Yes, e.g., `const arr = [() => 1, () => 2];`

### 5. How do first-class functions enable callbacks?

**Answer:** Because functions can be passed as arguments, you can pass a function to another function to be called later.

### 6. Are arrow functions first-class?

**Answer:** Yes, all functions including arrow functions in JavaScript are first-class.

### 7. How does Python support first-class functions?

**Answer:** Python allows functions to be assigned to variables, passed as arguments, returned from functions, and stored in data structures.

### 8. What is the difference between calling and referencing a function?

**Answer:** Calling executes the function (`f()`), referencing passes the function as a value without executing it (`f`).

### 9. How do first-class functions relate to higher-order functions?

**Answer:** Higher-order functions depend on first-class functions to take functions as arguments or return functions.

### 10. Can you return a function from another function?

**Answer:** Yes, e.g., `function outer(){ return function inner(){ return 5; } }`

### 11. Why are first-class functions important in React?

**Answer:** They enable passing callbacks, creating hooks, and handling events, which rely on functions as values.

### 12. Is recursion dependent on first-class functions?

**Answer:** No, recursion can exist without first-class functions, but first-class functions make functional recursion patterns easier.

### 13. Give a real-world example of first-class functions in JavaScript.

**Answer:** `setTimeout(() => console.log('Hi'), 1000)` — passing a function as a callback.

### 14. How do first-class functions improve code reusability?

**Answer:** They allow abstracting behavior into functions that can be passed and reused in different contexts.

### 15. Can a first-class function be stored as an object property?

**Answer:** Yes, e.g., `const obj = { greet: () => console.log('Hi') };`

### 16. Are generator functions first-class in JavaScript?

**Answer:** Yes, generator functions can be passed, returned, and stored just like normal functions.

### 17. Can first-class functions be used for event handlers?

**Answer:** Yes, you can assign a function as an event handler, e.g., `button.onclick = () => alert('Clicked');`

### 18. Difference between first-class function and method?

**Answer:** A method is a function attached to an object; first-class function emphasizes treating functions as values independent of objects.

### 19. Can a function be stored in a Map or Set?

**Answer:** Yes, e.g., `const map = new Map(); map.set('key', () => 5);`

### 20. How does first-class function help in functional programming?

**Answer:** It allows composing functions, passing functions as arguments, and returning functions for reusable abstractions.

### 21. Explain first-class function vs primitive value.

**Answer:** Both can be assigned, passed, and returned; the only difference is that a function can be invoked as code.

### 22. Can you mutate a first-class function?

**Answer:** No, functions themselves are immutable; you can reassign a variable holding a function but not change the function's code.

### 23. Can functions be compared in first-class usage?

**Answer:** You can compare function references for equality, e.g., `f === g` checks if two references point to the same function.

### 24. Why is it tricky to pass functions with parentheses?

**Answer:** Using parentheses calls the function immediately instead of passing the reference.

### 25. Can you store multiple functions in an object array?

**Answer:** Yes, e.g., `const funcs = [{ f: () => 1 }, { g: () => 2 }];`

### 26. How do decorators in Python relate to first-class functions?

**Answer:** Decorators take a function as input and return a function, relying on functions as first-class citizens.

### 27. Can first-class functions be async?

**Answer:** Yes, async functions are still first-class and can be passed, stored, or returned.

### 28. Why is hoisting relevant to first-class functions?

**Answer:** Function declarations are hoisted and can be used before definition; function expressions depend on first-class behavior for assignment.

### 29. Can functions be keys in objects?

**Answer:** In JavaScript, functions cannot be keys directly, but can be used in Maps.

### 30. How does first-class function relate to closures?

**Answer:** Closures rely on returning functions (first-class behavior) that capture surrounding variables.

### 31. Can a first-class function have default parameters?

**Answer:** Yes, e.g., `function f(a=5){ return a; }`

### 32. Is `const f = function(){}` different from `function f(){}`?

**Answer:** Both are first-class; the main difference is hoisting — function declarations are hoisted, function expressions are not.

### 33. Can you store functions in localStorage?

**Answer:** Not directly; functions must be serialized, so first-class behavior applies only in runtime.

### 34. How do first-class functions improve testing?

**Answer:** Functions can be passed as mocks, stubs, or spies, improving test isolation.

### 35. Can first-class functions be recursive?

**Answer:** Yes, a function can call itself directly or indirectly and still be first-class.

### 36. Can a first-class function be returned from an async function?

**Answer:** Yes, you can return a function from any function, including async functions.

### 37. How do first-class functions enable partial application?

**Answer:** By returning functions, you can fix arguments and return a new function for later use.

### 38. Can a first-class function be used as a Promise executor?

**Answer:** Yes, e.g., `new Promise((resolve, reject) => {...})` passes a function.

### 39. How does storing functions in arrays aid iteration?

**Answer:** You can iterate over function arrays and call each function dynamically.

### 40. Can first-class functions be used for event delegation?

**Answer:** Yes, functions can be stored and assigned to different events dynamically.

### 41. Difference between passing function vs calling function as argument?

**Answer:** Passing sends the reference to be called later; calling executes immediately and sends the result.

### 42. Can first-class functions be used to build pipelines?

**Answer:** Yes, composing multiple functions relies on passing and returning functions.

### 43. Can first-class functions be used for memoization?

**Answer:** Yes, functions can return closures that cache results.

### 44. Can a first-class function throw another function?

**Answer:** Yes, you can throw function references, though rarely practical.

### 45. How do first-class functions interact with scopes?

**Answer:** Functions capture variables from the scope they were created in (closures), leveraging first-class behavior.

### 46. Are methods in objects first-class?

**Answer:** Yes, object methods are functions and can be passed as values, though binding `this` might be required.

### 47. Can first-class functions be passed to setInterval?

**Answer:** Yes, e.g., `setInterval(() => console.log('Hi'), 1000);`

### 48. Can you partially apply a first-class function?

**Answer:** Yes, by returning a function that fixes some arguments.

### 49. How does first-class function support dynamic behavior?

**Answer:** Functions can be selected, replaced, or composed at runtime based on logic.

### 50. Why must every developer understand first-class functions?

**Answer:** They are fundamental to modern JS/Python, enabling callbacks, HOFs, React patterns, functional programming, and clean code architecture.

---

## ✅ Quick Answers (Professional)

1.Functions are values  2.Yes  3.`const greet = () => console.log('Hello')`  4.Yes  5.Enable callbacks  6.Yes  7.Yes  8.Reference vs call  9.Enables HOFs  10.Yes
11.Hooks & callbacks  12.No  13.`setTimeout` example  14.Abstract & reuse  15.Yes  16.Yes  17.Yes  18.Method vs function  19.Yes  20.Function composition
21.Both assign & return  22.No mutation  23.Compare references  24.Using parentheses calls  25.Yes  26.Decorators rely  27.Yes async  28.Hoisting matters  29.Map needed  30.Relates to closures
31.Yes default  32.Hoisting difference  33.Not in storage  34.Mocks & tests  35.Recursive  36.Async return  37.Partial application  38.Promise executor  39.Iterate array  40.Event delegation  41.Pass vs call  42.Pipelines  43.Memoization  44.Throw function  45.Scope capture  46.Methods are first-class  47.setInterval  48.Partial application  49.Dynamic behavior  50.Fundamental knowledge
