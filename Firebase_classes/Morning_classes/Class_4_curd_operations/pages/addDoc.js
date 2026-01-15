// Import Firebase database and Firestore helper functions from config.js
import { db, addDoc, collection, doc } from '../config.js';

// Get the "Add" button from the HTML using its ID
const addAutoBtn = document.getElementById('addAutoBtn');

// Get the <pre> tag where messages will be displayed
const out = document.getElementById('out');

// Add click event listener to the Add button
addAutoBtn.addEventListener('click', async () => {

    // Get the value typed by the user in the input field
    const value = document.getElementById('docValue').value;

    try {
        // Add a new document inside the "students" collection
        // Firestore automatically generates a unique ID for this document
        const docRef = await addDoc(collection(db, "students"), {

            // Save the user's input
            value: value,

            // Save the current time when the document is created
            createdAt: Date.now()
        });

        // Show the generated document ID on the screen
        out.textContent = `Document added with auto ID: ${docRef.id}`;

        // Print the full document reference in the browser console
        console.log(docRef);

    } catch (error) {

        // If something goes wrong, show the error message
        out.textContent = "Error: " + error.message;
    }
});
