# JavaScript `apply()` – Comprehensive Guide for Developers

> This README.md contains all the key points, best practices, and professional examples of JavaScript's `apply()` method. It is designed for interview preparation and enhancing developer knowledge.

---

## **1. Definition:**

`apply()` is a JavaScript method that calls a function with a given `this` value, and arguments provided as an **array or array-like object**.

**Syntax:**

```javascript
func.apply(thisArg, [argsArray])
```

* `thisArg` – The object to use as `this` inside the function.
* `argsArray` – An array or array-like object of arguments to pass to the function.

---

## **2. Key Points Every Developer Must Know:**

1. **Change Context:** `apply()` can change the `this` value of any function.
2. **Arguments as Array:** Pass arguments as an array, unlike `call()` which passes individually.
3. **Immediate Execution:** Unlike `bind()`, `apply()` executes the function immediately.
4. **Function Borrowing:** You can use a method of one object on another object.
5. **Dynamic Arguments:** Useful when the number of arguments is unknown or dynamic.
6. **Array-like Objects:** Can be used to convert `arguments` objects into arrays.
7. **Global Context:** `thisArg` can be `null` or `undefined`, which sets `this` to global object in non-strict mode.
8. **Strict Mode:** In strict mode, `this` will remain `undefined` if `null` is passed.
9. **Use with Math Functions:** Commonly used with `Math.max.apply(null, array)` or `Math.min.apply(null, array)`.
10. **Function Borrowing Example:**

```javascript
const person1 = {name: 'Alice'};
const person2 = {name: 'Bob'};
function greet(greeting) {
  console.log(`${greeting}, I am ${this.name}`);
}
greet.apply(person2, ['Hello']); // Output: Hello, I am Bob
```

---

## **3. Examples:**

### **Example 1: Using apply() with Math.max**

```javascript
const numbers = [10, 20, 30, 40];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 40
```

### **Example 2: Function Borrowing**

```javascript
const obj1 = {name: 'Alice'};
const obj2 = {name: 'Bob'};
function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
introduce.apply(obj2, ['Paris', 'France']); // Output: Bob from Paris, France
```

### **Example 3: Converting arguments object to array**

```javascript
function sum() {
  const args = Array.prototype.slice.apply(arguments);
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4)); // Output: 10
```

### **Example 4: Merging Arrays**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // Output: [1,2,3,4,5,6]
```

### **Example 5: Using apply() with Anonymous Functions**

```javascript
const numbers = [5, 10, 15];
(function() {
  console.log(Math.max.apply(null, this));
}).apply(numbers); // Output: 15
```

---

## **4. Differences from call() and bind():**

| Feature              | apply()                    | call()             | bind()                   |
| -------------------- | -------------------------- | ------------------ | ------------------------ |
| Arguments            | Array or array-like object | Comma-separated    | Comma-separated (preset) |
| Returns              | Result of function         | Result of function | New function             |
| Executes Immediately | ✅                          | ✅                  | ❌                        |
| Function Borrowing   | ✅                          | ✅                  | ✅                        |
| Partial Application  | ❌                          | ❌                  | ✅                        |

---

## **5. Best Practices:**

* Use `apply()` when you have arguments as an array.
* Use `apply()` for function borrowing between objects.
* Use with `Math` functions to find min/max in arrays.
* For partial function application, prefer `bind()`.
* Handle strict mode carefully to avoid `undefined` this context.

---

This file is **editable** and designed as a one-stop reference for `apply()` for interview preparation, exams, and practical JavaScript development.
