# JavaScript OOP - Methods & `this` MCQs

This README contains **50 professional multiple-choice questions (MCQs)** on **Methods & `this` in JavaScript OOP**. These questions are **interview-focused, exam-relevant, and tricky**.

---

## Questions

1. Which of the following defines a method in an object?

   * A) `function obj() {}`
   * B) `const obj = { greet() { console.log('Hi'); } }`
   * C) `obj.greet()`
   * D) None

2. What does `this` refer to inside a regular object method?

   * A) Global object
   * B) The object itself
   * C) Undefined
   * D) Class prototype

3. How does an arrow function behave as an object method?

   * A) Own `this` is the object
   * B) `this` is lexical, inherits from parent scope
   * C) `this` is undefined
   * D) Throws error

4. How do you call a method of one object with another object as `this`?

   * A) `method.apply(obj)`
   * B) `method.call(obj)`
   * C) `method.bind(obj)()`
   * D) All of the above

5. Which method permanently binds `this` to an object?

   * A) `call()`
   * B) `apply()`
   * C) `bind()`
   * D) `new`

6. What happens if a method is extracted and called standalone?

   * A) `this` refers to the object
   * B) `this` is undefined in strict mode
   * C) Throws error
   * D) Works as expected

7. Which keyword is used to access other methods within the same object?

   * A) `self`
   * B) `this`
   * C) `super`
   * D) `prototype`

8. How do you define a static method in a class?

   * A) `static methodName() {}`
   * B) `methodName() {}`
   * C) `obj.methodName = function() {}`
   * D) `function staticMethod() {}`

9. What is `this` inside a class constructor?

   * A) The class itself
   * B) The instance being created
   * C) Undefined
   * D) Global object

10. How does `this` behave in a nested regular function inside a method?

    * A) Refers to outer object
    * B) Undefined in strict mode
    * C) Global object in non-strict mode
    * D) B and C

11. How can you preserve `this` in a callback function?

    * A) Use `bind()`
    * B) Use arrow function
    * C) Assign `const self = this`
    * D) All of the above

12. What is the difference between `call()` and `apply()`?

    * A) `call()` uses arguments as array, `apply()` separate
    * B) `call()` separate args, `apply()` array
    * C) Both same
    * D) Only `call()` works with methods

13. How does `bind()` differ from `call()`?

    * A) `bind()` calls immediately
    * B) `bind()` returns a new function
    * C) `bind()` does not affect `this`
    * D) `bind()` only for classes

14. Can arrow functions be used as constructors?

    * A) Yes
    * B) No
    * C) Only in ES6
    * D) Only in classes

15. What does `this` refer to in global scope in strict mode?

    * A) Global object
    * B) Undefined
    * C) Window
    * D) Document

16. How do you create a method dynamically in an object?

    * A) `obj['methodName'] = function() {}`
    * B) `obj.methodName()`
    * C) `function methodName() {}`
    * D) `Object.createMethod()`

17. What is method chaining?

    * A) Calling multiple objects
    * B) Returning `this` from methods to chain calls
    * C) Linking functions
    * D) Using call and apply

18. What happens if you destructure a method from an object?

    * A) `this` remains intact
    * B) `this` is lost, must bind
    * C) Throws error
    * D) Works in strict mode only

19. How do getter methods use `this`?

    * A) Refers to object calling the getter
    * B) Refers to global object
    * C) Undefined
    * D) Refers to prototype

20. How do setter methods use `this`?

    * A) Refers to object calling the setter
    * B) Refers to global object
    * C) Undefined
    * D) Refers to prototype

21. Can `this` be reassigned in a regular function?

    * A) No
    * B) Yes, by `call()` or `apply()`
    * C) Only in classes
    * D) Only in arrow functions

22. What is the behavior of `this` in `setTimeout()` regular function?

    * A) Object
    * B) Lexical `this`
    * C) Global object or undefined in strict mode
    * D) Error

23. What is the behavior of `this` in `setTimeout()` arrow function?

    * A) Object
    * B) Lexical `this`
    * C) Global object
    * D) Undefined

24. How does `this` work in event listeners regular function?

    * A) Refers to element triggering the event
    * B) Global object
    * C) Lexical scope
    * D) Object prototype

25. How does `this` work in event listeners arrow function?

    * A) Refers to element
    * B) Lexical `this` from enclosing scope
    * C) Global object
    * D) Undefined

26. Can class methods be arrow functions?

    * A) Yes, but `this` is lexical
    * B) No
    * C) Only for static methods
    * D) Only in ES5

27. Why use `bind()` in React components?

    * A) Preserve `this` for class methods
    * B) Optimize performance
    * C) Only for functional components
    * D) Avoid closures

28. Can a method be reassigned to another object?

    * A) Yes
    * B) No
    * C) Only prototype methods
    * D) Only static methods

29. What is a prototype method in class?

    * A) Shared among instances
    * B) Copied to each instance
    * C) Only accessible by static call
    * D) None

30. What happens if `this` is used inside arrow function nested in a method?

    * A) Refers to object
    * B) Lexical `this` from enclosing method
    * C) Undefined
    * D) Global object

31. How to access other object methods within a method?

    * A) `this.otherMethod()`
    * B) `obj.otherMethod()`
    * C) `super.otherMethod()`
    * D) All of the above

32. How does strict mode affect `this`?

    * A) Prevents default global binding
    * B) Throws error for undefined
    * C) No effect
    * D) Only for arrow functions

33. How do static methods access instance properties?

    * A) Directly via `this`
    * B) Cannot access instance properties
    * C) Via `super`
    * D) Via bind()

34. Can methods return `this` for chaining?

    * A) Yes
    * B) No
    * C) Only arrow functions
    * D) Only in classes

35. How do nested methods inside an object use `this`?

    * A) Regular nested function: loses `this`
    * B) Arrow nested function: inherits outer `this`
    * C) Both A and B depending on function type
    * D) Always refers to object

36. Can `this` refer to a completely different object?

    * A) Yes, via call/apply/bind
    * B) No
    * C) Only in classes
    * D) Only in arrow functions

37. What is the effect of destructuring methods from an object?

    * A) Breaks `this` binding
    * B) Preserves `this`
    * C) Throws error
    * D) Only for static methods

38. How does method chaining improve code?

    * A) Cleaner syntax
    * B) Allows sequential operations
    * C) Reduces temporary variables
    * D) All of the above

39. Can arrow function methods access object properties using `this`?

    * A) No, uses lexical `this`
    * B) Yes
    * C) Only static properties
    * D) Only in classes

40. What is a common mistake when using `this` in callbacks?

    * A) Losing object context
    * B) Using arrow functions incorrectly
    * C) Not binding methods
    * D) All of the above

41. How do you bind a method permanently?

    * A) `const boundMethod = method.bind(obj)`
    * B) `method.call(obj)`
    * C) `method.apply(obj)`
    * D) `new method()`

42. What is the difference between instance and static methods?

    * A) Instance methods use `this` to access properties
    * B) Static methods belong to the class
    * C) Static methods cannot access instance data
    * D) All of the above

43. Can a function act both as standalone and method?

    * A) Yes, `this` depends on invocation
    * B) No
    * C) Only in ES5
    * D) Only in classes

44. How to call a class method without creating instance?

    * A) Using static method
    * B) Using new
    * C) Using prototype
    * D) Cannot be done

45. How does lexical scoping affect `this`?

    * A) Arrow functions inherit `this` from parent scope
    * B) Regular functions ignore outer `this`
    * C) Only affects global functions
    * D) None

46. How do getters use `this`?

    * A) Refer to object invoking getter
    * B) Refer to global object
    * C) Undefined
    * D) Refers to prototype

47. How do setters use `this`?

    * A) Refers to object invoking setter
    * B) Global object
    * C) Undefined
    * D) Prototype

48. How do methods access properties safely?

    * A) Using `this.property`
    * B) Using closures
    * C) Using bind
    * D) All of the above

49. Can `this` be used in object literal outside method?

    * A) Refers to global object
    * B) Refers to object literal
    * C) Undefined
    * D) Error

50. Why is understanding `this` crucial in OOP?

    * A) Ensures correct property access
    * B) Prevents bugs in callbacks/events
    * C) Enables method chaining and reuse
    * D) All of the above

---

## Answer Key

1.B 2.B 3.B 4.D 5.C 6.B 7.B 8.A 9.B 10.D
11.D 12.B 13.B 14.B 15.B 16.A 17.B 18.B 19.A 20.A
21.B 22.C 23.B 24.A 25.B 26.A 27.A 28.A 29.A 30.B
31.C 32.A 33.B 34.A 35.C 36.A 37.A 38.D 39.A 40.D
41.A 42.D 43.A 44.A 45.A 46.A 47.A 48.D 49.A 50.D
