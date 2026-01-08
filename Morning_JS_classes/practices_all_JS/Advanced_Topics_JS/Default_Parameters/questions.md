# JavaScript Default Parameters - Interview Questions & Answers

This document contains **50 detailed, professional interview-style questions** on **JavaScript Default Parameters**.  
It is designed for **developers, students, or interview preparation**, covering **basic concepts, advanced usage, expressions, functions, and edge cases**.

---

## 📌 Table of Contents

1. [Introduction](#introduction)  
2. [50 Interview Questions & Answers](#50-interview-questions--answers)  
3. [References](#references)  

---

## 📌 Introduction

- **Default parameters** were introduced in **ES6 (ECMAScript 2015)**.  
- They allow functions to have **predefined values** if arguments are missing or `undefined`.  
- Syntax is clean and eliminates **manual undefined checks**.  
- They can be **constants, expressions, other parameters, or functions**.  
- Widely used in **modern professional JavaScript** and **interview questions**.  

---

## 📌 50 Interview Questions & Answers

### 1️⃣ What is a default parameter in JavaScript?  
**Answer:**  
A default parameter is a parameter that **has a default value** assigned in the function definition. If the caller does not provide a value or passes `undefined`, the default is used.  

**Example:**  
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
2️⃣ When is a default parameter value used?
Answer:
Default values are used only if the argument is undefined. Other falsy values like null, 0, or "" do not trigger the default.

javascript
Copy code
function test(a = 10) { console.log(a); }
test(undefined); // 10
test(null);      // null
test(0);         // 0
3️⃣ Can a default parameter depend on a previous parameter?
Answer:
Yes, default values can reference previous parameters.

javascript
Copy code
function add(a, b = a + 2) { return a + b; }
console.log(add(3)); // 8
4️⃣ What happens if you pass null to a parameter with a default value?
Answer:
The default value is not applied because null is considered a valid value.

javascript
Copy code
function greet(name = "Guest") { console.log(name); }
greet(null); // null
5️⃣ Which ES version introduced default parameters?
Answer: ES6 (ECMAScript 2015).

6️⃣ Can default parameters be functions?
Answer: Yes, you can assign a function call as a default value. It will be evaluated only when needed.

javascript
Copy code
function randomNumber() { return Math.floor(Math.random() * 100); }
function show(num = randomNumber()) { console.log(num); }
show();
7️⃣ Can default parameters be objects or arrays?
Answer: Yes, you can assign arrays, objects, or any valid expression as default values.

javascript
Copy code
function test(arr = []) { console.log(arr.length); }
test(); // 0
8️⃣ Are default parameters applied in arrow functions?
Answer: Yes, arrow functions fully support default parameters.

javascript
Copy code
const greet = (name = "Guest") => console.log(`Hello ${name}`);
greet(); // Hello Guest
9️⃣ Can default parameters be combined with rest parameters?
Answer: Yes, but the default must be before the rest parameter.

javascript
Copy code
function test(a = 1, ...rest) { console.log(a, rest); }
test(undefined, 2, 3); // 1 [2,3]
10️⃣ What is the output of the following?
javascript
Copy code
function multiply(a = 2, b = a * 2) { return a * b; }
console.log(multiply(5));
Answer:
Output: 50
Explanation: b uses default a*2 = 10; a*b = 5*10 = 50.

11️⃣ Can default parameters be skipped?
Answer: Yes, by passing undefined.

javascript
Copy code
function sum(a = 1, b = 2) { console.log(a, b); }
sum(undefined, 5); // 1 5
12️⃣ Does 0 trigger a default parameter?
Answer: No, only undefined triggers it.

13️⃣ Output:
javascript
Copy code
function test(a = 5) { console.log(a); }
test(0);
Answer: 0 – default not applied.

14️⃣ Default parameter expressions are evaluated when?
Answer: At function call, not definition.

15️⃣ Can a default parameter refer to a future parameter?
Answer: No, only previous parameters can be referenced.

16️⃣ Output:
javascript
Copy code
function greet(name = "Guest") { return `Hello ${name}`; }
console.log(greet("Alice"));
Answer: Hello Alice

17️⃣ Why are default parameters better than manual checks?
Answer: Cleaner syntax, less code, fewer bugs, and easier readability.

18️⃣ Output:
javascript
Copy code
function test(a = 1, b = a + 2) { return b; }
console.log(test(3));
Answer: 5 (b = a+2 = 3+2)

19️⃣ Can you use expressions in default parameters?
Answer: Yes, any valid JS expression.

javascript
Copy code
function multiply(a, b = a*2) { return a*b; }
20️⃣ Output:
javascript
Copy code
function test(a = 5, b = 10) { return a+b; }
console.log(test(3));
Answer: 13 (b = 10, a = 3)

21️⃣ Can default parameters have function calls that depend on other parameters?
Answer: Yes

javascript
Copy code
function add(a = 1, b = a+5) { return a+b; }
console.log(add()); // 6
22️⃣ Are default parameters evaluated at definition or call?
Answer: At call time.

23️⃣ Output:
javascript
Copy code
function greet(name = "User") { console.log(`Hello ${name}`); }
greet();
Answer: Hello User

24️⃣ Can default parameters be used with destructuring?
Answer: Yes

javascript
Copy code
function test({a=1, b=2} = {}) { console.log(a,b); }
test(); // 1 2
25️⃣ Can default parameters be strings?
Answer: Yes

javascript
Copy code
function greet(name = "Guest") { console.log(name); }
26️⃣ Output:
javascript
Copy code
function concat(a = "Hi", b = "There") { return a + " " + b; }
console.log(concat("Hello"));
Answer: Hello There

27️⃣ Output:
javascript
Copy code
function sum(a = 0, b = 0) { return a+b; }
console.log(sum());
Answer: 0

28️⃣ Can default parameters be dynamic values?
Answer: Yes, they can use variables or function calls.

29️⃣ Output:
javascript
Copy code
let x = 5;
function add(a = x) { return a; }
console.log(add());
Answer: 5

30️⃣ Output:
javascript
Copy code
function test(a = [], b = a) { console.log(b); }
test();
Answer: [] – b takes default as a

31️⃣ Can default parameters be objects?
Answer: Yes

javascript
Copy code
function user(obj = {name:"Guest"}) { console.log(obj.name); }
32️⃣ Can a default parameter be another parameter?
Answer: Yes, only previous parameters.

33️⃣ Output:
javascript
Copy code
function multiply(a = 2, b = a*3) { return a*b; }
console.log(multiply(4));
Answer: 12

34️⃣ Output:
javascript
Copy code
function test(a = 5) { console.log(a); }
test(undefined);
Answer: 5

35️⃣ Can default parameters be used in object methods?
Answer: Yes

javascript
Copy code
const obj = {
  greet(name = "Guest") { console.log(name); }
};
obj.greet(); // Guest
36️⃣ Output:
javascript
Copy code
function test(a = 10, b = a) { return b; }
console.log(test(5));
Answer: 5

37️⃣ Output:
javascript
Copy code
function greet(name = "Guest") { console.log(name); }
greet(null);
Answer: null

38️⃣ Can default parameters reference previous parameters in functions with multiple defaults?
Answer: Yes, any default after a previous parameter can reference it.

39️⃣ Output:
javascript
Copy code
function add(a = 2, b = a*2) { return a+b; }
console.log(add(3, undefined));
Answer: 9

40️⃣ Can default parameters be used with ES6 arrow functions?
Answer: Yes, fully supported.

41️⃣ Output:
javascript
Copy code
const greet = (name="Guest") => console.log(`Hello ${name}`);
greet();
Answer: Hello Guest

42️⃣ Can you assign a function call that depends on a variable as default?
Answer: Yes

javascript
Copy code
let x = 10;
function test(a = x*2) { return a; }
console.log(test()); // 20
43️⃣ Default parameters are mainly used for …
Answer: Optional arguments

44️⃣ Output:
javascript
Copy code
function test(a=5, b=10) { return a+b; }
console.log(test(undefined, 7));
Answer: 12

45️⃣ Can default parameters be used to simplify constructor functions?
Answer: Yes

javascript
Copy code
function User(name="Guest") { this.name = name; }
const u = new User(); // Guest
46️⃣ Output:
javascript
Copy code
function greet(a = 1, b = a+1) { console.log(a,b); }
greet(3);
Answer: 3 4

47️⃣ Can default parameters be used in combination with destructuring?
Answer: Yes

javascript
Copy code
function test({a=1,b=2} = {}) { console.log(a,b); }
test(); // 1 2
48️⃣ Output:
javascript
Copy code
function multiply(a = 2, b = 3) { return a*b; }
console.log(multiply());
Answer: 6

49️⃣ Can default parameters improve readability?
Answer: Yes, they reduce manual undefined checks and make code cleaner.

50️⃣ Output:
javascript
Copy code
function concat(a="Hi", b="There") { return a + " " + b; }
console.log(concat("Hello"));
Answer: Hello There

📌 References
MDN - Default parameters

JavaScript Info - Function parameters

