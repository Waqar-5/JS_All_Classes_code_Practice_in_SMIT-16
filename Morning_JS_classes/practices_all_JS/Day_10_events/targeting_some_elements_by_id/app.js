// Access the rules div and its paragraphs
var e = document.getElementById("rules");
var paragraphs = e.getElementsByTagName("p");

// Show second paragraph text
function showSecondParagraph() {
  if (paragraphs.length > 1) {
    var text = paragraphs[1].innerHTML; // second <p>
    document.getElementById("output").innerText = "2nd paragraph: " + text;
  } else {
    document.getElementById("output").innerText = "Not enough paragraphs!";
  }
}

// Make all paragraphs bigger
function makeBig() {
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add("big");
  }
}

// Highlight all table cells
function highlightCells() {
  var t = document.getElementById("table9");
  var cells = t.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add("pink");
  }
}

// Add new paragraph dynamically
function addParagraph() {
  var newP = document.createElement("p");
  newP.innerHTML = "✨ New Rule: Keep experimenting with JavaScript!";
  e.appendChild(newP);
}

// Reset everything
function resetAll() {
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.remove("big");
  }
  var cells = document.getElementById("table9").getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove("pink");
  }
  document.getElementById("output").innerText = "";
}
