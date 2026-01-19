# JavaScript OOP - Methods & `this`

This README provides a comprehensive guide on **Methods & `this` keyword** in JavaScript OOP. It is designed to help developers understand key concepts, code examples, and best practices to excel in exams and interviews.

---

## 1. What are Methods in JavaScript Objects?

* **Definition:** Methods are functions defined inside objects or classes.
* They allow objects to **perform actions** and **manipulate their own properties**.
* Example:

```javascript
const person = {
  name: 'Ali',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is Ali
```

### **Key Points:**

* Methods are properties with function values.
* Can access other properties of the same object using `this`.
* Can be defined using **function expressions**, **function declarations**, or **shorthand method syntax**.

---

## 2. Method Syntax in Objects

### a) Function Expression

```javascript
const obj = {
  sayHi: function() { console.log('Hi!'); }
};
obj.sayHi(); // Hi!
```

### b) Shorthand Method Definition

```javascript
const obj = {
  sayHi() { console.log('Hi!'); }
};
obj.sayHi(); // Hi!
```

### c) Arrow Functions as Methods

```javascript
const obj = {
  name: 'Ali',
  sayHi: () => { console.log(`Hi ${this.name}`); }
};
obj.sayHi(); // Hi undefined
```

**Note:** Arrow functions do not have their own `this`; they use lexical `this`.

---

## 3. Understanding `this` Keyword

### a) Inside Object Methods

* `this` refers to the **current object instance**.

```javascript
const person = {
  name: 'Ali',
  greet() { console.log(this.name); }
};
person.greet(); // Ali
```

### b) Inside Standalone Functions

* In non-strict mode, `this` refers to the **global object**.
* In strict mode, `this` is `undefined`.

```javascript
function showThis() {
  'use strict';
  console.log(this);
}
showThis(); // undefined
```

### c) Inside Class Methods

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() { console.log(this.name); }
}
const p = new Person('Sara');
p.greet(); // Sara
```

### d) Inside Arrow Functions

* Arrow functions inherit `this` from **lexical scope**.

```javascript
const obj = {
  name: 'Ali',
  greet: () => { console.log(this.name); }
};
obj.greet(); // undefined
```

---

## 4. Common Scenarios with `this`

### a) Using `this` with Event Handlers

```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // button element
});
```

### b) Losing `this` Context

```javascript
const obj = {
  name: 'Ali',
  greet() { console.log(this.name); }
};
const greetFunc = obj.greet;
greetFunc(); // undefined
```

* **Solution:** Use `bind()`

```javascript
const boundGreet = obj.greet.bind(obj);
boundGreet(); // Ali
```

### c) Using `call()` and `apply()`

```javascript
function greet(greeting) { console.log(`${greeting}, I am ${this.name}`); }
const person = { name: 'Ali' };
greet.call(person, 'Hello'); // Hello, I am Ali
greet.apply(person, ['Hi']); // Hi, I am Ali
```

### d) Using `bind()`

```javascript
const boundGreet = greet.bind(person, 'Hey');
boundGreet(); // Hey, I am Ali
```

---

## 5. Best Practices with Methods & `this`

* Use **shorthand method syntax** in objects and classes.
* Avoid arrow functions as object methods if `this` access is required.
* Use `bind()` to preserve `this` when passing methods as callbacks.
* Be aware of strict mode behavior.
* Prefer class methods for OOP design.

---

## 6. Summary

* **Methods** are functions inside objects or classes that act on object data.
* **`this`** refers to the context of the function call.
* Understanding `this` is crucial for OOP, event handling, and callbacks.
* Proper use of `call()`, `apply()`, and `bind()` ensures correct `this` binding.

---

> ✅ Mastery of **Methods & `this`** is essential for building robust JavaScript OOP applications, handling events, callbacks, and writing maintainable code. This knowledge is key for **interviews and exams**.
