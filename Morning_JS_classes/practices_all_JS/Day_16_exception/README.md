# 🌟 JavaScript Exceptions and Event Handling – Complete Guide

This README.md file provides **all key points, explanations, and code examples** for the topics:

* Exceptions: `try` and `catch`
* Exceptions: `throw`
* Handling events in JavaScript

It’s designed for both beginners and advanced developers to **fully understand the concepts** and excel in exams or interviews.

---

## 1️⃣ Exceptions: `try` and `catch`

### Key Points:

* `try` block is used to wrap code that might **throw an error**.
* `catch` block handles the error gracefully.
* Prevents program termination due to runtime errors.
* Optional `finally` block executes **always**, whether error occurs or not.
* Useful for handling **network requests, DOM manipulations, and invalid operations**.

### Syntax:

```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that runs always
}
```

### Example 1: Basic Error Handling

```javascript
try {
    let result = riskyOperation(); // may throw
    console.log('Result:', result);
} catch (err) {
    console.error('Error occurred:', err.message);
} finally {
    console.log('Operation completed');
}
```

### Example 2: Handling Reference Error

```javascript
try {
    console.log(x); // x is not defined
} catch (err) {
    console.error('Caught an error:', err.name);
}
```

### Tips:

* Always log or handle `err.message` for clarity.
* `finally` block is ideal for **cleanup tasks**, like closing files or stopping loaders.
* Avoid empty `catch` blocks; it hides errors.

---

## 2️⃣ Exceptions: `throw`

### Key Points:

* `throw` is used to **generate custom errors**.
* Can throw **built-in Error objects** or **custom messages/objects**.
* Often used for **validating input** or stopping execution when preconditions fail.

### Syntax:

```javascript
throw expression;
```

* `expression` can be string, number, boolean, or Error object.

### Example 1: Throwing a Built-in Error

```javascript
function checkAge(age) {
    if(age < 18) {
        throw new Error('Age must be 18 or older');
    }
    return true;
}

try {
    checkAge(15);
} catch (err) {
    console.error('Validation failed:', err.message);
}
```

### Example 2: Throwing a Custom Object

```javascript
try {
    throw {code: 404, message: 'Resource not found'};
} catch(err) {
    console.log('Error code:', err.code);
    console.log('Message:', err.message);
}
```

### Tips:

* Combine `throw` with `try/catch` for **controlled error handling**.
* Use meaningful messages for **better debugging**.
* Avoid throwing primitive types like string or number in **professional code**; prefer `Error` objects.

---

## 3️⃣ Handling Events in JavaScript

### Key Points:

* Events are **actions** that occur in the browser (clicks, keyboard input, page load).
* Event handlers respond to these events.
* Two ways to attach event handlers:

  1. **Inline HTML attributes** (not recommended)
  2. **JavaScript methods** (`addEventListener` is preferred)
* `event` object provides **information about the event**.
* Use **event delegation** to handle events on multiple child elements efficiently.

### Example 1: Using `addEventListener`

```javascript
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
});
```

### Example 2: Event Object Properties

```javascript
window.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Shift key pressed?', event.shiftKey);
});
```

### Example 3: Event Delegation

```javascript
const list = document.getElementById('myList');
list.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === 'LI') {
        console.log('List item clicked:', e.target.textContent);
    }
});
```

### Tips:

* Always prefer `addEventListener` over inline handlers.
* Use **passive listeners** for scroll and touch events for performance: `{passive:true}`.
* Remove unused listeners using `removeEventListener` to prevent memory leaks.
* Use `event.preventDefault()` to **stop default browser actions** (e.g., form submission).
* Use `event.stopPropagation()` to **prevent event bubbling**.

---

## 💡 Summary / Best Practices

1. **Exceptions:** Use `try/catch` to handle errors gracefully. Always include meaningful error messages.
2. **Throwing Errors:** Use `throw` to create custom errors. Prefer `Error` objects over strings.
3. **Events:** Always attach events using `addEventListener`. Use event delegation for multiple child elements.
4. **Performance:** Remove unused event listeners. Use passive listeners where possible.
5. **Debugging:** Log errors and events for better visibility and exam preparation.

> Mastering these concepts allows you to write **robust, maintainable, and professional JavaScript code** and confidently handle any exam or interview scenario.
