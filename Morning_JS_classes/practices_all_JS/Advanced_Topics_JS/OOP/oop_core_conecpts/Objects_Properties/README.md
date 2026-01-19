# JavaScript OOP - Objects & Properties

This README provides a comprehensive guide on **Objects & Properties** in JavaScript OOP. It is designed for developers to understand key concepts, code examples, and best practices to excel in exams and interviews.

---

## 1. What is an Object?

* **Definition:** An object is a collection of **key-value pairs** (properties and methods).
* Objects are the **building blocks of OOP** in JavaScript.
* Example:

```javascript
const person = {
  name: 'Waqar',
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

* `person` is an object with properties `name`, `age`, and method `greet()`.

---

## 2. Creating Objects

### a) Object Literal

* Simplest way to create an object.

```javascript
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  start() { console.log('Car started'); }
};
```

### b) Using `new Object()`

* Less common, but valid.

```javascript
const car = new Object();
car.brand = 'Toyota';
car.start = function() { console.log('Car started'); };
```

### c) Using Constructor Functions

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() { console.log(`Hello, ${this.name}`); };
}
const p1 = new Person('Ali', 30);
```

### d) Using ES6 Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
const p2 = new Person('Sara', 28);
```

---

## 3. Properties

### a) Data Properties

* Store values like strings, numbers, objects.
* Example:

```javascript
const book = {
  title: 'JavaScript Basics',
  pages: 200
};
```

### b) Methods (Function Properties)

* Functions inside objects are called **methods**.

```javascript
const book = {
  title: 'JS Guide',
  read() { console.log('Reading ' + this.title); }
};
book.read(); // Reading JS Guide
```

### c) Computed Properties

* Property names can be dynamic.

```javascript
const propName = 'age';
const person = { [propName]: 25 };
console.log(person.age); // 25
```

### d) Nested Objects

* Objects can contain other objects.

```javascript
const person = {
  name: 'Ali',
  address: {
    city: 'Karachi',
    country: 'Pakistan'
  }
};
console.log(person.address.city); // Karachi
```

---

## 4. Accessing Properties

* Dot notation: `object.property`
* Bracket notation: `object['property']`
* Example:

```javascript
console.log(person.name); // Dot notation
console.log(person['name']); // Bracket notation
```

## 5. Adding, Modifying, and Deleting Properties

```javascript
person.email = 'waqar@example.com'; // Adding
person.age = 26; // Modifying
delete person.name; // Deleting
```

---

## 6. Object Methods Useful in OOP

* `Object.keys(obj)` → Array of property names
* `Object.values(obj)` → Array of property values
* `Object.entries(obj)` → Array of [key, value] pairs
* `Object.assign(target, source)` → Copy properties from one object to another

```javascript
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```

---

## 7. Property Descriptors

* Control characteristics of properties.
* Example:

```javascript
const obj = { name: 'Ali' };
Object.defineProperty(obj, 'name', {
  writable: false, // cannot change value
  enumerable: true,
  configurable: false
});
```

---

## 8. Best Practices

* Prefer **classes** for object creation in OOP projects.
* Use **private fields** for sensitive data (`#fieldName`).
* Keep methods and properties organized for maintainable code.
* Use getters/setters for controlled access.

---

> ✅ Understanding **Objects & Properties** is crucial for mastering **OOP in JavaScript**. This knowledge is key for building modular, maintainable code and excelling in interviews and exams.
