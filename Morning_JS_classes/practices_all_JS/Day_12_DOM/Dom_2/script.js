// DOM Explorer App by Waqar Ali

// Helper function for logs
function log(message) {
  const logBox = document.getElementById("log");
  logBox.innerHTML += message + "<br>";
  logBox.scrollTop = logBox.scrollHeight;
}

// Reset log
function resetLog() {
  document.getElementById("log").innerHTML = "";
}

// DOM Elements
const main = document.getElementById("main");
const itemList = document.getElementById("item-list");

// 1️⃣ Show Parent
document.getElementById("showParent").addEventListener("click", () => {
  const parent = itemList.parentNode;
  log(`<b>Parent Node:</b> ${parent.nodeName}`);
  parent.classList.add("highlight");
  setTimeout(() => parent.classList.remove("highlight"), 1000);
});

// 2️⃣ Show Children
document.getElementById("showChildren").addEventListener("click", () => {
  const children = itemList.children;
  log(`<b>Children count:</b> ${children.length}`);
  [...children].forEach(child => {
    log(`→ ${child.textContent}`);
    child.classList.add("highlight");
    setTimeout(() => child.classList.remove("highlight"), 1000);
  });
});

// 3️⃣ Count Elements
document.getElementById("countElements").addEventListener("click", () => {
  const all = document.getElementsByTagName("*");
  log(`<b>Total Elements in Document:</b> ${all.length}`);
});

// 4️⃣ Show Attributes
document.getElementById("showAttributes").addEventListener("click", () => {
  const attrs = itemList.attributes;
  for (let attr of attrs) {
    log(`<b>Attribute:</b> ${attr.name} = "${attr.value}"`);
  }
});

// 5️⃣ Add Node
document.getElementById("addNode").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `New Item ${itemList.children.length + 1}`;
  newItem.className = "item";
  itemList.appendChild(newItem);
  log(`🟢 Added: ${newItem.textContent}`);
});

// 6️⃣ Insert Node
document.getElementById("insertNode").addEventListener("click", () => {
  const newNode = document.createElement("li");
  newNode.textContent = "🔥 Inserted Item";
  itemList.insertBefore(newNode, itemList.firstElementChild);
  log("⚡ Inserted new item at the beginning");
});

// 7️⃣ Remove Node
document.getElementById("removeNode").addEventListener("click", () => {
  const last = itemList.lastElementChild;
  if (last) {
    itemList.removeChild(last);
    log(`❌ Removed: ${last.textContent}`);
  } else {
    log("⚠️ No items left to remove!");
  }
});

// 8️⃣ Reset
document.getElementById("reset").addEventListener("click", resetLog);

// 9️⃣ nodeType + nodeName Example
log("<b>Document Node Type:</b> " + document.nodeType);
log("<b>Document Node Name:</b> " + document.nodeName);
