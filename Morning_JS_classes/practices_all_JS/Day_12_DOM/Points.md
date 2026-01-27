# DOM Mastery: Attributes, Names & Values, Adding Nodes, Inserting Nodes

A **complete, exam‑ready, interview‑focused** guide.\
Covers **what**, **why**, **when**, **how**, **tricks to remember**, and
**real situations**.

------------------------------------------------------------------------

## Table of Contents

1.  DOM Overview\
2.  DOM Attributes\
3.  Attribute Names & Values\
4.  Adding Nodes\
5.  Inserting Nodes\
6.  Real‑World Use Cases\
7.  Interview Questions & Smart Answers\
8.  Memory Tricks\
9.  Common Pitfalls\
10. Exam Cheatsheet

------------------------------------------------------------------------

## 1. DOM Overview

**DOM = Document Object Model**\
It converts HTML into a tree of nodes so JavaScript can manipulate it.

Why needed: - Change content dynamically\
- Modify attributes\
- Add/remove elements\
- Build interactive UI

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

Attributes store **extra information** about elements.

Example:

``` html
<img src="photo.jpg" alt="Profile">
```

### 2.1 getAttribute()

``` js
img.getAttribute("src"); // "photo.jpg"
```

Use when: - You need original HTML value\
- Reading custom attributes

### 2.2 setAttribute()

``` js
img.setAttribute("src", "new.jpg");
img.setAttribute("title", "Avatar");
```

Use when: - Updating links, images, IDs, classes

### 2.3 removeAttribute()

``` js
img.removeAttribute("title");
```

Use when: - Cleaning UI\
- Removing optional attributes

### 2.4 hasAttribute()

``` js
img.hasAttribute("src"); // true
```

Use when: - Validation before using an attribute

------------------------------------------------------------------------

## 3. Attribute Names & Values

HTML:

``` html
<input type="text" id="username">
```

Names: - type - id

Values: - text - username

JS Access:

``` js
input.id      // "username"
input.type    // "text"
```

### Attribute vs Property

  Attribute        Property
  ---------------- ---------------
  HTML value       JS live value
  getAttribute()   element.id
  Initial value    Dynamic

Interview Tip: \> **Attributes are static. Properties are live.**

------------------------------------------------------------------------

## 4. Adding Nodes

### 4.1 createElement()

``` js
const div = document.createElement("div");
div.textContent = "Hello";
```

### 4.2 appendChild()

``` js
document.body.appendChild(div);
```

### 4.3 append()

``` js
parent.append(child1, child2);
```

Why use append(): - Multiple nodes\
- Cleaner syntax

------------------------------------------------------------------------

## 5. Inserting Nodes

### 5.1 insertBefore()

``` js
parent.insertBefore(newNode, referenceNode);
```

Use when: - Insert at top of list

### 5.2 insertAdjacentHTML()

``` js
el.insertAdjacentHTML("beforeend", "<p>Hi</p>");
```

Positions: - beforebegin\
- afterbegin\
- beforeend\
- afterend

Use when: - Fast UI updates

### 5.3 replaceChild()

``` js
parent.replaceChild(newNode, oldNode);
```

Use when: - Replace content

------------------------------------------------------------------------

## 6. Real‑World Use Cases

  Task            Method
  --------------- ----------------
  Update image    setAttribute()
  Add todo        append()
  Insert at top   insertBefore()
  Replace card    replaceChild()
  Read data-\*    getAttribute()

------------------------------------------------------------------------

## 7. Interview Questions & Smart Answers

Q: Difference between attribute and property?\
A: Attributes are defined in HTML. Properties are live JS values.

Q: Why append() over appendChild()?\
A: append() supports multiple nodes and text.

Q: insertAdjacentHTML() vs innerHTML?\
A: insertAdjacentHTML() does not reparse entire element.

------------------------------------------------------------------------

## 8. Memory Tricks

🎯 A.P.P.E.N.D\
A -- Add\
P -- Put\
P -- Place\
E -- Element\
N -- Node\
D -- Directly

🎯 G.S.R.H\
G -- getAttribute\
S -- setAttribute\
R -- removeAttribute\
H -- hasAttribute

🎯 I.B.A.E\
I -- insertBefore\
B -- beforebegin\
A -- afterbegin\
E -- beforeend

------------------------------------------------------------------------

## 9. Common Pitfalls

❌ Forgetting to append created elements\
❌ Confusing attributes with properties\
❌ Using innerHTML unnecessarily\
❌ Inserting into non‑existent parent

------------------------------------------------------------------------

## 10. Exam Cheatsheet

``` js
// Attributes
el.getAttribute("id");
el.setAttribute("class", "box");
el.removeAttribute("title");
el.hasAttribute("src");

// Nodes
document.createElement("div");
document.createTextNode("Text");

// Add
parent.appendChild(child);
parent.append(a, b);

// Insert
parent.insertBefore(newNode, refNode);
el.insertAdjacentHTML("beforeend", "<p>Hi</p>");
parent.replaceChild(newNode, oldNode);
```

------------------------------------------------------------------------

## Final Takeaway

✔ What, why, when, how\
✔ Interview ready\
✔ Exam ready\
✔ Memory tricks\
✔ Real‑world usage

One file. Full mastery. 🚀
