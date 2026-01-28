# 📘 JavaScript Objects – Complete Mastery Guide (Beginner → Advanced)

> **Topics Covered (69–75)**
> 69. Objects
> 70. Objects: Properties
> 71. Objects: Methods
> 72. Objects: Constructors
> 73. Objects: Constructors for Methods
> 74. Objects: Prototypes
> 75. Objects: Checking for Properties and Methods

---

## 🎯 Why This README?

This single **README.md** is designed so that:

* A **beginner** can understand JavaScript Objects from zero
* An **advanced learner** can revise deep concepts quickly
* You can **crack exams, interviews, MCQs, and coding tests**
* You can **edit, extend, and reuse** this file anytime

💡 *If you understand everything in this file, objects will never confuse you again.*

---

# 69️⃣ Objects (Core Concept)

## ✅ What is an Object?

An **object** is a real-world entity that contains:

* **Properties** → data / characteristics
* **Methods** → actions / behavior

📌 **Short Definition (Exam‑Ready):**

> An object is a collection of key–value pairs where values can be data or functions.

### 🧠 Real‑World Analogy

A **mobile phone**:

* Properties → brand, model, color
* Methods → call(), message(), takePhoto()

---

## 🔹 Creating Objects (3 Ways)

### 1️⃣ Object Literal (Most Common)

```js
const user = {
  name: "Waqar",
  age: 25,
  isDeveloper: true
};
```

### 2️⃣ Using `new Object()`

```js
const user = new Object();
user.name = "Waqar";
user.age = 25;
```

### 3️⃣ Constructor Function (Reusable)

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Ali", 22);
```

📌 **Interview Tip:** Object literal is fastest & preferred.

---

# 70️⃣ Objects: Properties

## ✅ What are Properties?

Properties are **variables inside an object**.

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024
};
```

### 🔑 Accessing Properties

#### Dot Notation (Most Used)

```js
car.brand;
```

#### Bracket Notation (Dynamic)

```js
car["model"];
```

📌 **Use bracket notation when:**

* Property name has spaces
* Property name is stored in a variable

```js
const key = "year";
car[key];
```

---

### ➕ Add / ✏️ Update / ❌ Delete Properties

```js
car.color = "White";     // add
car.year = 2025;          // update
delete car.model;         // delete
```

📌 **Exam Trick:** `delete` removes property completely.

---

# 71️⃣ Objects: Methods

## ✅ What are Methods?

Methods are **functions inside objects**.

```js
const user = {
  name: "Waqar",
  greet: function () {
    return "Hello, " + this.name;
  }
};
```

### 🔥 Short Syntax (Modern JS)

```js
const user = {
  name: "Waqar",
  greet() {
    return `Hello, ${this.name}`;
  }
};
```

### 🧠 `this` Keyword

* `this` refers to **current object**

```js
this.name // means user.name
```

📌 **Interview Question:**

> Why not use arrow function as a method?

❌ Arrow functions don’t have their own `this`.

---

# 72️⃣ Objects: Constructors

## ✅ What is a Constructor?

A constructor is a **special function** used to create multiple similar objects.

📌 **Rules:**

* Function name starts with capital letter
* Use `this`
* Called using `new`

```js
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

const s1 = new Student("Ali", 90);
const s2 = new Student("Sara", 95);
```

### 🧠 What `new` Does Internally?

1. Creates empty object `{}`
2. Binds `this` to that object
3. Links prototype
4. Returns object

📌 **Exam Gold Point** ⭐

---

# 73️⃣ Constructors for Methods

## ❌ Bad Practice (Memory Waste)

```js
function User(name) {
  this.name = name;
  this.sayHi = function () {
    return "Hi " + this.name;
  };
}
```

⚠️ Every object gets a new function copy.

---

## ✅ Best Practice (Prototype Method)

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "Hi " + this.name;
};
```

✔ Shared method
✔ Memory efficient
✔ Interview favorite

---

# 74️⃣ Objects: Prototypes

## ✅ What is Prototype?

Every JavaScript object has a hidden property:

```js
[[Prototype]]  // accessible via __proto__
```

### 🔗 Prototype Chain

```js
array → Array.prototype → Object.prototype → null
```

### 🧠 Example

```js
const arr = [];
arr.push(10);
```

👉 `push()` comes from `Array.prototype`

---

### 🛠 Custom Prototype Example

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return this.name + " makes a sound";
};

const dog = new Animal("Dog");
```

📌 **Interview Line:**

> JavaScript uses prototype-based inheritance.

---

# 75️⃣ Checking for Properties & Methods

## 🔍 `in` Operator

```js
"name" in user; // true
```

✔ Checks own + prototype

---

## 🔍 `hasOwnProperty()`

```js
user.hasOwnProperty("name");
```

✔ Checks only object’s own properties

---

## 🔍 `typeof` for Methods

```js
typeof user.greet === "function";
```

---

## 🔍 Optional Chaining (🔥 Modern JS)

```js
user.address?.city;
```

✔ Prevents runtime errors

---

# 🧠 Object Revision Cheat Sheet (Exam‑Ready)

| Concept          | Key Point                |
| ---------------- | ------------------------ |
| Object           | Key–value pair           |
| Property         | Variable inside object   |
| Method           | Function inside object   |
| Constructor      | Blueprint for objects    |
| Prototype        | Shared memory methods    |
| `this`           | Refers to current object |
| `in`             | Own + prototype          |
| `hasOwnProperty` | Own only                 |

---

# 🎓 Interview‑Winning Tips

✅ Prefer **prototype methods**
✅ Avoid arrow functions in object methods
✅ Understand prototype chain deeply
✅ Explain `new` keyword confidently
✅ Use real‑world examples

---

# 🔥 Advanced & Rare Object Concepts (Expert‑Level JavaScript)

> These are **powerful object concepts** that most developers *don’t know deeply*, but once you do — **coding becomes easier, safer, and more professional**. Interviewers LOVE these.

---

## 1️⃣ Property Descriptors (Hidden Superpower)

### ❓ What Most Devs Don’t Know

By default, object properties are **writable, enumerable, and configurable** — but you can control them.

```js
const user = {};

Object.defineProperty(user, "id", {
  value: 101,
  writable: false,
  enumerable: false,
  configurable: false
});
```

### 🧠 Why This Is Powerful

* Prevents accidental modification
* Hides internal properties from loops
* Used in libraries & frameworks

📌 **Real Scenario:**
IDs, tokens, config flags that must never change.

---

## 2️⃣ Getters & Setters (Smart Properties)

```js
const user = {
  firstName: "Waqar",
  lastName: "Ali",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
```

### 🚀 Why Experts Use This

* Property **looks like data**, behaves like logic
* Cleaner APIs
* Used heavily in frameworks

📌 **Interview Line:**

> Getters/setters provide controlled access to object data.

---

## 3️⃣ Object Freezing vs Sealing

### ❄️ Object.freeze()

```js
Object.freeze(user);
```

✔ Cannot add, delete, or update properties

### 🔒 Object.seal()

```js
Object.seal(user);
```

✔ Can update existing values only

📌 **Real Scenario:**
Config objects, constants, environment settings

---

## 4️⃣ Cloning Objects (The RIGHT Way)

### ❌ Wrong (Reference Copy)

```js
const copy = original;
```

### ✅ Shallow Clone

```js
const copy = { ...original };
```

### ✅ Deep Clone (Modern)

```js
const deepCopy = structuredClone(original);
```

📌 **Expert Tip:**
JSON cloning fails for functions, dates, undefined.

---

## 5️⃣ Object Composition (Better Than Inheritance)

```js
const canDrive = state => ({
  drive: () => `${state.name} is driving`
});

const canCode = state => ({
  code: () => `${state.name} is coding`
});

const developer = name => {
  const state = { name };
  return Object.assign(state, canDrive(state), canCode(state));
};

const dev = developer("Waqar");
```

### 🧠 Why Senior Devs Prefer This

* No deep prototype chains
* Flexible behavior
* Cleaner testing

📌 **Interview Gold:**

> Prefer composition over inheritance.

---

## 6️⃣ Safe Property Access (Production‑Level)

```js
const city = user?.address?.city ?? "Unknown";
```

✔ Prevents crashes
✔ Cleaner than if‑else

---

## 7️⃣ Object Keys Are ALWAYS Strings

```js
const obj = {};
obj[1] = "one";

Object.keys(obj); // ["1"]
```

📌 **Why This Matters**
Avoid bugs when using numbers as keys.

---

## 8️⃣ Symbol Properties (Ultra‑Rare Knowledge)

```js
const id = Symbol("id");

const user = {
  name: "Waqar",
  [id]: 123
};
```

✔ Hidden from loops
✔ No naming collisions

📌 **Used In:**
Libraries, internal metadata

---

## 9️⃣ this Binding Tricks

```js
const user = {
  name: "Waqar",
  greet() {
    return this.name;
  }
};

const fn = user.greet.bind(user);
```

✔ Avoid losing `this`
✔ Critical in callbacks & events

---

## 🔟 Object Iteration (Professional Way)

```js
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
```

✔ Clean
✔ Modern
✔ Readable

---

# 🧠 Master‑Level Mindset

✅ Objects are **data + behavior**
✅ Control mutability
✅ Prefer composition
✅ Protect internal state
✅ Use descriptors & symbols wisely

---

## 🏆 Final Expert Advice

If you know these concepts:

* You code **faster**
* You debug **less**
* You think like a **senior developer**

> **Objects are simple — mastery is in control.** 🚀
