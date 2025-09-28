📘 README.md
# 📋 Smart Form Project

## 🚀 Overview
This project demonstrates **form handling with JavaScript**.  
It includes:
1. **Form Validation** → Ensures the user enters an email before submission.  
2. **Autofill** → Automatically fills the **City** field based on the **ZIP code** entered.  

It will help you practice:
- Reading form values (`.value`)
- Writing values back into inputs (`.value = ...`)
- Using events (`onSubmit`, `onBlur`)

---

## ✨ Features
- 📧 **Email Validation**: Stops form submission if the email field is empty.  
- 🏙 **City Autofill**: City is auto-filled based on ZIP code.  
- 🎨 **Beautiful UI**: Styled with CSS for a modern, clean design.  
- ⚡ **Interactive Feedback**: Shows error messages dynamically.  

---

## 🛠️ Technologies
- **HTML5** → Page structure  
- **CSS3** → Styling  
- **JavaScript (Vanilla)** → Validation + Autofill  

---

## 📂 Project Structure


Smart-Form-Project/
│
├── index.html # Main HTML file
├── style.css # Styling
├── script.js # JavaScript logic
└── README.md # Documentation


---

## 📜 Code Walkthrough

### 1️⃣ Email Validation
```js
var emailVal = document.getElementById("email").value;
if (emailVal === "") {
  alert("Email address required.");
}


Reads user input with .value

If empty → shows error and stops submission

2️⃣ City Autofill
document.getElementById("city").value = cityName;


Writes value into city field

Runs after ZIP is entered (onBlur event)

⚡ How to Run

Clone or download the project.

Open index.html in a browser.

Try:

Submit with no email → ❌ error shown

Enter 60608, 68114, or 53212 as ZIP → ✅ city auto-fills

🎯 Learning Outcomes

By completing this project, you’ll learn:

✅ Reading input values

✅ Writing values into inputs

✅ Using events like onSubmit and onBlur

✅ Real-world form handling

🔮 Future Ideas

Add email format check (@example.com)

Add state autofill along with city

Use a real ZIP code API for dynamic autofill