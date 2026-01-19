# JavaScript `call()` – Key Points for Developers

> This section focuses **only on `call()`** in JavaScript, highlighting the most important points every developer must know to enhance coding skills.

---

## 1. Purpose of call()

* Immediately invokes a function with a specified `this` context.
* Passes arguments **individually**, not as an array.
* Essential for controlling `this` dynamically in different contexts.

**Syntax:**

```javascript
func.call(thisArg, arg1, arg2, ...);
```

---

## 2. Difference Between call() and apply()

* `call()` passes arguments individually: `func.call(thisArg, arg1, arg2)`
* `apply()` passes arguments as an array: `func.apply(thisArg, [arg1, arg2])`
* Use `call()` when arguments are known and fixed.

---

## 3. Use Cases

1. **Function Borrowing:**

```javascript
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };
function greet(greeting) { return `${greeting}, ${this.name}`; }
console.log(greet.call(person2, 'Hello')); // Hello, Bob
```

2. **Explicit `this` Binding:**

```javascript
function showName() {
  console.log(this.name);
}
const user = { name: 'Charlie' };
showName.call(user); // Charlie
```

3. **Invoking Constructor Functions Dynamically:**

```javascript
function Person(name) {
  this.name = name;
}
const obj = {};
Person.call(obj, 'David');
console.log(obj.name); // David
```

4. **Converting Arguments or Array-like Objects:**

```javascript
function listArgs() {
  return Array.prototype.slice.call(arguments);
}
console.log(listArgs(1, 2, 3)); // [1, 2, 3]
```

---

## 4. Key Features

* Executes function **immediately**.
* Arguments passed **individually**.
* Can **change the context of `this`**.
* Commonly used in **function borrowing, explicit context binding, dynamic function invocation**.
* Works well with **constructor invocation and array-like objects**.

---

## 5. Advanced Tips

* When using `call()` with `null` or `undefined`, `this` defaults to **global object (non-strict mode)** or **undefined (strict mode)**.
* Use `call()` for **function borrowing** and to **reuse methods across objects**.
* Often combined with **Array methods** to convert array-like objects (`arguments`) into real arrays.
* Understanding `call()` deeply improves **code reusability and dynamic function handling**.

---

This file is **editable** and can be updated with more examples or advanced use cases to strengthen your JavaScript skills focused exclusively on `call()`.
