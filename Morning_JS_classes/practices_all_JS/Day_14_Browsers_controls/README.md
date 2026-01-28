# 🌐 Browser Control in JavaScript – Complete Guide (Beginner → Advanced)

> **One-stop README.md** to master **Browser Control** topics for **exams, interviews, and real-world projects**.
> Covers concepts, diagrams-in-words, tricks, edge cases, and **clean code examples**.

---

## 📚 Topics Covered

76. Getting and setting the URL
77. Getting and setting the URL (another way)
78. Forward and reverse navigation
79. Filling the window with content
80. Controlling the window’s size and location
81. Testing for popup blockers

---

## 🧠 Core Concept (Must Understand First)

In browsers, **`window`** is the global object.

```
window
 ├─ location   → URL control
 ├─ history    → forward / back navigation
 ├─ document   → page content
 ├─ screen     → screen info
 └─ open()     → new windows/tabs
```

> 💡 **Exam Trick**: If the question mentions *URL, back, forward, popup, screen, resize* → think **window object**.

---

# 76️⃣ Browser Control: Getting and Setting the URL

## 🔹 What is `window.location`?

`window.location` represents the **current URL** of the browser.

### ✅ Getting the URL

```js
console.log(window.location.href);
```

### 🔍 Important Properties

| Property   | Meaning           |
| ---------- | ----------------- |
| `href`     | Full URL          |
| `protocol` | http / https      |
| `hostname` | domain name       |
| `pathname` | path after domain |
| `search`   | query string      |
| `hash`     | anchor part       |

```js
console.log(location.protocol); // https:
console.log(location.hostname); // example.com
console.log(location.pathname); // /page.html
```

### ✅ Setting (Changing) the URL

```js
window.location.href = "https://google.com";
```

🔴 **Important**: Page reloads immediately.

> 📝 **Exam Point**: Setting `location.href` causes a **full page reload**.

---

# 77️⃣ Getting and Setting the URL (Another Way)

## 🔹 `location.assign()`

```js
location.assign("https://example.com");
```

✔ Adds entry to browser history

## 🔹 `location.replace()`

```js
location.replace("https://example.com");
```

❌ Does **NOT** add history entry

| Method      | Back Button Works? |
| ----------- | ------------------ |
| `href`      | ✅ Yes              |
| `assign()`  | ✅ Yes              |
| `replace()` | ❌ No               |

> 🎯 **Interview Favorite**: Difference between `assign()` and `replace()`

---

# 78️⃣ Browser Control: Forward and Reverse

## 🔹 `window.history`

Controls navigation history.

### ⏮ Going Back

```js
history.back();
```

### ⏭ Going Forward

```js
history.forward();
```

### 🔄 Jump Multiple Steps

```js
history.go(-2); // back two pages
history.go(1);  // forward one page
```

> 🧠 **Memory Trick**: Negative = Back, Positive = Forward

---

# 79️⃣ Browser Control: Filling the Window with Content

## 🔹 Using `document.body`

```js
document.body.style.margin = "0";
document.body.style.height = "100vh";
```

## 🔹 Full-Screen Layout Example

```js
document.body.innerHTML = `
  <div style="height:100vh; display:flex; align-items:center; justify-content:center;">
    <h1>Full Screen Content</h1>
  </div>
`;
```

### 🔹 Using CSS (Best Practice)

```css
html, body {
  height: 100%;
  margin: 0;
}
```

> 📝 **Exam Tip**: Browser content fills viewport using **vh/vw units**.

---

# 80️⃣ Browser Control: Window Size and Location

## 🔹 Get Window Size

```js
console.log(window.innerWidth);
console.log(window.innerHeight);
```

## 🔹 Move Window

```js
window.moveTo(100, 100);
```

## 🔹 Resize Window

```js
window.resizeTo(800, 600);
```

⚠️ **Modern browsers restrict this** unless window is opened by script.

### 🔹 Screen Info

```js
console.log(screen.width);
console.log(screen.height);
```

> 🎯 **Interview Point**: `screen` ≠ `window`

---

# 81️⃣ Browser Control: Testing for Popup Blockers

## 🔹 Opening a New Window

```js
const popup = window.open("https://example.com", "_blank");
```

## 🔹 Detect Popup Blocker

```js
if (!popup || popup.closed || typeof popup.closed === "undefined") {
  alert("Popup blocked!");
} else {
  console.log("Popup allowed");
}
```

### 🔹 Best Practice

✔ Open popups **only on user action** (click event)

```js
document.getElementById("btn").addEventListener("click", () => {
  window.open("https://google.com");
});
```

> 🛑 **Exam Alert**: Popups opened automatically are blocked.

---

## 🧩 Common Exam Traps

❌ `window.location` does NOT work without reload
❌ `replace()` removes history
❌ Resize only works on script-opened windows
❌ Popups need user interaction

---

## 🏆 Final Interview Cheat Sheet

| Feature      | Object          |
| ------------ | --------------- |
| URL          | `location`      |
| Back/Forward | `history`       |
| Content      | `document`      |
| Size         | `window`        |
| Popup        | `window.open()` |

---

## 🎓 One-Line Definitions (Exam Ready)

* **location** → Controls browser URL
* **history** → Controls navigation
* **screen** → Device screen info
* **window** → Browser container

---

## ✅ You Now Can:

✔ Explain browser control deeply
✔ Answer MCQs & theory questions
✔ Write clean code
✔ Crack interviews & exams

---

> 📌 **Tip**: Revise this README once = lifetime clarity ✨
