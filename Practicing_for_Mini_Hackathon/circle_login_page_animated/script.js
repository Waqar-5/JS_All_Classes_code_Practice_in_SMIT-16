var email = document.getElementById("email").value.trim()
var password = document.getElementById("password").value.trim()

var save = localStorage.setItem("email", email)
if(save === email){
    JSON.stringify(localStorage.getItem("email", ))
    console.log(email);
    
}