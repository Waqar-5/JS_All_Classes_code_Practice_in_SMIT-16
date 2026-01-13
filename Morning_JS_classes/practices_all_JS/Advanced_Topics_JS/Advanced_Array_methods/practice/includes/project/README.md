# String Explorer & Manipulator

## Project Overview

**String Explorer & Manipulator** is an interactive web project designed to help developers and users **learn, explore, and manipulate strings in JavaScript**. It demonstrates key string operations including:

* Searching substrings using the **`includes()`** method (case-sensitive and case-insensitive)
* Counting substring occurrences
* Transforming strings (reverse, uppercase, lowercase)
* Interactive live updates for easy experimentation

This project is **educational, interactive, and showcase-ready**, perfect for learning string methods in JavaScript.

---

## Features

1. **Search Substrings**

   * Use `includes()` to check if a substring exists in a string.
   * Supports **case-sensitive** and **case-insensitive** searches.

2. **Count Substring Occurrences**

   * Counts how many times a substring appears in the main string.
   * Uses a combination of `includes()` and `indexOf()` for accurate counting.

3. **String Transformations**

   * **Reverse:** Flip the string backward.
   * **Uppercase:** Convert all letters to uppercase.
   * **Lowercase:** Convert all letters to lowercase.

4. **Interactive Input**

   * Users can type any string or substring.
   * Results update immediately after clicking buttons.

5. **Educational & Portfolio-Ready**

   * Demonstrates practical usage of `includes()` and other string methods.
   * Clean UI and interactive functionality make it showcase-worthy.

---

## How to Use

1. Open the `index.html` file in a browser.
2. Enter a string in the **main string input area**.
3. Use any of the sections to:

   * Search for a substring
   * Count substring occurrences
   * Transform the string (reverse, uppercase, lowercase)
4. Click the buttons to see results in real-time.

---

## Project Structure

```
string-explorer/
│
├── index.html          # Main HTML file
├── style.css           # Styling for layout and results
└── script.js           # JavaScript functionality for all string operations
```

---

## Code Highlights

### 1. Searching Substrings

```javascript
const str = "Hello, World!";
const search = "World";
console.log(str.includes(search)); // true
```

* Returns `true` if substring exists, `false` if not.
* Works for **case-sensitive** searches.
* Can be combined with `toLowerCase()` for **case-insensitive** searches.

### 2. Counting Substring Occurrences

```javascript
let count = 0;
let pos = 0;
while (true) {
  const foundPos = str.indexOf(search, pos);
  if (foundPos === -1) break;
  count++;
  pos = foundPos + search.length;
}
console.log(count); // Number of occurrences
```

* Loops through the string to count all occurrences.
* Uses `indexOf()` and `includes()` to find positions.

### 3. String Transformations

```javascript
const str = "Hello, World!";
console.log(str.split('').reverse().join('')); // Reversed string
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
```

* Demonstrates reversing, uppercasing, and lowercasing strings.

### 4. Case-Insensitive Search

```javascript
const str = "Hello, World!";
const search = "hello";
console.log(str.toLowerCase().includes(search.toLowerCase())); // true
```

* Converts both string and search term to lowercase for a case-insensitive match.

---

## Demo Screenshots

*(Optional: Include screenshots of the project UI here to showcase functionality)*

---

## Technologies Used

* **HTML5** - Structure and layout
* **CSS3** - Styling and design
* **JavaScript (ES6)** - Functionality and string operations

---

## Learnings from this Project

* Deep understanding of the **`includes()`** method for strings and arrays.
* Practical usage of **string manipulation** methods like `split()`, `reverse()`, `join()`, `toUpperCase()`, `toLowerCase()`, and `indexOf()`.
* Creating an **interactive web UI** for live string operations.
* Writing **clean, readable, and reusable JavaScript code**.

---

## How to Extend This Project

* Add **array search functionality** using `includes()`.
* Highlight matched substrings in the text dynamically.
* Implement **real-time search** as the user types.
* Include additional string methods like `trim()`, `replace()`, and `slice()`.
* Make it **responsive** for mobile devices.

---

