# First-Class Functions (FCF) in JavaScript

> This document explains **First-Class Functions** with practical examples, why they are first-class, and key concepts in a **professional README format**.

---

## 1️⃣ Storing Functions in Arrays

```js
const operations = [
    function(a, b) { return a + b; },  // addition function
    function(a, b) { return a - b; },  // subtraction function
    function(a, b) { return a * b; },  // multiplication function
    function(a, b) { return a / b; }   // division function
];

console.log(operations[0](10, 5)); // 15
```

**Why it’s FCF:**

* Functions are treated like any other value.
* Stored in an array (`operations`).
* Can be called dynamically: `operations[0](10, 5)`.

**Key Point:** Storing, passing, and calling functions like numbers or strings makes them first-class.

---

## 2️⃣ Storing Functions in Objects

```js
const calculator = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    multiply: function(a, b) { return a * b; },
    divide: function(a, b) { return a / b; }
};

console.log(calculator.add(7, 3)); // 10
```

**Why it’s FCF:**

* Functions are stored as values in object properties.
* Can be called using the property name.

**Key Point:** Storing functions in objects is possible because they are first-class.

---

## 3️⃣ Dynamic Function Selection

```js
function dynamicCalculate(a, b, operationName) {
    const operations = {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y
    };
    return operations[operationName](a, b);
}

console.log(dynamicCalculate(8, 4, "add"));      // 12
console.log(dynamicCalculate(8, 4, "multiply")); // 32
```

**Why it’s FCF:**

* Object stores functions as values.
* `operations[operationName]` retrieves function dynamically.
* Can call the function later.

**Key Point:** Dynamic selection works because functions are first-class.

---

## 4️⃣ First-Class Functions with Array Methods

```js
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function(num) { return num * num; });
```

**Why it’s FCF:**

* `map()` expects a function as argument.
* Passed function is treated as value, not called immediately.

**Key Point:** Passing functions to other functions is possible only because they are first-class.

---

## 5️⃣ Returning Functions Dynamically (Factory Pattern)

```js
function operationFactory(op) {
    if(op === "square") return function(x) { return x * x; };
    if(op === "cube") return function(x) { return x * x * x; };
}

const square = operationFactory("square");
const cube = operationFactory("cube");

console.log(square(5)); // 25
console.log(cube(3));   // 27
```

**Why it’s FCF:**

* `operationFactory` returns a function, not a value.
* Returned function stored in variable and called later.

**Key Point:** Returning a function from a function is possible only because functions are first-class.

---

## 💡 Visual Summary of First-Class Function Features

1. Can be stored in a **variable** → `const sum = add`
2. Can be stored in an **array** → `operations[0] = function() { ... }`
3. Can be stored in an **object** → `calculator.add = function() { ... }`
4. Can be **passed as argument** → `map(callback)`
5. Can be **returned from function** → `operationFactory("square")`
6. Can be **called dynamically** → `operations[operationName]()`

**✅ Conclusion:** All examples demonstrate FCF because functions are treated as values, stored, passed, returned, and called dynamically, just like numbers or strings.
