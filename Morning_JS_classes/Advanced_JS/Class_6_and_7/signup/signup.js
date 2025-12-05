let btn = document.getElementById("btn")


btn.addEventListener("click", async  function(){
    let username = document.getElementById("username").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    let users = JSON.parse(localStorage.getItem("users")) || [];
      // Email validation
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (!emailValid) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address.",
        });
        return;
    }

      // Password validation (strong)
    const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!passValid) {
        Swal.fire({
            icon: "warning",
            title: "Weak Password!",
            text: "Password must be uppercase, number & special symbol."
        })
        return;
    }
    const usernameValid = /^[A-Za-z0-9]{3,15}$/.test(username);

if (!usernameValid) {
     Swal.fire({
            icon: "error",
            title: "Invalid Username!",
            text: "Username must be 3–15 characters (letters & numbers only).",
        });
    return;
}


    for(var i = 0; i < users.length; i++){
        if(users[i].email === email){
             Swal.fire({
            icon: "error",
            title: "User Already Exists!",
            text: "Try logging in instead.",
        });
            return
        }
    }


    let user = {
        id: new Date().getTime(),
        username: username,
        email: email,
        password: password,
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
     // Success SweetAlert
    await Swal.fire({
        icon: "success",
        title: "Sign Up Successful!",
        text: "Redirecting to Login page...",
        timer: 2000,
        showConfirmButton: false,
    });

    window.location.href = "../login/login.html"


})



var loginBtn = document.getElementById("LoginBtn")
if(loginBtn){
    loginBtn.addEventListener("click", function(){
        window.location.href = "../login/login.html"
    })
} else{
        console.error("SignUp button not found in HTML");

}








// for sign user 
// Reusable function to save user
// function saveUser(username, email, password) {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     users.push({ id: Date.now(), username, email, password });
//     localStorage.setItem("users", JSON.stringify(users));
// }

// // Signup button click event
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     let username = document.getElementById("username").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();

//     // Basic validation
//     if (!username || !email || !password) {
//         alert("All fields are required!");
//         return;
//     }

//     // Check if user already exists
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     if (users.some(u => u.email === email)) {
//         alert("User Already Exists!");
//         return;
//     }

//     // Save the user
//     saveUser(username, email, password);

//     alert("Sign Up Successfully!");
//     window.location.href = "../login/login.html";
// });
