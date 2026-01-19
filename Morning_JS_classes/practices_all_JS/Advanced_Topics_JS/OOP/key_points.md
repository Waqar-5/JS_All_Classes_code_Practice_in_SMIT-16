# JavaScript OOP - Key Points for Developers

This README contains the **most important key points** of **Object-Oriented Programming (OOP) in JavaScript** that every developer must know to enhance coding skills, write professional code, and perform well in interviews.

---

## 1. Objects

* Everything in JavaScript is an object or behaves like an object.
* Objects are collections of **key-value pairs**.
* Encapsulate data and related functions in one structure.
* Example:

```javascript
const person = {
  name: 'Ali',
  age: 25,
  greet() { console.log(`Hello, my name is ${this.name}`); }
};
```

## 2. Classes (ES6)

* Classes are **blueprints** for creating objects.
* Can have **constructor methods**, instance methods, static methods, and private fields.
* Syntax is cleaner than function constructors.
* Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { console.log(`Hello, I am ${this.name}`); }
  static info() { console.log('Static method example'); }
}
```

## 3. Constructor

* Special method called when a new object is created.
* Initializes object properties.
* Only one constructor per class.
* Example:

```javascript
const p = new Person('Ali', 25);
```

## 4. `this` Keyword

* Refers to the **current instance of the object**.
* Important for accessing object properties inside methods.
* Arrow functions **do not have their own `this`**, they use lexical `this`.

## 5. Inheritance

* Allows a class to acquire properties and methods of another class.
* Use `extends` to inherit and `super()` to call the parent constructor.
* Example:

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
```

## 6. Encapsulation

* Hides internal object details from the outside.
* Private fields/methods: `#field`
* Public getter/setter methods control access.
* Example:

```javascript
class Person {
  #ssn;
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }
  getSSN() { return this.#ssn; }
}
```

## 7. Polymorphism

* Ability for methods to behave differently based on the object calling them.
* Implemented via **method overriding** in subclasses.

## 8. Abstraction

* Hides complex implementation details and exposes only essential features.
* Can simulate abstract methods by throwing errors in base class.

## 9. Static Methods

* Belong to the class, not instances.
* Can be called directly on the class.
* Example:

```javascript
Person.info(); // Static method call
```

## 10. Prototype Chain

* Objects inherit from other objects via prototypes.
* Lookup for properties/methods happens along the chain.
* Important for memory efficiency and shared methods.

## 11. Getters and Setters

* Control access to object properties.
* Example:

```javascript
class Person {
  constructor(name) { this._name = name; }
  get name() { return this._name; }
  set name(val) { this._name = val; }
}
```

## 12. Key Operators and Methods

* `instanceof` → Check if object is an instance of a class.
* `Object.create()` → Create object with a specific prototype.
* `Object.freeze()` → Make object immutable.
* `super` → Access parent class methods or constructor.

## 13. Advanced Concepts

* Mixins → Share functionality between unrelated classes.
* Singleton → Only one instance of a class.
* Method chaining → Return `this` from methods for chaining calls.
* Simulate abstract classes/methods → Base class methods throwing errors.

## 14. Best Practices

* Always use `class` syntax over function constructors.
* Encapsulate private data using `#` and getters/setters.
* Use `super()` properly in subclasses.
* Avoid polluting global scope.
* Follow proper naming conventions for readability.

---

> ✅ Understanding these key points will **enhance coding skills**, allow **clean OOP design**, and help **crack interviews** in JavaScript.
