// Import the Firestore database instance (db)
// Import the 'doc' function to create a reference to a Firestore document
// Import the 'deleteDoc' function to delete a Firestore document
import { db, doc, deleteDoc } from '../config.js';

// Get the Delete button from the HTML by its ID
const deleteBtn = document.getElementById("deleteBtn");

// Get the <pre> tag where we will show messages
const out = document.getElementById("out");

// Attach a click event listener to the Delete button
deleteBtn.addEventListener("click", async () => {

    // Get the value typed in the input box (document ID)
    // .trim() removes spaces before and after the text
    const id = document.getElementById("docId").value.trim();

    // If no ID was entered, show an error message
    if (!id) {
        out.textContent = "Enter Doc ID!";
        return; // Stop the function here
    }

    try {
        // Create a reference to a document inside the "users" collection
        // Example path: users/abc123
        const docRef = doc(db, "users", id);

        // Delete the document from Firestore
        await deleteDoc(docRef);

        // If delete succeeds, show success message
        out.textContent = `Document ${id} Deleted!`;

    } catch (error) {
        // If any error happens (permission, wrong ID, etc)
        // Show the error message
        out.textContent = "Error: " + error.message;
    }

});
