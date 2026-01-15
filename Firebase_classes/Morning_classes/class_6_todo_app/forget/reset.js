// Import Firebase Authentication service and the function to send reset password emails
import { 
  auth,                 // Firebase Authentication object (handles users, login, logout)
  sendPasswordResetEmail // Function to send a password reset email to a user
} from "../firebase/firebase.js";


// Get the Reset Password button from HTML page
const resetBtn = document.getElementById("resetBtn");


// Add a click event listener to the reset button
// When user clicks the button, this function runs
resetBtn.addEventListener("click", async ()=>{

  // Get the email typed by the user in the email input field
  const email = document.getElementById("email").value;

  try {
    // Ask Firebase to send a password reset email to the given email address
    await sendPasswordResetEmail(auth , email);

    // Show success message using SweetAlert
    Swal.fire({
      title: "Email Sent",          // Title of the popup
      text: "Check your inbox!",    // Message text
      icon: "success"               // Green success icon
    });

  } catch (error) {
    // If Firebase throws an error (invalid email, user doesn't exist, etc)
    Swal.fire({
      title: "Error",               // Popup title
      text: error.message,          // Error message from Firebase
      icon: "error"                 // Red error icon
    });
  }
});
