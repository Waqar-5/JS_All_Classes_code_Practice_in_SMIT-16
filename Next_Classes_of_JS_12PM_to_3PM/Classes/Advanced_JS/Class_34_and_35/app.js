var mainBtn = document.getElementById("mainBtn");
var main = document.querySelectorAll(".main");

// track whether elements are hidden or visible
var hidden = false;

mainBtn.addEventListener("click", function() {
  main.forEach(function(item) {
    if (hidden) {
      // show items again
      item.style.display = "";
    } else {
      // hide items
      item.style.display = "none";
    }
  });
  // flip the hidden state (true <-> false)
  hidden = !hidden;
});


var btn1 = document.getElementById("btn1");
var content1 = document.getElementById("content1");


btn1.addEventListener("click", function() {
  if (content1.style.display === "none") {
    content1.style.display = "block";  // show 
  } else {
    content1.style.display = "none";  // hide
  }
})




var btn2 = document.getElementById("btn2");
var content2 = document.getElementById("content2");

btn2.addEventListener("click", function() {
  if (content2.style.display === "none"){
    content2.style.display = "block"; // show
  } else {
    content2.style.display = "none"; // hide
  }
})


var btn3 = document.getElementById("btn3")
var content3a = document.getElementById("content3a");
var content3b = document.getElementById("content3b");

btn3.addEventListener("click", function() {
  // toggle content 3a
  content3a.style.display =
    content3a.style.display === "none" ? "block" : "none";

  // toggle content 3b
  content3b.style.display =
    content3b.style.display === "none" ? "block" : "none";
})






































// console.log("JS is connected!");


// destructuring 
let object1 = {
    name: "Ali",
    age: 22,
    age2: 23,
    func: function(){
        console.log("I am happy!");
        
    }
}


// single property extraction through destructuring
let {name} = object1;
console.log(name);

// multiple property extraction through destructuring
let {age, func} = object1;
console.log(age);
func();


//  default destructuring 
let { age2 = 26} = object1;
console.log(age2);



