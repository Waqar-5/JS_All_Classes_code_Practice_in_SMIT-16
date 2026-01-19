# JavaScript `apply()` – 50 MCQs with Answer Key

> This document contains 50 multiple-choice questions focused exclusively on JavaScript's `apply()` method, suitable for exams and interviews.

---

### **1. What does the apply() method do in JavaScript?**

A) Creates a new function
B) Executes a function with a given this and arguments array
C) Binds a function permanently
D) Returns the number of arguments

### **2. Syntax of apply() method is:**

A) `func.apply(thisArg, arg1, arg2)`
B) `func.apply(thisArg, [arg1, arg2])`
C) `func.call([thisArg, arg1])`
D) `func.bind(thisArg)`

### **3. Difference between apply() and call() is:**

A) apply() executes immediately; call() returns a function
B) call() passes arguments as array; apply() individually
C) apply() passes arguments as array; call() individually
D) No difference

### **4. Can apply() change the this context of a function?**

A) Yes
B) No

### **5. Which of the following is correct usage of apply()?**

A) `Math.max.apply(null, [1,2,3])`
B) `Math.max.apply([1,2,3], null)`
C) `Math.max.apply([1,2,3])`
D) `Math.max.apply(null)`

### **6. apply() is commonly used for:**

A) Function borrowing
B) Partial application
C) Event binding
D) None of the above

### **7. Can apply() accept zero arguments?**

A) Yes
B) No

### **8. Example of function borrowing using apply():**

A) `obj1.method.apply(obj2, argsArray)`
B) `obj1.method.call(obj2, argsArray)`
C) `obj1.method.bind(obj2, argsArray)`
D) `obj1.method()`

### **9. Which of these statements is true?**

A) apply() can only be used with arrays of length 2
B) apply() can be used with any array of arguments
C) apply() cannot take null as thisArg
D) apply() does not work in strict mode

### **10. Example to find max number using apply():**

A) `Math.max.apply([1,2,3], null)`
B) `Math.max.apply(null, [1,2,3])`
C) `Math.max.apply([1,2,3])`
D) `Math.max([1,2,3])`

### **11. What happens if apply() is used with null as thisArg in strict mode?**

A) this becomes global object
B) this becomes undefined
C) Error
D) this remains null

### **12. Can apply() be used to convert arguments object into an array?**

A) Yes
B) No

### **13. Example to convert arguments into array:**

A) `Array.prototype.slice.apply(arguments)`
B) `Array.prototype.slice.call(arguments)`
C) `Array.prototype.slice(arguments)`
D) `arguments.slice()`

### **14. Can apply() be used with anonymous functions?**

A) Yes
B) No

### **15. Can apply() be used to merge arrays?**

A) Yes, using `Array.prototype.push.apply(arr1, arr2)`
B) No

### **16. Can apply() be used in ES6 classes?**

A) Yes
B) No

### **17. apply() executes function:**

A) Immediately
B) Returns new function

### **18. Can apply() be used with dynamic argument lists?**

A) Yes
B) No

### **19. Can apply() be used with Math.min()?**

A) Yes
B) No

### **20. Example of using apply() for Math.min():**

A) `Math.min.apply(null, [5,3,9,1])`
B) `Math.min.apply([5,3,9,1], null)`
C) `Math.min([5,3,9,1])`
D) `Math.min()`

### **21. What is a common use of apply() in functional programming?**

A) Function borrowing
B) Dynamic arguments application
C) Partial application
D) Event binding

### **22. Can apply() be used with event handlers in JavaScript?**

A) Yes
B) No

### **23. apply() vs bind():**

A) apply() executes immediately; bind() returns a new function
B) bind() executes immediately; apply() returns new function
C) Both execute immediately
D) Both return new function

### **24. Can apply() handle array-like objects?**

A) Yes
B) No

### **25. Which of these is valid for apply()?**

A) `func.apply(obj, [arg1, arg2])`
B) `func.apply(obj, arg1, arg2)`
C) `func.apply(arg1, arg2)`
D) `func.apply([arg1,arg2])`

### **26. Does apply() modify the original function?**

A) Yes
B) No

### **27. Can apply() be used with constructors?**

A) Not recommended; call() is better
B) Yes, directly

### **28. Can apply() be used with null arguments array?**

A) Yes, function executes with no arguments
B) No, throws error

### **29. Can apply() be polyfilled for older browsers?**

A) Yes
B) No

### **30. Example of function borrowing with apply():**

A) `greet.apply(person, ['Hello'])`
B) `greet.call(person, ['Hello'])`
C) `greet.bind(person, ['Hello'])`
D) `greet('Hello')`

### **31. Can apply() execute functions on different objects?**

A) Yes
B) No

### **32. Can apply() be used with arrow functions?**

A) Yes, but `this` cannot be changed
B) No

### **33. Can apply() be used for partial function application?**

A) No, use bind()
B) Yes

### **34. Can apply() be combined with call()?**

A) Rarely needed
B) Always required

### **35. Example of summing numbers using apply():**

A) `sum.apply(null, [1,2,3])`
B) `sum.call(null, [1,2,3])`
C) `sum.bind(null, [1,2,3])`
D) `sum([1,2,3])`

### **36. Can apply() accept undefined as thisArg?**

A) Yes, treated as undefined or global object
B) No

### **37. Can apply() handle nested arrays?**

A) No, only top-level array is used
B) Yes

### **38. Can apply() be used in strict mode?**

A) Yes
B) No

### **39. Can apply() return a callable function?**

A) No, it returns function result
B) Yes

### **40. Can apply() throw errors if used incorrectly?**

A) Yes
B) No

### **41. Can apply() work with Math functions?**

A) Yes
B) No

### **42. Can apply() be used to manipulate DOM element methods?**

A) Yes
B) No

### **43. Can apply() pass large arrays as arguments?**

A) Yes, with caution
B) No

### **44. Best practice for using apply() with arrays:**

A) Always use spread operator in modern JS
B) Only use apply()

### **45. Can apply() improve code reuse?**

A) Yes
B) No

### **46. apply() vs normal function call:**

A) Allows dynamic `this` and arguments array
B) No difference

### **47. Example of apply() converting arguments object:**

A) `Array.prototype.slice.apply(arguments)`
B) `Array.prototype.slice(arguments)`
C) `arguments.slice()`
D) `Array.apply(arguments)`

### **48. Can apply() be used to invoke function multiple times?**

A) Yes, repeatedly with different args
B) No

### **49. Can apply() work with NodeList objects?**

A) Yes, to convert to array
B) No

### **50. Best practices for apply():**

A) Use for dynamic arguments, function borrowing, and array operations
B) Use only for binding `this`

---

## **Answer Key:**

1-B, 2-B, 3-C, 4-A, 5-A, 6-A, 7-A, 8-A, 9-B, 10-B,
11-B, 12-A, 13-A, 14-A, 15-A, 16-A, 17-A, 18-A, 19-A, 20-A,
21-B, 22-A, 23-A, 24-A, 25-A, 26-B, 27-A, 28-A, 29-A, 30-A,
31-A, 32-A, 33-A, 34-A, 35-A, 36-A, 37-A, 38-A, 39-A, 40-A,
41-A, 42-A, 43-A, 44-A, 45-A, 46-A, 47-A, 48-A, 49-A, 50-A
