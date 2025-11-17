# ⏱️ Counter App

A simple and beginner-friendly **Counter App** built with **HTML, CSS, and JavaScript**.  
This project helps beginners understand **DOM manipulation**, **event handling**, and **UI design**.

---

## 🚀 Features

- Increase the counter number
- Decrease the counter number
- Reset the counter to 0
- Clean, responsive, and user-friendly UI
- Smooth hover effect on buttons

---

## 📂 Project Structure

counter-app/
│
├── index.html
├── style.css
└── script.js

yaml
Copy code

---

## 🧠 How It Works (Logic Explanation)

1. The counter value starts at 0 and is displayed on the page.  
2. Three buttons allow the user to interact: Increase, Decrease, and Reset.  
3. JavaScript selects the buttons and the counter display using `getElementById`.  
4. Event listeners are attached to each button:  
   - **Increase:** adds 1 to the counter  
   - **Decrease:** subtracts 1 from the counter  
   - **Reset:** sets the counter back to 0  
5. Every time a button is clicked, the page updates the counter instantly.

---

## 💡 JavaScript Concepts Used

- Selecting elements: `document.getElementById()`  
- Event listeners: `addEventListener("click", ...)`  
- Updating DOM content: `element.innerText`  
- Variables to store and update state

---

## 🎨 CSS Concepts Used

- Flexbox for centering the content  
- Button styling with padding, margin, and hover effect  
- Resetting default styles with `* { margin: 0; padding: 0; box-sizing: border-box; }`  

---

## 📷 Screenshot (Optional)

You can include a screenshot of your app here.

---

## 🔧 Future Improvements (Optional)

- Disable Decrease button if counter is 0 (prevent negative numbers)  
- Add color change for different states (Increase = green, Decrease = red)  
- Add keyboard support for increment/decrement  
- Add animations when counter changes  

---

## 🙌 Author

Developed by **Waqar Ali** as part of a step-by-step project to improve **JavaSc