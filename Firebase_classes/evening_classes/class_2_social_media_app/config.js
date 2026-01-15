  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-Z2LRUqvyAmF1wfGlg7LxWTSCpEqs6GA",
    authDomain: "day3firebase.firebaseapp.com",
    projectId: "day3firebase",
    storageBucket: "day3firebase.firebasestorage.app",
    messagingSenderId: "639879847222",
    appId: "1:639879847222:web:8b74b9b70a14b8f0ff2797",
    measurementId: "G-YPRNGMHK0F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 