var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents default form submission

    var lemail = document.getElementById("lemail").value.trim();
    var lpassword = document.getElementById("lpassword").value.trim();

    // --- 1. Validation Checks (Recommended) ---
    if (lemail === "" || lpassword === "") {
        alert("Please fill in both Email and Password fields.");
        return;
    }
    // (Add Email Format and Password Complexity checks here, as previously suggested)
    // --- End Validation ---

    var usersArr = JSON.parse(localStorage.getItem("users"));

    if (!usersArr || usersArr.length == 0) {
        alert("Please create your account first!");
        return;
    }

    var authenticated = false;

    // Use a standard for loop for better control
    for (var i = 0; i < usersArr.length; i++) {
        var user = usersArr[i];
        
        if (user.email === lemail) {
            // Found a matching email
            if (user.password === lpassword) {
                // Successful Login!
                alert("Login successful");
                localStorage.setItem("currentUser", JSON.stringify(user));
                location.href = "../index.html";
                authenticated = true; // Mark as successful
                return; // *** CRITICAL FIX: STOP EXECUTION IMMEDIATELY ***
            } else {
                // Email matches, but Password is WRONG
                alert("Invalid Password");
                return; // Stop here, no need to check other users
            }
        }
    }
    
    // --- Failure State ---
    // If the function reaches this point, it means no user with the matching email was found after checking ALL entries.
    if (!authenticated) {
        alert("Invalid Email Address. No account found with that email.");
    }
});




// var loginBtn = document.getElementById("loginBtn");

// loginBtn.addEventListener("click", function () {
//   var lemail = document.getElementById("lemail").value.trim();
//   var lpassword = document.getElementById("lpassword").value.trim();

//   var usersArr = JSON.parse(localStorage.getItem("users"));

//   if (!usersArr || usersArr.length == 0) {
//     alert("Please create your account first!");
//     return;
//   }

//   var userFound = false;

//   for (var index in usersArr) {
//     var user = usersArr[index];
//     if (user.email == lemail) {
//       if (user.password == lpassword) {
//         alert("login successful");
//         userFound = true;
//         localStorage.setItem("currentUser", JSON.stringify(user))
//         location = "../index.html";
//         return
//       } else {
//         alert("Invalid Credentials")
//       }
//     // } else {
//     //   alert("Invalid Credentials")
//     }
//   }
// })