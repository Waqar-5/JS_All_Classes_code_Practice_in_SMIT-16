
console.log("✅ JavaScript Connected!");

// Selectors
const parentBox = document.getElementById("parentBox");
const output = document.getElementById("output");

// Utility function
function log(message) {
  output.textContent = message;
  console.log(message);
}

// --- 59. The DOM ---
log("Welcome to the DOM Explorer! The DOM represents your HTML as an object tree.");

// --- 60. Parents and Children ---
document.getElementById("showParents").addEventListener("click", () => {
  log("Parent of .child is: " + parentBox.parentNode.nodeName);
});

// --- 61. Finding Children ---
document.getElementById("findChildren").addEventListener("click", () => {
  const children = parentBox.children;
  log(`Found ${children.length} children:\n` + Array.from(children).map(c => c.textContent).join("\n"));
});

// --- 62. Junk Artifacts & nodeType ---
document.getElementById("clearWhitespace").addEventListener("click", () => {
  let count = 0;
  for (let i = parentBox.childNodes.length - 1; i >= 0; i--) {
    let node = parentBox.childNodes[i];
    if (node.nodeType === 3 && node.nodeValue.trim() === "") {
      parentBox.removeChild(node);
      count++;
    }
  }
  log(`Removed ${count} whitespace text nodes.`);
});

// --- 63. Target Elements ---
document.getElementById("countElements").addEventListener("click", () => {
  const all = document.querySelectorAll("*");
  log(`Total elements in this page: ${all.length}`);
});

// --- 64. Get Target’s Name ---
document.getElementById("showParents").addEventListener("dblclick", () => {
  log("Tag name of parentBox: " + parentBox.nodeName);
});

// --- 65. Counting Elements ---
document.getElementById("countElements").addEventListener("dblclick", () => {
  const paragraphs = document.getElementsByTagName("p").length;
  log(`There are ${paragraphs} <p> elements on the page.`);
});

// --- 66. Attributes ---
document.getElementById("showAttributes").addEventListener("click", () => {
  const attrs = parentBox.attributes;
  let details = [];
  for (let i = 0; i < attrs.length; i++) {
    details.push(`${attrs[i].name}: ${attrs[i].value}`);
  }
  log("Attributes of parentBox:\n" + details.join("\n"));
});

// --- 67. Attribute Names and Values (set/remove) ---
document.getElementById("setAttribute").addEventListener("click", () => {
  parentBox.setAttribute("data-status", "active");
  log("Attribute 'data-status' added! Value = " + parentBox.getAttribute("data-status"));
});

// --- 68. Adding Nodes ---
document.getElementById("addNode").addEventListener("click", () => {
  const newP = document.createElement("p");
  newP.className = "child";
  newP.textContent = "✨ New Dynamic Paragraph!";
  parentBox.appendChild(newP);
  log("New paragraph added at the end!");
});

// --- Inserting Nodes (before first child) ---
document.getElementById("insertNode").addEventListener("click", () => {
  const newP = document.createElement("p");
  newP.textContent = "📥 Inserted at the Top!";
  parentBox.insertBefore(newP, parentBox.firstElementChild);
  log("Inserted new paragraph before the first child!");
});

// --- Removing Nodes ---
document.getElementById("removeNode").addEventListener("click", () => {
  const last = parentBox.lastElementChild;
  if (last) {
    parentBox.removeChild(last);
    log("Removed the last paragraph!");
  } else {
    log("No more elements to remove!");
  }
});
