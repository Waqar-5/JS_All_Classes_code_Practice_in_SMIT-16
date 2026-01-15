// Import Firebase Firestore objects and methods from your config file
import { db, collection, getDocs } from "../config.js"; // db → Firestore database object, collection → to reference a collection, getDocs → fetch all documents

// Get the "Read All Users" button from HTML using its ID
const readAllBtn = document.getElementById("readAllBtn"); // readAllBtn → button to trigger fetching all users

// Get the <pre> element from HTML to display output
const out = document.getElementById("out"); // out → container to show results

// Add a click event listener to the button
readAllBtn.addEventListener("click", async () => { // async → allows use of await inside this function

    try { // try block → run code that might throw an error

        // Get a reference to the "users" collection in Firestore
        const colRef = collection(db, "users"); // colRef → reference to Firestore collection

        // Fetch all documents inside the "users" collection
        const snapShot = await getDocs(colRef); // snapShot → a snapshot of all docs returned

        // Initialize an empty array to store processed user objects
        const results = []; // results → will hold all users as objects with id + fields

        // Loop through each document in the snapshot
        snapShot.forEach((doc) => { // doc → single Firestore document
            // Push an object into results array containing doc ID + all fields
            return results.push({ id: doc.id, ...doc.data() }); // ...doc.data() → spreads all fields of the document
        });

        // Display the results array as a formatted JSON string inside the <pre> element
        out.textContent = JSON.stringify(results, null, 2); // null, 2 → makes JSON human-readable

    } catch (error) { // catch block → handles any errors
        // Display the error message if something went wrong
        out.textContent = "Error: " + error.message; // error.message → the message returned by Firebase
    }

});
