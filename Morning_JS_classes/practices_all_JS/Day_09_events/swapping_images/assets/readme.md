🎨 Image Swapping Playground

This project demonstrates four different ways to swap images when you hover your mouse over them. It’s a fun and interactive playground that shows the evolution from basic inline event handling to modern best practices using JavaScript.

📂 Project Structure
image-swapping-project/
│── index.html      # Main webpage with 4 image swap demos
│── style.css       # Styling for layout and hover effects
│── script.js       # JavaScript logic for swapping images
│── images/         # Folder containing before/after images
     │── before1.jpg
     │── after1.jpg
     │── before2.webp
     │── after2.jpg
     │── before3.webp
     │── after3.webp

🚀 Features & Techniques
1️⃣ Inline Swap (Quick & Dirty)

Uses onmouseover and onmouseout directly inside the <img> tag.

✅ Works but ❌ mixes HTML & JS (not clean).

<img src="images/before1.jpg" 
     onmouseover="src='images/after1.jpg'" 
     onmouseout="src='images/before1.jpg'">

2️⃣ Function-Based Swap (Specific)

Calls dedicated JavaScript functions for one image.

✅ Cleaner than inline, but ❌ limited to one image.

function swapPic2() {
  document.getElementById("pic2").src = "images/after2.jpg";
}
function resetPic2() {
  document.getElementById("pic2").src = "images/before2.webp";
}

3️⃣ General-Purpose Swap (Reusable 🎉)

One function works for any image.

✅ Flexible and reusable.

function swapPic(eId, newPic) {
  document.getElementById(eId).src = newPic;
}

<img src="images/before3.webp" id="pic3"
     onmouseover="swapPic('pic3','images/after3.webp')" 
     onmouseout="swapPic('pic3','images/before3.webp')">

4️⃣ Best Practice: addEventListener

Uses modern JS event handling.

✅ Keeps HTML clean.

✅ Professional approach.

const pic4 = document.getElementById("pic4");
pic4.addEventListener("mouseover", () => {
  pic4.src = "images/after2.jpg";
});
pic4.addEventListener("mouseout", () => {
  pic4.src = "images/before2.webp";
});

🎨 Styling (style.css)

Clean card-style boxes.

Rounded corners and shadows.

Smooth hover zoom animation using CSS transitions.

🛠️ How to Run

Clone or download the project.

Place your images inside the images/ folder with correct names (before1.jpg, after1.jpg, etc.).

Open index.html in your browser.

Hover over the images and enjoy the swapping magic ✨.

📚 What You’ll Learn

✔ Inline swapping (the oldest way).
✔ Function-based swapping (cleaner).
✔ General-purpose reusable functions.
✔ Modern event handling with addEventListener.