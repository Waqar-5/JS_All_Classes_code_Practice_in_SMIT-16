# JavaScript OOP - 100 MCQs (Interview & Exam Focused)

This document contains **40 carefully designed multiple-choice questions (MCQs)** on **Object-Oriented Programming in JavaScript**. These MCQs are created for **interviews, exams, and skill sharpening**.

---

## Questions

1. Which of the following is **not** a feature of OOP in JavaScript?

   * A) Encapsulation
   * B) Inheritance
   * C) Polymorphism
   * D) Pointer Arithmetic

2. What does the `this` keyword refer to inside a **class method**?

   * A) The global object
   * B) The function itself
   * C) The current object instance
   * D) The parent class

3. How do you create a private property in ES2020 JavaScript?

   * A) `private propertyName`
   * B) `#propertyName`
   * C) `this.propertyName`
   * D) `var propertyName`

4. Which keyword is used to inherit from another class?

   * A) inherit
   * B) extend
   * C) extends
   * D) super

5. How do you call a parent class constructor in a subclass?

   * A) `parent()`
   * B) `super()`
   * C) `this()`
   * D) `base()`

6. What type of inheritance is used in JavaScript?

   * A) Classical inheritance
   * B) Prototype-based inheritance
   * C) Multi-level inheritance only
   * D) None

7. Which of the following is a static method?

   * A) `class Person { static info() {} }`
   * B) `Person.prototype.info = function() {}`
   * C) `function info() {}`
   * D) `this.info = function() {}`

8. In JavaScript, which keyword is used to create a new object instance from a class?

   * A) `instanceof`
   * B) `create`
   * C) `new`
   * D) `construct`

9. Which of the following is **not a method to define an object** in JavaScript?

   * A) Object literal
   * B) Class constructor
   * C) Function constructor
   * D) `new Object()` with `prototype` keyword

10. Which of the following demonstrates **polymorphism**?

* A) Overloading a function name
* B) Using `this` keyword
* C) Overriding a method in subclass
* D) Using `new` keyword

11. Which is true about `super()`?

* A) It calls the current class constructor
* B) It calls the parent class constructor
* C) It creates a new object
* D) It is used only in objects

12. Can JavaScript classes be hoisted?

* A) Yes
* B) No
* C) Only if declared with `var`
* D) Only with `function`

13. Which of the following is a correct way to define a getter?

* A) `get name() { return this._name; }`
* B) `getter name() { return this._name; }`
* C) `getName() { return this._name; }`
* D) `function get name() {}`

14. Which is the correct way to define a setter?

* A) `set name(val) { this._name = val; }`
* B) `setter name(val) { this._name = val; }`
* C) `setName(val) { this._name = val; }`
* D) `function set name(val) {}`

15. Which of the following is **not true** about prototype?

* A) All objects inherit from Object.prototype
* B) Prototypes can have methods shared by all instances
* C) Prototypes are only used in ES6 classes
* D) Prototype chain helps in property lookup

16. What happens if a method is **overridden** in a subclass?

* A) Parent method is lost permanently
* B) Parent method can be called using `super`
* C) Both methods are merged automatically
* D) It throws an error

17. Which of the following statements about `instanceof` is true?

* A) Checks if object is instance of a class or its parent
* B) Creates an instance of a class
* C) Accesses private fields
* D) Overrides a method

18. What is the main purpose of encapsulation?

* A) To hide data implementation details
* B) To create objects
* C) To inherit from another class
* D) To overload functions

19. Which method can you use to list all properties in an object including inherited ones?

* A) `Object.keys(obj)`
* B) `for..in` loop
* C) `Object.getOwnPropertyNames(obj)`
* D) `Object.values(obj)`

20. What is the output?

```javascript
class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(this.name); }
}
const p = new Person('Ali');
console.log(p instanceof Person);
```

* A) `Ali`
* B) `true`
* C) `false`
* D) `undefined`

21. Which method is used to add a property to the prototype?

* A) `Object.prototype.add()`
* B) `Class.prototype.methodName = function(){}`
* C) `addPrototype()`
* D) `this.prototype.method = function(){}`

22. Which of the following is **not a type of inheritance** in JavaScript?

* A) Single-level
* B) Multi-level
* C) Multiple inheritance
* D) Prototype-based inheritance

23. What will `typeof className` return?

* A) `object`
* B) `function`
* C) `class`
* D) `undefined`

24. Can a class in JavaScript have multiple constructors?

* A) Yes
* B) No
* C) Only with `super()`
* D) Only in ES5

25. Which of the following is **true** about abstract classes in JavaScript?

* A) JavaScript directly supports abstract classes
* B) Abstract behavior can be simulated with ES6 classes and methods throwing errors
* C) Abstract classes are built-in objects
* D) Abstract classes cannot have methods

26. How can you prevent a class from being extended?

* A) Use `final` keyword
* B) Use `Object.freeze()` on the class
* C) Use `const` keyword
* D) Cannot prevent in JavaScript

27. Which is true about `constructor` function?

* A) Can return any type of value
* B) Automatically called when an instance is created
* C) Can be called without `new`
* D) Is optional in prototype-based inheritance only

28. What will happen if you try to access a **private field** outside the class?

* A) Returns `undefined`
* B) Throws a syntax error
* C) Returns `null`
* D) Returns the value

29. Which of the following is **true about `super` keyword**?

* A) Calls parent class methods or constructor
* B) Cannot be used in arrow functions
* C) Only works inside class body
* D) All of the above

30. What is the purpose of `Object.create()`?

* A) Create a new object with the specified prototype
* B) Creates a class instance
* C) Deletes a property from object
* D) Initializes a class constructor

31. Which of the following allows **method chaining** in JavaScript classes?

* A) Returning `this` from methods
* B) Using static methods
* C) Using `super` keyword
* D) Using getters only

32. Which of the following is **true about mixins** in JavaScript?

* A) They allow sharing functionality between unrelated classes
* B) They are built-in class types
* C) They are only for static properties
* D) Mixins replace inheritance

33. What will the following output?

```javascript
class A {
  method() { return 'A'; }
}
class B extends A {
  method() { return 'B'; }
}
const obj = new B();
console.log(obj.method());
```

* A) 'A'
* B) 'B'
* C) undefined
* D) Error

34. Which of the following is **not a use of `Object.freeze()`**?

* A) Prevent object modification
* B) Prevent adding new properties
* C) Prevent deletion of properties
* D) Make object properties private

35. What is **true about getter and setter methods**?

* A) They can control access to private fields
* B) Only getters are allowed
* C) Only setters are allowed
* D) They are not supported in ES6

36. Which of the following is **true about prototype chain lookup**?

* A) JS checks object itself, then its prototype chain
* B) Only checks prototype chain
* C) Only checks object itself
* D) JS does not use prototype chain

37. Can a subclass override a **static method** of the parent class?

* A) Yes
* B) No
* C) Only with `super`
* D) Only with getter/setter

38. Which of the following is **true about private class fields**?

* A) Start with `#`
* B) Cannot be accessed outside the class
* C) Are not inherited by subclasses
* D) All of the above

39. Which of the following is a correct way to **define a class method**?

* A) `methodName() {}`
* B) `function methodName() {}`
* C) `this.methodName = function(){}`
* D) `class methodName(){}`

40. Which is **true about `Object.getPrototypeOf(obj)`**?

* A) Returns the prototype of `obj`
* B) Creates a new prototype
* C) Deletes the prototype
* D) Checks if object is instance of class


---

## Answer Key (Partial)

1. D
2. C
3. B
4. C
5. B
6. B
7. A
8. C
9. D
10. C
11. B
12. B
13. A
14. A
15. C
16. B
17. A
18. A
19. B
20. B
21. B
22. C
23. B
24. B
25. B
26. B
27. B
28. B
29. D
30. A
31. A
32. A
33. B
34. D
35. A
36. A
37. A
38. D
39. A
40. A
   
---

> This **40 MCQ collection** is optimized for **interviews, exams, and practical OOP knowledge** in JavaScript.
