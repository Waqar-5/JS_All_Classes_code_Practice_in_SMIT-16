// Elements
const signupCard = document.getElementById("signup-card");
const loginCard = document.getElementById("login-card");
const welcomeCard = document.getElementById("welcome-card");

const signupUsername = document.getElementById("signup-username");
const signupPassword = document.getElementById("signup-password");
const signupConfirm = document.getElementById("signup-confirm");
const signupBtn = document.getElementById("signup-btn");

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const rememberMe = document.getElementById("remember-me");
const loginBtn = document.getElementById("login-btn");

const goToLogin = document.getElementById("go-to-login");
const goToSignup = document.getElementById("go-to-signup");

const logoutBtn = document.getElementById("logout-btn");
const welcomeMsg = document.getElementById("welcome-msg");

// Email validation
function isValidEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Page switching
goToLogin.addEventListener("click", () => {
    signupCard.style.display = "none";
    loginCard.style.display = "flex";
});

goToSignup.addEventListener("click", () => {
    loginCard.style.display = "none";
    signupCard.style.display = "flex";
});

// SIGNUP
signupBtn.addEventListener("click", () => {
    const email = signupUsername.value.trim();
    const password = signupPassword.value.trim();
    const confirm = signupConfirm.value.trim();

    if(!email || !password || !confirm){
        Swal.fire("Error","Please fill all fields","error");
        return;
    }

    if(!isValidEmail(email)){
        Swal.fire("Error","Invalid email address","error");
        return;
    }

    if(password.length < 6){
        Swal.fire("Error","Password must be at least 6 characters","error");
        return;
    }

    if(password !== confirm){
        Swal.fire("Error","Passwords do not match","error");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if(users.find(u => u.email === email)){
        Swal.fire("Error","Email already exists! Please login","error");
        return;
    }

    users.push({email,password});
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire("Success","SignUp successful! You can now login","success");

    signupUsername.value = "";
    signupPassword.value = "";
    signupConfirm.value = "";

    signupCard.style.display = "none";
    loginCard.style.display = "flex";
});

// LOGIN
loginBtn.addEventListener("click", () => {
    const email = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    if(!email || !password){
        Swal.fire("Error","Please fill all fields","error");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email);

    if(!user){
        Swal.fire("Error","Email not found. Please sign up first","error");
        return;
    }

    if(user.password !== password){
        Swal.fire("Error","Incorrect password. Try again","error");
        return;
    }

    // Success
    Swal.fire("Welcome!",`Hello, ${email}! You are logged in.`, "success");

    loginUsername.value = "";
    loginPassword.value = "";

    if(rememberMe.checked){
        localStorage.setItem("loggedInUser", email);
    }

    loginCard.style.display = "none";
    welcomeCard.style.display = "flex";
    welcomeMsg.textContent = `Hello, ${email}!`;
});

// LOGOUT
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    welcomeCard.style.display = "none";
    loginCard.style.display = "flex";
});

// AUTO LOGIN if Remember Me
window.addEventListener("load", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
        signupCard.style.display = "none";
        loginCard.style.display = "none";
        welcomeCard.style.display = "flex";
        welcomeMsg.textContent = `Hello, ${loggedInUser}!`;
    }
});
