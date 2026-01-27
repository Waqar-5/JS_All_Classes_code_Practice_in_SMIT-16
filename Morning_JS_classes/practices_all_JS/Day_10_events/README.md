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

## Interview & Exam Tips

* Use `.value` for inputs
* Use `.innerText` for text
* Prefer `classList` over inline styles
* Use `querySelectorAll` for modern code
* Always attach DOM logic after page load

---

## Memory Tricks

* Value = Input
* Text = innerText
* Style = style or classList
* Many = querySelectorAll
* One = getElementById

---

## Practice Tasks

1. Create a form and read user input
2. Swap images on button click
3. Change paragraph text
4. Add class dynamically
5. Style elements dynamically

---

## Final Note

This README is your **one-file DOM mastery guide**.
Revise once = Crack exams + interviews + projects.
