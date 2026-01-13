# 🔄 Reverse Master – Interactive Learning App

## Table of Contents
- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [How It Works](#how-it-works)  
  - [Reverse String](#reverse-string)  
  - [Reverse Number](#reverse-number)  
  - [Reverse Array](#reverse-array)  
  - [Reverse Words in Sentence](#reverse-words-in-sentence)  
- [Setup Instructions](#setup-instructions)  
- [Learning Points](#learning-points)  
- [Screenshots](#screenshots)  
- [License](#license)  

---

## Project Overview
**Reverse Master** is an **interactive web app** designed to teach the **`reverse()` method in JavaScript**.  
It allows users to reverse **strings, numbers, arrays, and words in a sentence** in a **visual and interactive way**.  

This project is **perfect for beginners** who want to **master the concept of reverse** and apply it in **real-world projects**.

---

## Features
- Reverse **any string** entered by the user.  
- Reverse **numbers** digit by digit.  
- Reverse **arrays of items** entered as comma-separated values.  
- Reverse **words in a sentence**.  
- Show **original vs reversed values** for better understanding.  
- Clean, colorful, and **user-friendly UI** for easy learning.

---

## Technologies Used
- **HTML5** – Structure of the page  
- **CSS3** – Styling the UI with cards and colors  
- **JavaScript** – Logic for reversing strings, numbers, arrays, and sentences  

---

## How It Works

### Reverse String
1. User enters a string in the input field.  
2. JavaScript reads the value from the input.  
3. `.split("")` converts the string into an array of characters.  
4. `.reverse()` reverses the order of the array elements.  
5. `.join("")` converts the array back into a string.  
6. Both original and reversed strings are displayed.  

**Example:**
```text
Input: "HELLO"
Output: "OLLEH"

Reverse Number

User enters a number.

JavaScript converts the number to a string using .toString().

.split("") → .reverse() → .join("") reverses the digits.

Convert back to number using Number().

Display original and reversed numbers.

Example:

Input: 12345
Output: 54321

Reverse Array

User enters items separated by commas.

.split(",") converts the input into an array.

.map(item => item.trim()) removes extra spaces.

.reverse() reverses the array order.

Display both original and reversed arrays.

Example:

Input: "Apple, Banana, Cherry"
Output: ["Cherry", "Banana", "Apple"]

Reverse Words in Sentence

User enters a sentence.

.split(" ") converts the sentence into an array of words.

.reverse() reverses the order of words.

.join(" ") joins the words back into a sentence.

Display original and reversed word sentences.

Example:

Input: "JavaScript is fun"
Output: "fun is JavaScript"

Setup Instructions

Clone the repository or download the project files.

Open index.html in your browser.

Enter values in any section (String, Number, Array, Sentence).

Click the Reverse button to see results.

No backend or server is required. Pure HTML, CSS, and JS project.

Learning Points

How to use .reverse() in JavaScript.

Difference between strings and arrays when using reverse.

How to convert strings ↔ arrays using .split() and .join().

How to reverse numbers using string conversion.

Interactive UI helps visualize original vs reversed results.

Understanding functional JS methods (map, split, join, reverse) clearly.

Screenshots

Reverse String Example

Original: HELLO
Reversed: OLLEH


Reverse Array Example

Original: ["Apple","Banana","Cherry"]
Reversed: ["Cherry","Banana","Apple"]


Reverse Words in Sentence Example

Original: "JavaScript is fun"
Reversed Words: "fun is JavaScript"
