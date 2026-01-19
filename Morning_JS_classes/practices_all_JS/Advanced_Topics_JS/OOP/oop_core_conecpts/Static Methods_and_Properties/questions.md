# 🌐 JavaScript OOP — Static Methods & Properties: 50 Interview Questions & Answers

This README contains **50 professional, non-MCQ interview questions with detailed answers** focused on **Static Methods & Properties in JavaScript OOP**, designed for **interviews, exams, and coding tests**.

---

## 1. What is a static method?

**Answer:** A method defined on the class/constructor itself, not accessible by instances.

---

## 2. What is a static property?

**Answer:** A property defined on the class/constructor, shared across all instances.

---

## 3. How do you call a static method?

**Answer:** Using `ClassName.methodName()`, e.g., `Math.max(5,10)`.

---

## 4. Can static methods access instance properties?

**Answer:** No, because they belong to the class, not an instance.

---

## 5. Can static properties be accessed via instance?

**Answer:** No, only via `ClassName.propertyName`.

---

## 6. How do you define a static method in ES6 class?

**Answer:** Using `static` keyword: `static methodName() {}`.

---

## 7. How do you define a static property in ES6 class?

**Answer:** Using `static` keyword: `static propertyName = value;`

---

## 8. Can static methods be inherited?

**Answer:** Yes, subclasses inherit static methods.

---

## 9. Can static properties be inherited?

**Answer:** Yes, subclasses inherit static properties, but can override them.

---

## 10. How to override a static method in subclass?

**Answer:** Define a method with same name in subclass; call parent using `super.methodName()`.

---

## 11. Example: Static method usage

```js
class MathUtil {
  static square(x) { return x*x; }
}
console.log(MathUtil.square(5)); // 25
```

---

## 12. Example: Static property usage

```js
class Counter {
  static count = 0;
  constructor(){ Counter.count++; }
}
new Counter();
console.log(Counter.count); // 1
```

---

## 13. Can static methods call other static methods?

**Answer:** Yes, using `this.methodName()` or `ClassName.methodName()` inside static method.

---

## 14. Can static methods call instance methods?

**Answer:** No, not directly, they require an instance.

---

## 15. Can instance methods call static methods?

**Answer:** Yes, using `ClassName.methodName()`.

---

## 16. Can constructor function have static methods?

**Answer:** Yes, by attaching them directly to constructor: `Constructor.method = function(){}`.

---

## 17. Are static methods shared among instances?

**Answer:** Yes, but instances cannot access them directly.

---

## 18. Can static properties be updated?

**Answer:** Yes, using `ClassName.propertyName = newValue`.

---

## 19. Example: Calling parent static method

```js
class Vehicle {
  static info(){ console.log('Vehicles'); }
}
class Car extends Vehicle {
  static info(){ super.info(); console.log('Cars'); }
}
Car.info();
```

---

## 20. Can static properties store objects?

**Answer:** Yes, but be careful with shared references.

---

## 21. Can static methods be async?

**Answer:** Yes, use `static async methodName() {}`.

---

## 22. Can static methods throw errors?

**Answer:** Yes, same as normal functions.

---

## 23. Are static methods enumerable?

**Answer:** No, they are not enumerable on class.

---

## 24. Can you delete static methods?

**Answer:** Yes, `delete ClassName.methodName`.

---

## 25. Can subclasses access overridden static properties?

**Answer:** Yes, via `super.propertyName` in ES6.

---

## 26. Can you bind static methods?

**Answer:** Yes, using `ClassName.methodName.bind(ClassName)`.

---

## 27. Can static properties be constants?

**Answer:** Yes, use `static readonly` (in TypeScript) or freeze the class.

---

## 28. Use case: Logger

```js
class Logger {
  static log(message){ console.log(message); }
}
Logger.log('Hello');
```

---

## 29. Use case: Utility functions

* Math operations, validation, formatting, parsing.

---

## 30. Can static methods return instances?

**Answer:** Yes, often used for factory methods.

---

## 31. Example: Factory method

```js
class Person {
  constructor(name){ this.name = name; }
  static create(name){ return new Person(name); }
}
const p = Person.create('Alice');
```

---

## 32. Difference: Static vs Instance

| Static                  | Instance            |
| ----------------------- | ------------------- |
| Belongs to class        | Belongs to object   |
| Called via Class        | Called via object   |
| Shared across instances | Unique per instance |

---

## 33. Can static methods be private?

**Answer:** Yes, using `static #methodName()` in ES2022+.

---

## 34. Can static properties be private?

**Answer:** Yes, using `static #propertyName` in ES2022+.

---

## 35. Can static methods access private static properties?

**Answer:** Yes, using `ClassName.#propertyName`.

---

## 36. Can static methods access private instance fields?

**Answer:** No, need an instance reference.

---

## 37. Can static properties be inherited across multiple levels?

**Answer:** Yes, subclass can inherit and override.

---

## 38. Can you use static methods for counters?

**Answer:** Yes, track number of instances or calls.

---

## 39. Can static methods be used for validation?

**Answer:** Yes, common in input validation or type checking.

---

## 40. Can static properties be computed?

**Answer:** Yes, e.g., `static PI = Math.PI;`

---

## 41. Can static methods access other static methods in subclass?

**Answer:** Yes, using `super.methodName()` or `this.methodName()`.

---

## 42. Can static methods use `this`?

**Answer:** Yes, `this` refers to the class itself, not instance.

---

## 43. Can static methods be used in abstract classes?

**Answer:** Yes, static methods can exist in abstract classes.

---

## 44. Can static methods throw custom errors?

**Answer:** Yes, use `throw new Error('message')`.

---

## 45. Can static methods be generators?

**Answer:** Yes, `static *methodName() {}`.

---

## 46. Can you extend static methods from one class to another without inheritance?

**Answer:** Yes, using mixins.

---

## 47. Can static properties hold functions?

**Answer:** Yes, often used for utility functions.

---

## 48. Can static properties be modified after class declaration?

**Answer:** Yes, `ClassName.propName = value`.

---

## 49. Are static methods part of instance memory?

**Answer:** No, they reside on the class itself.

---

## 50. Why are static methods/properties important?

**Answer:** Memory efficiency, utility functions, counters, shared constants, interview topics.

---



✅ **This README is fully editable, downloadable, and perfect for interviews and exam preparation.**
