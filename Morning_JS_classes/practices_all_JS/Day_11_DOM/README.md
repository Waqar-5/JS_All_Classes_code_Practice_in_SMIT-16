# DOM Mastery Notes (Topics 57–64)

> **Purpose:** A complete, exam-ready, developer-focused guide to core DOM concepts.
> Covers beginner → advanced points with clear explanations, best practices, and code examples.

---

## 57. Target Some Elements by Tag Name

### What it Means

Selecting elements based on their HTML tag (e.g., `div`, `p`, `li`).

### Methods

#### 1. `getElementsByTagName()` (Live Collection)

```js
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);
```

* Returns **HTMLCollection** (live, auto-updates)
* Older API, but still useful

#### 2. `querySelectorAll()` (Static NodeList)

```js
const divs = document.querySelectorAll("div");
```

* Returns **NodeList** (static)
* Supports CSS selectors

### Key Differences

| Feature       | getElementsByTagName | querySelectorAll |
| ------------- | -------------------- | ---------------- |
| Live updates  | ✅ Yes                | ❌ No             |
| CSS selectors | ❌ No                 | ✅ Yes            |
| Modern        | ❌ Legacy             | ✅ Recommended    |

### Interview Tip

> Prefer `querySelectorAll()` for predictable behavior.

---

## 58. The DOM (Document Object Model)

### Definition

The **DOM** is a tree-like structure representing the HTML document.

### Why It Exists

* Enables JavaScript to read & modify HTML
* Allows dynamic content
* Enables interactivity

### Example

```html
<p id="msg">Hello</p>
<script>
  document.getElementById("msg").textContent = "Hi DOM";
</script>
```

### Core Concepts

* Nodes
* Elements
* Attributes
* Text

### DOM Tree

```
Document
 └── html
     ├── head
     └── body
```

### Interview Tip

> DOM is a **programming interface** for HTML/XML.

---

## 59. DOM: Parents and Children

### Relationships

```html
<div id="parent">
  <p>Child 1</p>
  <p>Child 2</p>
</div>
```

```js
const parent = document.getElementById("parent");
console.log(parent.children);
```

### Properties

| Property        | Description                        |
| --------------- | ---------------------------------- |
| `parentNode`    | Immediate parent node              |
| `parentElement` | Parent if element                  |
| `children`      | Element children only              |
| `childNodes`    | All nodes (text, comment, element) |

### Interview Tip

> Use `children` for elements only.

---

## 60. DOM: Finding Children

### Methods

```js
const div = document.getElementById("box");

// All nodes
console.log(div.childNodes);

// Only elements
console.log(div.children);

// First child
console.log(div.firstChild);

// First element
console.log(div.firstElementChild);

// Last element
console.log(div.lastElementChild);
```

### Node Types

| Node     | Type |
| -------- | ---- |
| Element  | 1    |
| Text     | 3    |
| Comment  | 8    |
| Document | 9    |

### Interview Tip

> Use `firstElementChild` not `firstChild`.

---

## 61. DOM: Junk Artifacts and nodeType

### What Are Junk Artifacts

Whitespace and line breaks become text nodes.

```html
<div>
  <p>Hi</p>
</div>
```

```js
console.log(div.childNodes);
```

### nodeType Usage

```js
div.childNodes.forEach(node => {
  if (node.nodeType === 1) {
    console.log(node.tagName);
  }
});
```

### NodeType Constants

| Value | Meaning  |
| ----- | -------- |
| 1     | Element  |
| 3     | Text     |
| 8     | Comment  |
| 9     | Document |

### Interview Tip

> Junk artifacts = text nodes.

---

## 62. DOM: More Ways to Target Elements

### Methods

```js
document.getElementById("box");
document.getElementsByClassName("card");
document.getElementsByTagName("li");
document.querySelector(".card");
document.querySelectorAll(".card");
```

### Advanced Selectors

```js
document.querySelector("ul li:first-child");
document.querySelectorAll("div[data-id]");
```

### Interview Tip

> `querySelector` supports CSS selectors.

---

## 63. DOM: Getting a Target's Name

### Properties

```js
const el = document.querySelector("div");
console.log(el.tagName);   // DIV
console.log(el.nodeName);  // DIV
```

### Attribute Access

```js
el.getAttribute("id");
el.id;
```

### Interview Tip

> `tagName` is uppercase in HTML.

---

## 64. DOM: Counting Elements

### Count Elements

```js
const items = document.querySelectorAll("li");
console.log(items.length);
```

### Count Children

```js
const ul = document.querySelector("ul");
console.log(ul.children.length);
```

### Filter Count

```js
const count = Array.from(ul.children)
  .filter(el => el.classList.contains("active")).length;
```

### Interview Tip

> Convert HTMLCollection → Array.

---

## Exam-Ready Summary

| Topic            | Key Point                   |
| ---------------- | --------------------------- |
| Tag Targeting    | Use querySelectorAll        |
| DOM              | Tree-like structure         |
| Parent/Child     | Use children not childNodes |
| Finding Children | Avoid text nodes            |
| nodeType         | Filter nodes                |
| Targeting        | CSS selectors               |
| Names            | tagName uppercase           |
| Counting         | Use length                  |

---

## Memory Tricks

* **DOM = Document Object Model**
* **1 = Element, 3 = Text**
* **query = CSS selector**
* **children = clean list**

---

## Practice Mini Project

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
<script>
  const ul = document.getElementById("list");
  console.log(ul.children.length);
</script>
```

---

## Final Tip

> Master **querySelector**, **children**, **nodeType**, and **DOM traversal**.

---

**Author:** Waqar Ali
**Purpose:** Interview + Exam + Development Notes
**Editable Markdown File**
