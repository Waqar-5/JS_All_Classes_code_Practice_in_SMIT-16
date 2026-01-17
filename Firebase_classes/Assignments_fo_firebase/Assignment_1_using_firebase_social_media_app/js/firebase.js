import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";





  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBZpaUu8PWJkSg6VniBWtUhy-PtfJ4d8Kc",
    authDomain: "social-app-1-6c9c2.firebaseapp.com",
    projectId: "social-app-1-6c9c2",
    storageBucket: "social-app-1-6c9c2.firebasestorage.app",
    messagingSenderId: "204033486424",
    appId: "1:204033486424:web:08ad7ca3358eb39804e42d"
  };







export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);