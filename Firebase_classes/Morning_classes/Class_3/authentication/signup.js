// import { auth, createUserWithEmailAndPassword } from "./firebase.js";

// document.getElementById("sign").addEventListener("click", async () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Simple validation to ensure both fields are filled
//     if (!email || !password) {
//         alert("Please fill in both email and password.");
//         return;
//     }

//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         console.log("Sign up successful!", userCredential.user);
//         alert("User Created: " + userCredential.user.email);
//     } catch (error) {
//         console.error("Error: ", error.message);
//         alert(error.message);
//     }
// });

// // Toggle password visibility
// document.getElementById("togglePassword").addEventListener("change", function() {
//     const passwordField = document.getElementById("password");
//     if (this.checked) {
//         passwordField.type = "text"; // Show password
//     } else {
//         passwordField.type = "password"; // Hide password
//     }
// });
