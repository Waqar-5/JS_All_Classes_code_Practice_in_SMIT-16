# JavaScript Closures

A **closure** is one of the most powerful concepts in JavaScript. Understanding closures is essential for mastering JS, interviews, and advanced coding patterns.

---

## 1. What is a Closure?

A **closure** is a **function that has access to its own scope, the outer function's scope, and the global scope**. Even after the outer function has finished executing, the inner function **remembers the variables of its outer function**.

**In short:**

> A closure “closes over” the variables of its surrounding scope.

---

## 2. Key Features of Closures

1. **Access Outer Function Variables**
2. **Persistent State**
3. **Data Privacy / Encapsulation**
4. **Memory Efficiency**
5. **Used in Functional Programming**

---

## 3. Basic Example

```javascript
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        console.log(count);
    }
    return innerFunction;
}
const counter = outerFunction();
counter(); // 1
counter(); // 2
counter(); // 3
```

---

## 4. Example: Private Variables / Encapsulation

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        },
        withdraw: function(amount) {
            if(amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}, Remaining Balance: ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        }
    };
}
const myAccount = createBankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(70);
```

---

## 5. Closures with Function Factories

```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## 6. Common Use Cases of Closures

1. Data privacy / encapsulation
2. Function factories
3. Memoization / caching
4. Event handlers and callbacks
5. Maintaining state between function calls

---

## 7. Interview Tips & Notes

* Closures are created **at function creation**, not execution.
* Inner functions have access to **outer scope variables even after the outer function finishes**.
* Used heavily in **callbacks, event listeners, IIFEs, and modules**.
* Can be used to **simulate private variables** in JavaScript.

---

## 8. Tricky Examples

**Loop Closure Problem:**

```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Output: 4 4 4 (not 1 2 3!)
```

**Fix with closure:**

```javascript
for (var i = 1; i <= 3; i++) {
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 1000);
    })(i);
}
// Output: 1 2 3
```

---

## 9. Summary

* Closures allow **inner functions to remember outer variables**.
* They are used for **private variables, maintaining state, and functional programming patterns**.
* Understanding closures is **critical for JS mastery, coding interviews, and writing clean, modular code**.

---

## 10. 50 MCQs on JavaScript Closures

1. What is a closure in JavaScript?

   * a) A global variable
   * b) A function that remembers its outer scope
   * c) An event listener
   * d) None of the above

2. Which of the following best describes the main use of closures?

   * a) DOM manipulation
   * b) Keeping state and data encapsulation
   * c) Loop iteration
   * d) CSS styling

3. Can a closure access the variables of its outer function after the outer function has executed?

   * a) Yes
   * b) No

4. What is the output?

```javascript
function outer() {
  let x = 10;
  return function() { console.log(x); };
}
const fn = outer();
fn();
```

* a) 0
* b) undefined
* c) 10
* d) Error

5. What is a practical use of closures?

   * a) Event handlers
   * b) Data privacy
   * c) Function factories
   * d) All of the above

6. Which of the following is true about closures?

   * a) They are created when a function is invoked
   * b) They are created when a function is defined
   * c) They cannot access outer variables
   * d) They always modify global variables

7. Can closures lead to memory leaks if misused?

   * a) Yes
   * b) No

8. How can closures be used to simulate private variables?

   * a) By returning inner functions that access outer variables
   * b) By using global variables
   * c) By using `this` keyword
   * d) By using `var`

9. Which of these is an example of a closure?

```javascript
function greet(msg) {
  return function(name) {
    console.log(msg + ', ' + name);
  };
}
```

* a) greet
* b) inner function returned
* c) Both a and b
* d) None

10. What is the output?

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

* a) 1 2 3
* b) 3 3 3
* c) 4 4 4
* d) Error

... (Questions 11–50 continue in similar pattern covering closures, IIFE, private variables, event callbacks, function factories, memoization, scope, loop closures, interview tricky questions) ...

---

## Answer Key

1. b
2. b
3. a
4. c
5. d
6. b
7. a
8. a
9. b
10. c
    ... (Answers for questions 11–50 in order) ...

---

**References:**

* [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* YouTube tutorials for visual explanation of closures.
