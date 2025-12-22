# All About Arrow Functions

This project is a simple and interactive webpage that explains JavaScript **Arrow Functions**. It provides a button that shows/hides a documentation section with examples, features, and a link to the full MDN documentation.

---

## Features

- **Interactive Button**: Toggle the Arrow Function documentation section on the page.
- **Modern UI**: Clean and responsive design with hover effects.
- **Example Code**: Includes simple arrow function examples.
- **External Link**: Provides a direct link to the [MDN Arrow Functions Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

---

## Project Structure

project-folder/
│
├── index.html # Main HTML file
├── assets/
│ └── arrow.png # Logo used in favicon
├── README.md # Project documentation
└── (optional) style.css # External CSS file if separated

yaml
Copy code

---

## Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Click the **"Show Arrow Function Docs"** button to view the documentation section.
4. Optional: Follow the MDN link for more detailed Arrow Function docs.

---

## Example

Clicking the button toggles this section:

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
Features of Arrow Functions:

Shorter syntax for functions

Implicit return for single-expression functions

Lexical this binding

