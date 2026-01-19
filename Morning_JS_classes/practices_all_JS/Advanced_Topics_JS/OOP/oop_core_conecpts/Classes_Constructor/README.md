# JavaScript OOP - Classes & Constructor

This README provides a comprehensive guide on **Classes & Constructor** in JavaScript OOP. It is designed to help developers understand key concepts, code examples, and best practices to excel in exams and interviews.

---

## 1. What is a Class?

* **Definition:** A class is a **blueprint for creating objects** with shared properties and methods.
* Classes are syntactic sugar over JavaScript's **prototype-based inheritance**.
* Introduced in **ES6**.

### Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const p1 = new Person('Ali', 25);
p1.greet(); // Hello, my name is Ali
```

---

## 2. Constructor

* **Definition:** A special method inside a class called **constructor()**.
* Automatically called when creating a new instance of the class using `new`.
* Used to **initialize object properties**.

### Key Points:

* Each class can have **only one constructor**.
* If omitted, JavaScript provides a **default constructor**.
* Cannot be called directly without `new`.

### Example:

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
const car1 = new Car('Toyota', 'Corolla');
console.log(car1.brand); // Toyota
```

---

## 3. Creating Instances

* Use the `new` keyword to create objects.
* Each instance has its own properties but shares methods through the prototype.

```javascript
const person1 = new Person('Sara', 28);
const person2 = new Person('John', 30);
console.log(person1.greet()); // Hello, my name is Sara
console.log(person2.greet()); // Hello, my name is John
```

---

## 4. Class Methods

* Functions inside classes are called **methods**.
* They are automatically added to the class prototype.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
const p = new Person('Ali');
p.greet(); // Hi, I am Ali
```

### Static Methods

* Defined with `static` keyword.
* Belong to the class, not instances.
* Cannot access instance properties using `this`.

```javascript
class MathUtil {
  static add(a, b) { return a + b; }
}
console.log(MathUtil.add(5, 3)); // 8
```

---

## 5. Inheritance with Classes

* **Child class inherits from parent class** using `extends`.
* Use `super()` to call the parent constructor.

```javascript
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  showPosition() {
    console.log(`${this.name} is a ${this.position}`);
  }
}
const emp = new Employee('Ali', 'Developer');
emp.showPosition(); // Ali is a Developer
```

---

## 6. Private Fields

* Defined with `#` prefix.
* Cannot be accessed outside the class.

```javascript
class Person {
  #ssn;
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }
  getSSN() {
    return this.#ssn;
  }
}
const p = new Person('Ali', '123-45-6789');
console.log(p.getSSN()); // 123-45-6789
```

---

## 7. Best Practices

* Always use `constructor` to initialize properties.
* Keep methods in the class, not inside constructor.
* Use **static methods** for utility functions.
* Use **private fields** for sensitive data.
* Use inheritance wisely to avoid code duplication.

---

## 8. Summary

* **Classes**: Blueprint for objects, introduced in ES6.
* **Constructor**: Initializes instance properties.
* **Methods**: Functions inside classes, shared via prototype.
* **Static methods**: Belong to class, not instances.
* **Inheritance**: Child class extends parent class using `extends` and `super()`.
* **Private fields**: Use `#` for encapsulation.

> ✅ Mastery of **Classes & Constructor** is essential for creating **structured, maintainable, and reusable JavaScript OOP code**. This knowledge is crucial for **interviews and exams**.
