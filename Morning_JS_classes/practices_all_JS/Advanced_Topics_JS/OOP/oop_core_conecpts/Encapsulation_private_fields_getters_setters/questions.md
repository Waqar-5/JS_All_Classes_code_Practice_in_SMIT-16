# 🔐 Encapsulation in JavaScript OOP — 50 Interview Questions & Answers

This README contains **50 professional, non-MCQ interview questions with detailed answers** focused **only on Encapsulation in JavaScript**, including **private fields, getters, and setters**.

It is designed to help you:

* ✅ Crack **technical interviews**
* ✅ Prepare for **exams & viva**
* ✅ Master **real-world JavaScript OOP design**

---

## 1. What is Encapsulation in JavaScript?

**Answer:** Encapsulation is the OOP principle of bundling data (properties) and behavior (methods) together while restricting direct access to internal data. In JavaScript, it is achieved using private fields, getters, setters, and closures to protect object state.

---

## 2. Why is Encapsulation important?

**Answer:** Encapsulation improves security, prevents invalid state changes, hides implementation details, and makes code easier to maintain and refactor without breaking external code.

---

## 3. How is Encapsulation implemented in JavaScript?

**Answer:** Using:

* Private fields (`#field`)
* Getters (`get`)
* Setters (`set`)
* Closures (older pattern)

---

## 4. What are private fields in JavaScript?

**Answer:** Private fields are class properties prefixed with `#` that are accessible only inside the class body. They provide true encapsulation and cannot be accessed externally.

---

## 5. Why can’t private fields be accessed outside a class?

**Answer:** Because JavaScript enforces privacy at the language level. Attempting to access a private field outside its class results in a syntax error, not `undefined`.

---

## 6. What problem do private fields solve?

**Answer:** They prevent accidental or malicious modification of internal object data, ensuring the object remains in a valid and predictable state.

---

## 7. Difference between `#field` and `_field`?

**Answer:** `#field` is truly private and enforced by JavaScript. `_field` is only a naming convention and can still be accessed and modified from outside.

---

## 8. What happens if you try to access a private field externally?

**Answer:** JavaScript throws a **SyntaxError**, not a runtime error, because private fields are resolved during parsing.

---

## 9. Can private fields be accessed in subclasses?

**Answer:** No. Private fields are not inherited and are accessible only within the class where they are declared.

---

## 10. What are getters in JavaScript?

**Answer:** Getters are special methods that allow controlled read access to object properties, often used to expose private fields safely.

---

## 11. Why use getters instead of normal methods?

**Answer:** Getters provide a property-like syntax while allowing logic execution, making APIs cleaner and easier to refactor.

---

## 12. Can getters accept parameters?

**Answer:** No. Getters must not accept parameters and behave like properties, not functions.

---

## 13. What are setters in JavaScript?

**Answer:** Setters are methods that allow controlled modification of properties, often performing validation before assigning values.

---

## 14. Why are setters important?

**Answer:** They prevent invalid data assignment, enforce business rules, and maintain object integrity.

---

## 15. Can getters exist without setters?

**Answer:** Yes. This creates read-only properties, which is a common encapsulation pattern.

---

## 16. Can setters exist without getters?

**Answer:** Yes. This allows write-only access, though it is less common.

---

## 17. What happens if you assign a value to a getter-only property?

**Answer:** In strict mode, it throws an error. Otherwise, the assignment fails silently.

---

## 18. How do setters differ from normal methods?

**Answer:** Setters are invoked using assignment syntax (`obj.prop = value`) instead of function calls.

---

## 19. How do getters improve API design?

**Answer:** They allow internal logic changes without breaking external code that accesses properties.

---

## 20. Can getters and setters be used with private fields?

**Answer:** Yes. This is the most common and recommended encapsulation pattern in modern JavaScript.

---

## 21. What is encapsulation via closures?

**Answer:** A pattern where private variables are stored inside a function scope and accessed via privileged methods.

---

## 22. Is closure-based encapsulation still relevant?

**Answer:** Yes, especially in functional programming and legacy codebases, though classes with private fields are preferred now.

---

## 23. Why is encapsulation critical in large applications?

**Answer:** It prevents tight coupling and unintended side effects across modules.

---

## 24. Can private fields be dynamically added?

**Answer:** No. Private fields must be declared upfront in the class body.

---

## 25. Are private fields accessible via `this`?

**Answer:** Yes, but only inside the class. Outside access is prohibited.

---

## 26. How does encapsulation improve maintainability?

**Answer:** Internal changes don’t affect external code, reducing regression risk.

---

## 27. What is data hiding vs encapsulation?

**Answer:** Data hiding restricts access; encapsulation combines data hiding with behavior.

---

## 28. Can encapsulation exist without classes?

**Answer:** Yes, using closures and factory functions.

---

## 29. What is a read-only property?

**Answer:** A property exposed via a getter without a setter.

---

## 30. Can setters return values?

**Answer:** No. Any returned value is ignored.

---

## 31. Why are private fields safer than conventions?

**Answer:** Because privacy is enforced by the language, not developer discipline.

---

## 32. Are private fields part of the prototype?

**Answer:** No. They are stored internally per instance.

---

## 33. Can encapsulation prevent bugs?

**Answer:** Yes, by enforcing valid data flow and preventing invalid state.

---

## 34. What happens if a setter throws an error?

**Answer:** The assignment fails, protecting the object state.

---

## 35. Can getters compute values dynamically?

**Answer:** Yes. They are often used for derived properties.

---

## 36. Can encapsulation improve performance?

**Answer:** Indirectly, by enabling safer optimizations and predictable behavior.

---

## 37. What interview trap exists with getters?

**Answer:** Treating them as functions instead of properties.

---

## 38. Why shouldn’t internal fields be public?

**Answer:** Public fields allow uncontrolled modification, leading to bugs.

---

## 39. Can encapsulation exist in functional JavaScript?

**Answer:** Yes, via closures and module patterns.

---

## 40. What is the best modern encapsulation approach?

**Answer:** ES private fields combined with getters and setters.

---

## 41. Why is encapsulation essential for security?

**Answer:** It prevents unauthorized access and mutation of sensitive data.

---

## 42. Can private fields be serialized?

**Answer:** No. They are not accessible during JSON serialization.

---

## 43. How does encapsulation relate to abstraction?

**Answer:** Encapsulation hides implementation; abstraction hides complexity.

---

## 44. Can encapsulation break inheritance?

**Answer:** No, but private fields are not inherited.

---

## 45. Why is encapsulation a core OOP pillar?

**Answer:** It ensures controlled interaction with objects.

---

## 46. What mistake do beginners make with encapsulation?

**Answer:** Exposing internal state publicly.

---

## 47. How do getters help refactoring?

**Answer:** Internal data structure changes don’t affect external consumers.

---

## 48. Can encapsulation exist without getters/setters?

**Answer:** Yes, but control and validation become limited.

---

## 49. How does encapsulation support clean architecture?

**Answer:** By enforcing boundaries between components.

---

## 50. Why must every JavaScript developer master encapsulation?

**Answer:** Because it leads to secure, scalable, maintainable, and professional-grade applications.

---

📌 **This README is fully editable, downloadable, and interview-ready.**
