# DOM Manipulation Mastery — Complete Notes (Beginner to Advanced)

This README covers **core DOM manipulation topics** required for:

* Front-end development
* JavaScript interviews
* Exams and practical projects

Topics Included:
49. Reading field values
50. Setting field values
51. Reading and setting paragraph text
52. Manipulating images and text
53. Swapping images
54. Swapping images and setting classes
55. Setting styles
56. Target all elements by tag name
57. Target some elements by tag name

---

## 49. Reading Field Values

### What it means

Reading the value entered by a user into an input field (text box, email, password, etc.)

### Why it matters

* Form validation
* User input handling
* Dynamic UI updates

### Code Example

```html
<input type="text" id="username" />
<button onclick="readValue()">Read</button>

<script>
function readValue() {
  const value = document.getElementById("username").value;
  console.log(value);
}
</script>
```

### Key Points

* `.value` is used for form fields
* Always read value inside an event (click, submit, change)

---

## 50. Setting Field Values

### What it means

Programmatically putting text into an input field

### Why it matters

* Auto-fill forms
* Reset fields
* Prefill data from APIs

### Code Example

```js
document.getElementById("username").value = "Waqar Ali";
```

### Advanced

```js
function setValue(id, value) {
  document.getElementById(id).value = value;
}
```

---

## 51. Reading and Setting Paragraph Text

### What it means

Getting or changing text inside a paragraph

### Methods

* `innerText`
* `textContent`
* `innerHTML`

### Code Example

```html
<p id="para">Hello World</p>

<script>
const p = document.getElementById("para");
console.log(p.innerText);

p.innerText = "Updated Text";
</script>
```

### Differences

| Property    | Behavior      |
| ----------- | ------------- |
| innerText   | Visible text  |
| textContent | Raw text      |
| innerHTML   | Includes HTML |

---

## 52. Manipulating Images and Text

### What it means

Changing images or text dynamically

### Image Change Example

```html
<img id="pic" src="img1.jpg" />
<button onclick="changeImage()">Change</button>

<script>
function changeImage() {
  document.getElementById("pic").src = "img2.jpg";
}
</script>
```

### Text Change Example

```js
document.getElementById("para").innerText = "New content";
```

---

## 53. Swapping Images

### What it means

Replacing one image with another

### Code Example

```js
const img = document.getElementById("pic");
img.src = img.src.includes("img1") ? "img2.jpg" : "img1.jpg";
```

---

## 54. Swapping Images and Setting Classes

### What it means

Change image and apply a class

### Code Example

```js
const img = document.getElementById("pic");
img.src = "img2.jpg";
img.classList.add("highlight");
```

### Toggle Example

```js
img.classList.toggle("active");
```

---

## 55. Setting Styles

### What it means

Applying inline CSS using JavaScript

### Code Example

```js
const box = document.getElementById("box");
box.style.backgroundColor = "red";
box.style.padding = "20px";
```

### Best Practice

Prefer CSS classes:

```js
box.classList.add("danger");
```

---

## 56. Target All Elements by Tag Name

### What it means

Selecting all elements of a specific type

### Methods

* `getElementsByTagName`
* `querySelectorAll`

### Code Example

```js
const paras = document.getElementsByTagName("p");

for (let p of paras) {
  p.style.color = "blue";
}
```

---

## 57. Target Some Elements by Tag Name

### What it means

Selecting only certain elements

### Code Example

```js
const paras = document.querySelectorAll(".container p");

paras.forEach(p => {
  p.style.fontWeight = "bold";
});
```

---

## Interview & Exam Tips (High‑Yield)

### 1. Reading Field Values

**Interview Point:**

* Always use `.value` for input, textarea, select elements.
* Never use `.innerText` or `.innerHTML` for form fields.

**Memory Trick:**

> *Input = Value*

**When to Use:**

* Form validation
* Login systems
* Search bars

---

### 2. Setting Field Values

**Interview Point:**

* Set `.value` to prefill or reset forms.
* Useful in auto‑fill and form reset features.

**Memory Trick:**

> *Set input → use .value = something*

**When to Use:**

* API data binding
* Reset buttons
* Default form values

---

### 3. Reading & Setting Paragraph Text

**Interview Point:**

* `.innerText` respects CSS visibility.
* `.textContent` is faster and raw.
* `.innerHTML` is dangerous if user input is used.

**Memory Trick:**

> *HTML = risky*
> *Text = safe*

**When to Use:**

* Dynamic messages
* Notifications
* UI updates

---

### 4. Manipulating Images

**Interview Point:**

* Change `.src` attribute dynamically.
* Use `alt` for accessibility.

**Memory Trick:**

> *Image source = .src*

**When to Use:**

* Theme change
* Galleries
* UI feedback

---

### 5. Swapping Images

**Interview Point:**

* Toggle image using condition or dataset.

**Memory Trick:**

> *If image = A → switch to B*

**When to Use:**

* Like buttons
* Product previews

---

### 6. Swapping Images + Classes

**Interview Point:**

* Always use `classList.add/remove/toggle`.

**Memory Trick:**

> *Style change = classList*

**When to Use:**

* Highlight effects
* Active states

---

### 7. Setting Styles

**Interview Point:**

* Inline styles override CSS.
* Prefer CSS classes.

**Memory Trick:**

> *JS styles = last resort*

**When to Use:**

* Dynamic animations
* JS‑only styling

---

### 8. Target All Elements by Tag

**Interview Point:**

* `getElementsByTagName` is live collection.
* `querySelectorAll` is static.

**Memory Trick:**

> *All = querySelectorAll*

**When to Use:**

* Bulk styling
* Data processing

---

### 9. Target Some Elements by Tag

**Interview Point:**

* Use CSS selectors inside `querySelectorAll`.

**Memory Trick:**

> *Filtered = querySelectorAll('.box p')*

**When to Use:**

* Scoped updates
* Component‑based DOM

---

## One‑Line Definitions (Exam Ready)

* Reading Field Values → Getting user input using `.value`
* Setting Field Values → Assigning text into inputs using `.value = ...`
* Paragraph Text → Using `.innerText`, `.textContent`, `.innerHTML`
* Image Manipulation → Changing `.src` attribute
* Swapping Images → Toggling image source
* Classes → Styling using `classList`
* Styles → Inline CSS via `.style`
* All Elements → `querySelectorAll('tag')`
* Some Elements → `querySelectorAll('parent tag')`

---

## Golden Rules (Must Remember)

1. Never use `.innerHTML` with user data
2. Always use `.value` for inputs
3. Prefer `classList` over `.style`
4. Prefer `querySelectorAll` for modern code
5. Keep DOM logic after page load

---

## Super Memory Cheatsheet

| Task         | Use                |
| ------------ | ------------------ |
| Input value  | `.value`           |
| Text content | `.innerText`       |
| Raw text     | `.textContent`     |
| HTML         | `.innerHTML`       |
| Image change | `.src`             |
| Style        | `classList`        |
| All elements | `querySelectorAll` |
| One element  | `getElementById`   |

---

## Exam‑Cracking Strategy

1. Memorize one‑line definitions
2. Practice toggling images
3. Change input values dynamically
4. Use classes instead of styles
5. Select elements using querySelectorAll

---

## Final Interview Hack

If confused:

> *Input → .value*
> *Text → innerText*
> *HTML → innerHTML (danger)*
> *Many → querySelectorAll*
> *Style → classList*

---

## Final Note

Revise this README twice → Crack DOM questions in exams, interviews, and projects.
