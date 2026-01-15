// Import Firebase services and helper functions from your firebase setup file
import { 
  auth,                  // Firebase Authentication service (handles login, logout, users)
  db,                    // Firestore Database service (stores user profiles, roles, etc.)
  GoogleAuthProvider,    // Class that enables Google sign-in
  signInWithEmailAndPassword, // Function to log in using email & password
  signInWithPopup,       // Function to log in using Google popup
  doc,                   // Function to create a reference to a Firestore document
  getDoc,                // Function to read a document from Firestore
  setDoc                 // Function to create or update a document in Firestore
} from "../firebase/firebase.js";


// Get login buttons from the HTML page
const loginBtn = document.getElementById("loginBtn");      // Normal email/password login button
const googleBtn = document.getElementById("googleBtn");   // Google login button


// This function decides where the user should go after login
// It checks the user data from Firestore (role and verification)
async function handleRedirect(userId) {

    // Create a reference to this user's document inside the "users" collection
    // Path looks like: users/{userId}
    const ref = doc(db, "users", userId);

    // Fetch the user's document from Firestore
    const snap = await getDoc(ref);

    // Debug logs (for developers to see what Firebase returned)
    console.log(userId);         // Shows the Firebase user UID
    console.log(snap.exists()); // true if user record exists in database
    console.log(snap.data());   // Shows user data object (email, role, etc)

    // If user exists in Firebase Auth but not in Firestore
    if(!snap.exists()){
        Swal.fire({
          title: "No Record",
          text: "User Record doesn't exist!",
          icon: "Error"
        });
        return; // Stop further execution
    }

    // Extract the user's data object from Firestore
    const data = snap.data();

    // If the user is not approved by admin
    if(data.isVerified !== true){
        Swal.fire({
          title: "Not Verified",
          text: "Admin has not yet Approved.",
          icon: "info"
        });
        return; // Block login
    }

    // If user is an admin → send to admin dashboard
    if(data.role === "admin"){
        window.location.href = "../admin/admin.html";
    }
    // Otherwise → send to normal user dashboard
    else {
        window.location.href = "../user/user.html";
    }
}


// When user clicks the normal Login button
loginBtn.addEventListener("click", async () => {

    // Read values typed by the user in input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
        // Ask Firebase Auth to verify email & password
        const res = await signInWithEmailAndPassword(auth, email, password);

        // After successful login, check Firestore and redirect
        await handleRedirect(res.user.uid);
    } 
    catch(error){
        // If Firebase throws any error (wrong password, no user, etc)
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error"
        });
    }
});


// When user clicks Google Login button
googleBtn.addEventListener("click", async () => {

    // Create Google login provider object
    const provider = new GoogleAuthProvider();

    try{
        // Open Google login popup and authenticate user
        const res = await signInWithPopup(auth, provider);

        // Create reference to user's Firestore record
        const userRef = doc(db, "users", res.user.uid);

        // Check if this user already has a Firestore profile
        const snap = await getDoc(userRef);

        // If Google user is logging in for the first time
        if(!snap.exists()){
            // Create a new Firestore profile for this user
            await setDoc(userRef, {
                email: res.user.email,                 // Email from Google
                fullName: res.user.displayName || "", // Name from Google
                role: "user",                         // Default role
                isVerified: false,                    // Needs admin approval
                createdAt: Date.now()                 // Account creation time
            });
        }

        // After login and profile creation, check role & verification
        await handleRedirect(res.user.uid);
    } 
    catch(error){
        // Show any Google login or Firebase error
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error"
        });
    }
});
