# The DOM: Attributes, Names & Values, Adding Nodes, Inserting Nodes

A complete, beginner-to-advanced guide for mastering key DOM concepts.\
Perfect for notes, interviews, and exams.

------------------------------------------------------------------------

## Table of Contents

1.  Introduction to the DOM\
2.  DOM Attributes\
3.  Attribute Names and Values\
4.  Adding Nodes\
5.  Inserting Nodes\
6.  Common Mistakes\
7.  Interview & Exam Tips\
8.  Quick Revision Cheatsheet

------------------------------------------------------------------------

## 1. Introduction to the DOM

The **DOM (Document Object Model)** is a programming interface for HTML
and XML documents.\
It represents the page as a tree of nodes so JavaScript can:

-   Read content
-   Change styles
-   Add or remove elements
-   Modify attributes

Example:

``` html
<p id="msg">Hello</p>
```

``` js
const p = document.getElementById("msg");
p.textContent = "Hi";
```

------------------------------------------------------------------------

## 2. DOM Attributes

Attributes are additional information about elements.

Example:

``` html
<img src="photo.jpg" alt="My Photo">
```

### 2.1 Get Attribute

``` js
const img = document.querySelector("img");
console.log(img.getAttribute("src")); // "photo.jpg"
```

### 2.2 Set Attribute

``` js
img.setAttribute("src", "new.jpg");
img.setAttribute("title", "Profile Image");
```

### 2.3 Remove Attribute

``` js
img.removeAttribute("title");
```

### 2.4 Check Attribute

``` js
console.log(img.hasAttribute("src")); // true
```

------------------------------------------------------------------------

## 3. Attribute Names and Values

### 3.1 Attribute Name

The key or label of the attribute.

Example:

``` html
<input type="text" id="username">
```

Names: - type - id

### 3.2 Attribute Value

The value assigned to the name.

Values: - text - username

### 3.3 Access via Properties

``` js
const input = document.querySelector("input");
console.log(input.id);      // "username"
console.log(input.type);    // "text"
```

### 3.4 Difference: Attribute vs Property

  Attribute              Property
  ---------------------- ------------
  HTML level             JS level
  Static initial value   Live value
  getAttribute()         element.id

------------------------------------------------------------------------

## 4. Adding Nodes

Nodes = elements, text, comments

### 4.1 Create Element

``` js
const div = document.createElement("div");
div.textContent = "Hello DOM";
```

### 4.2 Create Text Node

``` js
const text = document.createTextNode("Hello Text");
```

### 4.3 Append Node

``` js
document.body.appendChild(div);
```

### 4.4 Append Multiple Nodes

``` js
const p1 = document.createElement("p");
const p2 = document.createElement("p");

p1.textContent = "One";
p2.textContent = "Two";

document.body.append(p1, p2);
```

------------------------------------------------------------------------

## 5. Inserting Nodes

### 5.1 insertBefore()

``` js
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "New Item";

ul.insertBefore(li, ul.firstChild);
```

### 5.2 insertAdjacentHTML()

``` js
const box = document.querySelector(".box");
box.insertAdjacentHTML("beforeend", "<p>New Paragraph</p>");
```

Positions: - beforebegin - afterbegin - beforeend - afterend

### 5.3 replaceChild()

``` js
const old = document.getElementById("old");
const newEl = document.createElement("div");
newEl.textContent = "New Element";

old.parentNode.replaceChild(newEl, old);
```

------------------------------------------------------------------------

## 6. Common Mistakes

❌ Forgetting to append created elements\
❌ Confusing attributes with properties\
❌ Using innerHTML instead of createElement\
❌ Not checking if node exists before inserting

------------------------------------------------------------------------

## 7. Interview & Exam Tips

-   Attributes store extra info about elements\
-   Properties are live and dynamic\
-   Use getAttribute() for original HTML values\
-   append() supports multiple nodes\
-   insertBefore() needs parent reference\
-   insertAdjacentHTML() is fast for UI

------------------------------------------------------------------------

## 8. Quick Revision Cheatsheet

``` js
// Attributes
el.getAttribute("id");
el.setAttribute("class", "box");
el.removeAttribute("title");

// Create nodes
document.createElement("div");
document.createTextNode("Text");

// Add nodes
parent.appendChild(child);
parent.append(child1, child2);

// Insert nodes
parent.insertBefore(newNode, referenceNode);
el.insertAdjacentHTML("beforeend", "<p>HTML</p>");
```

------------------------------------------------------------------------

## Final Notes

✔ Beginner to advanced\
✔ Exam-ready\
✔ Interview-focused\
✔ Editable markdown\
✔ Professional structure

Happy Learning 🚀
