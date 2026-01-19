# 🌐 Prototype & Prototype Chain in JavaScript OOP — 50 Interview Questions & Answers

This README contains **50 professional, non-MCQ interview questions with detailed answers** focused on **Prototype & Prototype Chain in JavaScript OOP**, designed for **interviews, exams, and coding tests**.

---

## 1. What is a prototype in JavaScript?

**Answer:** A prototype is an object from which other objects inherit properties and methods.

---

## 2. What is the prototype chain?

**Answer:** Prototype chain is the mechanism JS uses to look up properties and methods through an object's prototype hierarchy.

---

## 3. How do you access an object's prototype?

**Answer:** Using `Object.getPrototypeOf(obj)` or `obj.__proto__` (not recommended).

---

## 4. Can you override prototype methods?

**Answer:** Yes, a child object or instance can define a method with the same name, which overrides the prototype method.

---

## 5. What is `__proto__`?

**Answer:** `__proto__` is the internal property that points to an object's prototype.

---

## 6. How does inheritance work with prototypes?

**Answer:** Child objects inherit methods and properties from the parent's prototype via the prototype chain.

---

## 7. What is `Object.create()` used for?

**Answer:** To create a new object with the specified prototype.

---

## 8. Difference between `prototype` and `__proto__`?

**Answer:** `prototype` is a property of constructor functions; `__proto__` is the actual reference of the prototype object.

---

## 9. Can functions have prototypes?

**Answer:** Yes, every JS function has a `prototype` object used when it is used as a constructor.

---

## 10. Can objects created with object literals have prototypes?

**Answer:** Yes, they inherit from `Object.prototype` by default.

---

## 11. How does method lookup work in prototype chain?

**Answer:** JS engine checks the object first, then its prototype, recursively up to `null`.

---

## 12. Can prototype chain improve memory efficiency?

**Answer:** Yes, methods are stored once in prototype rather than in each object.

---

## 13. Can ES6 classes use prototypes?

**Answer:** Yes, ES6 classes are syntactic sugar over prototype-based inheritance.

---

## 14. What is the difference between class method and prototype method?

**Answer:** Both are in prototype; instance methods are accessible via instances, but static methods are on constructor function.

---

## 15. How to check if a property is own or inherited?

**Answer:** Using `obj.hasOwnProperty('propertyName')`.

---

## 16. Can you add methods to a prototype after object creation?

**Answer:** Yes, all existing and future instances will have access.

---

## 17. What happens if a prototype method is deleted?

**Answer:** Instances will no longer have access to that method unless overridden locally.

---

## 18. Can prototypes have their own prototypes?

**Answer:** Yes, creating a **prototype chain**.

---

## 19. Can prototype chain cause performance issues?

**Answer:** Long chains may slightly affect property lookup performance.

---

## 20. Can you override inherited prototype properties?

**Answer:** Yes, by defining the property on the child object itself.

---

## 21. How to create multi-level inheritance with prototypes?

**Answer:** Using `Object.create()` or setting `Child.prototype = Object.create(Parent.prototype)`.

---

## 22. Can you call parent prototype methods in child object?

**Answer:** Yes, using `Parent.prototype.method.call(this)`.

---

## 23. Can prototypes store data fields?

**Answer:** Yes, but primitive data fields shared in prototype are not recommended due to shared references.

---

## 24. Difference between prototype property and instance property?

**Answer:** Instance property is defined on the object itself; prototype property is shared across instances.

---

## 25. Can prototype be null?

**Answer:** Yes, `Object.create(null)` creates an object with no prototype.

---

## 26. What is the prototype of `Object.prototype`?

**Answer:** `null`.

---

## 27. Can arrays use prototype chain?

**Answer:** Yes, Array inherits from `Array.prototype`, which in turn inherits from `Object.prototype`.

---

## 28. How to list all properties including inherited ones?

**Answer:** Using `for...in` loop (enumerable only).

---

## 29. Can prototypes have getters and setters?

**Answer:** Yes, via `Object.defineProperty()` or ES6 class syntax.

---

## 30. Can prototype methods call other prototype methods?

**Answer:** Yes, using `this.methodName()`.

---

## 31. Can functions created by arrow functions have prototypes?

**Answer:** No, arrow functions do not have a `prototype` property.

---

## 32. Can prototype chain be broken?

**Answer:** Yes, by setting `Object.setPrototypeOf(obj, null)`.

---

## 33. What is shadowing in prototype chain?

**Answer:** When a child object defines a property/method with the same name as parent prototype, it shadows the parent property.

---

## 34. Can prototypes be enumerated?

**Answer:** Prototype properties are not enumerable by default.

---

## 35. Difference between `instanceof` and prototype chain?

**Answer:** `instanceof` checks if the constructor's prototype exists in object's prototype chain.

---

## 36. Can prototype chain have cycles?

**Answer:** No, JS throws an error or creates infinite loop.

---

## 37. Can you extend native prototypes?

**Answer:** Yes, e.g., `Array.prototype.customMethod = function(){}`; not recommended for production.

---

## 38. Can objects inherit from multiple prototypes?

**Answer:** Not directly; JS does not support multiple inheritance, but mixins can simulate it.

---

## 39. How to inspect prototype chain?

**Answer:** Using `Object.getPrototypeOf()` repeatedly.

---

## 40. Can prototypes store functions and objects?

**Answer:** Yes, functions and reference objects can be stored, but shared references may cause side effects.

---

## 41. What is constructor.prototype.constructor?

**Answer:** Points back to the constructor function that created the prototype.

---

## 42. How to reset prototype chain of an object?

**Answer:** Using `Object.setPrototypeOf(obj, newProto)`.

---

## 43. Can prototype methods access instance properties?

**Answer:** Yes, via `this.propertyName`.

---

## 44. Can prototype chain affect `hasOwnProperty`?

**Answer:** No, `hasOwnProperty` ignores inherited properties.

---

## 45. Can prototype chain be used with ES6 classes?

**Answer:** Yes, class methods are stored in `Class.prototype`.

---

## 46. Can prototype inheritance be used with closures?

**Answer:** Yes, closures can define private variables while exposing methods via prototype.

---

## 47. How to extend multiple classes using prototypes?

**Answer:** Use mixins by copying properties to prototype.

---

## 48. Can you freeze a prototype?

**Answer:** Yes, `Object.freeze(Constructor.prototype)` prevents modifications.

---

## 49. Can prototype chain support method chaining?

**Answer:** Yes, by returning `this` from prototype methods.

---

## 50. Why is understanding prototype chain essential?

**Answer:** It's **core to JS inheritance**, **memory optimization**, **method lookup**, and **interview exams**.

---

