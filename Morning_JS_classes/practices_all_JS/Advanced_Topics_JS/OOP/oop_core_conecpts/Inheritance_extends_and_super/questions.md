# JavaScript OOP – Inheritance (`extends`, `super`) Interview Questions & Answers

This README contains **50 detailed, professional, and interview-focused questions with answers** related **only to Inheritance in JavaScript**, specifically **`extends` and `super`**. These questions are designed to help you **crack interviews, exams, and real-world design discussions**.

---

## 1. What is inheritance in JavaScript OOP?

**Answer:** Inheritance allows a child class to reuse properties and methods of a parent class. In JavaScript, this is achieved using prototype chaining and simplified using `class` and `extends` syntax.

---

## 2. What does the `extends` keyword do?

**Answer:** `extends` creates a parent-child relationship between classes, allowing the child class to inherit methods and properties from the parent class.

---

## 3. Is JavaScript inheritance class-based or prototype-based?

**Answer:** JavaScript is prototype-based. ES6 classes are syntactic sugar over prototypes.

---

## 4. Why was `extends` introduced in ES6?

**Answer:** To make inheritance more readable, structured, and closer to classical OOP languages while still using prototypes internally.

---

## 5. What is `super()` in JavaScript?

**Answer:** `super()` calls the parent class constructor and initializes the inherited properties.

---

## 6. Why must `super()` be called before using `this`?

**Answer:** Because the parent class must initialize `this` first. Accessing `this` before `super()` throws a ReferenceError.

---

## 7. What happens if `super()` is not called in a child constructor?

**Answer:** Using `this` will throw a ReferenceError, breaking object creation.

---

## 8. Can `super()` be used outside a constructor?

**Answer:** Yes, `super.methodName()` can be used inside overridden methods to call parent methods.

---

## 9. How do you call a parent method from a child class?

**Answer:** By using `super.methodName()` inside the child method.

---

## 10. What is method overriding?

**Answer:** When a child class defines a method with the same name as a parent class method, replacing its behavior.

---

## 11. Does JavaScript support multiple inheritance?

**Answer:** No, JavaScript supports single inheritance only. Mixins or composition are alternatives.

---

## 12. What is multi-level inheritance?

**Answer:** When a class inherits from another class that itself inherits from another class.

---

## 13. Are static methods inherited?

**Answer:** Yes, static methods are inherited by child classes.

---

## 14. Can `super()` be used in static methods?

**Answer:** Yes, `super` can refer to the parent class in static methods.

---

## 15. What does `instanceof` check in inheritance?

**Answer:** It checks whether an object exists in the prototype chain of a constructor.

---

## 16. Can private fields be inherited?

**Answer:** No, private fields (`#`) are not accessible or inherited by child classes.

---

## 17. What happens if a child class has no constructor?

**Answer:** JavaScript automatically creates a default constructor that calls `super()`.

---

## 18. Can a child class skip calling `super()` if it has no constructor?

**Answer:** Yes, because the default constructor automatically calls `super()`.

---

## 19. Can inheritance occur without classes?

**Answer:** Yes, using constructor functions and prototypes (pre-ES6).

---

## 20. What is the prototype chain in inheritance?

**Answer:** It is the mechanism through which JavaScript objects inherit properties from parent objects.

---

## 21. How does `super()` behave in multi-level inheritance?

**Answer:** It always refers to the immediate parent class.

---

## 22. Can you override a parent constructor?

**Answer:** Yes, by defining a constructor in the child class and calling `super()`.

---

## 23. Can arrow functions be overridden using `super()`?

**Answer:** No, arrow functions do not have their own `this` or `super` binding.

---

## 24. What is the difference between `super()` and `super.method()`?

**Answer:** `super()` calls the parent constructor, while `super.method()` calls a parent method.

---

## 25. Can a child class add new properties?

**Answer:** Yes, child classes can define their own properties in addition to inherited ones.

---

## 26. Is inheritance shallow or deep in JavaScript?

**Answer:** JavaScript supports deep inheritance through the prototype chain.

---

## 27. What is tight coupling in inheritance?

**Answer:** When child classes heavily depend on parent class implementation, making changes risky.

---

## 28. Why is composition often preferred over inheritance?

**Answer:** Composition provides flexibility, loose coupling, and better scalability.

---

## 29. Can you inherit from a built-in class?

**Answer:** Yes, e.g., `class MyArray extends Array {}`.

---

## 30. What happens if a parent method is removed?

**Answer:** Child classes relying on it will break unless overridden.

---

## 31. Does inheritance copy methods?

**Answer:** No, methods are accessed via prototype chain, not copied.

---

## 32. Can `super()` be conditionally called?

**Answer:** No, it must always be called before using `this`.

---

## 33. What is shadowing in inheritance?

**Answer:** When a child property hides a parent property with the same name.

---

## 34. How does memory efficiency improve with inheritance?

**Answer:** Shared prototype methods reduce memory usage.

---

## 35. Can inherited methods be deleted in child class?

**Answer:** Yes, but it does not remove them from the parent prototype.

---

## 36. Is inheritance mandatory in OOP?

**Answer:** No, it is optional and should be used only when there is a clear "is-a" relationship.

---

## 37. Can you extend an object literal?

**Answer:** No, `extends` works only with classes or constructor functions.

---

## 38. How does `super` behave with getters/setters?

**Answer:** `super` can access parent getters and setters normally.

---

## 39. Can inheritance cause bugs?

**Answer:** Yes, deep inheritance can make debugging difficult.

---

## 40. What is constructor chaining?

**Answer:** Calling parent constructors using `super()` across inheritance levels.

---

## 41. Can you override static methods?

**Answer:** Yes, static methods can be overridden in child classes.

---

## 42. How do you prevent inheritance?

**Answer:** By using composition or freezing the class prototype.

---

## 43. What is the role of `Object.getPrototypeOf()`?

**Answer:** It retrieves the parent prototype of an object.

---

## 44. Is `extends` mandatory for using `super()`?

**Answer:** Yes, `super()` only works inside classes that extend another class.

---

## 45. Can you use `super()` in arrow functions?

**Answer:** No, arrow functions do not have their own `super`.

---

## 46. How does inheritance help in frameworks like React?

**Answer:** It enables reusable base components and lifecycle behaviors (historically).

---

## 47. What is overriding vs overloading?

**Answer:** JavaScript supports overriding, not method overloading.

---

## 48. Can you inherit constructors only?

**Answer:** No, inheritance includes methods and properties together.

---

## 49. How does inheritance affect testing?

**Answer:** Poor inheritance design can make unit testing harder due to dependencies.

---

## 50. Why must every JavaScript developer master `extends` and `super`?

**Answer:** Because they are foundational for OOP design, frameworks, interviews, and writing scalable, maintainable code.

---

### ✅ This file is **fully editable, downloadable, and interview-ready**.
