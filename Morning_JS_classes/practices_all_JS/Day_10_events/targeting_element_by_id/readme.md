📖 Interactive Storybook Playground

An interactive web project that demonstrates DOM manipulation in JavaScript by targeting elements with tag names, changing styles, updating text, swapping images, and dynamically modifying the page.

This project is designed as a fun learning experience while covering essential DOM concepts like:

getElementsByTagName

Looping through HTMLCollection

innerHTML read & write

style manipulation

Adding elements dynamically

Handling images, paragraphs, divs, and lists

🎯 Project Goal

The goal is to give you hands-on practice with JavaScript DOM techniques by building a storybook you can interact with:

Resize text

Change fonts

Rewrite parts of the story

Highlight sections

Add new list items

Swap images

It’s like a mini playground to try out everything in one place.

✨ Features

✔ Target all paragraphs (<p>) and double their text size.
✔ Change the font family of all paragraphs.
✔ Rewrite story text dynamically (e.g., “This bed is too big” → “This SUV is too big”).
✔ Highlight specific <div> sections by applying background & border styling.
✔ Add new items to the <ul> list dynamically with a button click.
✔ Swap images in the gallery to simulate changes in the story.
✔ Demonstrates live HTMLCollection behavior when new elements are added.

📂 File Structure
storybook/
│── index.html   # Main HTML page
│── style.css    # Styling for layout, fonts, buttons
│── script.js    # JavaScript logic for interactivity
│── images/      # Place your small.jpg, big.jpg, just-right.jpg etc.

🛠️ Technologies Used

HTML5 → Structure of the storybook

CSS3 → Styling and layout

JavaScript (DOM Manipulation) → Interactivity & logic

🚀 How to Run the Project

Download or clone the repository.

Place images (small.jpg, big.jpg, just-right.jpg, and alternative versions) inside an images folder.

Open index.html in your browser.

Try clicking the buttons to see effects on text, images, lists, and divs.

📚 Learning Outcomes

By completing this project, you’ll understand:

How document.getElementsByTagName("tag") works.

Difference between HTMLCollection and Array.

How to loop through multiple elements and apply styles.

Using innerHTML to read and change content.

How to dynamically add new elements (createElement, appendChild).

How to target and change images (img.src).

Best practice of separating HTML, CSS, and JavaScript.

🧪 Extra Challenges (For Practice)

💡 Try these after you finish the base project:

Add a button to remove the last item from the list.

Add a button to toggle colors of the paragraphs.

Add an input box where the user can type new story text, and update a paragraph with it.

Replace getElementsByTagName with querySelectorAll and compare results.

Animate the image change with a smooth transition.