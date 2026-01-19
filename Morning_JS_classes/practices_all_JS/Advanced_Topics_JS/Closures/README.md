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
   Inner functions can access variables defined in outer functions.

2. **Persistent State**
   Closures allow variables to **persist** between function calls.

3. **Data Privacy / Encapsulation**
   Variables inside a closure can act as **private variables**.

4. **Memory Efficiency**
   Useful for keeping state without polluting the global namespace.

5. **Used in Functional Programming**
   Common in callbacks, event handlers, and function factories.

---

## 3. Basic Example

```javascript
function outerFunction() {
    let count = 0; // outer variable

    function innerFunction() {
        count++; // accessing outer variable
        console.log(count);
    }

    return innerFunction; // return the inner function
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3
```

**Explanation:**

* `count` is private to `outerFunction`.
* `innerFunction` remembers `count` even after `outerFunction` finishes.
* Each call to `counter()` increments `count`.

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
myAccount.deposit(50);   // Deposited: 50, New Balance: 150
myAccount.withdraw(70);  // Withdrawn: 70, Remaining Balance: 80
```

**Explanation:**

* `balance` is private and cannot be accessed directly.
* Only the methods `deposit` and `withdraw` can modify it.

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

**Explanation:**

* `multiplyBy` returns a new function that remembers the `factor`.
* Each returned function keeps its own closure.

---

## 6. Common Use Cases of Closures

1. **Data privacy / encapsulation**
2. **Function factories**
3. **Memoization / caching**
4. **Event handlers and callbacks**
5. **Maintaining state between function calls**

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

* Using an IIFE (Immediately Invoked Function Expression) creates a new scope each time.

---

## 9. Summary

* Closures allow **inner functions to remember outer variables**.
* They are used for **private variables, maintaining state, and functional programming patterns**.
* Understanding closures is **critical for JS mastery, coding interviews, and writing clean, modular code**.

---

**References:**

* [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* YouTube tutorials for visual explanation of closures.

```

---

If you want, I can **also provide a direct download link** for this `README.md` file, so you can grab it with **one click** and save it to your computer.  

Do you want me to do that next?

```
