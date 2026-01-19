# 🛡️ Abstraction in JavaScript OOP — 50 Interview Questions & Answers

This README contains **50 professional, non-MCQ interview questions with detailed answers** focused **only on Abstraction in JavaScript OOP**, designed for **interviews, exams, and coding tests**.

---

## 1. What is abstraction in OOP?

**Answer:** Abstraction is the process of **hiding complex implementation details** and **showing only the necessary features** of an object.

---

## 2. How is abstraction achieved in JavaScript?

**Answer:** Through **abstract classes simulated with ES6 classes**, abstract methods throwing errors, and convention-based interfaces.

---

## 3. Can JavaScript create native abstract classes?

**Answer:** No. JS does not have native abstract classes, but abstraction can be simulated.

---

## 4. What is the purpose of an abstract method?

**Answer:** To **force subclasses** to implement a specific method, ensuring **consistent behavior**.

---

## 5. How do you define an abstract method in JS?

**Answer:** By defining a method that throws an **Error if not implemented** in the subclass.

---

## 6. Can you instantiate an abstract class?

**Answer:** No, trying to instantiate it directly should be avoided, otherwise it’s meaningless.

---

## 7. Can abstraction be combined with encapsulation?

**Answer:** Yes. Abstraction **hides implementation**, while encapsulation **controls access** to properties.

---

## 8. Can polymorphism work with abstraction?

**Answer:** Yes, abstract methods can be overridden in subclasses, enabling polymorphic behavior.

---

## 9. What is the difference between abstraction and encapsulation?

**Answer:** Abstraction hides **complexity**; encapsulation hides **data**.

---

## 10. Can private fields be part of abstraction?

**Answer:** Yes, private fields can hide implementation details while exposing abstract methods.

---

## 11. How does abstraction improve maintainability?

**Answer:** Changes in internal implementation do not affect the code that uses the abstract interface.

---

## 12. How does abstraction reduce complexity?

**Answer:** By **showing only essential features**, the programmer interacts with a simpler interface.

---

## 13. What is a real-world example of abstraction?

**Answer:** Payment systems: `Payment` class defines `pay()` method; subclasses like `PaypalPayment` implement the details.

---

## 14. What happens if a subclass does not implement an abstract method?

**Answer:** If called, it throws an **Error**, enforcing the contract.

---

## 15. Can abstract methods return different types?

**Answer:** Yes, JavaScript is loosely typed, but best practice is to maintain consistent return types.

---

## 16. Can constructors be abstract?

**Answer:** Not directly. You can throw an error in the constructor to simulate an abstract constructor.

---

## 17. Why is abstraction important in large applications?

**Answer:** It **reduces coupling**, **increases modularity**, and **makes code scalable**.

---

## 18. Can you override abstract methods?

**Answer:** Yes, overriding abstract methods in subclasses provides the concrete implementation.

---

## 19. What is the difference between interface and abstraction?

**Answer:** An interface defines **method signatures only**, while abstraction can have **partial implementation and method definitions**.

---

## 20. How to simulate interfaces in JavaScript?

**Answer:** By creating classes with methods that throw errors and ensuring subclasses implement them.

---

## 21. Can abstraction improve security?

**Answer:** Yes, it hides sensitive details and exposes only controlled operations.

---

## 22. How is abstraction tested in JS?

**Answer:** By checking if subclasses implement required methods; failing to implement should throw an error.

---

## 23. Can multiple subclasses use the same abstract class?

**Answer:** Yes, abstraction promotes code reuse across multiple subclasses.

---

## 24. Can abstract methods have parameters?

**Answer:** Yes, parameters can define a contract for subclasses.

---

## 25. Can abstraction exist without inheritance?

**Answer:** Limited. Usually, abstraction works best with **class hierarchies**.

---

## 26. Can you combine abstraction with polymorphism?

**Answer:** Yes, abstract methods can be overridden, supporting polymorphic calls.

---

## 27. Can abstract classes have concrete methods?

**Answer:** Yes, abstract classes can have methods with actual implementation.

---

## 28. Can abstract classes have fields?

**Answer:** Yes, fields can store state, but access should be controlled.

---

## 29. What is the interview trap with abstract classes?

**Answer:** Trying to instantiate them directly or forgetting to implement required methods.

---

## 30. Can abstraction improve readability?

**Answer:** Yes, by exposing a clean interface and hiding complexity.

---

## 31. How does abstraction relate to design patterns?

**Answer:** Patterns like Factory, Strategy, and Template Method rely on abstraction.

---

## 32. Can abstract methods throw exceptions?

**Answer:** Yes, to enforce correct implementation in subclasses.

---

## 33. Can a class be both abstract and final?

**Answer:** No, final prevents inheritance, abstraction requires it.

---

## 34. Can abstract methods be async?

**Answer:** Yes, abstract async methods can be implemented asynchronously in subclasses.

---

## 35. Can you simulate multiple abstract classes?

**Answer:** Using mixins and composition to combine behaviors.

---

## 36. Can abstract methods have default parameters?

**Answer:** Yes, subclasses can respect or override defaults.

---

## 37. How to enforce abstraction without errors?

**Answer:** Always define methods that throw errors in base class; subclasses must implement.

---

## 38. Can abstraction exist in functional programming?

**Answer:** Yes, via higher-order functions and closures hiding implementation details.

---

## 39. Can abstract methods return promises?

**Answer:** Yes, async abstraction is allowed.

---

## 40. Can you override abstract methods in subclasses?

**Answer:** Yes, providing concrete implementation.

---

## 41. Can abstract classes be chained?

**Answer:** Yes, multi-level inheritance is allowed with abstract methods.

---

## 42. Can abstraction reduce coupling?

**Answer:** Yes, client code depends on interface, not implementation.

---

## 43. Can abstract class constructors be inherited?

**Answer:** Yes, subclasses call `super()` to invoke base constructor.

---

## 44. Can you create properties in abstract classes?

**Answer:** Yes, fields can be shared or private.

---

## 45. Can abstraction enforce business rules?

**Answer:** Yes, abstract methods define required operations, enforcing rules.

---

## 46. Can you mix abstraction with encapsulation?

**Answer:** Yes, abstract class exposes methods, internal state can be private.

---

## 47. Can abstract methods have return types?

**Answer:** Yes, JS allows dynamic types, but consistency is recommended.

---

## 48. How is abstraction tested in real applications?

**Answer:** By creating subclasses and verifying required methods execute as expected.

---

## 49. Can you create utility methods in abstract classes?

**Answer:** Yes, concrete methods can provide shared utility.

---

## 50. Why is mastering abstraction essential?

**Answer:** Ensures **clean, maintainable, reusable code** and is a **frequent interview topic**.

---

📌 **This README is fully editable, downloadable, and interview-ready.**
