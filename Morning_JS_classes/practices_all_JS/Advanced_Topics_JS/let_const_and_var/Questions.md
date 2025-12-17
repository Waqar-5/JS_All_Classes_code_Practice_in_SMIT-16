# JavaScript Interview Questions — Top 30 Questions & Answers

> A collection of **30 top-level interview questions** on JavaScript variables, scope, hoisting, TDZ, and execution context with **detailed answers**.

---

## 1. What is the difference between `var`, `let`, and `const`?

**Answer:**

* `var` → function-scoped, hoisted, can redeclare & reassign.
* `let` → block-scoped, hoisted in TDZ, can reassign.
* `const` → block-scoped, hoisted in TDZ, cannot reassign, objects mutable.

---

## 2. What is Hoisting in JavaScript?

**Answer:**
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the **memory phase**. `var` gets initialized with `undefined`, `let` and `const` remain in TDZ.

---

## 3. What is the Temporal Dead Zone (TDZ)?

**Answer:**
TDZ is the period between the creation of a variable in memory and its initialization. `let` and `const` cannot be accessed before declaration.

---

## 4. What is the difference between global scope, function scope, and block scope?

**Answer:**

* **Global Scope:** Accessible anywhere in the program.
* **Function Scope:** Accessible within the function.
* **Block Scope:** Accessible only inside `{}` (for `let` and `const`).

---

## 5. How does the JavaScript Execution Context work?

**Answer:**

* **Memory Phase:** Variables/functions are stored.
* **Code Phase:** Values are assigned, code executes.
* Each function call creates a **Function Execution Context**.

---

## 6. What is the difference in loop behavior between `var` and `let`?

**Answer:**
`var` is function-scoped → last value retained in closures. `let` is block-scoped → preserves each iteration value.

---

## 7. Can `const` objects be mutated?

**Answer:**
Yes, object properties can be changed. However, the reference cannot be reassigned.

---

## 8. What happens if you try to access a `let` variable before declaration?

**Answer:**
It throws a **ReferenceError** due to TDZ.

---

## 9. Can `var` be redeclared in the same scope?

**Answer:**
Yes, `var` can be redeclared and reassigned in the same scope.

---

## 10. Difference between `undefined` and `not defined`?

**Answer:**

* `undefined` → variable declared but not assigned.
* `not defined` → variable does not exist.

---

## 11. How does JavaScript handle global variables in browsers?

**Answer:**
`var` variables attach to `window` object. `let` and `const` do not attach to `window`.

---

## 12. What is a function execution context?

**Answer:**
It is a context created whenever a function is called. Contains local variables, parameters, and the scope chain.

---

## 13. What is the difference between function declaration and function expression?

**Answer:**

* Function Declaration → hoisted, can be called before declaration.
* Function Expression → not hoisted, cannot be called before assignment.

---

## 14. Can you explain closures in context of `var` and `let`?

**Answer:**

* `var` → all closures share same reference → common bug.
* `let` → each closure gets its own value → correct behavior in loops.

---

## 15. How does hoisting affect functions and variables?

**Answer:**

* Variables declared with `var` → hoisted as `undefined`
* `let`/`const` → hoisted but in TDZ
* Function declarations → hoisted with full definition
* Function expressions → hoisted as undefined

---

## 16. What is the difference between `window.varName` and normal variable?

**Answer:**
`var` attaches to window, `let` and `const` do not. Accessing window.varName shows global var only.

---

## 17. How can TDZ cause runtime errors?

**Answer:**
Accessing `let` or `const` variables before initialization throws **ReferenceError**.

---

## 18. How does `let` behave in nested blocks?

**Answer:**
`let` variables are block-scoped, so inner block variables do not affect outer block variables.

---

## 19. What is the difference between `var` in global and function scope?

**Answer:**

* Global `var` → attaches to `window`
* Function `var` → only accessible inside function

---

## 20. How are constants different for primitive and reference types?

**Answer:**

* Primitive → cannot reassign
* Reference → properties can be mutated, reference cannot change

---

## 21. What is the output of this code?

```js
console.log(a);
var a = 5;
```

**Answer:** undefined (var hoisted, value assigned in code phase)

---

## 22. What is the output?

```js
console.log(b);
let b = 10;
```

**Answer:** ReferenceError (TDZ)

---

## 23. Explain memory phase and code phase with example.

**Answer:**

* Memory Phase: variables/functions stored
* Code Phase: values assigned

```js
var x;
let y;
const z = 100;
x = 10;
y = 20;
console.log(x, y, z);
```

Output: 10 20 100

---

## 24. How can variable shadowing occur?

**Answer:**
When inner block declares variable with same name as outer scope, inner variable shadows outer variable.

---

## 25. What are common mistakes with var inside loops?

**Answer:**
Using `var` in loops creates unexpected closure references → all callbacks get last value.

---

## 26. How do you avoid TDZ errors?

**Answer:**
Always declare `let` and `const` before accessing them. Avoid accessing variables before declaration.

---

## 27. Difference between function scope and block scope in ES6?

**Answer:**

* Function scope → `var` only
* Block scope → `let` and `const` can restrict access to block `{}`

---

## 28. Can `var` overwrite functions?

**Answer:**
Yes, `var` can overwrite function names if declared in same scope.

---

## 29. Why `let` is preferred over `var` in modern JS?

**Answer:**

* Avoids global pollution
* Block-scoped → safer
* Eliminates closure bugs in loops

---

## 30. How does JavaScript engine execute code?

**Answer:**

1. Creates Global Execution Context
2. Memory Phase → variables/functions stored
3. Code Phase → assigns values, executes code
4. Function calls create Function Execution Contexts
5. Context deleted after execution

---

# MCQs — 20 Questions

1. Which variable type is block-scoped?

   * a) var
   * b) let ✅
   * c) function
   * d) global

2. What will be the output?

```js
console.log(x);
var x = 10;
```

* a) 10
* b) undefined ✅
* c) ReferenceError
* d) null

3. Which keyword cannot be reassigned?

   * a) var
   * b) let
   * c) const ✅
   * d) None

4. What is TDZ?

   * a) Top Dead Zone
   * b) Temporal Dead Zone ✅
   * c) Temporary Declaration Zone
   * d) None

5. Which attaches to the window object in browser?

   * a) var ✅
   * b) let
   * c) const
   * d) all

6. Which of the following is function-scoped?

   * a) var ✅
   * b) let
   * c) const
   * d) all

7. Which of these is mutable even if declared with const?

   * a) string
   * b) number
   * c) object ✅
   * d) boolean

8. Which is true about hoisting?

   * a) var initialized as undefined ✅
   * b) let initialized as undefined
   * c) const initialized as undefined
   * d) function expressions hoisted with body

9. What is the error when accessing let before declaration?

   * a) TypeError
   * b) ReferenceError ✅
   * c) SyntaxError
   * d) None

10. Which keyword allows redeclaration in same scope?

    * a) var ✅
    * b) let
    * c) const
    * d) None

11. Loop closure problem occurs with which keyword?

    * a) var ✅
    * b) let
    * c) const
    * d) all

12. Which cannot be reassigned?

    * a) const ✅
    * b) let
    * c) var
    * d) none

13. What is output?

```js
console.log(typeof undeclaredVar);
```

```
- a) undefined ✅
- b) ReferenceError
- c) null
- d) object
```

14. Memory phase happens before?
- a) Code phase ✅
- b) Execution
- c) Function call
- d) None

15. Function declaration vs expression difference?

    * a) Both hoisted
    * b) Declaration hoisted ✅
    * c) Expression hoisted
    * d) None

16. Which keyword is preferred in modern JS?

    * a) var
    * b) let ✅
    * c) const
    * d) both b & c ✅

17. What happens when redeclaring var in global scope?

    * a) Error
    * b) Allowed ✅
    * c) TDZ
    * d) None

18. Can const primitive values be changed?

    * a) Yes
    * b) No ✅
    * c) Sometimes
    * d) None

19. Which of these is block scoped?

    * a) var
    * b) let ✅
    * c) function
    * d) global

20. Why use let over var?

    * a) Avoid global pollution ✅
    * b) Prevent closure bugs ✅
    * c) Block scoped ✅
    * d) All of above ✅

---

# Answer Key for MCQs

1. b
2. b
3. c
4. b
5. a
6. a
7. c
8. a
9. b
10. a
11. a
12. a
13. a
14. a
15. b
16. d
17. b
18. b
19. b
20. d
