// Hide image (replace class)
function makeInVisible(){
  document.getElementById("ugly").className = "hidden";
}


// Show image (replace class back to nothing)
function makeVisible(){
  document.getElementById("ugly").className = "";
}


// Toggle image (modern way)
function toggleFish(){
  document.getElementById("ugly").classList.toggle("hidden")
}

// Make paragraph big (add class while keeping old one)
function makeBig() {
  document.getElementById("p1").className += " big";
}

// Reset paragraph style
function resetText() {
  document.getElementById("p1").className = "verdana";
}
