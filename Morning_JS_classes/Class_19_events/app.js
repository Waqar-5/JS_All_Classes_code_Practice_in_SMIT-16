// console.log("JavaScript Connected!");


// var animals = [];  // this is a single comment!

// // if(animals){

// }

// if(animals){

// }
// if(animals){

// }


/* multiple lines comment 
if(animals){

}if(animals){

}if(animals){

}
*/


var btn = document.getElementById("btn")
var para = document.getElementById("para")


// btn.addEventListener("click", () => {
//     para.style.display = (para.style.display === "block") ? "none" : "block";
// });
// or 


btn.addEventListener("click", () => {
    // Check current display style
    if (para.style.display === "none" || para.style.display === "") {
        para.style.display = "block"; // show
    } else {
        para.style.display = "none";  // hide
    }
});


function greet(user){
    alert("Welcome, " + user)
}


function greetUser(){
    alert("1")
}



var paraPut = document.getElementById("paraPut")


function getEmail(){
  var email = document.getElementById("email").value;
  console.log(email)
}





function checkAddress(fieldId){
  var value = document.getElementById(fieldId).value;

  if(value === ""){
    alert("Email is required!");
    return false;
  }else{
    console.log(value)
    return true;
  }
  }




function requiredEmail(){
  var val = document.getElementById("email").value;

  if(val === ""){
    alert("Email is Required!");
  }else{
    console.log(val);
    
  }
}



// function emailFormat(){

//   var val = document.getElementById('email').value.trim();

//   if(val === ""){
//     alert("Email is Required!");
//   }

//   var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);

//   if(!emailRegex){
//     alert("Email format is wrong!");
//   }

//   console.log(val)
// }


// function emailFormat(){

//   var value = document.getElementById('email').value.trim();

//   var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);


//   if(value === ""){
//     alert("Email is required!");
//   }else if(!emailRegex){
//     alert("Email format is wrong!");
//   }else{
//     alert(value)
//   }
// }

function emailRequire(){

  var value = document.getElementById("email").value.trim();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  var err = document.getElementById("emailErr");

  if(value === ""){
    err.textContent = "Email Required."
  }else if(!emailRegex){
    err.textContent ="Email format is wrong!";
}}