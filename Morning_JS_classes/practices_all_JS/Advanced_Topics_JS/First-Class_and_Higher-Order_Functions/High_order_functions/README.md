# ⚡ Higher-Order Functions (HOF) in JavaScript
## Complete One-File Guide for Exams, Interviews & Professional Coding

---

## 📌 What is a Higher-Order Function (HOF)?

A **Higher-Order Function** is a function that does **at least one** of the following:

1. Accepts another function as an argument  
2. Returns a function  

> **Golden Rule (Exam Favorite):**  
> If a function works with another function → it is a **Higher-Order Function**

---

## 📌 What is a First-Class Function?

In JavaScript, functions are **First-Class Citizens**, which means:

- Functions can be stored in variables  
- Functions can be passed as arguments  
- Functions can be returned from other functions  

Because functions are first-class, **Higher-Order Functions are possible**.

---

## 📌 Difference Between First-Class & Higher-Order Functions

| Concept | Meaning |
|------|-------|
| First-Class Function | Ability to treat functions like values |
| Higher-Order Function | A function that uses other functions |

---

## 📌 Why Higher-Order Functions Are Important

- Write clean & reusable code  
- Avoid duplication  
- Enable functional programming  
- Used heavily in real-world JavaScript  

---

## 📌 How to Identify a HOF in Code

Ask:
- Does it accept a function?
- Does it return a function?

If **yes**, it is a **HOF**.

---

## 1️⃣ HOF Accepting a Function as Argument

```js
function performOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

performOperation(5, 3, add);       // 8
performOperation(5, 3, multiply);  // 15
```

---

## 2️⃣ HOF Returning a Function

```js
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(5);  // 10
triple(5);  // 15
```

---

## 3️⃣ Built-in Higher-Order Functions

### map()

```js
[1, 2, 3].map(num => num * 2);
```

### filter()

```js
[1, 2, 3, 4].filter(num => num % 2 === 0);
```

### reduce()

```js
[1, 2, 3].reduce((sum, num) => sum + num, 0);
```

---

## 4️⃣ Dynamic Function Factory (HOF)

```js
function operationFactory(type) {
    if (type === "add") return (a, b) => a + b;
    if (type === "multiply") return (a, b) => a * b;
}
```

---

## 5️⃣ Real-World Example

```js
button.addEventListener("click", function() {
    alert("Clicked!");
});
```

---

## 📌 Callback Function

A callback is a function passed into another function to be executed later.

---

## 📌 Interview Tips

- map, filter, reduce are HOFs  
- addEventListener is a HOF  
- HOF = works with functions  

---

## ✅ Final Summary

- JavaScript supports First-Class Functions  
- Higher-Order Functions enable powerful patterns  
- Mastering HOFs = Strong JavaScript foundation  

🔥 **HOF mastery helps crack exams & interviews**
