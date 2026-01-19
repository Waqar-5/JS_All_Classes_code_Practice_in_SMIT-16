# 🌐 Static Methods & Properties in JavaScript OOP

This README provides a **complete guide on Static Methods & Properties in JavaScript OOP**, including **key concepts, code examples, and interview-focused explanations**.

It helps you:

* ✅ Understand what static methods and properties are
* ✅ Learn how they differ from instance methods/properties
* ✅ Crack interviews and exams with practical examples

---

## 📌 What are Static Methods & Properties?

* **Static Methods**: Functions defined on the class/constructor itself, **not on instances**.
* **Static Properties**: Data stored on the class/constructor itself, **shared across instances**.

### Key Points

* Belong to **class/constructor**, not object instances
* Can be called without creating an instance
* Useful for utility/helper functions
* Often used for constants or counters

---

## 📌 Syntax Example: Static Methods

```js
class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // 25

const obj = new MathUtil();
// obj.square(5); // ❌ Error: not available on instance
```

### 🔑 Notes

* Access via class name, not instances
* Helps avoid memory duplication

---

## 📌 Syntax Example: Static Properties

```js
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}

new Counter();
new Counter();
console.log(Counter.getCount()); // 2
```

### 🔑 Notes

* Static property `count` is shared across all instances
* Instance cannot access static property directly (`this.count` ❌)

---

## ⚡ Key Points of Static Methods & Properties

1. **Belong to the class** not instance
2. **Access via ClassName.methodName()**
3. **Cannot access instance properties directly** (`this` refers to instance)
4. Useful for **utility functions, constants, counters**
5. **ES6 classes** support static methods/properties using `static` keyword
6. Can be **overridden in subclass**, accessed via `super`
7. Reduce memory usage compared to instance methods
8. Common in **Math, Date, Logger, Validator** patterns

---

## 📌 Example: Static Method in Subclass

```js
class Vehicle {
  static info() {
    console.log('Vehicles are for transportation');
  }
}

class Car extends Vehicle {
  static info() {
    super.info();
    console.log('Cars have 4 wheels');
  }
}

Car.info();
// Vehicles are for transportation
// Cars have 4 wheels
```

### 🔑 Notes

* `super.info()` calls parent class static method
* Static inheritance allows subclass to reuse or extend functionality

---

## ⚡ Interview Questions to Expect

1. What is a static method in JS?
2. How is a static property different from an instance property?
3. Can static methods access instance properties?
4. How do you call a static method?
5. Can static methods be inherited?
6. Can static properties be updated?
7. Difference between static and instance methods in ES6 class
8. Use cases of static methods/properties
9. Can you override static methods in subclass?
10. Memory efficiency of static methods

---

## ✅ Summary

* **Static Methods**: Functions on class itself, not instances
* **Static Properties**: Data on class itself, shared across instances
* Useful for **utility functions, constants, counters, and helper methods**
* Accessible via **ClassName.methodName()**
* Inheritance works with **`super`** in subclasses
* **Essential for interviews, exams, and clean OOP design**

---

📌 *This README is fully editable, downloadable, and GitHub-ready.*
