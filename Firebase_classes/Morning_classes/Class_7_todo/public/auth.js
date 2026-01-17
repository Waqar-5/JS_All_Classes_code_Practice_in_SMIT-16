import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// DOM elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// ===== SIGNUP =====
window.signup = async () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!name || !email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please fill in all fields!",
    });
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Save name in Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), { name });

    Swal.fire({
      icon: "success",
      title: `Welcome, ${name}!`,
      text: "Account created successfully!",
      timer: 1500,
      showConfirmButton: false
    }).then(() => location.href = "index.html");

  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: err.message
    });
  }
};

// ===== LOGIN =====
window.login = async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please enter email and password!",
    });
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Get name from Firestore
    const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
    const name = userDoc.exists() ? userDoc.data().name : "User";

    Swal.fire({
      icon: "success",
      title: `Welcome back, ${name}!`,
      timer: 1500,
      showConfirmButton: false
    }).then(() => location.href = "index.html");

  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: err.message
    });
  }
};

// ===== GOOGLE LOGIN =====
window.googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user already exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // Save Google display name
      await setDoc(doc(db, "users", user.uid), { name: user.displayName });
    }

    Swal.fire({
      icon: "success",
      title: `Welcome, ${user.displayName}!`,
      timer: 1500,
      showConfirmButton: false
    }).then(() => location.href = "index.html");

  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Google Login Failed",
      text: err.message
    });
  }
};
