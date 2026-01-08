# JavaScript Default Parameters

Default parameters in JavaScript allow you to **assign a default value to a function parameter** if no value (or `undefined`) is passed. They make your functions **flexible, readable, and safe**.

---

## 📌 Table of Contents

1. [Introduction](#introduction)  
2. [Syntax](#syntax)  
3. [Examples](#examples)  
   - Basic Default Parameter  
   - Multiple Default Parameters  
   - Default Parameter with Expressions  
   - Using Functions as Defaults  
4. [Important Notes](#important-notes)  
5. [Best Practices](#best-practices)  
6. [Common Interview Questions](#common-interview-questions)  
7. [Summary](#summary)  

---

## 📌 Introduction

- Default parameters were introduced in **ES6 (ECMAScript 2015)**.  
- They allow functions to have **predefined values for parameters**.  
- If the caller **doesn’t provide a value** or passes `undefined`, the **default value is used**.  
- Helps avoid `undefined` errors and makes functions **more robust**.  

---

## 📌 Syntax

```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
}

Each parameter can have its own default value.

Defaults are applied only if the argument is undefined.

📌 Examples
1️⃣ Basic Default Parameter
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet();        // Output: Hello, Guest!

2️⃣ Multiple Default Parameters
function createUser(name = "Anonymous", age = 18) {
  console.log(`Name: ${name}, Age: ${age}`);
}

createUser("John", 25); // Name: John, Age: 25
createUser("Sara");     // Name: Sara, Age: 18
createUser();           // Name: Anonymous, Age: 18


Only the missing parameters use their default values.

3️⃣ Default Parameter with Expressions
function multiply(a, b = a * 2) {
  return a * b;
}

console.log(multiply(5, 3)); // Output: 15
console.log(multiply(5));    // Output: 50 (b = a*2 = 10)


Default values can depend on other parameters or expressions.

4️⃣ Using Functions as Default Values
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function showNumber(num = getRandomNumber()) {
  console.log(num);
}

showNumber();  // Output: Random number
showNumber(50); // Output: 50


Default values can be functions, which are evaluated only when needed.

📌 Important Notes

Defaults are used only when the argument is undefined:

function test(a = 10) { console.log(a); }
test(undefined); // 10
test(null);      // null
test(0);         // 0


Default parameters can be any valid JavaScript expression.

Parameters with defaults can come after required parameters.

Using rest parameters and default parameters together is allowed.

📌 Best Practices

Always use default parameters for optional arguments.

Avoid overcomplicating default expressions; keep them simple and readable.

Use constants or functions for reusable defaults.

Keep order of parameters in mind: required first, then optional with defaults.

📌 Common Interview Questions

What happens if a parameter with a default value is passed as undefined?

The default value is used.

Can a default parameter depend on a previous parameter?

function add(a, b = a + 2) { return a + b; }
add(3); // Output: 8


Does null trigger a default parameter?

No, null is considered a value, so the default is not applied.

Can you use functions as default parameter values?

Yes, functions are evaluated only if the argument is undefined.

Why are default parameters better than manually checking inside the function?

Cleaner syntax, less code, fewer bugs, more readable.

📌 Summary

Default parameters provide predefined values for function parameters.

They help avoid undefined errors, reduce manual checks, and make code cleaner.

Can be constants, expressions, other parameters, or functions.

Widely used in modern JavaScript and professional codebases.

✅ References

MDN - Default parameters

JavaScript Info - Function parameters