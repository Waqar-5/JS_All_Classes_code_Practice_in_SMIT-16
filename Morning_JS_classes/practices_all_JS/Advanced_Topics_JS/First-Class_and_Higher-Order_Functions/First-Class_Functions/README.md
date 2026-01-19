# 🎯 First-Class Functions (FCF) – Complete Guide

## 📌 What is a First-Class Function?
A **First-Class Function** is a function that is treated like any other value in a programming language.

In JavaScript (and many modern languages), functions are **first-class citizens**, which means they can:
- Be stored in variables
- Be stored in arrays
- Be stored in objects
- Be passed as arguments to other functions
- Be returned from other functions

> ⚡ **Important Rule:**  
> If a language allows functions to behave like normal values (numbers, strings, objects), then it supports **First-Class Functions**.

---

## 🧠 Why First-Class Functions Matter
- Enable **Higher-Order Functions**
- Make code **flexible & reusable**
- Support **callbacks, closures, functional programming**
- Widely tested in **exams & interviews**

---

## 🧩 Core Properties of First-Class Functions

### 1️⃣ Function Stored in a Variable
```js
function greet(name) {
    return "Hello " + name;
}

const sayHello = greet;
console.log(sayHello("Waqar"));
```
✅ Function assigned to a variable like a value

---

### 2️⃣ Function Stored in an Array
```js
const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
];

console.log(operations[0](5, 3));
```
✅ Functions stored & accessed dynamically

---

### 3️⃣ Function Stored in an Object
```js
const calculator = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

console.log(calculator.add(4, 6));
```
✅ Functions behave like object values

---

### 4️⃣ Function Passed as Argument
```js
function execute(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(execute(3, 4, add));
```
✅ Passing functions is possible only because of FCF

---

### 5️⃣ Function Returned from Another Function
```js
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));
```
✅ Returning functions is a key FCF feature

---

## 🔍 How to Identify First-Class Functions in Code
Ask these questions:
- ❓ Is a function stored in a variable?
- ❓ Is it passed as an argument?
- ❓ Is it returned from another function?
- ❓ Is it stored in an array or object?

✔ If YES → **First-Class Function**
✔ If a function *accepts or returns* another function → **Higher-Order Function**

---

## 🆚 First-Class vs Higher-Order Functions

| Feature | First-Class Function | Higher-Order Function |
|------|---------------------|----------------------|
| Concept | Language capability | Function behavior |
| Stored as value | ✅ Yes | ✅ Yes |
| Passed as argument | ✅ Yes | ✅ Yes |
| Returned | ✅ Yes | ✅ Yes |
| Example | `const x = fn` | `map(), filter()` |

> 🔥 **Important:**  
> Higher-Order Functions exist **because of** First-Class Functions.

---

## 📝 Exam & Interview Golden Lines
- “JavaScript treats functions as first-class citizens.”
- “First-Class Functions allow storing, passing, and returning functions.”
- “Higher-Order Functions are built using First-Class Functions.”

---

## 💡 Common Interview Questions

### Q1: Is JavaScript a First-Class Function language?
✔ Yes, because functions can be stored, passed, and returned.

### Q2: Can First-Class Functions exist without HOF?
✔ Yes

### Q3: Can HOF exist without First-Class Functions?
❌ No

---

## 🚀 Real-World Usage
- Event handlers
- Callbacks
- Functional programming
- React hooks & components
- Array methods

---

## ✅ Final Summary
- **First-Class Function = ability**
- **Higher-Order Function = usage**
- FCF is the **foundation**
- HOF is the **application**

---

🎯 **Tip:**  
If you understand First-Class Functions well, Higher-Order Functions become EASY.

Happy Coding 🚀
