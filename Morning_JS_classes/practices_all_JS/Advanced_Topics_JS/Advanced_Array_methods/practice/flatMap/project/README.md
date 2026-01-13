# Nested Data Explorer & Sorter

## 🚀 Project Overview

The **Nested Data Explorer & Sorter** is an **interactive web project** that helps developers understand the **`flatMap()` method in JavaScript** deeply.  

It allows you to:  
1. Flatten **nested arrays of data** (like hobbies and skills).  
2. Sort the flattened data **alphabetically** or **by length**.  
3. Filter the data dynamically using a **search box**.  

This project is **perfect for learning `flatMap()`**, sorting, and filtering in real-world scenarios.  

---

## 🛠 Features

- **Flatten Nested Data:** Combine nested arrays from multiple objects into a single flat array using `flatMap()`.
- **Sort Alphabetically:** Sort the flattened data in ascending alphabetical order.
- **Sort by Length:** Sort the flattened data based on string length.
- **Filter Dynamically:** Filter flattened items using a search input.
- **Interactive & Visual:** Results are displayed instantly, making learning fun and intuitive.

---

## 💻 Technologies Used

- **HTML** – For the structure and layout.
- **CSS** – For styling and visual design.
- **JavaScript** – For logic: `flatMap()`, sorting, and filtering.

---

## 📂 Project Structure

NestedDataExplorer/
├── index.html # Main HTML file
├── style.css # CSS styling
└── script.js # JavaScript functionality


---

## 🧩 How It Works

### 1. Nested Data
We have a list of users, each with **hobbies** and **skills** arrays:

```javascript
const users = [
    { name: "Alice", hobbies: ["Reading", "Swimming"], skills: ["JS", "CSS"] },
    { name: "Bob", hobbies: ["Cycling"], skills: ["Python", "SQL"] },
    { name: "Charlie", hobbies: ["Gaming", "Drawing"], skills: ["HTML", "JS"] },
];

2. Flattening Using flatMap()
flattenedData = users.flatMap(user => [...user.hobbies, ...user.skills]);


What happens here?

flatMap() loops through each user.

Combines hobbies + skills into one flat array.

Result example: ["Reading","Swimming","JS","CSS","Cycling","Python","SQL","Gaming","Drawing","HTML","JS"]

3. Sorting

Alphabetically:

flattenedData.sort((a, b) => a.localeCompare(b));


By Length:

flattenedData.sort((a, b) => a.length - b.length);

4. Filtering
const filtered = flattenedData.filter(item => item.toLowerCase().includes(filterText));


Filters flattened data as you type in the input box.

🎨 User Interface

Flatten Data Button: Flattens nested arrays and displays the result.

Sort Alphabetically Button: Sorts flattened data A → Z.

Sort by Length Button: Sorts flattened data by string length.

Filter Input: Type any text to filter the flattened data dynamically.

Nested Data Display: Shows the original nested dataset.

Flattened Data Display: Shows the flattened and processed data.

⚡ Key Learnings

flatMap() = map + flat (depth 1) → powerful for nested data.

Can combine mapping + flattening + filtering in one step.

Works on arrays of numbers, strings, objects, or nested arrays.

Practical in real-world scenarios like:

Extracting tags, hobbies, skills, items

Preprocessing data for display

Flattening API responses

🖼 Screenshot (Optional)
+-----------------------------------------+
| Nested Data Explorer & Sorter           |
|-----------------------------------------|
| Nested Data:                             |
| [{name: "Alice", hobbies: [...]} ...]   |
|                                         |
| Flattened Data: ["Reading","Swimming",...]|
|                                         |
| [Flatten Data] [Sort A-Z] [Sort Length] |
| Filter: [_____________]                  |
+-----------------------------------------+

🔧 How to Use

Clone the project or download the files.

Open index.html in any web browser.

Click Flatten Data to see all nested items in one list.

Click Sort Alphabetically or Sort by Length.

Use the Filter Input to search through flattened data.

Experiment with adding more nested objects to see flatMap() in action.