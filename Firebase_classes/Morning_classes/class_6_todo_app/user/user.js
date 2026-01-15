// Import Firebase Authentication, Firestore, and helper functions
import { 
  auth,                 // Firebase Authentication object (current user, login, logout)
  db,                   // Firestore Database object
  onAuthStateChanged,   // Listens when user logs in or logs out
  collection,           // Refers to a Firestore collection (like a table)
  deleteDoc,            // Deletes a document from Firestore
  addDoc,               // Adds a new document
  query,                // Builds Firestore queries
  where,                // Filters Firestore data
  orderBy,              // Sorts Firestore data
  getDocs,              // Reads many documents
  updateDoc,            // Updates a Firestore document
  doc,                  // Refers to a single Firestore document
  serverTimestamp,      // Gets time from Firebase server
  signOut               // Logs out the current user
} from "../firebase/firebase.js";

// Variable to store the logged-in user ID
let uid = null;

// Get Add Task button from HTML
const addBtn = document.getElementById("addBtn");
// Disable the Add button until user is logged in
addBtn.disabled = true;

// Handle Logout Button Click
document.getElementById("logoutBtn").addEventListener("click", async ()=>{
  try {
    await signOut(auth); // Log out the user
    Swal.fire({ title: "User Logged out successfully!", icon: "success" });
    // Redirect to login page after logout
    window.location.href = "../login/login.html";
  } catch (error) {
    Swal.fire({ title: "Error", text: error.message, icon: "error" });
  }
});

// This function runs whenever login state changes
onAuthStateChanged(auth, async (user)=>{
  console.log(user);  // Shows logged-in user in console

  if(!user){
    return window.location.href = "../login/login.html"; // redirect if not logged in
  }

  // Store logged-in user's UID
  uid = user.uid;
  // Enable the Add button now that user is logged in
  addBtn.disabled = false;

  // Load this user's tasks
  loadPosts();
});

// Function to load tasks/posts from Firestore
async function loadPosts() {
  const posts = document.getElementById("posts");
  posts.innerHTML = ""; // Clear old tasks

  // Build a Firestore query: get only this user's tasks, newest first
  const q = query(
    collection(db, "posts"),
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  try {
    const snap = await getDocs(q); // Execute query
    snap.forEach((p)=>{
      const data = p.data();

      const div = document.createElement("div");
      div.classList.add("post-card");
      div.textContent = `${data.text}`;

      // Edit button
      const edit = document.createElement("button");
      edit.classList.add("edit-btn");
      edit.textContent = "Edit";
      edit.onclick = async ()=>{
        const val = prompt("Update Task", data.text);
        if(!val) return;

        await updateDoc(doc(db, "posts", p.id), {
          text: val,
          updatedAt: serverTimestamp()
        });

        loadPosts();
      };

      // Delete button
      const del = document.createElement("button");
      del.classList.add("delete-btn");
      del.textContent = "Delete";
      del.onclick = async ()=>{
        await deleteDoc(doc(db, "posts", p.id));
        loadPosts();
      };

      div.append(edit, del);
      posts.appendChild(div);
    });
  } catch (error) {
    console.error("Error loading posts:", error);
    Swal.fire({ title: "Error", text: error.message, icon: "error" });
  }
}

// When user clicks Add button
addBtn.addEventListener("click", async ()=>{
  const task = document.getElementById("task");
  const text = task.value.trim(); // Prevent empty tasks
  if(!text) {
    Swal.fire({ title: "Empty Task", text: "Please enter a task!", icon: "warning" });
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      uid,                    // Owner of the task
      text,                   // Task text
      createdAt: serverTimestamp(), // Creation time
      updatedAt: null         // Not edited yet
    });

    task.value = ""; // Clear input
    loadPosts();     // Reload tasks
  } catch(error) {
    console.error("Error adding task:", error);
    Swal.fire({ title: "Error", text: error.message, icon: "error" });
  }
});
