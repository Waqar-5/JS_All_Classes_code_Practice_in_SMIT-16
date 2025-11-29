let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let email = document.getElementById("email").value.trim();;
    let password = document.getElementById("password").value.trim();;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let isFound = false; // Track if user exists

    for(let i = 0; i < users.length; i++){
        if(users[i].email === email && users[i].password === password){

            let currentUser = users[i].username;

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            alert("Login Successfully!");
            window.location.href = "../dashboard/index.html";

            isFound = true;
            break; // Stop loop after success
        }
    }

    if(!isFound){
        alert("First SignUp!");
        window.location.href = "../signup/signup.html";
    }
});
