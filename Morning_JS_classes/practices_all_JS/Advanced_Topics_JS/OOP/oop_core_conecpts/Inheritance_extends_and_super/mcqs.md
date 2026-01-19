# JavaScript OOP – Inheritance (`extends`, `super`) MCQs

This README contains **50 high-quality Multiple Choice Questions (MCQs)** focused **only on Inheritance in JavaScript OOP**, specifically **`extends` and `super`**. These questions are **exam-oriented, interview-focused, and conceptually tricky**.

---

## Multiple Choice Questions

1. What does the `extends` keyword do in JavaScript?

   * A. Copies methods from parent
   * B. Creates inheritance between classes
   * C. Binds `this`
   * D. Calls constructor

2. JavaScript inheritance is fundamentally based on:

   * A. Classes
   * B. Interfaces
   * C. Prototypes
   * D. Objects only

3. What is the main role of `super()`?

   * A. Calls child constructor
   * B. Binds methods
   * C. Calls parent constructor
   * D. Creates object

4. Where must `super()` be called in a child constructor?

   * A. Anywhere
   * B. After `this`
   * C. Before using `this`
   * D. Not required

5. What happens if `this` is used before calling `super()`?

   * A. Works normally
   * B. Returns undefined
   * C. ReferenceError
   * D. SyntaxError

6. Can `super()` be used inside normal methods?

   * A. No
   * B. Yes, to call parent methods
   * C. Only static methods
   * D. Only constructors

7. Which syntax is correct for inheritance?

   * A. class B inherits A {}
   * B. class B extends A {}
   * C. class B implements A {}
   * D. class B prototype A {}

8. How many parent classes can a JavaScript class extend?

   * A. Multiple
   * B. Two
   * C. One
   * D. Unlimited

9. What does `super.method()` do?

   * A. Calls child method
   * B. Calls global function
   * C. Calls parent method
   * D. Calls constructor

10. What is method overriding?

    * A. Overloading methods
    * B. Replacing parent method in child
    * C. Deleting parent method
    * D. Copying methods

11. Are static methods inherited?

    * A. No
    * B. Yes
    * C. Only with super
    * D. Only in ES5

12. Can `super()` be used in static methods?

    * A. No
    * B. Yes
    * C. Only constructors
    * D. Only arrow functions

13. Which error occurs if `super()` is missing?

    * A. TypeError
    * B. SyntaxError
    * C. ReferenceError
    * D. RangeError

14. What is multi-level inheritance?

    * A. One parent, many children
    * B. Class extending another inherited class
    * C. Multiple parents
    * D. Prototype chaining only

15. JavaScript supports multiple inheritance directly.

    * A. True
    * B. False

16. What keyword is used to call parent methods?

    * A. this
    * B. parent
    * C. super
    * D. call

17. Are private fields inherited?

    * A. Yes
    * B. No
    * C. Only static
    * D. Only methods

18. What happens if child has no constructor?

    * A. Error
    * B. Parent constructor auto-called
    * C. No inheritance
    * D. Object undefined

19. Which operator checks inheritance chain?

    * A. typeof
    * B. instanceof
    * C. in
    * D. isPrototype

20. Can a class extend built-in classes?

    * A. No
    * B. Yes
    * C. Only Array
    * D. Only Object

21. What is constructor chaining?

    * A. Calling sibling constructor
    * B. Calling parent constructor
    * C. Copying constructors
    * D. Removing constructors

22. What does `Object.getPrototypeOf()` return?

    * A. Child class
    * B. Parent prototype
    * C. Constructor
    * D. Instance

23. Can arrow functions use `super`?

    * A. Yes
    * B. No
    * C. Only static
    * D. Only async

24. What happens when a child overrides a parent method?

    * A. Parent method deleted
    * B. Child method takes precedence
    * C. Error
    * D. Both run automatically

25. Which relationship best suits inheritance?

    * A. has-a
    * B. uses-a
    * C. is-a
    * D. owns-a

26. Are inherited methods copied into child objects?

    * A. Yes
    * B. No
    * C. Sometimes
    * D. Only static

27. Which feature avoids deep inheritance trees?

    * A. Overloading
    * B. Composition
    * C. Hoisting
    * D. Polymorphism

28. What does `super()` return?

    * A. Parent instance
    * B. Child instance
    * C. Undefined
    * D. Object

29. Can inheritance affect performance?

    * A. No
    * B. Yes, deep chains may impact lookup
    * C. Always faster
    * D. Only static methods

30. What happens if parent method is removed?

    * A. Child unaffected
    * B. Child breaks
    * C. Auto replaced
    * D. Ignored

31. Can static methods be overridden?

    * A. Yes
    * B. No
    * C. Only constructors
    * D. Only ES5

32. How does `super` behave in multi-level inheritance?

    * A. Calls top-level class
    * B. Calls immediate parent
    * C. Global object
    * D. Undefined

33. What is shadowing in inheritance?

    * A. Removing methods
    * B. Hiding parent property
    * C. Overloading
    * D. Copying prototype

34. Can you inherit from object literals?

    * A. Yes
    * B. No
    * C. Only with prototype
    * D. Only ES6

35. Does `extends` work without classes?

    * A. Yes
    * B. No
    * C. Only functions
    * D. Only objects

36. What type of relationship does inheritance model?

    * A. has-a
    * B. owns-a
    * C. is-a
    * D. uses-a

37. Can child class add new methods?

    * A. No
    * B. Yes
    * C. Only static
    * D. Only private

38. What happens if parent constructor throws error?

    * A. Child still created
    * B. Child creation fails
    * C. Ignored
    * D. Auto handled

39. Can `super()` be conditional?

    * A. Yes
    * B. No
    * C. Only async
    * D. Only static

40. What is the prototype of child class instance?

    * A. Parent object
    * B. Child prototype
    * C. Global object
    * D. Constructor

41. Does inheritance improve memory usage?

    * A. No
    * B. Yes, shared methods
    * C. Always worse
    * D. Only static

42. Can inheritance cause tight coupling?

    * A. No
    * B. Yes
    * C. Never
    * D. Only ES5

43. Which is safer: inheritance or composition?

    * A. Inheritance
    * B. Composition
    * C. Same
    * D. None

44. What is overriding vs overloading?

    * A. Both supported
    * B. Only overriding supported
    * C. Only overloading supported
    * D. None

45. Can `super()` be used without `extends`?

    * A. Yes
    * B. No
    * C. Only functions
    * D. Only prototypes

46. What does `instanceof` return?

    * A. Object
    * B. Boolean
    * C. Function
    * D. Prototype

47. Which error appears for invalid inheritance?

    * A. TypeError
    * B. ReferenceError
    * C. SyntaxError
    * D. RangeError

48. Can child override constructor?

    * A. No
    * B. Yes
    * C. Only static
    * D. Only parent

49. Which design principle discourages deep inheritance?

    * A. DRY
    * B. KISS
    * C. Favor composition over inheritance
    * D. SOLID

50. Why must developers master `extends` and `super`?

    * A. Required for interviews
    * B. Core OOP concept
    * C. Used in frameworks
    * D. All of the above

---

## Answer Key

1.B  2.C  3.C  4.C  5.C  6.B  7.B  8.C  9.C  10.B
11.B 12.B 13.C 14.B 15.B 16.C 17.B 18.B 19.B 20.B
21.B 22.B 23.B 24.B 25.C 26.B 27.B 28.C 29.B 30.B
31.A 32.B 33.B 34.B 35.B 36.C 37.B 38.B 39.B 40.B
41.B 42.B 43.B 44.B 45.B 46.B 47.A 48.B 49.C 50.D

---

✅ **This README is fully editable, downloadable, and perfect for interviews & exams.**
