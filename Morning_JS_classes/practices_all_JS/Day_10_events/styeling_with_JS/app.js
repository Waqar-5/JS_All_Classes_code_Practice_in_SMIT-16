function makeBigClass() {
  document.getElementById("p1").classList.toggle("big");
}

function makeBigStyle() {
  document.getElementById("p1").style.fontSize = "2em";
}

function toggleVisibility() {
  let el = document.getElementById("p1");
  el.style.visibility = (el.style.visibility === "hidden") ? "visible" : "hidden";
}

function toggleDisplay() {
  let el = document.getElementById("p1");
  el.style.display = (el.style.display === "none") ? "block" : "none";
}

function floatImage() {
  document.getElementById("mainPic").style.cssFloat = "left";
}

function addMargin() {
  document.getElementById("mainPic").style.margin = "0 20px 0 20px";
}

function showComputed() {
  let el = document.getElementById("mainPic");
  let styles = window.getComputedStyle(el);
  document.getElementById("output").innerText = 
    `Computed margin: ${styles.margin}, 
     Border: ${styles.border}, 
     Width: ${styles.width}`;
}
