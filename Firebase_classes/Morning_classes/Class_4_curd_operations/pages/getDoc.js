// Import Firebase services from config.js
// db → Firestore database instance
// doc → Function to create reference to a document
// getDoc → Function to fetch a document
import { db, doc, getDoc } from '../config.js';

// Get the Read button element by its ID "readBtn" from the HTML
const readBtn = document.getElementById("readBtn");

// Get the output container element by its ID "out" from the HTML
const out = document.getElementById("out");

// Add a click event listener to the Read button
// async allows the use of await for Firebase calls
readBtn.addEventListener("click", async () => {

    // Get the value entered in the input box with ID "docId"
    // .trim() removes leading/trailing spaces
    const id = document.getElementById("docId").value.trim();

    // If the input is empty, show message and stop
    if(!id) {
        out.textContent = "Enter Doc ID!"; // Display message in output container
        return; // Stop further execution
    }

    // Try-catch block handles errors from Firebase
    try {
        // Create a reference to the Firestore document
        // Parameters: db → database, "users" → collection name, id → document ID
        const docRef = doc(db, "users", id);

        // Fetch the document snapshot from Firestore
        const docSnap = await getDoc(docRef);

        // Log the entire snapshot for debugging
        console.log(docSnap);

        // Log only the data inside the document
        console.log(docSnap.data());

        // Store document data in a variable
        const data = docSnap.data();

        // Check if document exists
        if(docSnap.exists()) {
            // If it exists, display a specific field (here 'text')
            out.textContent = data.text;
            
            // Optional: display full document nicely
            // out.textContent = JSON.stringify(docSnap.data(), null, 2);
        } else {
            // If document does not exist, display error message
            out.textContent = "No Document Found!";
        }

    } catch (error) {
        // If Firebase throws any error, display it in the output container
        out.textContent = "Error: " + error.message;
    }

}); // End of click event listener
