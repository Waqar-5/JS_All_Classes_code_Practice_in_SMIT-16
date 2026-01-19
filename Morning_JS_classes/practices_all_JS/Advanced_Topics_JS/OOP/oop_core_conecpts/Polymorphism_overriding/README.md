# 🌀 Polymorphism in JavaScript OOP — Method Overriding

Polymorphism is a **core pillar of Object-Oriented Programming (OOP)** that allows objects to **take multiple forms**. In JavaScript, the most common type of polymorphism is **method overriding**, where a subclass **redefines a method of its parent class**.

This README will help you:

* ✅ Understand polymorphism clearly
* ✅ Crack exams, viva, and technical interviews
* ✅ Write clean, maintainable, and professional JavaScript code

---

## 📌 What is Polymorphism?

Polymorphism allows **the same interface to work with different types of objects**. It enables code reusability, flexibility, and abstraction.

### Types of Polymorphism in JavaScript

1. **Compile-time / Static Polymorphism** (not directly supported)
2. **Runtime / Dynamic Polymorphism** (via method overriding)

> JavaScript supports **runtime polymorphism** using **prototypes and class inheritance**.

---

## 🔹 Method Overriding

**Method overriding** occurs when a subclass **provides its own implementation** of a method defined in its parent class.

### ✅ Syntax

```js
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const a = new Animal();
a.speak(); // Animal makes a sound

const d = new Dog();
d.speak(); // Dog barks
```

### 🔑 Key Points

* Child method **replaces** parent method
* Ensures **flexibility in behavior**
* Essential for **runtime polymorphism**

---

## ⚡ Using `super` with Method Overriding

You can call the **parent method** using `super.methodName()`.

```js
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
// Output:
// Animal makes a sound
// Dog barks
```

### 🔑 Key Points

* `super` calls **parent class method**
* Enables **extension instead of replacement**
* Common in real-world projects

---

## 🧠 Why Polymorphism is Important

* Promotes **code reusability**
* Enables **flexible and maintainable code**
* Supports **interchangeable object behavior**
* Crucial for **large-scale applications**
* Frequently asked in **interviews**

---

## 📌 Overriding vs Overloading

| Concept            | JavaScript Support | Description                                   |
| ------------------ | ------------------ | --------------------------------------------- |
| Method Overriding  | ✅ Runtime          | Subclass redefines parent method              |
| Method Overloading | ❌ Not native       | Cannot define multiple methods with same name |

> JS uses **optional parameters or default values** instead of overloading.

---

## 🧩 Real-world Examples

### Example 1: Shapes

```js
class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

const sq = new Square(5);
console.log(sq.area()); // 25
```

### Example 2: Employee Management

```js
class Employee {
  getSalary() {
    return 3000;
  }
}

class Manager extends Employee {
  getSalary() {
    return super.getSalary() + 2000;
  }
}

const m = new Manager();
console.log(m.getSalary()); // 5000
```

---

## ⚠️ Common Interview Traps

1. Thinking JavaScript supports compile-time overloading
2. Forgetting to call `super()` in subclass constructor
3. Confusing **prototype overriding** with **instance overriding**
4. Overriding **private methods** (cannot be accessed by subclass)

---

## ✅ Summary

* Polymorphism allows **same interface, different behavior**
* JS supports **runtime polymorphism via overriding**
* `super` allows **calling parent methods**
* Method overriding is **crucial for flexible, maintainable code**
* Mastering polymorphism is **essential for interviews & exams**

---

### 📌 Next Steps

* 50 MCQs on **Polymorphism**
* 50 **Interview Q&A** on Polymorphism
* Next topic: **Abstraction**, **Prototypes**, **OOP Master README**

📌 *This README is fully editable, downloadable, and GitHub-ready.*
