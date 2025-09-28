// Button click

function sayHello(){
    alert("Hello, World")
}


// link click
function showMessage(){
    alert("You clicked the link without navigating away!")
}

// image click
function imageClicked(){
    alert(" You clicked the image!")
}

// Mouseover / Mouseout
var hoverImage = document.getElementById("hoverImage");
hoverImage.addEventListener("mouseover", function() {
    this.src = "./assets/OIP.webp"

});
hoverImage.addEventListener("mouseout", function() {
    this.src = "./assets/pic1.png"
});

 // Input field events
    const emailField = document.getElementById("emailField");
    emailField.addEventListener("focus", function() {
      this.classList.add("highlight");
    });
    emailField.addEventListener("blur", function() {
      this.classList.remove("highlight");
    });