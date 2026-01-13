# 🔀 Sort Visualizer Playground

A **fully interactive project** to help you **understand JavaScript's `sort()` method deeply**.  
You can add **numbers or text**, and **see different types of sorting in action with animation**.  

---

## 🟢 Features

1. **Add items dynamically**  
   - Add numbers, words, or mixed values to the list.  

2. **Visual Sorting**  
   - Watch items **highlight and swap** step by step while sorting.  

3. **Multiple Sorting Options**  
   - **Alphabetical (A → Z)**  
   - **Reverse Alphabetical (Z → A)**  
   - **By String Length**  
   - **Numbers Ascending (↑)**  
   - **Numbers Descending (↓)**  

4. **Animation**  
   - Swaps are **animated with highlighted colors** to show comparison.  

5. **Learn by Doing**  
   - Interactive interface helps you **understand how `sort()` works internally**.

---

## 🟡 How It Works

- **Data Storage**  
  - An array called `items` stores all user inputs.  

- **Rendering Items**  
  - The `render()` function displays the items in the HTML `<ul>`.  
  - Items being compared or swapped are **highlighted in yellow**.  

- **Adding Items**  
  - Users type a value in the input field and click **Add Item**.  
  - The value is added to the `items` array and displayed instantly.  

- **Sorting Logic**  
  - The `animateSort(compareFn)` function sorts the array **step by step** using **bubble sort logic**.  
  - A **compare function** (`compareFn`) decides how two items are ordered.  
  - Example compare functions:
    - `localeCompare` → text alphabetical sorting
    - `a.length - b.length` → sort by string length
    - `Number(a) - Number(b)` → sort numbers ascending

- **Animation with Async/Await**  
  - `await new Promise(resolve => setTimeout(resolve, 300))` pauses for **300ms** between swaps so you can **visually follow the sorting**.  

---

## 🔵 How to Use

1. Open the project in a browser.  
2. Type any **number or text** in the input box.  
3. Click **Add Item** → item appears in the list.  
4. Click any **Sort button** to see sorting happen **live with animation**:  
   - `A → Z` → alphabetical ascending  
   - `Z → A` → alphabetical descending  
   - `By Length` → shortest to longest  
   - `Numbers ↑` → numeric ascending  
   - `Numbers ↓` → numeric descending  
5. Watch **highlighted swaps** to understand **how sorting works internally**.

---

## 🟠 Example

**Before Sorting:**


Banana, 10, Apple, 5


**Click "A → Z":**


10, Apple, Banana, 5

- Highlight shows comparison between items  
- Swaps happen visually

**Click "Numbers ↑":**


5, 10, Apple, Banana

- Numeric values sorted ascending  
- Text remains in array but not affected

---

## 🟣 Tech Stack

- **HTML** → structure of input, buttons, and list  
- **CSS** → styling, animation, and highlighting  
- **JavaScript** → logic for adding, rendering, and sorting  

---

## 🟤 Key Learning Points

1. How `sort()` works with **numbers and strings**.  
2. Using **custom compare functions** (`a - b`, `localeCompare`, `length`).  
3. How to **animate DOM updates** in JS using `async/await`.  
4. Practical usage of **arrays**, **loops**, and **DOM manipulation**.  
5. Understanding **bubble sort logic** visually, which helps with more advanced sorting algorithms.

---

## 🔹 Future Enhancements

- Step-by-step **bubble sort visualization with numbers**.  
- **Drag & drop reordering** before sorting.  
- Mixed arrays with **numbers and strings automatically sorted separately**.  
- **Export sorted results** as CSV or JSON.

---

## 🎯 Conclusion

This project makes sorting **interactive and fun**, helping you **fully understand the `sort()` method in JavaScript**.  
Perfect for beginners, students, and developers wanting to **visualize sorting logic clearly**.

---