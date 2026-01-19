# Object-Oriented Programming (OOP) in JavaScript

## What is OOP?

Object-Oriented Programming (OOP) is a **programming paradigm** based on **objects** rather than just functions or logic.
In JavaScript, OOP helps to organize code by **encapsulating data and behavior** in objects.

> Everything revolves around objects that have **properties** (data) and **methods** (behavior).

---

## 1. Objects

**Definition:** Collections of key-value pairs.

**Example:**

```javascript
const person = {
  name: "Waqar",
  age: 20,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Hello, my name is Waqar
```

**Key Terms:**

* **Property** → Data stored in an object (`name`, `age`)
* **Method** → Function inside an object (`greet`)
* **this** → Refers to the current object

---

## 2. Classes (ES6)

**Definition:** Blueprints to create objects with shared properties and methods.

**Example:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const waqar = new Person("Waqar", 20);
waqar.greet(); // Hello, I am Waqar
```

**Key Terms:**

* **Constructor** → Initializes objects
* **Instance** → Object created from a class (`waqar`)
* **new keyword** → Creates a new instance

---

## 3. Inheritance

**Definition:** Mechanism to create a class based on another class, sharing properties and methods.

**Example:**

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}`);
  }
}

const ali = new Student("Ali", 15, 9);
ali.greet(); // Hello, I am Ali
ali.study(); // Ali is studying in grade 9
```

**Key Terms:**

* **extends** → Keyword for inheritance
* **super()** → Calls parent constructor or method

---

## 4. Encapsulation

**Definition:** Keeping data safe inside objects and restricting direct access.

**Example:**

```javascript
class BankAccount {
  #balance = 0; // private
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500
```

**Key Terms:**

* **Private fields** → `#fieldName`
* **Getter** → Access private data
* **Setter** → Update private data

---

## 5. Polymorphism

**Definition:** Ability of objects to take many forms. Same method name, different behavior.

**Example:**

```javascript
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
const d = new Dog();
a.speak(); // Animal makes a sound
d.speak(); // Dog barks
```

**Key Terms:**

* **Overriding** → Subclass provides its own version of a method

---

## 6. Abstraction

**Definition:** Hiding unnecessary details and exposing only essentials.

**Example:**

```javascript
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}
class Car extends Vehicle {
  start() {
    console.log("Car engine started");
  }
}
```

* You don’t care *how the engine starts*, just call `.start()`.

---

## 7. Prototype-Based Inheritance

**Example:**

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, ${this.name}`);
}

const waqar = new Person("Waqar");
waqar.greet(); // Hello, Waqar
```

* **Prototype** → Shared object from which others inherit
* **Prototype chain** → Hierarchy to find properties/methods

---

## 8. Static Methods & Properties

**Example:**

```javascript
class Helper {
  static info() {
    console.log("This is a static method");
  }
}
Helper.info(); // This is a static method
```

* **Static methods** → Belong to class, not instance

---

## 9. Key OOP Concepts to Master

1. Objects & Properties
2. Methods & `this`
3. Classes & Constructor
4. Inheritance (`extends`, `super`)
5. Encapsulation (private fields, getters, setters)
6. Polymorphism (overriding)
7. Abstraction
8. Prototype & Prototype Chain
9. Static Methods & Properties
10. Mixins (reusable behaviors)

---

## Summary Table

| Concept       | Description                        | Example                             |
| ------------- | ---------------------------------- | ----------------------------------- |
| Object        | Collection of data & methods       | `{name: 'A', greet() {}}`           |
| Class         | Blueprint to create objects        | `class Person {}`                   |
| Constructor   | Init object properties             | `constructor(name){this.name=name}` |
| Instance      | Object from class                  | `new Person('A')`                   |
| Inheritance   | Child class gets parent properties | `class Student extends Person`      |
| Encapsulation | Hide data with private fields      | `#balance`                          |
| Polymorphism  | Same method, different behavior    | `speak()` overridden                |
| Abstraction   | Hide unnecessary details           | `start()` method                    |
| Prototype     | JS object inheritance              | `Person.prototype.greet`            |
| Static        | Belongs to class, not instance     | `Helper.info()`                     |

---

This README can serve as your **cheat sheet** for interviews, exams, and practical projects.
