// Import necessary Firestore methods from your config file
import { db, doc, updateDoc } from "../config.js"; 
// db → your Firestore database instance
// doc → function to reference a specific document in a collection
// updateDoc → function to update specific fields in a document

// Get the HTML button element with ID "updateBtn"
const updateBtn = document.getElementById("updateBtn"); 
// updateBtn → when clicked, will trigger document update

// Get the <pre> element to show messages (success/error)
const out = document.getElementById("out"); 
// out → container for displaying messages to the user

// Add a click event listener to the update button
updateBtn.addEventListener("click", async () => { 
    // async → allows using await to pause until Firestore operation completes

    // Get the document ID from input field and remove extra spaces
    const id = document.getElementById("docId").value.trim(); 
    // id → the document ID that you want to update

    // Get the new value/text from input field
    const value = document.getElementById("docValue").value; 
    // value → the new content to update in the document

    // Check if the user entered a document ID
    if (!id) { 
        out.textContent = "Enter Doc ID!"; // Show error message
        return; // Stop execution if ID is empty
    }

    try { 
        // Reference the specific document in "users" collection by ID
        const docRef = doc(db, "users", id); 

        // Update only the "text" field and "updateAt" timestamp in Firestore
        await updateDoc(docRef, {
            text: value,             // Update the text/content
            updateAt: Date.now()     // Update timestamp for last modification
        });

        // Show success message after updating the document
        out.textContent = `Document ${id} updated!`; 

    } catch (error) { 
        // Catch any errors during Firestore update
        out.textContent = "Error: " + error.message; 
    }
});
