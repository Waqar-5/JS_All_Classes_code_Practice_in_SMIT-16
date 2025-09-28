🐒 Slow Loris Info Explorer

An interactive and educational JavaScript + HTML + CSS project that demonstrates how to:

Expand and replace paragraph content dynamically (innerHTML write).

Insert dynamic lists into the webpage (innerHTML insert).

Read the existing HTML content inside an element (innerHTML read).

Reset the webpage to its initial state.

This project is designed to be a perfect hands-on learning experience for DOM manipulation in JavaScript.

📂 Project Structure
slow-loris-project/
│── index.html    # Main webpage structure
│── style.css     # Styling and design
│── script.js     # JavaScript functions (expand, insert, peek, reset)
│── README.md     # Project documentation

🚀 Features

✅ Expandable paragraph → Click a link to show full information about the slow loris.

✅ Dynamic list generation → A button displays a list of loris types.

✅ Peek into content → Reads and displays the inner HTML of the paragraph.

✅ Reset functionality → Brings everything back to the original state.

✅ Attractive design → Clean and modern UI with hover effects.

📸 Demo Preview
🔹 Initial State
Slow lorises are a group of several species... Click for more.

🔹 After Clicking “Click for more”
Slow lorises are a group of several species... (full detailed text about slow lorises)

🔹 After Clicking “📋 Show Loris Types”
1. Slow loris 🐒
2. Fast loris ⚡
3. Just-right loris 😎

🔹 After Clicking “🔍 Peek at Content”

Displays the exact HTML inside the paragraph, like:

<em>Hello, Sailor!</em>

🛠️ Technologies Used

HTML5 → Structure of the webpage.

CSS3 → Styling with gradients, hover effects, shadows.

JavaScript (DOM Manipulation) → Logic for reading, writing, and resetting content.

📖 Functions Explained
1️⃣ expandLoris()

Expands the short paragraph into a full detailed description of the slow loris.

Uses: document.getElementById("slowLoris").innerHTML = expandedParagraph;

2️⃣ placeAList()

Inserts a list of loris types dynamically into a <div>.

Uses: innerHTML to inject <ol><li>...</li></ol>.

3️⃣ peekAtContent()

Reads the HTML inside the paragraph.

Example: If the content is <em>Hello</em>, it shows exactly that.

4️⃣ resetContent()

Resets everything back to the initial state.

Clears the list and peek box.

📚 Learning Goals

By completing this project, you will understand:

How to read (.innerHTML) content from an element.

How to write (.innerHTML = ...) new content into an element.

How to create interactive web pages with buttons and events.

How to design a clean UI with CSS.

▶️ How to Run

Download or clone this repository.

Open index.html in any browser (Chrome, Edge, Firefox, etc.).

Click the buttons and links to explore interactions.

🎯 Future Enhancements

Add a toggle button (expand/collapse in one).

Load more animal data dynamically.

Make it mobile-friendly with responsive design.