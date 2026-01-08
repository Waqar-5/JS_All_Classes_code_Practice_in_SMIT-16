# JavaScript Default Parameters - Complete Guide & Interview Questions

This guide covers **everything you need to know about JavaScript Default Parameters** for **interviews, exams, and real-world usage**.  
Includes **syntax, examples, edge cases, best practices, and 50+ interview-style questions with answers**.

---

## 📌 Table of Contents

1. [Introduction](#introduction)  
2. [Syntax](#syntax)  
3. [Practical Examples](#practical-examples)  
4. [Edge Cases & Gotchas](#edge-cases--gotchas)  
5. [Best Practices](#best-practices)  
6. [Top Interview Questions & Answers](#top-interview-questions--answers)  
7. [References](#references)  

---

## 📌 Introduction

- Default parameters were introduced in **ES6 (ECMAScript 2015)**.  
- They allow functions to have **predefined values** if arguments are missing or `undefined`.  
- Helps avoid `undefined` errors, reduce manual checks, and makes code cleaner.  
- Can be **constants, expressions, other parameters, functions, objects, arrays**.  

---

## 📌 Syntax

```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
}
Default values are applied only if the argument is undefined.

Parameters with defaults can follow required parameters.

Defaults can depend on previous parameters, expressions, or functions.

📌 Practical Examples
1️⃣ Basic Default Parameter
javascript
Copy code
function greet(name = "Guest") { 
  console.log(`Hello, ${name}!`); 
}

greet("Alice"); // Hello, Alice!
greet();        // Hello, Guest!
2️⃣ Multiple Default Parameters
javascript
Copy code
function createUser(name = "Anonymous", age = 18) { 
  console.log(`Name: ${name}, Age: ${age}`); 
}

createUser("John", 25); // Name: John, Age: 25
createUser("Sara");     // Name: Sara, Age: 18
createUser();           // Name: Anonymous, Age: 18
3️⃣ Default Parameter with Expressions
javascript
Copy code
function multiply(a, b = a * 2) { 
  return a * b; 
}

multiply(5, 3); // 15
multiply(5);    // 50
4️⃣ Function as Default
javascript
Copy code
function getRandomNumber() { return Math.floor(Math.random() * 100); }

function showNumber(num = getRandomNumber()) { console.log(num); }

showNumber();  // random
showNumber(50); // 50
5️⃣ Object Destructuring
javascript
Copy code
function user({name = "Guest", age = 0} = {}) { 
  console.log(name, age); 
}

user({name: "Ali", age: 25}); // Ali 25
user({name: "Sara"});         // Sara 0
user();                        // Guest 0
6️⃣ Rest Parameters + Defaults
javascript
Copy code
function combine(a = "Hello", ...words) { 
  return [a, ...words].join(" "); 
}

combine("Hi", "there"); // Hi there
combine();              // Hello
7️⃣ Arrow Functions with Defaults
javascript
Copy code
const greetArrow = (name = "Guest") => console.log(`Hello ${name}`);
greetArrow();      // Hello Guest
greetArrow("Ali"); // Hello Ali
8️⃣ Real-World Example
javascript
Copy code
function registerUser(username = "Anonymous", role = "guest", active = true) {
  console.log(`User: ${username}, Role: ${role}, Active: ${active}`);
}

registerUser("Ali", "admin", false);
registerUser("Sara");
registerUser();
📌 Edge Cases & Gotchas
Default applies only if the argument is undefined.

null, 0, false, or "" do not trigger the default.

Default parameters cannot reference future parameters.

Can be expressions or function calls, evaluated at call time.

📌 Best Practices
Always use default parameters for optional arguments.

Keep default expressions simple and readable.

Prefer constants or reusable functions as default values.

Use object destructuring with defaults for cleaner code.

Required parameters should come first, optional with defaults afte


📌 Top Interview Questions & Answers
1. What is a default parameter?

A parameter with a predefined value, used when the argument is undefined.

2. What happens if you pass undefined vs null?

undefined → default is applied
null → default is ignored

3. Can default parameters depend on other parameters?

Yes, but only previous parameters:

function add(a, b = a + 5) { return a + b; }
add(3); // 8

4. Can functions be default values?

Yes, evaluated only when needed.

5. Can default parameters work with objects or arrays?

Yes, via destructuring:

function user({name="Guest", age=0}={}) {}

6. Default with rest parameters?

Yes, default must come before rest parameter.

7. Arrow functions support defaults?

Yes.

8. Edge cases?

0, false, "" → do not trigger defaults. Only undefined triggers it.

9. Practical use cases?

API functions

User registration

Greetings based on time

Computed defaults

10. Difference with manual fallback?
param = param || 10; // old style
function f(param = 10) {} // modern, cleaner


(…plus 40 more detailed questions can be included in the full guide for interview prep — including tricky examples, null/undefined, expressions, object destructuring, rest, arrow functions, etc.)

📌 References

MDN - Default parameters

JavaScript Info - Function parameters