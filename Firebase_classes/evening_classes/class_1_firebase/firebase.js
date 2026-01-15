// export let userName = "Waqar"

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC2Tjn1_p-KMFnM94YuQ-01hrEnq0GcSJU",
    authDomain: "fir-first-8d926.firebaseapp.com",
    projectId: "fir-first-8d926",
    storageBucket: "fir-first-8d926.firebasestorage.app",
    messagingSenderId: "75424534672",
    appId: "1:75424534672:web:bcf6bcab013281d8500815"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)