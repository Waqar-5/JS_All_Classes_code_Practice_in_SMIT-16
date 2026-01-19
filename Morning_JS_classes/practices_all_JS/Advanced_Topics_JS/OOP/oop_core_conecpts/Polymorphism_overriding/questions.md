# 🌀 Polymorphism in JavaScript OOP — 50 Interview Questions & Answers

This README contains **50 professional, non-MCQ interview questions with detailed answers** focused **only on Polymorphism (Method Overriding) in JavaScript**, designed for **interviews, exams, and coding tests**.

---

## 1. What is polymorphism in JavaScript?

**Answer:** Polymorphism is an OOP principle allowing objects to take multiple forms. In JS, this means **the same method name can have different behaviors in different classes**.

---

## 2. What is method overriding?

**Answer:** Method overriding occurs when a subclass **provides its own implementation** of a method defined in its parent class.

---

## 3. How is method overriding implemented in JS?

**Answer:** By defining a method with the same name in a subclass that extends a parent class.

---

## 4. What is the role of `super` in overriding?

**Answer:** `super` calls the **parent class’s method**, allowing the subclass to extend functionality instead of replacing it completely.

---

## 5. Can private methods be overridden?

**Answer:** No. Private methods (`#method`) are only accessible within the class where they are defined.

---

## 6. What happens if you call a method that is overridden but don’t use `super`?

**Answer:** The subclass method replaces the parent method entirely; the parent’s implementation is not executed.

---

## 7. How does JS runtime determine which method to execute?

**Answer:** JavaScript uses **dynamic dispatch** at runtime, calling the method of the **actual object instance**.

---

## 8. Can you override static methods?

**Answer:** Yes, static methods can be overridden in subclasses, but they are called on the class, not instances.

---

## 9. Can constructors be overridden?

**Answer:** Constructors in JS are not strictly overridden; subclasses define their own constructor and **must call `super()`** if extending a parent class.

---

## 10. Can you override methods of built-in objects?

**Answer:** Technically yes, but it’s **strongly discouraged** because it may break standard behavior.

---

## 11. What is runtime polymorphism?

**Answer:** Runtime polymorphism is when the method that is executed is determined at **runtime based on the object type**, e.g., method overriding in classes.

---

## 12. What is compile-time polymorphism?

**Answer:** Compile-time polymorphism (method overloading) is **not natively supported** in JavaScript.

---

## 13. How do you simulate method overloading in JS?

**Answer:** By using **optional parameters**, default values, or checking argument types inside a single method.

---

## 14. Can polymorphism exist without inheritance?

**Answer:** JS supports polymorphism with **duck typing**, but overriding specifically requires inheritance.

---

## 15. Why is method overriding important?

**Answer:** It enables **flexibility, code reuse, and runtime customization** of behavior across subclasses.

---

## 16. Can abstract classes support polymorphism?

**Answer:** Yes, abstract classes define methods to be overridden in subclasses, enforcing polymorphic behavior.

---

## 17. Can polymorphism improve maintainability?

**Answer:** Yes, it allows changes in parent or child classes without affecting other code.

---

## 18. What is the difference between overriding and overloading?

**Answer:** Overriding is redefining methods in subclasses. Overloading (not supported in JS) is having multiple methods with the same name but different parameters.

---

## 19. What happens if a subclass method calls `super` after its own code?

**Answer:** The parent method is executed **after** the subclass code.

---

## 20. Can polymorphism be applied to properties?

**Answer:** Yes, getters and setters can be overridden in subclasses.

---

## 21. How does JavaScript handle polymorphism with prototype chaining?

**Answer:** When a method is called, JS searches **from the object instance up the prototype chain** to find the method.

---

## 22. Can you override getters and setters?

**Answer:** Yes, a subclass can define a getter/setter with the same name to provide different behavior.

---

## 23. Can polymorphism exist with object literals?

**Answer:** Not in classic OOP sense, but functions can act polymorphically with duck typing.

---

## 24. How can you test which method is executed?

**Answer:** By creating instances of different classes and calling the same method, observing output.

---

## 25. What is the role of `instanceof` in polymorphism?

**Answer:** It identifies the **actual type of the object** at runtime, helping to ensure correct behavior.

---

## 26. Can you override multiple methods at once?

**Answer:** Each method must be overridden individually in the subclass.

---

## 27. Can polymorphism break encapsulation?

**Answer:** If overridden methods expose private fields improperly, it can break encapsulation; otherwise, it maintains it.

---

## 28. Can you override methods of parent’s parent?

**Answer:** Yes, JS allows multi-level inheritance and overriding methods anywhere in the hierarchy.

---

## 29. Can polymorphism be used with interfaces in JS?

**Answer:** JS doesn’t have formal interfaces, but polymorphism can be simulated via consistent method signatures across classes.

---

## 30. What is dynamic dispatch?

**Answer:** The process JS uses at runtime to determine **which overridden method to call based on object instance**.

---

## 31. Can you combine polymorphism with encapsulation?

**Answer:** Yes, methods can override parent behavior while respecting private fields and getters/setters.

---

## 32. Can a subclass call multiple parent methods in one overridden method?

**Answer:** Yes, using multiple `super.method()` calls.

---

## 33. Is it possible to override methods created in constructor?

**Answer:** No, methods defined in constructor are instance-specific, not on prototype, so they can’t be overridden in subclass prototype.

---

## 34. Can polymorphism simplify event handling?

**Answer:** Yes, using a base class method signature for multiple event types.

---

## 35. Can private static methods be overridden?

**Answer:** No, private static methods are class-scoped and not accessible outside their class.

---

## 36. How can polymorphism improve scalability?

**Answer:** By allowing new subclasses with unique behavior without changing existing code.

---

## 37. Can polymorphism be used with async methods?

**Answer:** Yes, async methods can be overridden just like synchronous methods.

---

## 38. What is an interview trap regarding `super`?

**Answer:** Forgetting to call `super()` in subclass constructor results in a **ReferenceError**.

---

## 39. Can you override getters to compute dynamic values?

**Answer:** Yes, subclass getters can compute values differently than parent getters.

---

## 40. Can polymorphism affect prototype chain?

**Answer:** Overridden methods reside on subclass prototype, so calls traverse the chain as expected.

---

## 41. How does polymorphism improve code readability?

**Answer:** The same method name across classes reduces mental overhead for developers.

---

## 42. Can polymorphism exist without class syntax?

**Answer:** Yes, with ES5 function constructors and prototype methods.

---

## 43. What is the difference between overriding and shadowing?

**Answer:** Overriding replaces parent method behavior; shadowing redefines a property with the same name without method functionality.

---

## 44. Can polymorphism lead to runtime errors?

**Answer:** Yes, if method signatures or expected parameters differ unexpectedly.

---

## 45. Can you override methods of multiple inheritance?

**Answer:** JS doesn’t support multiple inheritance directly; mixins can simulate it, but method overriding rules apply per mixin.

---

## 46. Can polymorphism be applied to operators?

**Answer:** JS does not support operator overloading; only methods can be polymorphic.

---

## 47. Can polymorphism be combined with interfaces from TypeScript?

**Answer:** Yes, TS interfaces enforce method signatures, enabling polymorphism across implementing classes.

---

## 48. How does polymorphism help in design patterns?

**Answer:** Enables patterns like Strategy, Template Method, and Factory to rely on method overriding.

---

## 49. Can polymorphism be applied to arrays of objects?

**Answer:** Yes, calling the same method on array elements executes the correct overridden method per instance.

---

## 50. Why is mastering polymorphism essential for developers?

**Answer:** It ensures flexible, maintainable, reusable, and professional code, and is a **frequent topic in interviews and exams**.

---

📌 **This README is fully editable, downloadable, and interview-ready.**
