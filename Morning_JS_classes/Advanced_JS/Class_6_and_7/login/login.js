let btn = document.getElementById("btn");

btn.addEventListener("click", async function(){
    let email = document.getElementById("email").value.trim();;
    let password = document.getElementById("password").value.trim();;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let isFound = false; // Track if user exists

    for(let i = 0; i < users.length; i++){
        if(users[i].email === email && users[i].password === password){

            let currentUser = users[i].username;

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

           // SweetAlert Success
            await Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: "Redirecting to Dashboard...",
                timer: 2000,
                showConfirmButton: false
            });
            window.location.href = "../dashboard/index.html";

            isFound = true;
            break; // Stop loop after success
        }
    }

    if(!isFound){
          await Swal.fire({
            icon: "error",
            title: "User Not Found!",
            text: "Please sign up first.",
            confirmButtonText: "Go to Sign Up"
        });
        window.location.href = "../signup/signup.html";
    }
});


var signUpBtn = document.getElementById("SignUp")
if(signUpBtn){

    signUpBtn.addEventListener("click", function() {
        window.location.href = "../signup/signup.html"
});
} else{
    console.error("SignUp button not found in HTML");
}
