# 🔥 Firebase CRUD Operations Dashboard

A **modern, fully responsive web dashboard** for performing **CRUD (Create, Read, Update, Delete)** operations using **Firebase Firestore**. This project allows users to **add documents with auto or custom IDs, read single or all documents, update existing documents, and delete documents**, all in a clean and user-friendly interface.  

CSS styling is applied for **modern cards, hover effects, responsive layout**, and **back navigation buttons** to provide a smooth UX.

---

## 🛠️ Project Features

- **Dashboard for CRUD Operations**:
  - Add documents with **Auto ID**  
  - Add documents with **Custom ID**  
  - Read a **single document by ID**  
  - Read **all documents from a collection**  
  - Update an **existing document**  
  - Delete a document  

- **Responsive UI Design**:
  - Modern **card-style forms**
  - Input fields with focus effects
  - Buttons with hover effects and smooth transitions
  - Mobile-friendly design for smaller screens

- **User-friendly Messages**:
  - Success or error messages displayed in a styled `<pre>` area
  - Alerts for empty fields or invalid IDs

- **Back Navigation Buttons**:
  - Each CRUD page has a **back button** to return to the dashboard

- **Fully Modular Code**:
  - Separate JS files for each operation (`addDoc.js`, `setDoc.js`, `getDoc.js`, `getDocs.js`, `update.js`, `delete.js`)
  - Centralized Firebase configuration (`config.js`) for easy setup

---

## 📂 Project Structure

firebase-crud-dashboard/
│

├─ index.html # Dashboard page with links to all CRUD operations

├─ pages/

│ ├─ addDoc.html # Add document with Auto ID

│ ├─ setDoc.html # Add document with Custom ID

│ ├─ getDoc.html # Read single document

│ ├─ getDocs.html # Read all documents from a collection

│ ├─ updateDoc.html # Update a document

│ └─ deleteDoc.html # Delete a document

├─ js/

│ ├─ addDoc.js

│ ├─ setDoc.js

│ ├─ getDoc.js

│ ├─ getDocs.js

│ ├─ update.js

│ └─ delete.js

├─ css/

│ ├─ addDoc.css

│ ├─ setDoc.css

│ ├─ getDoc.css

│ ├─ getDocs.css

│ ├─ updateDoc.css

│ └─ deleteDoc.css

└─ config.js # Firebase configuration file


---


## [LiveDemo](https://beamish-custard-ab7d73.netlify.app/)


## ⚡ Live Preview / Screenshots

*(You can replace these with actual screenshots of your app)*

- **Dashboard**: Clean layout with links to each operation
- **Add Document**: Card UI with input fields, add button, and success/error output
- **Read Documents**: Single and all document views with readable JSON format
- **Update & Delete**: Interactive forms with live feedback

---

## 🚀 Technologies Used

- **Firebase Firestore**: Database for storing documents  
- **Firebase SDK (v12.7.0)**: For Firestore operations  
- **HTML5 / CSS3 / JS (ES Modules)**: Frontend design and scripting  
- **SweetAlert2 (Optional)**: For modern alert messages  
- Fully **responsive design** using CSS Flexbox  

---

## 🔧 Setup Instructions

1. **Clone the Repository**  
```bash
git clone https://github.com/yourusername/firebase-crud-dashboard.git

cd firebase-crud-dashboard

Setup Firebase Project

Go to Firebase Console

Create a project and enable Firestore Database

Get the Firebase configuration object from Project Settings → Web App

Update config.js with your Firebase config



import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

Open index.html in your browser

You can now navigate to each CRUD operation

Add, Read, Update, Delete documents easily

📝 How It Works
Add Document with Auto ID:

Automatically generates Firestore ID

Saves the input value under text field

Add Document with Custom ID:

Users can define their own document ID

Saves the input value under text field

Read Single Document:

Enter the document ID to fetch data

Shows text field in the output

Read All Documents:

Fetches all documents in the collection

Displays JSON formatted data in <pre> tag

Update Document:

Enter document ID + new value

Updates Firestore document field text

Delete Document:

Enter document ID

Deletes the document from Firestore

💡 Tips
Use console.log() in JS files to debug Firestore responses

Ensure your Firestore rules allow read/write for testing:


rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2026, 2, 12);
    }
  }
}

Replace with proper authenticated rules before production

🎨 CSS Styling
Clean card UI for each operation

Responsive input fields and buttons

Hover effects for buttons and cards

Back buttons on each page for easy navigation

(Check the css/ folder for full styling of each page)

📌 Notes
Each page is modular and independent

Fully ES Module-based JavaScript

Beginner-friendly structure for learning Firebase CRUD operations

Works for both desktop and mobile

📂 Project Goal
This project serves as a learning and reference project to understand:

Firestore document operations

Modular JavaScript imports/exports

Frontend CRUD UX

Responsive web design with CSS