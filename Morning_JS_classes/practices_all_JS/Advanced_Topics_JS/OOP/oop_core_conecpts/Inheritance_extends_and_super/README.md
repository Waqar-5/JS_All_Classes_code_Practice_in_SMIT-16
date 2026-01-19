# JavaScript OOP – Inheritance (`extends`, `super`)

This README is a **complete, exam‑ready and interview‑focused guide** on **Inheritance in JavaScript OOP**, specifically covering **`extends` and `super`**. It explains **all key concepts**, **rules**, **edge cases**, and **code examples** in a clean and professional format.

---

## 1. What is Inheritance in OOP?

**Inheritance** is a core OOP concept where a **child (subclass)** acquires properties and methods from a **parent (superclass)**.

### Why Inheritance?

* Code reusability
* Logical hierarchy
* Easier maintenance
* DRY principle (Don’t Repeat Yourself)

---

## 2. Inheritance in JavaScript (ES6)

JavaScript uses **prototype‑based inheritance**, but ES6 introduced **class syntax** to make it easier and more readable.

### Keywords Used:

* `extends` → to inherit another class
* `super` → to access parent constructor or methods

---

## 3. `extends` Keyword

### Definition:

`extends` is used to create a **child class** that inherits from a **parent class**.

### Syntax:

```js
class Child extends Parent {
}
```

### Example:

```js
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
}

const d = new Dog();
d.speak(); // Animal makes a sound
```

✅ `Dog` automatically gets access to `Animal` methods.

---

## 4. `super()` Keyword

### What is `super()`?

`super()` is used to **call the parent class constructor**.

### Rule (VERY IMPORTANT ❗):

> In a child class constructor, `super()` **must be called before using `this`**.

### Example:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name); // calls Person constructor
    this.grade = grade;
  }
}

const s = new Student('Ali', 'A');
console.log(s.name, s.grade); // Ali A
```

---

## 5. Why `super()` is Mandatory?

```js
class A {
  constructor() {
    this.x = 10;
  }
}

class B extends A {
  constructor() {
    this.y = 20; // ❌ ERROR
  }
}
```

🚫 **ReferenceError:** Must call `super()` before accessing `this`.

Correct version:

```js
class B extends A {
  constructor() {
    super();
    this.y = 20;
  }
}
```

---

## 6. Calling Parent Methods using `super`

You can also call **parent class methods** using `super.methodName()`.

```js
class Vehicle {
  start() {
    console.log('Vehicle started');
  }
}

class Car extends Vehicle {
  start() {
    super.start();
    console.log('Car started');
  }
}

const c = new Car();
c.start();
```

Output:

```
Vehicle started
Car started
```

---

## 7. Method Overriding

### Definition:

When a child class defines a method with the **same name** as the parent method.

```js
class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  area() {
    return 25;
  }
}
```

✅ Child method overrides parent method.

---

## 8. Multi‑Level Inheritance

```js
class A {
  showA() { console.log('A'); }
}

class B extends A {
  showB() { console.log('B'); }
}

class C extends B {
  showC() { console.log('C'); }
}

const obj = new C();
obj.showA();
obj.showB();
obj.showC();
```

✔ JavaScript supports **multi‑level inheritance**.

---

## 9. Single Inheritance Only

❌ JavaScript does **NOT** support multiple inheritance directly.

```js
class A {}
class B {}

class C extends A, B {} // ❌ ERROR
```

✔ Alternative: Mixins or composition.

---

## 10. Inheritance with Static Methods

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

class AdvancedMath extends MathUtil {}

console.log(AdvancedMath.add(5, 3)); // 8
```

✔ Static methods are also inherited.

---

## 11. `instanceof` with Inheritance

```js
console.log(s instanceof Student); // true
console.log(s instanceof Person);  // true
```

✔ Shows inheritance chain.

---

## 12. Inheritance vs Composition (Interview Tip)

| Inheritance    | Composition    |
| -------------- | -------------- |
| `extends`      | Uses objects   |
| Tight coupling | Loose coupling |
| Less flexible  | More flexible  |

👉 **Prefer composition when possible**.

---

## 13. Common Interview Traps ⚠️

* Forgetting to call `super()`
* Using `this` before `super()`
* Overusing inheritance
* Confusing static inheritance with instance inheritance

---

## 14. Best Practices

✅ Keep inheritance shallow
✅ Override methods carefully
✅ Use `super` explicitly
✅ Avoid deep inheritance trees

---

## 15. Summary (Must‑Remember Points)

* `extends` → creates parent‑child relationship
* `super()` → calls parent constructor
* `super.method()` → calls parent method
* `this` cannot be used before `super()`
* JS supports **single inheritance only**
* Static methods are inherited

---

### ✅ Mastering **Inheritance (`extends`, `super`)** is CRITICAL for:

* JavaScript interviews
* Real‑world OOP design
* Frameworks like React, Angular, Node.js

---

**📌 This file is fully editable, downloadable, and exam‑ready.**
