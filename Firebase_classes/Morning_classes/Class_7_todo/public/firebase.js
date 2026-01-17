import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAnCKqx_E9bh9wGHuNh7T7ZZVbpk2xFRPY",       // Project security key
    authDomain: "todo-list-41302.firebaseapp.com",        // Authentication domain
    projectId: "todo-list-41302",                         // Firestore project ID
    storageBucket: "todo-list-41302.firebasestorage.app", // Cloud storage
    messagingSenderId: "498498432242",                    // Messaging service ID
    appId: "1:498498432242:web:183c071013852da85eb46b"     // Unique app ID
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
