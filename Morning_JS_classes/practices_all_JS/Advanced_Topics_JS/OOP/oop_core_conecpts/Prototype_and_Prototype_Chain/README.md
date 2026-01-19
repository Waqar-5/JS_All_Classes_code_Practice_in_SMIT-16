# 🌐 Prototype & Prototype Chain in JavaScript OOP

This README provides a **detailed guide on Prototypes and Prototype Chain in JavaScript**, including **key concepts, code examples, and interview-focused explanations**.

It helps you:

* ✅ Understand how prototypes work
* ✅ Learn prototype inheritance
* ✅ Crack interviews and exams with practical examples

---

## 📌 What is a Prototype?

A **prototype** in JavaScript is an **object from which other objects inherit properties and methods**.

### Key Points

* Every JS object has a prototype
* Used to implement **inheritance** and **shared methods**
* Helps reduce memory usage by sharing methods across instances

### Example: Basic Prototype

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
person1.greet(); // Hello, my name is Alice
```

### 🔑 Notes

* `greet` is shared via the prototype, not copied per instance
* Efficient memory usage

---

## 📌 What is Prototype Chain?

The **prototype chain** is the mechanism JS uses to **lookup properties and methods**.

* If a property/method is not found on an object, JS looks **up the chain** to the prototype.

### Example: Prototype Chain

```js
function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function() {
  console.log(`${this.type} makes a sound`);
};

function Dog(name) {
  Animal.call(this, 'Dog');
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog1 = new Dog('Buddy');
dog1.makeSound(); // Dog makes a sound
```

### 🔑 Notes

* `Dog` inherits from `Animal` via prototype chain
* `Object.create(Animal.prototype)` sets up inheritance
* Methods defined in `Animal.prototype` are accessible to all `Dog` instances

---

## ⚡ Key Points of Prototype & Prototype Chain

1. **Every object has a prototype** (except `Object.create(null)`)
2. **Constructor functions** automatically set the prototype
3. **Shared methods** reduce memory usage
4. **Prototype chain lookup** is recursive until `null` is reached
5. Use `Object.getPrototypeOf(obj)` to inspect prototype
6. `hasOwnProperty` checks if property exists directly on object
7. ES6 classes are syntactic sugar over prototypes
8. Methods in prototype chain can be **overridden** in child objects

---

## 🧠 Prototype Chain vs Inheritance

| Feature         | Prototype Chain                 | Classical Inheritance                    |
| --------------- | ------------------------------- | ---------------------------------------- |
| Object creation | Objects inherit from prototypes | Classes create instances via constructor |
| Method sharing  | Shared via prototype            | Shared via class methods                 |
| Memory usage    | Efficient                       | Similar with class methods               |
| Lookup          | JS engine traverses chain       | Similar                                  |

---

## 📌 Example: Overriding Prototype Methods

```js
function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.start = function() {
  console.log(`${this.name} starts`);
};

function Car(name) {
  Vehicle.call(this, name);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function() {
  console.log(`${this.name} car engine starts`);
};

const car = new Car('BMW');
car.start(); // BMW car engine starts
```

### 🔑 Notes

* Overriding allows child objects to customize behavior
* Still maintains prototype chain for other methods

---

## ⚡ Common Interview Questions

1. What is prototype in JS?
2. How does prototype chain work?
3. How to override prototype methods?
4. Difference between prototype and **proto**
5. How does ES6 class relate to prototypes?
6. How to inspect an object's prototype?
7. Memory benefits of prototype-based inheritance
8. Prototype chain vs classical inheritance

---

## ✅ Summary

* **Prototype**: shared object for properties/methods
* **Prototype Chain**: JS mechanism for property/method lookup
* **Inheritance**: child objects access parent methods via chain
* Efficient and widely used in JS development
* Essential for **interview and exam preparation**

---

📌 *This README is fully editable, downloadable, and GitHub-ready.*
