// Select elements
const signupCard = document.getElementById("signup-card");
const loginCard = document.getElementById("login-card");

const signupUsername = document.getElementById("signup-username");
const signupPassword = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

const goToLogin = document.getElementById("go-to-login");
const goToSignup = document.getElementById("go-to-signup");

// Email validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Show Login Page
goToLogin.addEventListener("click", () => {
    signupCard.style.display = "none";
    loginCard.style.display = "flex";
});

// Show SignUp Page
goToSignup.addEventListener("click", () => {
    loginCard.style.display = "none";
    signupCard.style.display = "flex";
});

// Handle SignUp
signupBtn.addEventListener("click", () => {
    const email = signupUsername.value.trim();
    const password = signupPassword.value.trim();

    if (!email || !password) {
        Swal.fire("Error", "Please enter both email and password", "error");
        return;
    }

    if (!isValidEmail(email)) {
        Swal.fire("Error", "Please enter a valid email address", "error");
        return;
    }

    if (password.length < 6) {
        Swal.fire("Error", "Password must be at least 6 characters long", "error");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        Swal.fire("Error", "Email already exists! Please login.", "error");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire("Success", "SignUp successful! You can now login.", "success");

    signupUsername.value = "";
    signupPassword.value = "";

    signupCard.style.display = "none";
    loginCard.style.display = "flex";
});

// Handle Login
loginBtn.addEventListener("click", () => {
    const email = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    if (!email || !password) {
        Swal.fire("Error", "Please enter both email and password", "error");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(user => user.email === email);

    if (!user) {
        // Email not found
        Swal.fire("Error", "Email not found. Please sign up first.", "error");
        return;
    }

    if (user.password !== password) {
        // Wrong password
        Swal.fire("Error", "Incorrect password. Please try again.", "error");
        return;
    }

    // Correct email & password
    Swal.fire("Welcome!", `Hello, ${email}! You are logged in successfully.`, "success");

    loginUsername.value = "";
    loginPassword.value = "";
});
