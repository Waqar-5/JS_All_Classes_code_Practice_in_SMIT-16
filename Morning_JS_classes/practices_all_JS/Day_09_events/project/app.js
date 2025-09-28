// Focus + Blur events
var email = document.getElementById("email");
var password = document.getElementById("password");

email.onfocus = function() {
    email.style.backgroundColor = "lightyellow";
};
email.onblur = function() {
    email.style.backgroundColor = "white"
};

password.onfocus = function () {
  password.style.backgroundColor = "lightyellow";
};
password.onblur = function () {
  password.style.backgroundColor = "white";
};

// button click
function validateForm(){
    if(email.value === "" || password.value === "") {
        alert("❌ Please fill in all fields!");
  } else {
    alert("✅ Login Successful!");
    }
}

// link click

function showHelp(){
    alert("📩 Check your email to reset your password.");
}

var helpIcon = document.getElementById("helpIcon");
var darkMode = false;


helpIcon.onclick = function () {
  document.body.style.background = darkMode ? "#f0f2f5" : "#222";
  document.body.style.color = darkMode ? "black" : "white";
  darkMode = !darkMode;
};