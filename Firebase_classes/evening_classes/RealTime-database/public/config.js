// // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
  
 // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnNaj3OK5tE2H00g-aftXZ6ijioQPlfSo",
    authDomain: "realtime-db-6638b.firebaseapp.com",
    databaseURL: "https://realtime-db-6638b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtime-db-6638b",
    storageBucket: "realtime-db-6638b.firebasestorage.app",
    messagingSenderId: "1084179563578",
    appId: "1:1084179563578:web:d03d28cef83993c2b56103"
  };

 
  const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app)

