// 2️⃣ Function-Based Swap (specific image)
function swapPic2() {
  document.getElementById("pic2").src = "images/after2.jpg";
}
function resetPic2() {
  document.getElementById("pic2").src = "images/before2.webp";
}

// 3️⃣ General-Purpose Swap (works for any image)
function swapPic(eId, newPic) {
  document.getElementById(eId).src = newPic;
}

// 4️⃣ Best Practice: addEventListener
const pic4 = document.getElementById("pic4");
pic4.addEventListener("mouseover", () => {
  pic4.src = "images/after2.jpg";
});
pic4.addEventListener("mouseout", () => {
  pic4.src = "images/before2.webp";
});
