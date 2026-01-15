// Import Firebase Authentication, Firestore, and helper functions
import { 
  auth,                 // Firebase Authentication object (handles users, login, logout)
  db,                   // Firestore Database object
  onAuthStateChanged,   // Listens to login/logout events
  collection,           // Refers to a Firestore collection (like a table)
  getDocs,              // Reads multiple documents from Firestore
  updateDoc,            // Updates a Firestore document
  doc                   // Refers to a single Firestore document
} from "../firebase/firebase.js";


// Listen for changes in authentication state
// This runs whenever a user logs in or logs out
onAuthStateChanged(auth, async (user) => {

  // If no user is logged in → redirect to login page
  if(!user){
    return window.location.href = "../login/login.html";
  }

  // Get the HTML container that will show the list of users
  const list = document.getElementById("users");

  // Clear old content before adding fresh user cards
  list.innerHTML = "";

  // Get all user documents from the "users" collection in Firestore
  const snap = await getDocs(collection(db,"users"));

  // Loop through each user document
  snap.forEach((u) => {

    // Get the actual data of the user
    const data = u.data();  // { fullName, email, role, isVerified, etc }

    // Create a div to represent a user card
    const div = document.createElement("div");
    div.classList.add("user-card");  // Add CSS class for styling

    // Set the text of the div with user's name, email, and verification status
    div.textContent = `${data.fullName} | ${data.email} | Verified : ${data.isVerified}`;

    // Create a button to toggle verification status
    const toggle = document.createElement("button");
    toggle.classList.add("btn-toggle");  // Add CSS class

    // Button text changes based on current verification status
    toggle.textContent = data.isVerified ? "Unverify" : "Verify";

    // When the button is clicked
    toggle.onclick = async () => {

      // Update the user's Firestore document
      // Flip the isVerified boolean (true → false or false → true)
      await updateDoc(doc(db,"users",u.id), {
        isVerified: !data.isVerified
      });

      // Show success message to admin
      Swal.fire({
        title: "Updated",
        text: "Status Changed",
        icon: "success"
      });

      // Reload the page to show updated status
      location.reload();
    }

    // Add the toggle button inside the user card div
    div.appendChild(toggle);

    // Add the user card to the HTML container
    list.appendChild(div);

  }); // end of snap.forEach
}); // end of onAuthStateChanged
