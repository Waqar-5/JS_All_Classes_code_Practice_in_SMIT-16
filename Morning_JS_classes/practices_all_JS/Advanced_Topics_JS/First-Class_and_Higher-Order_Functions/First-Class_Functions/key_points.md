# 📝 First-Class Functions: Key Points for Interviews

> **Essential concepts, professional format, and most commonly asked in interviews**

---

## 1. Definition

* Functions that are treated as **values**.
* Can be **assigned to variables**, **passed as arguments**, and **returned from other functions**.

## 2. Core Features

* **Assignment:** `const f = function() {}`
* **Passing as arguments:** `arr.map(fn)`
* **Returning functions:** `const add = a => b => a + b`
* **Stored in data structures:** Arrays, objects, maps.
* **Anonymous functions** are allowed.

## 3. Relation to Higher-Order Functions

* **HOFs require first-class functions** to exist.
* Any function that takes or returns functions is a HOF.
* Example:

```js
const hof = fn => x => fn(x*2);
```

## 4. Advantages

* **Abstraction:** Functions can be passed to abstract behavior.
* **Reusability:** Generic functions can accept different callbacks.
* **Dynamic behavior:** Functions can be chosen at runtime.
* **Closures:** Enable inner functions to retain access to outer variables.
* **Testability:** Easier to mock or inject dependencies.

## 5. Common Interview Questions

* Define first-class function in one sentence.
* Show example of assigning a function to a variable.
* Difference between function reference vs invocation.
* Can first-class functions be recursive?
* How first-class functions enable closures?
* Difference between first-class functions and methods.
* Relation to higher-order functions.
* Storing functions in arrays or objects.
* Using first-class functions in async code.
* How they improve testability and code reuse.

## 6. Practical Examples

```js
// Assigning to variable
const greet = () => console.log('Hello');

// Passing as argument
[1,2,3].map(n => n*2);

// Returning function
const multiply = a => b => a*b;
console.log(multiply(2)(3)); // 6

// Closure example
function outer(x){
  return function inner(y){
    return x + y;
  }
}
const add5 = outer(5);
console.log(add5(3)); // 8
```

## 7. Tips for Interviews

* Remember: **Functions as first-class values** is the key concept.
* Always distinguish **reference vs execution** (`fn` vs `fn()`).
* Understand **relation to HOFs** for advanced questions.
* Prepare **examples in JS, Python, and React**.
* Be ready to explain **closures, callbacks, and async usage**.

---

> Mastering these key points ensures you can confidently answer **any first-class function question** in interviews.
