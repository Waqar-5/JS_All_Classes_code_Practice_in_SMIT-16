// Import the core function to initialize Firebase apps from the CDN SDK
import { initializeApp } 
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js"; 
  // initializeApp -> function used to initialize Firebase with your project configuration

// Import Firestore functions from Firebase SDK
import { 
  getFirestore, // Function to get Firestore database instance
  doc,          // Function to create a reference to a specific document
  setDoc,       // Function to create or overwrite a document
  getDocs,      // Function to get all documents from a collection
  addDoc,       // Function to add a document with an auto-generated ID
  updateDoc,    // Function to update an existing document
  deleteDoc,    // Function to delete a document
  collection,   // Function to create a reference to a collection
  getDoc        // Function to get a single document
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// TODO comment: You can add other Firebase SDKs as needed (e.g., Authentication, Storage)
// Reference link for available libraries: https://firebase.google.com/docs/web/setup#available-libraries


// Firebase project configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC4hh1FMrN44U9JsFqp6lTKsh12UUb58Zc", 
  // apiKey -> Public API key to identify your Firebase project

  authDomain: "curd-operations-93bb0.firebaseapp.com", 
  // authDomain -> Domain used for Firebase Authentication (optional if using Auth)

  projectId: "curd-operations-93bb0", 
  // projectId -> Unique identifier for your Firebase project

  storageBucket: "curd-operations-93bb0.firebasestorage.app", 
  // storageBucket -> Cloud Storage bucket URL for storing files

  messagingSenderId: "589867770546", 
  // messagingSenderId -> Sender ID for Firebase Cloud Messaging (push notifications)

  appId: "1:589867770546:web:35b683104acfe7322e5fab" 
  // appId -> Unique identifier for this specific Firebase app instance
};

// Initialize Firebase app with the above configuration
const app = initializeApp(firebaseConfig); 
// app -> This variable holds the initialized Firebase app

// Initialize Firestore database instance
const db = getFirestore(app); 
// db -> Reference to your Firestore database, used for all Firestore operations

// Export Firestore and all necessary functions for use in other JS modules
export { 
  db,       // Export the Firestore database instance
  doc,      // Export function to reference documents
  setDoc,   // Export function to create/overwrite documents
  addDoc,   // Export function to add documents with auto-generated ID
  getDoc,   // Export function to get single document
  getDocs,  // Export function to get all documents from a collection
  updateDoc,// Export function to update existing document
  deleteDoc,// Export function to delete a document
  collection // Export function to reference collections
};



/*
✅ Explanation Highlights:

initializeApp(firebaseConfig) → Connects your web app to Firebase project.

getFirestore(app) → Gives a database reference (db) for CRUD operations.

CRUD functions:

setDoc → overwrite/create document with custom ID

addDoc → create document with auto-generated ID

getDoc → read single document

getDocs → read all documents in a collection

updateDoc → update existing document

deleteDoc → delete document

doc → reference to a document

collection → reference to a collection

*/
