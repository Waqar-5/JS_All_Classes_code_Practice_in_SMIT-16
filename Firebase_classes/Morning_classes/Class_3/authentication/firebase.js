  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
    import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut , sendPasswordResetEmail , sendEmailVerification } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBQJ4hajxBlPnOHSsuZx7-nybMKsnnfJ0o",
    authDomain: "fir-day2-ecbd6.firebaseapp.com",
    projectId: "fir-day2-ecbd6",
    storageBucket: "fir-day2-ecbd6.firebasestorage.app",
    messagingSenderId: "297047615244",
    appId: "1:297047615244:web:f56f453af52fdc08f28b29"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);  // Get the auth instance

  // export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}
    export {auth, signOut , createUserWithEmailAndPassword , sendPasswordResetEmail, signInWithEmailAndPassword , sendEmailVerification};
