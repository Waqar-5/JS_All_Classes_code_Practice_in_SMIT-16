// Import necessary Firestore methods from your config file
import { db, doc, setDoc } from '../config.js'; 
// db → Firestore database instance
// doc → reference to a specific document in Firestore
// setDoc → function to create or update a document with a specific ID

// Get the Add button from the HTML by its ID
const addBtn = document.getElementById('addBtn'); 
// addBtn → button element that user clicks to add a document

// Get the <pre> element from HTML to display output messages
const out = document.getElementById('out'); 
// out → container to show success or error messages

// Add a click event listener to the Add button
addBtn.addEventListener('click', async () => { 
    // async → allows using await inside the function for asynchronous calls

    // Get the value from the "docId" input box and remove extra spaces
    const id = document.getElementById('docId').value.trim(); 
    // id → custom document ID input by the user

    // Get the value from the "docValue" input box and remove extra spaces
    const value = document.getElementById('docValue').value.trim(); 
    // value → the data/content to save in the document

    // Validate that user entered a document ID
    if (!id) { 
        out.textContent = "Enter Document ID!"; // Show error if ID is empty
        return; // Stop further execution
    }

    // Validate that user entered a document value
    if (!value) { 
        out.textContent = "Enter Document Value!"; // Show error if value is empty
        return; // Stop further execution
    }

    try { // try block → run code that might throw an error

        // Create a reference to the document with the custom ID
        const docRef = doc(db, 'users', id); 
        // docRef → points to "students" collection with a specific document ID

        // Save the document in Firestore with the given ID and value
        await setDoc(docRef, { 
            value, // Store the value field
            createdAt: Date.now() // Store timestamp of document creation
        });

        // Show success message
        out.textContent = `Document with ID "${id}" added successfully!`; 

        // Clear input fields after success
        document.getElementById('docId').value = '';
        document.getElementById('docValue').value = '';

    } catch (error) { // catch block → handle any errors from Firestore
        // Show error message if document could not be added
        out.textContent = "Error: " + error.message; 
    }
});




// import {db, doc, setDoc}  from '../config.js';

// const addBtn = document.getElementById('addBtn');
// const out = document.getElementById('out');

// addBtn.addEventListener('click', async () => {
//     const id = document.getElementById('docId').value.trim();
//     const value = document.getElementById('docValue').value;

//     if(!id){
//         out.textContent = "Enter Doc ID!";
//         return;
//     }

//     try{

//         await setDoc(doc(db, "users", id), {
//             text: value,
//             createdAt: Date.now()
//         })
//         out.textContent = `Document created with ID : ${id} `;

//     } catch (error){
//         out.textContent = "Error: " + error.message;
//     }

// })