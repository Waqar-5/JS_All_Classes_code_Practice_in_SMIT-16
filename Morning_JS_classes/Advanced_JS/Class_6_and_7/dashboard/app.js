// document.addEventListener("DOMContentLoaded", function() {
//     // Get logout button
//     var logout = document.getElementById("logout");

//     // Logout click
//     logout.addEventListener("click", function() {
//         localStorage.removeItem("currentUser"); // clear login session
//         window.location.href = "../login/login.html";
//     });

//     // Dashboard protection
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     if (users.length === 0) {
//         // No user signed up yet → redirect to signup
//         window.location.href = "../signup/signup.html";
//     } else if (!currentUser) {
//         // User exists but not logged in → redirect to login
//         window.location.href = "../login/login.html";
//     } else {
//         // Optional: show username on dashboard
//         const navTitle = document.querySelector(".main h1");
//         navTitle.textContent = `Welcome, ${currentUser}!`;
//     }
// });




document.addEventListener("DOMContentLoaded", function() {
    // Logout button
    var logout = document.getElementById("logout");
    logout.addEventListener("click", function() {
        localStorage.removeItem("currentUser"); // clear session
        window.location.href = "../login/login.html";
    });

    // Dashboard protection
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (users.length === 0) {
        window.location.href = "../signup/signup.html";
    } else if (!currentUser) {
        window.location.href = "../login/login.html";
    } else {
        // Show username
        const navTitle = document.querySelector(".main h1");
        navTitle.textContent = `Welcome, ${currentUser}!`;
    }
});
