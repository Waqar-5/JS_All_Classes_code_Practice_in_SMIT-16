// Get collections
var par = document.getElementsByTagName("p");
var pics = document.getElementsByTagName("img");
var divs = document.getElementsByTagName("div");
var ulists = document.getElementsByTagName("ul");

// 1. Double Text Size
function doubleTextSize() {
  for (var i = 0; i < par.length; i++) {
    par[i].style.fontSize = "2em";
  }
}

// 2. Change Font
function changeFont() {
  for (var i = 0; i < par.length; i++) {
    par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
  }
}

// 3. Rewrite Middle Story Paragraph
function rewriteStory() {
  par[1].innerHTML = "This SUV is too big.";
}

// 4. Highlight a Div
function highlightDiv() {
  divs[1].style.backgroundColor = "lightgreen";
  divs[1].style.border = "3px solid darkgreen";
}

// 5. Add New List Item
function addNewTry() {
  var newItem = document.createElement("li");
  newItem.innerHTML = "A new bed was tested!";
  ulists[0].appendChild(newItem);
}

// 6. Change Images
function changeImages() {
  pics[0].src = "https://tse2.mm.bing.net/th/id/OIP.5Eg63rOGlyrLOX3-3ApowwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3";
  pics[1].src = "https://th.bing.com/th/id/R.489f3bab6d1485f14fc4570cfedb9079?rik=gqTFResSNHZEsg&pid=ImgRaw&r=0";
  pics[2].src = "https://tse2.mm.bing.net/th/id/OIP.omBa8wZl4WpZdOPr-QGWMQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3";
}
