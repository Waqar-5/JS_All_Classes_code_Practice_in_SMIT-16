# Firebase Todo List Web App

A modern **Todo List Web App** built with **HTML, CSS, JavaScript**, and **Firebase**.  
This project demonstrates **user authentication**, **Google Sign-in**, and **CRUD operations** using **Firestore**.

---

## 🔹 Features

- **User Authentication**
  - Email/password signup and login
  - Google Sign-in integration
  - Logout functionality

- **Firestore Integration**
  - Save tasks/posts for each user
  - Retrieve tasks in **real-time** order by creation date
  - Update and delete tasks

- **Responsive UI**
  - Clean, modern design
  - Mobile-friendly layout

- **User Experience**
  - SweetAlert popups for success/error messages
  - Input validation and interactive buttons

---

## 🔹 Project Structure

firebase-todo-app/
│
├─ index.html # Home page displaying all posts

├─ signup/

│ └─ signup.html # Signup page

├─ login/

│ └─ login.html # Login page

├─ style.css # Main CSS file for styling

├─ home.js # JS for fetching and displaying posts

├─ user.js # JS for user dashboard, tasks CRUD

└─ firebase/

└─ firebase.js # Firebase initialization and exports


---


## [liveDemo](https://celebrated-bubblegum-ae8d97.netlify.app/)

## 🔹 Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6 modules)
- **Firebase Services:**
  - **Authentication:** Email/password and Google OAuth
  - **Firestore Database:** Cloud storage for user tasks
- **Libraries:**
  - [SweetAlert2](https://sweetalert2.github.io/) for popups

---

## 🔹 Firebase Setup

1. Create a Firebase project in [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** providers:
   - Email/Password
   - Google
3. Add **Authorized Domains** (for local testing: `localhost`).
4. Create a **Firestore database**.
5. Copy Firebase config from Project Settings → General → SDK Setup:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
Replace the values in firebase/firebase.js.

🔹 How To Run
Clone the project:


git clone https://github.com/YOUR_USERNAME/firebase-todo-app.git
Install dependencies if using npm:


npm install firebase
Open index.html in your browser or serve using a local server:



npx live-server
Register a new user or login with Google.

Start adding, editing, and deleting tasks.

🔹 Usage Screenshots
Dashboard Example:


Add/Edit/Delete Task:


🔹 Folder Details
firebase/firebase.js – Contains Firebase initialization and exports:

javascript
Copy code
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, serverTimestamp, where } from "firebase/firestore";

const firebaseConfig = { /* YOUR CONFIG HERE */ };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, serverTimestamp, where };
home.js – Fetches all posts from Firestore and displays on homepage.

user.js – Handles dashboard tasks (add, edit, delete) and logout.

