# JavaScript `call()`, `apply()`, and `bind()` – Complete Guide

> This README covers everything you need to know about `call()`, `apply()`, and `bind()` in JavaScript — including definitions, syntax, examples, differences, best practices, and interview-focused key points. Perfect for developers and coding interviews.

---

## **1. `call()`**

### **Definition:**

`call()` is a method that **invokes a function immediately**, allowing you to explicitly set the `this` context of that function.

### **Syntax:**

```javascript
func.call(thisArg, arg1, arg2, ...);
```

### **Example:**

```javascript
const person = { name: "Alice" };

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.call(person, "Hello", "!");
// Output: Hello, Alice!
```

### **Key Points:**

* Executes **immediately**.
* Arguments are passed **individually**.
* Commonly used for **function borrowing** between objects.

---

## **2. `apply()`**

### **Definition:**

`apply()` is similar to `call()`, but arguments are passed as an **array** instead of individually.

### **Syntax:**

```javascript
func.apply(thisArg, [arg1, arg2, ...]);
```

### **Example:**

```javascript
const numbers = [5, 6, 2];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.apply(null, numbers));
// Output: 13
```

### **Key Points:**

* Executes **immediately**.
* Arguments must be in an **array**.
* Useful when handling **dynamic arrays of arguments**.

---

## **3. `bind()`**

### **Definition:**

`bind()` returns a **new function** with the `this` context bound to a specific object. It **does not execute immediately**.

### **Syntax:**

```javascript
const newFunc = func.bind(thisArg, arg1, arg2, ...);
```

### **Example:**

```javascript
const user = { name: "Bob" };

function sayHi(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const sayHiToBob = sayHi.bind(user);
sayHiToBob("Hey");
// Output: Hey, Bob
```

### **Key Points:**

* Returns a **new function**.
* Does **not execute immediately**.
* Arguments can be **preset** (partial application).
* Perfect for **event handlers** and **callbacks**.

---

## **4. `call()` vs `apply()` vs `bind()` – Quick Comparison**

| Feature       | `call`                     | `apply`                         | `bind`                                     |
| ------------- | -------------------------- | ------------------------------- | ------------------------------------------ |
| Executes now? | ✅ Yes                      | ✅ Yes                           | ❌ No, returns a new function               |
| Arguments     | Individually               | Array                           | Individually (pre-set)                     |
| Returns       | Function result            | Function result                 | New bound function                         |
| Use case      | Borrow function, immediate | Borrow function with array args | Bind `this` for later, partial application |

---

## **5. Best Practices & Interview Tips**

1. `call` and `apply` **execute immediately**, while `bind` creates a **new function** for later use.
2. Use `apply` for **arrays or variable-length arguments**.
3. `bind` is widely used in **React class components** to maintain `this` in event handlers.
4. Understand **function borrowing** using `call`/`apply` to reuse methods.
5. Remember: `bind` supports **partial application**, allowing you to preset some arguments.
6. Key interview questions often focus on **differences, `this` behavior, and practical usage**.

---

## **6. Practical Examples**

### Function Borrowing:

```javascript
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce(city) {
  console.log(`Hi, I am ${this.name} from ${city}`);
}

introduce.call(person1, "Paris"); // Hi, I am Alice from Paris
introduce.apply(person2, ["London"]); // Hi, I am Bob from London
```

### Partial Application with `bind`:

```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // 'a' preset to 2
console.log(double(5)); // 10
```

---

> This guide is designed for developers preparing for interviews and for anyone who wants to master `call()`, `apply()`, and `bind()` in JavaScript. Follow these examples, understand the key differences, and practice to ace coding interviews.

```

---

If you want, I can also **make this file visually even better with colored code blocks, emojis, and tips sections** — something that **stands out in your GitHub repo** and is highly readable for interviews.  

Do you want me to do that?

```
