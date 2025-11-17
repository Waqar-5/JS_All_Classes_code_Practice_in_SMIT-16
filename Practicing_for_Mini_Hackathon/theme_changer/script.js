var blue = document.getElementById("blueBtn");
var green = document.getElementById("greenBtn");
var yellow = document.getElementById("yellowBtn");
var body =  document.getElementById("body");

blue.addEventListener("click", function(){
    body.style.backgroundColor = "blue";
})

green.addEventListener("click", function() {
    body.style.backgroundColor = "green"
})

yellow.addEventListener("click", function() {
    body.style.backgroundColor = "yellow"
})

