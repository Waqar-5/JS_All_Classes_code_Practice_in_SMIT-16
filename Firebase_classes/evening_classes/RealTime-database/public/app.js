import { ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
import { database } from "./config.js";

const submitBtn = document.getElementById("submitBtn");
const todoInp = document.getElementById("todoInp");
const todoList = document.getElementById("todoList");
let todoId; // currently editing todo ID

// ===========================
// Create / Update TODO Item
// ===========================
submitBtn.addEventListener("click", () => {
  const todoValue = todoInp.value.trim();

  // ====== SweetAlert Input Validation ======
  if (!todoValue) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please write something in the input!',
      confirmButtonColor: '#3085d6'
    });
    todoInp.focus();
    return;
  }

  if (submitBtn.innerText === "Submit") {
    // ======= CREATE =======
    const todoRef = ref(database, "todos");
    push(todoRef, { text: todoValue });
    todoInp.value = "";
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'Your todo has been added.',
      timer: 1200,
      showConfirmButton: false
    });
  } else {
    // ======= UPDATE =======
    update(ref(database, `todos/${todoId}`), { text: todoValue });
    todoInp.value = "";
    submitBtn.innerText = "Submit";
    submitBtn.setAttribute("id", "submitBtn");
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'Your todo has been updated.',
      timer: 1200,
      showConfirmButton: false
    });
  }
});

// ===========================
// Display TODOs in Realtime
// ===========================
const todoRef = ref(database, "todos");

onValue(todoRef, (todoCollection) => {
  todoList.innerHTML = "";
  todoCollection.forEach(todo => {
    todoList.innerHTML += `
      <li>
        <p>${todo.val().text}</p>
        <div>
          <button class="edit-btn" onclick="updateTodo('${todo.key}', '${todo.val().text}')">Edit</button>
          <button class="delete-btn" onclick="deleteTodo('${todo.key}')">Delete</button>
        </div>
      </li>
    `;
  });
});

// ===========================
// Make functions global
// ===========================
window.updateTodo = updateTodoFuction;
window.deleteTodo = deleteTodo;

// ===========================
// Delete TODO Item with SweetAlert confirmation
// ===========================
function deleteTodo(id) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      remove(ref(database, `todos/${id}`));
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Your todo has been deleted.',
        timer: 1200,
        showConfirmButton: false
      });
    }
  });
}

// ===========================
// Update TODO Item
// ===========================
function updateTodoFuction(id, oldText) {
  todoInp.value = oldText;
  submitBtn.innerText = "Edit";
  submitBtn.classList.add("edit-mode"); // apply edit-mode CSS
  todoId = id;
}

// ===========================
// Notes for Future:
// ===========================
// 1. Firebase Hosting:
//    - You can host this project using Firebase Hosting:
//      $ firebase init hosting
//      $ firebase deploy
//    - Make sure your index.html is in the public folder configured for hosting.
//
// 2. Cloudinary Integration (Optional):
//    - If you want to allow image uploads for each TODO, use Cloudinary.
//    - Upload image to Cloudinary via their API and store image URL in Firebase.
//    - Example data structure:
//      push(todoRef, { text: todoInp.value, imgUrl: uploadedImageUrl });
//
// 3. Security:
//    - Consider adding Firebase Authentication for user-specific TODOs.
//    - Update rules in Firebase Realtime Database to allow only authenticated users to read/write.
//
// 4. Animations & UI:
//    - New todos can fade-in using CSS animations (already added in style.css).
//    - You can enhance UX with edit confirmation, error handling, and input validation.



// import { ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
// import { database } from "./config.js";

// const submitBtn = document.getElementById("submitBtn");

// // Create Fuctionality
// submitBtn.addEventListener("click", () => {
//   const todoInp = document.getElementById("todoInp")
//   if (submitBtn.innerText == "Submit") {
//     const todoRef = ref(database, "todos");
//     push(todoRef, {
//       text: todoInp.value
//     })

//     console.log("todo created successfully!");
//     todoInp.value = ""
//   } else {
//     update(ref(database, `todos/${todoId}`), {
//       text: todoInp.value
//     })

//     todoInp.value = ""

//     submitBtn.setAttribute("id", "submitBtn");
//     submitBtn.innerText = "Submit"
//   }
// })

// const todoRef = ref(database, "todos")
// const todoList = document.getElementById("todoList");

// onValue(todoRef, (todoCollection) => {
//   todoList.innerHTML = ""
//   todoCollection.forEach(todo => {
//     todoList.innerHTML += `
//     <li>
//       <p>${todo.val().text}</p>
//       <div>
//       <button onclick="updateTodo('${todo.key}', '${todo.val().text}')">Edit</button> <!-- Edit Button -->
//       <button onclick="deleteTodo('${todo.key}')">Delete</button>  <!-- Delete Button -->
//       </div>
//     </li>
//     `
//   });
// })

// window.updateTodo = updateTodoFuction

// // delete function call
// window.deleteTodo = deleteTodo

// // Delete data functionality
// function deleteTodo(id) {
//   remove(ref(database, `todos/${id}`))
// }


// // update data functionality
// // function updateTodoFuction(id, oldText) {
// //   const newValue = prompt("Edit value", oldText)

// //   if(!newValue) return

// //   update(ref(database, `todos/${id}`), {
// //     text: newValue
// //   })
// // }

// var todoId;
// function updateTodoFuction(id, oldText) {
//   const todoInp = document.getElementById("todoInp");
//   const submitBtn = document.getElementById("submitBtn");

//   todoInp.value = oldText
//   submitBtn.innerText = "Edit"
//   submitBtn.setAttribute("id", "editBtn")
//   todoId = id
// }

// // cloudinary, firebase hosting