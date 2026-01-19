# JavaScript OOP - Classes & Constructor MCQs

This README contains **50 professional multiple-choice questions (MCQs)** on **Classes & Constructor in JavaScript OOP** with a complete **answer key** at the end. These questions are **interview-focused, tricky, and exam-relevant**.

---

## Questions

1. What keyword is used to create a class in JavaScript?

   * A) function
   * B) class
   * C) object
   * D) prototype

2. How many constructors can a JavaScript class have?

   * A) Multiple
   * B) Only one
   * C) None
   * D) Two

3. What happens if a class has no constructor?

   * A) Error is thrown
   * B) Default constructor is provided
   * C) Nothing happens
   * D) Undefined

4. How do you create an instance of a class?

   * A) `const obj = new ClassName()`
   * B) `const obj = ClassName()`
   * C) `ClassName.create()`
   * D) `ClassName()`

5. What does `this` refer to inside a class constructor?

   * A) Global object
   * B) The class itself
   * C) The instance being created
   * D) Undefined

6. Can class methods be shared among all instances?

   * A) No, each instance has own copy
   * B) Yes, via prototype
   * C) Only static methods
   * D) Only private methods

7. How do you define a static method?

   * A) `methodName()`
   * B) `static methodName()`
   * C) `this.methodName()`
   * D) `new methodName()`

8. Can static methods access instance properties?

   * A) Yes
   * B) No
   * C) Only with bind()
   * D) Only with call()

9. What is the purpose of `super()` in a constructor?

   * A) Call parent method
   * B) Call parent constructor
   * C) Call global function
   * D) Bind `this`

10. Can private fields be accessed outside the class?

    * A) Yes
    * B) No
    * C) Only with prototype
    * D) Only with static methods

11. Which keyword is used to extend a class?

    * A) super
    * B) extends
    * C) inherit
    * D) prototype

12. What is the type of a class in JavaScript?

    * A) object
    * B) function
    * C) string
    * D) class

13. Can a class expression be anonymous?

    * A) Yes
    * B) No
    * C) Only in ES5
    * D) Only in TypeScript

14. Can constructors return a value?

    * A) Yes, any value
    * B) Only objects
    * C) Only strings
    * D) No

15. What is method overriding?

    * A) Creating a new method in child class with same name
    * B) Using static methods
    * C) Modifying prototype
    * D) Deleting parent method

16. Can class fields be initialized outside the constructor?

    * A) Yes, using class field syntax
    * B) No, only constructor
    * C) Only static fields
    * D) Only private fields

17. Can you access parent methods from a child class?

    * A) Yes, using `super.methodName()`
    * B) No
    * C) Only via bind()
    * D) Only in static methods

18. What happens if `super()` is omitted in a child constructor?

    * A) Works normally
    * B) ReferenceError when using `this`
    * C) Undefined
    * D) Throws SyntaxError

19. Can a class extend multiple classes?

    * A) Yes
    * B) No
    * C) Only using prototypes
    * D) Only using bind()

20. Can class methods be arrow functions?

    * A) Yes, but `this` is lexical
    * B) No
    * C) Only static methods
    * D) Only private methods

21. How do you check if an object is instance of a class?

    * A) typeof
    * B) instanceof
    * C) Object.is
    * D) isPrototypeOf

22. Can constructor throw errors?

    * A) Yes, to prevent invalid initialization
    * B) No
    * C) Only static methods can
    * D) Only arrow functions can

23. Can you dynamically add methods to a class after declaration?

    * A) Yes, via prototype
    * B) No
    * C) Only in ES5
    * D) Only static methods

24. What is the difference between class declaration and class expression?

    * A) Declaration is hoisted, expression is not
    * B) Expression is anonymous, declaration has name
    * C) Both are same
    * D) Declaration cannot be assigned

25. Can you create a class inside another class?

    * A) Yes
    * B) No
    * C) Only in ES5
    * D) Only static classes

26. What is the difference between prototype methods and class methods?

    * A) Class methods are shared
    * B) Prototype methods are shared via prototype
    * C) Instance methods are not shared
    * D) Both B and C

27. How do private fields interact with inheritance?

    * A) Not inherited
    * B) Fully inherited
    * C) Only static fields inherited
    * D) Only methods inherited

28. Can a constructor return a primitive?

    * A) Yes, replaces the instance
    * B) No, ignored
    * C) Throws error
    * D) Only strings

29. How do you create singleton using classes?

    * A) Use static instance property and private constructor
    * B) Use multiple constructors
    * C) Use prototype
    * D) Cannot be done

30. How do class instances differ from object literals?

    * A) Instances share prototype methods
    * B) Object literals have no prototype by default
    * C) Both A and B
    * D) None

31. Can static methods call other static methods?

    * A) Yes, via `this.methodName()`
    * B) No
    * C) Only instance methods can
    * D) Only via prototype

32. How do class fields improve readability?

    * A) Declares properties at class level
    * B) Avoids constructor clutter
    * C) Provides default values
    * D) All of the above

33. Can constructors be async?

    * A) No
    * B) Yes
    * C) Only with static methods
    * D) Only in ES5

34. Can you extend a class without constructor in child?

    * A) Yes, default constructor calls `super()`
    * B) No
    * C) Only with static methods
    * D) Only with arrow functions

35. How does `new` work with classes?

    * A) Creates a new object
    * B) Calls constructor
    * C) Links prototype
    * D) All of the above

36. Can private methods be accessed via bracket notation?

    * A) No
    * B) Yes
    * C) Only via bind()
    * D) Only static methods

37. Can you override static methods in child class?

    * A) Yes
    * B) No
    * C) Only instance methods
    * D) Only private methods

38. How does `super()` behave in multi-level inheritance?

    * A) Calls immediate parent constructor
    * B) Calls top-level constructor
    * C) Throws error
    * D) Refers to global object

39. Can constructor assign functions as properties?

    * A) Yes
    * B) No
    * C) Only static functions
    * D) Only prototype functions

40. How do you prevent modification of class?

    * A) Object.freeze()
    * B) private constructor
    * C) Seal instances
    * D) All of the above

41. How to call parent method without overriding?

    * A) super.methodName()
    * B) this.methodName()
    * C) prototype.methodName()
    * D) Object.call()

42. How do class expressions differ from declarations?

    * A) Expressions can be anonymous
    * B) Declarations have name
    * C) Expressions are not hoisted
    * D) All of the above

43. Can you add getters/setters in classes?

    * A) Yes, inside class body
    * B) No
    * C) Only static
    * D) Only private

44. Can class constructor access static properties?

    * A) Yes, via class name or `this.constructor`
    * B) No
    * C) Only via instance
    * D) Only via super()

45. Can constructor return a different object?

    * A) Yes, replaces instance
    * B) No
    * C) Throws error
    * D) Only primitive objects

46. How does `this` behave in a class method?

    * A) Refers to instance
    * B) Refers to class
    * C) Refers to global object
    * D) Undefined

47. Can nested classes access outer class properties?

    * A) No, unless passed via constructor
    * B) Yes, automatically
    * C) Only static fields
    * D) Only private fields

48. Can constructor be used without `new`?

    * A) No, throws error
    * B) Yes
    * C) Only in ES5
    * D) Only with bind()

49. What is the use of `instanceof` with classes?

    * A) Checks if object is instance of class
    * B) Checks prototype only
    * C) Only for arrays
    * D) Only for functions

50. Why is mastering Classes & Constructor important?

    * A) For structured, maintainable OOP code
    * B) Enables inheritance and encapsulation
    * C) Required for interviews and exams
    * D) All of the above

---

## Answer Key

1.B 2.B 3.B 4.A 5.C 6.B 7.B 8.B 9.B 10.B
11.B 12.B 13.A 14.B 15.A 16.A 17.A 18.B 19.B 20.A
21.B 22.A 23.A 24.D 25.A 26.D 27.A 28.B 29.A 30.C
31.A 32.D 33.A 34.A 35.D 36.A 37.A 38.A 39.A 40.D
41.A 42.D 43.A 44.A 45.A 46.A 47.A 48.A 49.A 50.D
