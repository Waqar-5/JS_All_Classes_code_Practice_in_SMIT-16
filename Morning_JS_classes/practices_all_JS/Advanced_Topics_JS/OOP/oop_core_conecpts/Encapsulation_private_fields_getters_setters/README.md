# 🔐 Encapsulation in JavaScript OOP

Encapsulation is one of the **core pillars of Object-Oriented Programming (OOP)**. In JavaScript, encapsulation is achieved by **controlling access to object data** using **private fields**, **getters**, and **setters**.

This README is designed to help you:

* ✅ Understand encapsulation deeply
* ✅ Crack **exams, interviews, and coding tests**
* ✅ Write **secure, maintainable, and professional JavaScript code**

---

## 📌 What is Encapsulation?

**Encapsulation** means **wrapping data (properties) and behavior (methods) together** and **restricting direct access** to some of the object's internal details.

### 🎯 Key Goals of Encapsulation

* Protect data from accidental modification
* Hide internal implementation
* Expose only what is necessary
* Improve maintainability and security

> "Encapsulation is data hiding with controlled access."

---

## 🧠 Encapsulation in JavaScript

JavaScript supports encapsulation using:

1. **Private Fields (`#`)**
2. **Getters (`get`)**
3. **Setters (`set`)**
4. **Closures (legacy approach)**

Modern JavaScript (ES2022+) officially supports **true private fields**.

---

## 🔒 Private Fields (`#`)

Private fields are **only accessible inside the class**.

### ✅ Syntax

```js
class User {
  #password; // private field

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("admin", "12345");
user.checkPassword("12345"); // true
user.#password; // ❌ Syntax Error
```

### 🔑 Key Points

* Starts with `#`
* Cannot be accessed outside the class
* Truly private (not accessible via hacks)
* Interview favorite topic

---

## ⚠️ Why Private Fields Matter

❌ Without encapsulation:

```js
user.password = "hacked"; // Dangerous
```

✅ With encapsulation:

```js
user.#password; // Not allowed
```

Encapsulation **prevents invalid or insecure state changes**.

---

## 👁️ Getters (`get`)

Getters allow **controlled read access** to private data.

### ✅ Example

```js
class BankAccount {
  #balance = 0;

  get balance() {
    return `Your balance is $${this.#balance}`;
  }
}

const acc = new BankAccount();
console.log(acc.balance); // Your balance is $0
```

### 🔑 Key Points

* Accessed like a property
* Cannot take parameters
* Used to expose private data safely

---

## ✍️ Setters (`set`)

Setters allow **controlled write access** with validation.

### ✅ Example

```js
class BankAccount {
  #balance = 0;

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Invalid balance");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.balance = 500; // setter called
console.log(acc.balance); // 500
```

### 🔑 Key Points

* Enables validation
* Prevents invalid state
* Looks like property assignment

---

## 🔄 Getters & Setters Together (Most Common Pattern)

```js
class Person {
  #age;

  constructor(age) {
    this.age = age; // uses setter
  }

  set age(value) {
    if (value < 0) throw new Error("Age cannot be negative");
    this.#age = value;
  }

  get age() {
    return this.#age;
  }
}

const p = new Person(25);
p.age = 30;
console.log(p.age); // 30
```

---

## 🧪 Encapsulation via Closures (Old but Important)

Before private fields existed, closures were used.

```js
function Counter() {
  let count = 0; // private

  this.increment = function () {
    count++;
    return count;
  };
}

const c = new Counter();
c.increment(); // 1
c.count; // undefined
```

### ⚠️ Interview Note

* Still valid concept
* Used in functional patterns
* Less common with modern classes

---

## ❓ Encapsulation vs Data Hiding

| Concept       | Meaning                         |
| ------------- | ------------------------------- |
| Data Hiding   | Restrict access to data         |
| Encapsulation | Data hiding + behavior together |

Encapsulation **includes** data hiding.

---

## 🚨 Common Interview Traps

### ❌ Mistake 1: Thinking `_name` is private

```js
this._name = "Ali"; // ❌ NOT private
```

> `_` is only a **convention**, not privacy.

### ❌ Mistake 2: Accessing private fields outside class

```js
obj.#field; // ❌ Syntax Error
```

### ❌ Mistake 3: Calling getter as function

```js
obj.balance(); // ❌ Wrong
obj.balance;   // ✅ Correct
```

---

## 🧩 Encapsulation in Real Projects

* Banking systems
* Authentication modules
* State management
* API wrappers
* Framework internals (React, Angular)

---

## 📝 Exam & Interview One-Liners

* Encapsulation controls access to object data
* Private fields use `#`
* Getters expose data safely
* Setters validate data before assignment
* JavaScript now supports true encapsulation

---

## ✅ Summary

✔ Encapsulation improves security
✔ Makes code maintainable
✔ Prevents invalid object state
✔ Essential for professional JavaScript developers

---

### 🚀 Next Topics You Can Ask For

* 50 MCQs on **Encapsulation**
* 50 Interview Q&A on **Encapsulation**
* **Polymorphism** in JavaScript
* **Abstraction** in JavaScript

📌 *This README is fully editable, downloadable, and GitHub-ready.*
