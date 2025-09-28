# JavaScript Events Practice 🚀

This project demonstrates the most **commonly used JavaScript events** in a simple and professional way.  
It’s designed for learners and developers who want to practice event handling with **buttons, links, images, mouse actions, and form fields**.

---

## 📌 Topics Covered

### 1. Buttons & Links (`onClick`)
- The `onClick` event executes JavaScript when a button or link is clicked.
- Best practice: Use a **button** for actions instead of links.
- Example:
```html
<button onclick="sayHello()">Click Me</button>
<a href="javascript:void(0)" onclick="showMessage()">Click Link</a>
```

---

### 2. Images (`onClick`)
- Images can act as clickable elements, just like buttons.
- Useful for interactive UIs or image-based actions.
- Example:
```html
<img src="button.png" onclick="imageClicked()">
```

---

### 3. Mouse Events (`onMouseover` / `onMouseout`)
- `onMouseover`: Triggered when the mouse pointer enters an element.
- `onMouseout`: Triggered when the mouse pointer leaves the element.
- Common uses: hover effects, tooltips, image swaps.
- Example:
```html
<img src="before.jpg" 
     onmouseover="this.src='after.jpg'" 
     onmouseout="this.src='before.jpg'">
```

---

### 4. Fields (`onFocus` / `onBlur`)
- `onFocus`: Runs when a field is selected (clicked or tabbed into).
- `onBlur`: Runs when the field loses focus (clicked away or tabbed out).
- Common uses: highlight inputs, validation, guiding the user.
- Example:
```html
<input type="text" 
       onfocus="this.style.backgroundColor='yellow'" 
       onblur="this.style.backgroundColor='white'">
```

---

## 🎯 Why These Events Matter
- Create **interactive and responsive UIs**.  
- Improve **user experience (UX)** with feedback like highlights or hover effects.  
- Allow **form validation** and dynamic changes without page reloads.  

---

## 💡 Best Practices
- Prefer **JavaScript functions** instead of inline event handlers.  
- Use `addEventListener` for modern, maintainable code.  
- Keep HTML clean by separating **structure (HTML)**, **style (CSS)**, and **logic (JS)**.  

---

## ✅ Next Steps
- Try editing the examples in `events-practice.html`.  
- Replace alerts with **real actions** (like updating text or validating input).  
- Upload your experiments to GitHub to track progress.  

---

✨ Happy Coding & Event Handling! ✨
