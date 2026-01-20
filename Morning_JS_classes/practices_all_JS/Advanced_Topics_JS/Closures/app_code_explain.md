# JavaScript Closures - Detailed Examples and Explanations

This README.md explains **closures in JavaScript** with practical examples, key points, and detailed explanations. It's designed to be **editable and a single-file reference** for learning, interview prep, and coding skill enhancement.

---

## Definition

A **closure** is a function that remembers and can access variables from its outer (enclosing) function even after that function has finished execution.

**Uses of closures:** Data encapsulation, private variables, function factories, memoization, module patterns, and more.

---

## 1️⃣ Basic Closure Example

```javascript
function outerFunction() {
    let outerVariable = "Hello";

    function innerFunction() {
        console.log(outerVariable); // Closure: innerFunction remembers outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // logs "Hello"
```

**Explanation:**

* `innerFunction` remembers `outerVariable` even after `outerFunction` finishes.
* This is **closure in action**.

---

## 2️⃣ Closure with Parameters

```javascript
function greet(message) {
    return function(name) {
        console.log(`${message}, ${name}!`);
    };
}

const sayHello = greet("Hello");
sayHello("Alice"); // "Hello, Alice!"
sayHello("Bob");   // "Hello, Bob!"
```

**Explanation:**

* The outer variable `message` is preserved for multiple calls.
* Useful for creating **customized reusable functions**.

---

## 3️⃣ Closure for Private Variables

```javascript
function counter() {
    let count = 0; // private variable

    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
```

**Explanation:**

* `count` is only accessible via the returned function.
* Enables **data encapsulation** and state persistence.

---

## 4️⃣ Function Factory Using Closure

```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Explanation:**

* `multiplier` creates multiple specialized functions with different **closures**.
* Excellent for **dynamic function creation**.

---

## 5️⃣ Closure in Loops (Common Mistake & Fix)

**Problem without closure:**

```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // all log 4
    }, 1000);
}
```

**Fix using IIFE:**

```javascript
for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // logs 1, 2, 3
        }, 1000);
    })(i);
}
```

**Explanation:**

* Each iteration needs a separate closure to preserve the loop variable.
* Modern solution: use `let` (block-scoped).

---

## 6️⃣ Closure for Memoization

```javascript
function memoize(fn) {
    const cache = {};

    return function(x) {
        if (cache[x] !== undefined) {
            console.log("Fetching from cache");
            return cache[x];
        }
        console.log("Calculating result");
        const result = fn(x);
        cache[x] = result;
        return result;
    };
}

const square = memoize(x => x * x);
console.log(square(5)); // Calculating result -> 25
console.log(square(5)); // Fetching from cache -> 25
```

**Explanation:**

* Closure keeps the **cache alive** between function calls.
* Useful for **performance optimization**.

---

## 7️⃣ Advanced Example: Module Pattern

```javascript
const userModule = (function() {
    let name = "Waqar";
    let age = 25;

    return {
        getName: function() { return name; },
        setName: function(newName) { name = newName; },
        getAge: function() { return age; }
    };
})();

console.log(userModule.getName()); // "Waqar"
userModule.setName("Ali");
console.log(userModule.getName()); // "Ali"
console.log(userModule.age); // undefined (private)
```

**Explanation:**

* Closures simulate **private and public members**.
* Foundation of **module patterns** in JS.

---

## 8️⃣ Recursive Closures Example

```javascript
function makeAdder(x) {
    return function add(y) {
        if (y <= 0) return 0;
        return x + add(y - 1);
    };
}

const add5 = makeAdder(5);
console.log(add5(3)); // 15
```

**Explanation:**

* Inner function `add` **remembers `x`** across recursive calls.
* Without closure, `x` would be **undefined**, and recursion would fail.
* Closures are needed to **maintain outer variables** during recursive execution.

---

## ✅ Key Takeaways

1. Closures **remember outer variables** even after function execution.
2. Enable **private variables** and **data encapsulation**.
3. Useful for **function factories, memoization, and module patterns**.
4. Crucial in **loops, callbacks, and asynchronous code**.
5. Misuse can cause **memory retention**, so use closures wisely.
6. Mastering closures **enhances coding skills** and is highly valued in interviews.

---

**This file is fully editable and serves as a comprehensive guide to closures in JavaScript.**
