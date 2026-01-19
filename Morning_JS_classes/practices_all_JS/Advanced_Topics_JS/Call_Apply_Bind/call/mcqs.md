# JavaScript `call()` – 50 MCQs with Answer Key

> This document contains 50 multiple-choice questions focused exclusively on JavaScript's `call()` method, suitable for exams and interviews.

---

### **1. What does the call() method do in JavaScript?**

A) Creates a new function
B) Executes a function with a given this and individual arguments
C) Binds a function permanently
D) Returns the number of arguments

### **2. Syntax of call() method is:**

A) `func.call(thisArg, arg1, arg2)`
B) `func.call(thisArg, [arg1, arg2])`
C) `func.apply(thisArg, arg1, arg2)`
D) `func.bind(thisArg)`

### **3. Difference between call() and apply() is:**

A) call() passes arguments individually; apply() passes arguments as an array
B) apply() passes arguments individually; call() passes as array
C) call() returns a new function; apply() executes immediately
D) No difference

### **4. Can call() change the this context of a function?**

A) Yes
B) No

### **5. Which of the following is correct usage of call()?**

A) `Math.max.call(null,1,2,3)`
B) `Math.max.call([1,2,3],null)`
C) `Math.max.call([1,2,3])`
D) `Math.max.call(null)`

### **6. call() is commonly used for:**

A) Function borrowing
B) Partial application
C) Event binding
D) None of the above

### **7. Can call() accept zero arguments?**

A) Yes
B) No

### **8. Example of function borrowing using call():**

A) `obj1.method.call(obj2,arg1,arg2)`
B) `obj1.method.apply(obj2,argsArray)`
C) `obj1.method.bind(obj2,argsArray)`
D) `obj1.method()`

### **9. Which of these statements is true?**

A) call() can only be used with two arguments
B) call() can be used with any number of individual arguments
C) call() cannot take null as thisArg
D) call() does not work in strict mode

### **10. Example to find max number using call():**

A) `Math.max.call(null,1,2,3)`
B) `Math.max.call([1,2,3],null)`
C) `Math.max.call([1,2,3])`
D) `Math.max([1,2,3])`

### **11. What happens if call() is used with null as thisArg in strict mode?**

A) this becomes global object
B) this becomes undefined
C) Error
D) this remains null

### **12. Can call() be used to convert arguments object into an array?**

A) Yes, using `Array.prototype.slice.call(arguments)`
B) No

### **13. Example to convert arguments into array:**

A) `Array.prototype.slice.call(arguments)`
B) `Array.prototype.slice.apply(arguments)`
C) `Array.prototype.slice(arguments)`
D) `arguments.slice()`

### **14. Can call() be used with anonymous functions?**

A) Yes
B) No

### **15. Can call() be used to merge arrays?**

A) No
B) Yes, using `Array.prototype.push.call(arr1, value)`

### **16. Can call() be used in ES6 classes?**

A) Yes
B) No

### **17. call() executes function:**

A) Immediately
B) Returns new function

### **18. Can call() be used with dynamic argument lists?**

A) Yes
B) No

### **19. Can call() be used with Math.min()?**

A) Yes
B) No

### **20. Example of using call() for Math.min():**

A) `Math.min.call(null,5,3,9,1)`
B) `Math.min.call([5,3,9,1],null)`
C) `Math.min([5,3,9,1])`
D) `Math.min()`

### **21. What is a common use of call() in functional programming?**

A) Function borrowing
B) Dynamic individual argument application
C) Partial application
D) Event binding

### **22. Can call() be used with event handlers in JavaScript?**

A) Yes
B) No

### **23. call() vs bind():**

A) call() executes immediately; bind() returns a new function
B) bind() executes immediately; call() returns new function
C) Both execute immediately
D) Both return new function

### **24. Can call() handle array-like objects?**

A) Yes, e.g., `Array.prototype.slice.call(arguments)`
B) No

### **25. Which of these is valid for call()?**

A) `func.call(obj,arg1,arg2)`
B) `func.call(obj,[arg1,arg2])`
C) `func.call([arg1,arg2])`
D) `func.call(arg1,arg2)`

### **26. Does call() modify the original function?**

A) No
B) Yes

### **27. Can call() be used with constructors?**

A) Not recommended; bind() is better
B) Yes, for initializing another object

### **28. Can call() be used with null arguments?**

A) Yes, executes function with no arguments
B) No, throws error

### **29. Can call() be polyfilled for older browsers?**

A) Yes
B) No

### **30. Example of function borrowing with call():**

A) `greet.call(person,'Hello')`
B) `greet.apply(person,['Hello'])`
C) `greet.bind(person,['Hello'])`
D) `greet('Hello')`

### **31. Can call() execute functions on different objects?**

A) Yes
B) No

### **32. Can call() be used with arrow functions?**

A) Yes, but `this` cannot be changed
B) No

### **33. Can call() be used for partial function application?**

A) No, use bind()
B) Yes

### **34. Can call() be combined with apply()?**

A) Rarely needed
B) Always required

### **35. Example of summing numbers using call():**

A) `sum.call(null,1,2,3)`
B) `sum.apply(null,[1,2,3])`
C) `sum.bind(null,[1,2,3])`
D) `sum([1,2,3])`

### **36. Can call() accept undefined as thisArg?**

A) Yes, treated as undefined or global object
B) No

### **37. Can call() handle nested arrays?**

A) No, only top-level arguments used
B) Yes

### **38. Can call() be used in strict mode?**

A) Yes
B) No

### **39. Can call() return a callable function?**

A) No, returns function result
B) Yes

### **40. Can call() throw errors if used incorrectly?**

A) Yes
B) No

### **41. Can call() work with Math functions?**

A) Yes
B) No

### **42. Can call() be used to manipulate DOM element methods?**

A) Yes
B) No

### **43. Can call() pass large number of arguments?**

A) Yes
B) No

### **44. Best practice for using call():**

A) Use for dynamic individual arguments and function borrowing
B) Only for binding `this`

### **45. Can call() improve code reuse?**

A) Yes
B) No

### **46. call() vs normal function call:**

A) Allows dynamic `this` and individual arguments
B) No difference

### **47. Example converting arguments object using call():**

A) `Array.prototype.slice.call(arguments)`
B) `Array.prototype.slice(arguments)`
C) `arguments.slice()`
D) `Array.call(arguments)`

### **48. Can call() be used to invoke function multiple times?**

A) Yes, repeatedly with different args
B) No

### **49. Can call() work with NodeList objects?**

A) Yes
B) No

### **50. Best practices for call():**

A) Use for explicit this binding and dynamic individual arguments
B) Use only for array operations

---

## **Answer Key:**

1-B, 2-A, 3-A, 4-A, 5-A, 6-A, 7-A, 8-A, 9-B, 10-A,
11-B, 12-A, 13-A, 14-A, 15-B, 16-A, 17-A, 18-A, 19-A, 20-A,
21-B, 22-A, 23-A, 24-A, 25-A, 26-A, 27-B, 28-A, 29-A, 30-A,
31-A, 32-A, 33-A, 34-A, 35-A, 36-A, 37-A, 38-A, 39-A, 40-A,
41-A, 42-A, 43-A, 44-A, 45-A, 46-A, 47-A, 48-A, 49-A, 50-A
