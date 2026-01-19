# JavaScript `bind()` – 50 MCQs with Answer Key

> This document contains 50 multiple-choice questions focused exclusively on JavaScript's `bind()` method, suitable for exams and interviews.

---

### **1. What does the bind() method do in JavaScript?**

A) Executes function immediately
B) Creates a new function with specified this and optional arguments
C) Returns the number of arguments
D) Deletes function context

### **2. Syntax of bind() method is:**

A) `func.bind(thisArg, arg1, arg2)`
B) `func.bind(thisArg, [arg1, arg2])`
C) `func.call(thisArg, arg1, arg2)`
D) `func.apply(thisArg, [arg1, arg2])`

### **3. Difference between bind() and call() is:**

A) bind() executes immediately; call() returns new function
B) call() executes immediately; bind() returns new function
C) Both execute immediately
D) Both return new function

### **4. Can bind() change the this context of a function?**

A) Yes
B) No

### **5. Which of the following is correct usage of bind()?**

A) `const newFunc = func.bind(obj,arg1,arg2)`
B) `func.bind(obj,[arg1,arg2])`
C) `func.bind(arg1,arg2)`
D) `func.bind()`

### **6. bind() is commonly used for:**

A) Function borrowing
B) Partial application
C) Event binding
D) All of the above

### **7. Can bind() accept zero arguments?**

A) Yes
B) No

### **8. Example of function borrowing using bind():**

A) `const boundFunc = obj1.method.bind(obj2)`
B) `obj1.method.call(obj2)`
C) `obj1.method.apply(obj2, argsArray)`
D) `obj1.method()`

### **9. Which of these statements is true?**

A) bind() executes immediately
B) bind() returns a new function
C) bind() cannot set this
D) bind() modifies original function

### **10. Example to create partially applied function using bind():**

A) `const add5 = add.bind(null,5)`
B) `const add5 = add.call(null,5)`
C) `const add5 = add.apply(null,[5])`
D) `const add5 = add()`

### **11. What happens if bind() is used on an arrow function?**

A) this is unchanged
B) this is overridden
C) Error
D) Returns null

### **12. Can bind() be used with event handlers in JavaScript?**

A) Yes
B) No

### **13. Can bind() be used in ES6 classes?**

A) Yes
B) No

### **14. Example of binding this in class methods:**

A) `this.method = this.method.bind(this)`
B) `this.method = this.method.call(this)`
C) `this.method = this.method.apply(this)`
D) `this.method = this.method()`

### **15. Can bind() preset multiple arguments?**

A) Yes
B) No

### **16. bind() executes function:**

A) Immediately
B) Returns new function

### **17. Can bind() help maintain context in callbacks?**

A) Yes
B) No

### **18. Can bind() be used for partial function application?**

A) Yes
B) No

### **19. Can bind() be chained to rebind this?**

A) No, only first binding is used
B) Yes, repeatedly

### **20. Example of bind() with event handlers:**

A) `element.addEventListener('click', handler.bind(obj))`
B) `element.addEventListener('click', handler.call(obj))`
C) `element.addEventListener('click', handler.apply(obj))`
D) `element.addEventListener('click', handler())`

### **21. Can bind() improve code reuse?**

A) Yes
B) No

### **22. Can bind() be used with constructors?**

A) Yes, returns a bound function
B) No

### **23. bind() vs apply():**

A) bind() returns a new function; apply() executes immediately
B) apply() returns new function; bind() executes immediately
C) Both execute immediately
D) Both return new function

### **24. Can bind() be polyfilled for older browsers?**

A) Yes
B) No

### **25. Can bind() handle array-like objects?**

A) Yes
B) No

### **26. Which of these is valid for bind()?**

A) `func.bind(obj,arg1,arg2)`
B) `func.bind(obj,[arg1,arg2])`
C) `func.bind([arg1,arg2])`
D) `func.bind(arg1,arg2)`

### **27. Does bind() modify the original function?**

A) No
B) Yes

### **28. Can bind() be used for dynamic argument lists?**

A) No
B) Yes

### **29. Can bind() be used with arrow functions?**

A) No, lexical this cannot be changed
B) Yes

### **30. Can bind() be combined with call()?**

A) Rarely needed
B) Always required

### **31. Example of partially applied function:**

A) `const greetHi = greet.bind(null,'Hi')`
B) `const greetHi = greet.call(null,'Hi')`
C) `const greetHi = greet.apply(null,['Hi'])`
D) `const greetHi = greet('Hi')`

### **32. Can bind() return a callable function?**

A) Yes
B) No

### **33. Can bind() be used to set this for setTimeout?**

A) Yes
B) No

### **34. Can bind() preset arguments for future calls?**

A) Yes
B) No

### **35. Can bind() be used to borrow methods across objects?**

A) Yes
B) No

### **36. Example of using bind() for array mapping:**

A) `arr.map(func.bind(obj))`
B) `arr.map(func.call(obj))`
C) `arr.map(func.apply(obj))`
D) `arr.map(func())`

### **37. Can bind() be used with strict mode?**

A) Yes
B) No

### **38. Can bind() be used to control this in asynchronous functions?**

A) Yes
B) No

### **39. Example of using bind() with setTimeout:**

A) `setTimeout(func.bind(obj),1000)`
B) `setTimeout(func.call(obj),1000)`
C) `setTimeout(func.apply(obj),1000)`
D) `setTimeout(func(),1000)`

### **40. Can bind() affect method overriding?**

A) No
B) Yes

### **41. Can bind() be used with Math functions?**

A) Yes
B) No

### **42. Can bind() be used to manipulate DOM element methods?**

A) Yes
B) No

### **43. Can bind() pass arguments dynamically?**

A) Yes, remaining arguments can be passed when calling bound function
B) No

### **44. Best practice for using bind():**

A) Use for explicit this binding and partial application
B) Use only for array operations

### **45. Can bind() be chained for arguments?**

A) Only first this binding is used
B) All bindings are used

### **46. bind() vs normal function call:**

A) Allows explicit this binding and partial arguments
B) No difference

### **47. Example converting arguments object using bind():**

A) Not applicable; use call/apply
B) `Array.prototype.slice.bind(arguments)`
C) `arguments.slice()`
D) `Array.bind(arguments)`

### **48. Can bind() be used to invoke function multiple times?**

A) Yes, repeatedly with same or different arguments
B) No

### **49. Can bind() work with NodeList objects?**

A) Yes
B) No

### **50. Best practices for bind():**

A) Use for explicit this binding, event handlers, async functions, and partial application
B) Use only for static function calls

---

## **Answer Key:**

1-B, 2-A, 3-B, 4-A, 5-A, 6-D, 7-A, 8-A, 9-B, 10-A,
11-A, 12-A, 13-A, 14-A, 15-A, 16-B, 17-B, 18-A, 19-A, 20-A,
21-A, 22-A, 23-A, 24-A, 25-A, 26-A, 27-A, 28-B, 29-A, 30-A,
31-A, 32-A, 33-A, 34-A, 35-A, 36-A, 37-A, 38-A, 39-A, 40-A,
41-A, 42-A, 43-A, 44-A, 45-A, 46-A, 47-A, 48-A, 49-A, 50-A
