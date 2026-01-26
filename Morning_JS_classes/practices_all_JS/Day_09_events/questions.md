# JavaScript: Placing Scripts, Commenting, and Events – 90 Questions with Detailed Answers

This document contains **90 questions with detailed answers** on JavaScript topics, designed to help you **master these concepts and crack exams or interviews**.
Topics covered:

* Placing Scripts
* Commenting
* Events: Link
* Events: Button
* Events: Mouse
* Events: Fields

---

## Section 1: Placing Scripts (15 Questions)

### 1. Where can JavaScript be placed in an HTML document?

**Options:**
A) Only in `<head>`
B) Only in `<body>`
C) `<head>` or `<body>`
D) Only in external files

**Answer:** C) `<head>` or `<body>`

**Explanation:** Scripts in `<head>` run before content loads, scripts at the end of `<body>` run after content loads.

**Example:**

```html
<script>
  console.log('Script in head');
</script>
```

### 2. Why is placing scripts at the end of `<body>` recommended?

**Answer:** It ensures the HTML loads first, improving page rendering and avoiding undefined elements.

**Example:**

```html
<body>
  <h1>Hello World</h1>
  <script>
    console.log(document.querySelector('h1').textContent);
  </script>
</body>
```

### 3. How do you include an external JavaScript file?

**Answer:** Using the `src` attribute in `<script>`.

**Example:**

```html
<script src="script.js"></script>
```

### 4. Can you use both internal and external scripts together?

**Answer:** Yes, internal scripts can coexist with external scripts.

### 5. What happens if a script in `<head>` references an element not yet loaded?

**Answer:** JavaScript will throw an error or `null` because the element does not exist in the DOM yet.

### 6. How to ensure scripts in `<head>` run after DOM loads?

**Answer:** Use `DOMContentLoaded` event.

```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
});
```

### 7. Can you place scripts in `<footer>`?

**Answer:** Yes, placing scripts before `</body>` is common.

### 8. Difference between placing scripts in `<head>` vs `<body>`?

**Answer:** `<head>`: loads early, may block HTML; `<body>`: loads after HTML, faster rendering.

### 9. What is `defer` attribute?

**Answer:** Tells browser to execute script after HTML parsing.

```html
<script src="script.js" defer></script>
```

### 10. What is `async` attribute?

**Answer:** Script executes as soon as it's downloaded, independent of HTML parsing.

```html
<script src="script.js" async></script>
```

### 11. Can scripts be placed inside HTML tags like `<p>`?

**Answer:** No, `<script>` must be a block element.

### 12. What happens if a script src is incorrect?

**Answer:** Browser fails silently or throws 404 error in console.

### 13. Is it possible to dynamically add scripts?

**Answer:** Yes, using DOM methods.

```javascript
let s = document.createElement('script');
s.src = 'script.js';
document.body.appendChild(s);
```

### 14. Can inline scripts access external script functions?

**Answer:** Yes, if the external script is loaded first.

### 15. Which method is recommended for modern web pages?

**Answer:** Place scripts at the end of `<body>` or use `defer` in `<head>`.

---

## Section 2: Commenting (15 Questions)

### 16. How do you write a single-line comment?

**Answer:** Use `//`

```javascript
// This is a single-line comment
```

### 17. How do you write multi-line comments?

**Answer:** Use `/* ... */`

```javascript
/* This is
   a multi-line comment */
```

### 18. Are comments executed?

**Answer:** No, they are ignored by JavaScript engine.

### 19. Can comments be used inside code blocks?

**Answer:** Yes, anywhere outside string literals.

### 20. Can you nest multi-line comments?

**Answer:** No, nesting `/* */` is not allowed.

### 21. Why are comments important?

**Answer:** To explain code, improve readability, and maintain code.

### 22. Can comments help during debugging?

**Answer:** Yes, you can comment out code to prevent execution.

### 23. Do comments increase page load time?

**Answer:** Slightly, but negligible in modern browsers.

### 24. Can comments contain code?

**Answer:** Yes, but it won’t execute.

### 25. Are `//` comments allowed in HTML?

**Answer:** No, use `<!-- -->` for HTML.

### 26. Can you use comments inside strings?

**Answer:** No, they become part of the string.

### 27. Example of commenting out a function:

```javascript
/*
function test() {
  console.log('Will not run');
}
*/
```

### 28. Can comments be used in JSON?

**Answer:** No, JSON doesn’t allow comments.

### 29. How to document function parameters?

```javascript
/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 */
function add(a,b){ return a+b; }
```

### 30. Difference between `//` and `/* */`?

**Answer:** `//` is single-line, `/* */` is multi-line.

### 31. Can comments affect program logic?

**Answer:** No, they are ignored.

### 32. Can comments be used to temporarily disable code?

**Answer:** Yes, common during testing.

### 33. Are comments recommended in production code?

**Answer:** Yes, but avoid excessive inline comments.

### 34. Can comments include special characters?

**Answer:** Yes, they are ignored.

### 35. Example of a helpful comment:

```javascript
// Loop through array to calculate sum
for(let i=0;i<arr.length;i++){ sum+=arr[i]; }
```

---

## Section 3: Events – Link (15 Questions)

### 36. How do you handle a click event on a link?

**Answer:** Use `onclick` or `addEventListener`.

```html
<a href="#" onclick="alert('Clicked!')">Click me</a>
```

### 37. How to prevent default link behavior?

**Answer:** Use `event.preventDefault()`

```javascript
document.querySelector('a').addEventListener('click', function(e){
  e.preventDefault();
  alert('Link clicked but not followed');
});
```

### 38. Can you use inline JavaScript for links?

**Answer:** Yes, using `onclick`.

### 39. Difference between inline and external event handling?

**Answer:** Inline mixes HTML & JS; external separates JS logic.

### 40. What event types work for links?

**Answer:** `click`, `mouseover`, `mouseout`, `focus`, `blur`.

### 41. Example using `addEventListener`:

```javascript
let link = document.querySelector('a');
link.addEventListener('click', function(){
  console.log('Link clicked');
});
```

### 42. Can a link have multiple event listeners?

**Answer:** Yes, `addEventListener` allows multiple.

### 43. What is `this` inside an event handler?

**Answer:** Refers to the element the event is bound to.

### 44. Can event delegation work for links?

**Answer:** Yes, using parent element and `event.target`.

### 45. How to remove a click event listener?

```javascript
link.removeEventListener('click', handlerFunction);
```

### 46. Example using `return false`:

```html
<a href="https://example.com" onclick="alert('No navigation'); return false;">Test</a>
```

### 47. Can you trigger link click programmatically?

```javascript
link.click();
```

### 48. Can links respond to keyboard events?

**Answer:** Yes, like `keypress` or `keydown`.

### 49. Difference between `onclick` attribute and `addEventListener`?

**Answer:** `addEventListener` allows multiple handlers, attribute allows only one.

### 50. Best practice for handling link events?

**Answer:** Use `addEventListener` and prevent default if needed.

---

## Section 4: Events – Button (15 Questions)

### 51. How to handle a button click?

**Answer:** Use `onclick` or `addEventListener`.

```html
<button id="btn">Click</button>
<script>
document.getElementById('btn').addEventListener('click', function(){
  alert('Button clicked');
});
</script>
```

### 52. Can you disable a button via JavaScript?

**Answer:** Yes.

```javascript
document.getElementById('btn').disabled = true;
```

### 53. How to detect double-click on a button?

**Answer:** Use `dblclick` event.

### 54. How to prevent button default form submit?

```javascript
document.querySelector('button').addEventListener('click', function(e){ e.preventDefault(); });
```

### 55. Can a button trigger multiple functions?

**Answer:** Yes, using `addEventListener` multiple times.

### 56. Example using inline click:

```html
<button onclick="console.log('Inline click')">Click</button>
```

### 57. Difference between `type="button"` and `type="submit"`?

**Answer:** `submit` submits form, `button` does not.

### 58. How to change button text dynamically?

```javascript
document.getElementById('btn').textContent = 'New Text';
```

### 59. Can button handle mouse events?

**Answer:** Yes, like `mouseenter`, `mouseleave`.

### 60. How to remove button click listener?

```javascript
btn.removeEventListener('click', handler);
```

### 61. Can buttons trigger keyboard events?

**Answer:** Yes, `keydown`, `keyup`.

### 62. Can button have focus event?

**Answer:** Yes, `focus` and `blur`.

### 63. How to detect right-click on a button?

**Answer:** Use `contextmenu` event.

### 64. Can a button trigger a link click?

**Answer:** Yes, programmatically: `document.querySelector('a').click();`

### 65. Best practice for button events?

**Answer:** Use `addEventListener`, separate JS logic from HTML.

---

## Section 5: Events – Mouse (15 Questions)

### 66. What mouse events are commonly used?

**Answer:** `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`, `mousemove`.

### 67. How to track mouse coordinates?

```javascript
document.addEventListener('mousemove', function(e){
  console.log(e.clientX, e.clientY);
});
```

### 68. What is `mouseover` vs `mouseenter`?

**Answer:** `mouseenter` does not bubble, `mouseover` bubbles.

### 69. How to detect right-click?

```javascript
document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
```

### 70. Can mouse events be attached to any element?

**Answer:** Yes.

### 71. Difference between `mousedown` and `mouseup`?

**Answer:** `mousedown` triggers when pressing mouse, `mouseup` when released.

### 72. Can you trigger a mouse event programmatically?

**Answer:** Yes, using `element.dispatchEvent`.

### 73. How to handle mouse wheel events?

**Answer:** Use `wheel` event.

### 74. Can mouse events be used on non-visible elements?

**Answer:** No, element must be rendered.

### 75. How to detect double right-click?

**Answer:** Combine `dblclick` with `event.button` check.

### 76. How to change cursor on hover?

```css
div:hover { cursor: pointer; }
```

### 77. Can mouse events bubble?

**Answer:** Yes, except `mouseenter` and `mouseleave`.

### 78. How to stop event propagation?

```javascript
e.stopPropagation();
```

### 79. Can you get the target element of mouse event?

**Answer:** Yes, using `e.target`.

### 80. Best practice for mouse events?

**Answer:** Use `addEventListener` and event delegation where possible.

---

## Section 6: Events – Fields (15 Questions)

### 81. What field events are common?

**Answer:** `focus`, `blur`, `input`, `change`, `keydown`, `keyup`, `keypress`.

### 82. How to detect input in a text field?

```javascript
document.querySelector('input').addEventListener('input', function(){
  console.log(this.value);
});
```

### 83. Difference between `change` and `input`?

**Answer:** `input` fires on each keystroke, `change` fires on losing focus.

### 84. How to validate a field on blur?

```javascript
document.querySelector('input').addEventListener('blur', function(){
  if(this.value===''){ alert('Required'); }
});
```

### 85. How to handle key events?

**Answer:** Use `keydown`, `keyup`, `keypress`.

### 86. Can fields trigger focus and blur programmatically?

```javascript
input.focus();
input.blur();
```

### 87. How to restrict input to numbers?

```javascript
input.addEventListener('keypress', function(e){
  if(!/[0-9]/.test(e.key)){ e.preventDefault(); }
});
```

### 88. How to get field value dynamically?

```javascript
let val = document.querySelector('input').value;
```

### 89. Difference between `readonly` and `disabled`?

**Answer:** `readonly` allows focus & selection, `disabled` blocks interaction.

### 90. Best practice for field events?

**Answer:** Use `addEventListener`, validate input, avoid inline JS.

---

This file is **fully editable**, and you can copy it as `README.md` to study, test, or integrate into your projects.
