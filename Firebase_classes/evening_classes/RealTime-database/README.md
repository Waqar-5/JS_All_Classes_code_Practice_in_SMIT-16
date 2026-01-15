# 📝 Realtime Firebase TODO App

A simple **Realtime TODO List Application** using **Firebase Realtime Database** and **SweetAlert2** for notifications. This project allows users to **add, edit, and delete TODO items** in realtime with a beautiful and responsive UI.

---

## 🔹 Features

- **Realtime Database Integration**: All TODO items are stored in Firebase Realtime Database.
- **Add TODOs**: Users can add new tasks.
- **Edit TODOs**: Modify existing tasks with live updates.
- **Delete TODOs**: Remove tasks from the list.
- **Input Validation**: Prevents empty submissions with a friendly alert.
- **SweetAlert2 Integration**: Modern popup notifications for actions like errors or success messages.
- **Responsive Design**: Works beautifully on both desktop and mobile devices.
- **Animated TODO Items**: Smooth fade-in effect for new TODOs.

---

## 📂 Project Structure

project-folder/
│
├── index.html # Main HTML file

├── style.css # Styling with animations & responsive design

├── app.js # Firebase CRUD logic + SweetAlert2 integration

└── config.js # Firebase configuration


---

** [LiveDemo](https://realtime-db-6638b.web.app/)

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript (ES6 Modules)
- **Database**: Firebase Realtime Database
- **Notifications**: SweetAlert2
- **Hosting (Optional)**: Firebase Hosting

---

## ⚡ Setup Instructions

1. **Clone or Download the Project**
```bash
git clone <your-repo-url>
cd project-folder
Firebase Setup

Create a Firebase project at Firebase Console.

Enable Realtime Database.

Copy your Firebase config and replace in config.js:

javascript

// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
Include SweetAlert2


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js"></script>
Open the App

Simply open index.html in a browser.

Firebase Hosting (Optional)


firebase init hosting
firebase deploy
💻 How It Works
Add TODO
Type something in the input field and click Submit.

If the input is empty, a SweetAlert2 popup will appear.

Successfully added TODOs are stored in Firebase and shown in realtime.

Edit TODO
Click the Edit button next to a TODO item.

The input field is pre-filled with the task text.

Click the button (now shows Edit in orange) to update the task.

After updating, the button resets to Submit style.

Delete TODO
Click the Delete button next to a task.

The task is immediately removed from Firebase and the UI.

📌 Key Functions
Function	Purpose
push(ref(database, 'todos'), {text: value})	Create new TODO in Firebase
onValue(ref(database, 'todos'), callback)	Listen for realtime updates
update(ref(database, 'todos/id'), {text: value})	Update existing TODO
remove(ref(database, 'todos/id'))	Delete TODO
Swal.fire()	Show alerts / notifications

🎨 UI / Styling
Input Field: Centered with rounded corners, shadow, and focus animation.

Buttons:

Submit: Green gradient with hover effect.

Edit Mode: Orange gradient when editing.

Delete: Red gradient with hover effect.

TODO Items: Card-style items with smooth fade-in animation.

Responsive: Adjusts for mobile screens automatically.

📜 Example Code Snippets
Add TODO
javascript
Copy code
const todoValue = todoInp.value.trim();
if(todoValue === "") {
  Swal.fire("Please write something in the input");
} else {
  push(ref(database, "todos"), { text: todoValue });
}
Edit TODO
javascript
Copy code
function updateTodoFuction(id, oldText) {
  todoInp.value = oldText;
  submitBtn.innerText = "Edit";
  submitBtn.classList.add("edit-mode");
  todoId = id;
}
Delete TODO
javascript
Copy code
function deleteTodo(id) {
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if(result.isConfirmed) {
      remove(ref(database, `todos/${id}`));
      Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
    }
  });
}
🛡️ Notes & Recommendations
For multiple users, consider adding Firebase Authentication.

You can extend functionality to include:

Deadlines / priorities

Images (using Cloudinary)

Categories or filters

Always validate input to avoid empty or invalid entries.

SweetAlert2 can also be used for confirmation before deleting.