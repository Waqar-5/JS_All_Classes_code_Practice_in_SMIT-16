// console.log("JavaScript Connected!");

/*
====================
DOM PRACTICE EXAMPLES
====================
*/

// --- Commit 1: Select element by ID ---
/*
var element = document.getElementById("para");
console.log(element);
element.innerText = "New Para!";
*/

// --- Commit 2: Create new element and append ---
/*
var newPara = document.createElement("p");
newPara.textContent = "I am a new Para!";
document.getElementById("myDiv").appendChild(newPara);
*/

// --- Commit 3: Remove element ---
/*
var element = document.getElementById("delete");
element.remove();
*/

// --- Commit 4: Style element ---
/*
element.style.backgroundColor = "red";
*/

// --- Commit 5: Parent & sibling navigation ---
/*
var p1 = document.getElementById("p1");
console.log(p1.parentNode); // get parent
console.log(p1.nextElementSibling); // next sibling
*/

// --- Commit 6: childNodes vs children ---
/*
var list = document.getElementById("list");
console.log(list.childNodes.length); // includes text nodes
console.log(list.children.length);   // only elements
*/

// --- Commit 7: First child vs firstElementChild ---
/*
var wrap = document.getElementById("wrap");
console.log(wrap.firstChild);        // might be text
console.log(wrap.firstElementChild); // always element
*/

// --- Commit 8: Query inside element ---
/*
var p = document.getElementById("p");
var element = p.querySelector("em");
console.log(element.firstChild.nodeValue);
*/

// --- Commit 9: Dynamically add to root ---
/*
var root = document.getElementById("root");
var kuchBhi = document.createElement("p");
kuchBhi.textContent = "This is added dynamically";
root.appendChild(kuchBhi);
*/

// --- Commit 10: Get elements by tag name ---
/*
var p = document.getElementsByTagName("p");
console.log(p[4].innerHTML);
*/

// --- Commit 11: Nested getElementsByTagName ---
/*
var div = document.getElementById("cal");
var p = div.getElementsByTagName("p");
console.log(p[1].innerHTML);
*/

// --- Commit 12: childNodes vs children count ---
/*
var demo = document.getElementById("demo");
console.log(demo.childNodes.length);
console.log(demo.children.length);
*/

// --- Commit 13: First & last child ---
/*
var menu = document.getElementById("menu");
console.log(menu.firstChild);
console.log(menu.firstElementChild);
console.log(menu.lastChild);
console.log(menu.lastElementChild);
*/

// --- Commit 14: Custom nth-element finder ---
/*
function getNthElementChild(parent, n) {
  var count = 0;
  for (var i = 0; i < parent.childNodes.length; i++) {
    var node = parent.childNodes[i];
    if (node.nodeType === Node.ELEMENT_NODE) {
      count++;
      if (count === n) return node;
    }
  }
  return null;
}

var d = document.getElementById("humpty");
var third = getNthElementChild(d, 3);
third.textContent = "All his men.";
*/

// --- Commit 15: querySelectorAll ---
/*
var second = document.querySelectorAll("#humpty p")[1];
second.textContent = "All his men.";
*/

// --- Commit 16: next/previous siblings ---
/*
var p1 = document.getElementById("p1");
console.log(p1.nextElementSibling.nextElementSibling);

var p2 = document.getElementById("p2");
console.log(p2.previousElementSibling);
*/

// --- Commit 17: Append and read first element ---
/*
var root = document.getElementById("root");
var newPara = document.createElement("p");
newPara.textContent = "Created a new para!";
root.appendChild(newPara);
console.log(root.firstElementChild.textContent);
*/

// --- Commit 18: Replace second child manually ---
/*
var box = document.getElementById("box");
var pCounter = 0;
for (var i = 0; i < box.childNodes.length; i++) {
  if (box.childNodes[i].nodeType === 1) {
    pCounter++;
  }
  if (pCounter === 2) {
    box.childNodes[i].textContent = "replaced!";
    break;
  }
}
*/

// --- Commit 19: Replace directly by ID ---
/*
document.getElementById("target").textContent = "Replaced!";
*/

// --- Commit 20: Clean text nodes (whitespaces) ---
/*
function cleanTextNodes(parent) {
  for (var i = parent.childNodes.length - 1; i >= 0; i--) {
    var n = parent.childNodes[i];
    if (n.nodeType === 3 && n.nodeValue.trim() === "") {
      parent.removeChild(n);
    }
  }
}
var parent = document.getElementById("box");
cleanTextNodes(parent);
console.log(parent.childNodes.length);
*/
