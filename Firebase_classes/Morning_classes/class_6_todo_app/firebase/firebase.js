// Import the function that initializes (starts) a Firebase project
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

// Import Firebase Authentication related functions and classes
import {
  getAuth,                      // Creates and returns the Firebase Auth service
  GoogleAuthProvider,           // Class used to enable Google login
  createUserWithEmailAndPassword, // Function to create new users
  signInWithEmailAndPassword,   // Function to login existing users
  signInWithPopup,              // Function to login with Google popup
  signOut,                      // Function to logout user
  onAuthStateChanged,           // Function that listens to login/logout state
  sendPasswordResetEmail        // Function to send reset password email
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Import Firebase Firestore (database) related functions
import {
  getFirestore,                 // Connects to Firestore database
  doc,                          // Creates a reference to a document
  setDoc,                       // Writes data to Firestore
  getDoc,                       // Reads one document
  getDocs,                      // Reads multiple documents
  addDoc,                       // Adds a new document
  updateDoc,                    // Updates existing document
  deleteDoc,                    // Deletes a document
  collection,                  // Refers to a Firestore collection
  query,                       // Builds database queries
  where,                       // Filters data
  orderBy,                     // Sorts data
  serverTimestamp              // Gets Firestore server time
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


// Firebase project configuration
// This identifies your Firebase project on Google servers
const firebaseConfig = {
  apiKey: "AIzaSyAnCKqx_E9bh9wGHuNh7T7ZZVbpk2xFRPY",       // Project security key
  authDomain: "todo-list-41302.firebaseapp.com",        // Authentication domain
  projectId: "todo-list-41302",                         // Firestore project ID
  storageBucket: "todo-list-41302.firebasestorage.app", // Cloud storage
  messagingSenderId: "498498432242",                    // Messaging service ID
  appId: "1:498498432242:web:183c071013852da85eb46b"     // Unique app ID
};


// Initialize Firebase using the project configuration
// This creates a Firebase App object
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication service for this app
// This returns an Auth object that controls users and sessions
const auth = getAuth(app);

// Initialize Firestore Database service for this app
// This returns a Firestore Database object
const db = getFirestore(app);


// Export all important Firebase tools
// So other files (signup, login, dashboard, etc) can use them
export {
  auth,                         // Authentication system
  db,                           // Firestore database
  GoogleAuthProvider,           // Google login provider class
  createUserWithEmailAndPassword, // Signup function
  signInWithEmailAndPassword,   // Login function
  signInWithPopup,              // Google login function
  sendPasswordResetEmail,       // Forgot password function
  signOut,                      // Logout function
  doc,                          // Firestore document reference
  setDoc,                       // Write data
  addDoc,
  getDoc,                       // Read one document
  getDocs,                      // Read many documents
  updateDoc,                    // Update data
  deleteDoc,                    // Delete data
  collection,                  // Firestore collection
  query,                       // Build queries
  where,                       // Filter data
  orderBy,                     // Sort data
  serverTimestamp ,             // Trusted server time
  onAuthStateChanged
};






//   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
// import {getAuth, googleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail, signOut} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// import {getfirestore, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, collection, query, where, orderBy, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

 
//  const firebaseConfig = {
//     apiKey: "AIzaSyAnCKqx_E9bh9wGHuNh7T7ZZVbpk2xFRPY",
//     authDomain: "todo-list-41302.firebaseapp.com",
//     projectId: "todo-list-41302",
//     storageBucket: "todo-list-41302.firebasestorage.app",
//     messagingSenderId: "498498432242",
//     appId: "1:498498432242:web:183c071013852da85eb46b"
//   };


//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);
//     const db = getfirestore(app);

//     export {
//         auth,db, googleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, signOut, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, query, where, orderBy, serverTimestamp
//     };