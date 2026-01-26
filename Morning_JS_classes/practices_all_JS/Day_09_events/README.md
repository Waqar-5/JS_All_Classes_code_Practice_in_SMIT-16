# JavaScript Fundamentals: Scripts, Comments, and Events

This README.md file provides a **complete guide** on the topics of placing scripts, commenting, and handling events in JavaScript. It is designed for beginners to advanced learners and can help you **crack exams and interviews**.

---

## 1. Placing Scripts

### Key Points:

* JavaScript code can be placed in **three main ways**:

  1. **Inline**: Directly in the HTML element using `onclick`, `onload`, etc.
  2. **Internal**: Inside `<script>` tags in the HTML file.
  3. **External**: Using a separate `.js` file and linking with `<script src="filename.js"></script>`.

### Best Practices:

* Place scripts **before closing `</body>` tag** for faster page load.
* Use **external scripts** for modularity and reusability.
* Avoid inline scripts for **maintainability and security**.

### Code Examples:

**Inline Script:**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

**Internal Script:**

```html
<script>
  function greet() {
    console.log('Hello, World!');
  }
  greet();
</script>
```

**External Script:**

```html
<script src="script.js"></script>
```

```javascript
// script.js
function greet() {
  console.log('Hello from external JS');
}
greet();
```

---

## 2. Commenting

### Key Points:

* **Single-line comments:** `// comment`
* **Multi-line comments:** `/* comment */`
* Comments are **ignored by the browser** and are used for:

  * Explaining code logic
  * Debugging
  * Temporarily disabling code

### Code Examples:

```javascript
// This is a single-line comment
console.log('Hello');

/*
  This is a
  multi-line comment
*/
console.log('World');
```

### Best Practices:

* Comment **why**, not **what** the code does.
* Keep comments **short and meaningful**.
* Avoid over-commenting.

---

## 3. Events: Link

### Key Points:

* Events allow JavaScript to **react to user actions**.
* `onclick` is commonly used with links.

### Example:

```html
<a href="#" onclick="alert('Link clicked!')">Click Here</a>
```

* **Modern method** using `addEventListener`:

```javascript
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
  event.preventDefault(); // prevent default link behavior
  alert('Link clicked using addEventListener');
});
```

---

## 4. Events: Button

### Key Points:

* Buttons can trigger **click, double-click, mouseover**, and other events.

### Example:

```html
<button id="myButton">Click Me</button>
<script>
const btn = document.getElementById('myButton');
btn.addEventListener('click', () => {
  alert('Button clicked!');
});
</script>
```

* Can also handle **disable/enable states** dynamically.

---

## 5. Events: Mouse

### Key Points:

* Mouse events include: `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`, `mousedown`, `mouseup`.
* Useful for interactive UI effects.

### Example:

```html
<div id="box" style="width:100px;height:100px;background:red"></div>
<script>
const box = document.getElementById('box');
box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'green';
});
box.addEventListener('mouseout', () => {
  box.style.backgroundColor = 'red';
});
</script>
```

---

## 6. Events: Fields

### Key Points:

* Form fields trigger events like `focus`, `blur`, `input`, `change`, `submit`.
* Useful for validation and dynamic behavior.

### Example:

```html
<input type="text" id="name" placeholder="Enter name">
<script>
const nameField = document.getElementById('name');
nameField.addEventListener('focus', () => {
  console.log('Field focused');
});
nameField.addEventListener('blur', () => {
  console.log('Field lost focus');
});
nameField.addEventListener('input', (event) => {
  console.log('Current value:', event.target.value);
});
</script>
```

### Best Practices:

* Always use `addEventListener` instead of inline events.
* Use `event.preventDefault()` when preventing default actions.
* Keep event handlers **separated** from HTML for clean code.

---

## Summary

* **Placing scripts:** Inline, Internal, External; external is preferred.
* **Commenting:** Single-line `//`, Multi-line `/* */`.
* **Events:** Link (`click`), Button (`click`, `dblclick`), Mouse (`mouseover`, `mouseout`), Fields (`focus`, `blur`, `input`).
* Use **addEventListener** for modern, clean, and maintainable code.
* **Best practices:** Separate logic from HTML, meaningful comments, modular scripts.

This file can be **edited, copied, or downloaded** and is designed to help you master these topics and solve **exam and interview questions efficiently**.
