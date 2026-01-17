// js/auth.js
import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();

// Random avatar generator
const avatar = () => ["😎", "🔥", "🚀", "💎", "👑"][Math.floor(Math.random() * 5)];

/**
 * SIGNUP FUNCTION
 */
export async function signup(name, email, password) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", cred.user.uid), {
      name,
      email,
      avatar: avatar(),
      followers: [],
      following: [],
      createdAt: Date.now()
    });

    Swal.fire({
      icon: 'success',
      title: 'Signup Successful!',
      text: 'You can now log in with your credentials',
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      location.href = "index.html"; // Redirect to login after signup
    });

  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Signup Failed',
      text: err.message
    });
  }
}

/**
 * LOGIN FUNCTION
 */
export async function login(email, password) {
  if (!email || !password) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Information',
      text: 'Please enter email and password'
    });
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'Redirecting to feed...',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      location.href = "feed.html"; // Redirect to feed
    });
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: err.message
    });
  }
}

/**
 * GOOGLE LOGIN
 */
export async function googleLogin() {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;

    // Check if user exists in Firestore
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        name: user.displayName,
        email: user.email,
        avatar: avatar(),
        followers: [],
        following: [],
        createdAt: Date.now()
      });
    }

    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'Redirecting to feed...',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      location.href = "feed.html"; // Redirect after login
    });

  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: err.message
    });
  }
}

/**
 * LOGOUT FUNCTION
 */
export async function logout() {
  try {
    await signOut(auth);
    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: 'Redirecting to login page...',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      location.href = "index.html"; // Redirect to login page
    });
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Logout Failed',
      text: err.message
    });
  }
}
