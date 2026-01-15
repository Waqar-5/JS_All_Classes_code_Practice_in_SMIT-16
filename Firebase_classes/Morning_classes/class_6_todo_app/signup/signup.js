// Import Firebase services and helper functions
import { 
  auth,                         // Firebase Authentication object
  db,                           // Firestore Database object
  GoogleAuthProvider,           // Class for Google sign-in
  createUserWithEmailAndPassword, // Create user using email & password
  signInWithPopup,              // Sign in using Google popup
  doc,                          // Firestore document reference
  setDoc                        // Write data into Firestore
} from "../firebase/firebase.js";

// Get buttons and input fields from HTML
const btn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const locationInput = document.getElementById("location");
const passwordInput = document.getElementById("password");

// ==========================
// Email/Password Signup
// ==========================
btn.addEventListener("click", async () => {
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const location = locationInput.value.trim();
    const password = passwordInput.value;

    try {
        // Try creating a new user
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // Save user info in Firestore
        await setDoc(doc(db, "users", res.user.uid), {
            fullName,
            email,
            location,
            role: "user",
            isVerified: false,
            createdAt: Date.now()
        });

        Swal.fire({
            title: "Account Created!",
            text: "Wait for admin verification!",
            icon: "success"
        });

        // Redirect to login after 5 seconds
        setTimeout(() => {
            window.location.href = "../login/login.html";
        }, 5000);

    } catch(error) {
        if (error.code === "auth/email-already-in-use") {
            // If email already exists, redirect to login
            Swal.fire({
                title: "Email Already Registered",
                text: "Redirecting to login page...",
                icon: "info",
                timer: 3000,
                showConfirmButton: false
            });

            setTimeout(() => {
                window.location.href = "../login/login.html";
            }, 3000);

        } else {
            // Other errors
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error"
            });
        }
    }
});

// ==========================
// Google Signup
// ==========================
googleBtn.addEventListener("click", async () => {
    try {
        const provider = new GoogleAuthProvider();

        // Open Google login popup
        const res = await signInWithPopup(auth, provider);

        // Save user info in Firestore
        await setDoc(doc(db, "users", res.user.uid), {
            fullName: res.user.displayName || "",
            email: res.user.email,
            location: "",
            role: "user",
            isVerified: false,
            createdAt: Date.now()
        }, { merge: true }); // merge:true ensures we don't overwrite if user exists

        Swal.fire({
            title: "Google Account Saved",
            text: "Wait for admin verification!",
            icon: "success"
        });

        // Redirect to login after 5 seconds
        setTimeout(() => {
            window.location.href = "../login/login.html";
        }, 5000);

    } catch(error) {
        if (error.code === "auth/account-exists-with-different-credential") {
            // If email exists with another provider
            Swal.fire({
                title: "Account Already Exists",
                text: "Please login using your original provider",
                icon: "info"
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error"
            });
        }
    }
});
