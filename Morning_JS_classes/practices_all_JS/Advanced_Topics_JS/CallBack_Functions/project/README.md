# 🍳 Recipe Step Executor (Callbacks Demo)

Welcome to the **Recipe Step Executor**, a fun and interactive web app that demonstrates the power of **JavaScript callbacks** in real-life scenarios. This project guides users step-by-step through cooking recipes, showing how callbacks help handle **sequential tasks** in coding.

---

## 🎯 Purpose

The purpose of this project is to:

* Showcase how **callbacks work in JavaScript**.
* Solve the problem of **executing sequential tasks** asynchronously (like cooking steps).
* Provide an **interactive, visual, and showcase-ready project** that helps understand callbacks practically.
* Offer a clean UI where users can **start a recipe, follow steps, and restart** anytime.

---

## 💡 Features

* **Step-by-step execution** of recipes with **delays** to simulate real cooking.
* **Callback-based recursion** ensures each step is executed in order.
* **SweetAlert integration** for beautiful alerts when:

  * Recipe not found
  * Recipe completed
  * Restarting the process
* **Restart button** clears previous input and steps, ready for a new recipe.
* **Case-insensitive input**: Users can type recipe names in any case.
* **UI Highlights**: Steps are highlighted in green once completed.
* **Responsive and clean UI** using HTML & CSS.

---

## 🛠 Technologies Used

* **HTML5** – Structure of the app
* **CSS3** – Styling & responsive design
* **JavaScript (ES6)** – Logic, callbacks, recursion, event handling
* **SweetAlert2** – Interactive and elegant alerts

---

## 📌 How Callbacks Are Used

* Each recipe step is executed **one after another** using a **recursive function**.
* The `executeSteps` function receives a **callback function** that runs **after the current step is completed**.
* This demonstrates the **core purpose of callbacks**: handling asynchronous tasks **in sequence**.

```javascript
// Example of callback usage
executeSteps(stepsArray, 0, () => {
  // This runs only after all steps are completed
  Swal.fire({
    icon: 'success',
    title: 'Recipe Completed!',
    text: '✅ Enjoy your meal 🍽️'
  });
});
```

---

## 📝 Usage Instructions

1. **Enter a recipe name** in the input field (e.g., `Halwa Puri`, `Chicken Biryani`, `Chana Masala`).
2. Click the **Start Cooking** button to begin.
3. Follow each **step displayed on the screen**. Each step will be highlighted when done.
4. Click **Restart** to clear the recipe and enter a new one.

---

## 📚 Sample Recipes Included

* Halwa Puri
* Chicken Biryani
* Chana Masala
* Keema Naan
* Gulab Jamun

> You can **add more recipes** easily by updating the `recipes` object in the JS file.

---

## 🎨 UI Screenshots / Demo

*(Replace with actual screenshots or GIFs for better showcase)*

**Start Cooking Screen**
![Start Screen](screenshot-start.png)

**Recipe Steps in Progress**
![Steps Screen](screenshot-steps.png)

**Recipe Completed Alert**
![Completed Alert](screenshot-completed.png)

---

## 💡 Key Takeaways

* Learn **callbacks in a practical scenario**.
* Understand **recursive functions** for sequential tasks.
* See how **asynchronous operations** can be handled in order.
* Create **clean and showcase-ready UI** for JavaScript projects.

---

## 🛠 How to Run Locally

1. Clone this repository:

```bash
git clone <repository-url>
```

2. Open `index.html` in your browser.
3. Start entering recipes and enjoy step-by-step execution!

---

## 📌 Notes

* Recipes are **case-insensitive**.
* You can **add more recipes** by updating the `recipes` object in `script.js`.
* SweetAlert2 library is used, make sure it is included in your project.

---

**Created by:** Waqar Ali
**Date:** 2026-01-19
**Purpose:** Showcase callbacks i
