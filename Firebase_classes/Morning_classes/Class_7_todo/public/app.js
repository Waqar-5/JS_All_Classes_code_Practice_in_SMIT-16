import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, collection, onSnapshot, addDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// DOM elements
const welcomeEl = document.getElementById("welcome");
const list = document.getElementById("todoList");
const todoText = document.getElementById("todoText");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const category = document.getElementById("category");
const search = document.getElementById("search");
const addBtn = document.querySelector(".add-btn");

let todos = [];
let editingId = null;

// ===== AUTH CHECK & FETCH NAME =====
onAuthStateChanged(auth, async (user) => {
  if (!user) return location.href = "login.html";

  // Fetch the user's name from Firestore
  const userDoc = await getDoc(doc(db, "users", user.uid));
  const name = userDoc.exists() ? userDoc.data().name : "User";

  // Display welcome message
  welcomeEl.textContent = `Welcome, ${name}!`;

  // Fetch user's todos
  onSnapshot(collection(db, "todos"), (snap) => {
    todos = [];
    snap.forEach((d) => {
      if (d.data().uid === user.uid) {
        todos.push({ id: d.id, ...d.data() });
      }
    });
    renderTodos(todos);
  });
});


// ===== VALIDATION FUNCTION =====
function validateTodo(text, due, prio, cat) {
  if (!text || !due || !prio || !cat) {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please fill in all fields!",
    });
    return false;
  }

  const dueTime = new Date(due).getTime();
  if (dueTime < new Date().getTime()) {
    Swal.fire({
      icon: "error",
      title: "Invalid Date",
      text: "Due date must be in the future!",
    });
    return false;
  }

  return true;
}

// ===== ADD OR UPDATE TODO =====
window.addTodo = async () => {
  const text = todoText.value.trim();
  const due = dueDate.value;
  const prio = priority.value;
  const cat = category.value;

  if (!validateTodo(text, due, prio, cat)) return;

  try {
    if (editingId) {
      await updateDoc(doc(db, "todos", editingId), {
        text, due, priority: prio, category: cat
      });
      Swal.fire({
        icon: "success",
        title: "Todo Updated",
        timer: 1200,
        showConfirmButton: false,
      });
      editingId = null;
      addBtn.textContent = "Add Task";
    } else {
      await addDoc(collection(db, "todos"), {
        text, due, priority: prio, category: cat, completed: false, uid: auth.currentUser.uid
      });
      Swal.fire({
        icon: "success",
        title: "Todo Added",
        timer: 1200,
        showConfirmButton: false,
      });
    }

    // Reset inputs
    todoText.value = "";
    dueDate.value = "";
    priority.value = "";
    category.value = "";
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: editingId ? "Failed to Update Todo" : "Failed to Add Todo",
      text: err.message,
    });
  }
};

// ===== RENDER TODOS =====
function renderTodos(data) {
  list.innerHTML = "";
  data.forEach(t => {
    list.innerHTML += `
      <li class="${t.completed ? 'done' : ''}">
        <span onclick="toggle('${t.id}', ${t.completed})">
          ${t.text} | ${t.priority} | ${t.category}
        </span>
        <div class="actions">
          <button onclick="editTodo('${t.id}')">✏️</button>
          <button onclick="del('${t.id}')">❌</button>
        </div>
      </li>
    `;
  });
}

// ===== EDIT TODO =====
window.editTodo = (id) => {
  const todo = todos.find(t => t.id === id);
  todoText.value = todo.text;
  dueDate.value = todo.due;
  priority.value = todo.priority;
  category.value = todo.category;
  editingId = id;
  addBtn.textContent = "Update Task";
};

// ===== TOGGLE COMPLETION =====
window.toggle = async (id, status) => {
  try {
    await updateDoc(doc(db, "todos", id), { completed: !status });
    Swal.fire({
      icon: "success",
      title: status ? "Marked Incomplete" : "Marked Complete",
      timer: 1000,
      showConfirmButton: false
    });
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Failed to Update",
      text: err.message
    });
  }
};

// ===== DELETE TODO =====
window.del = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This todo will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#EF4444",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "todos", id));
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your todo has been deleted.",
          timer: 1200,
          showConfirmButton: false
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Failed to Delete",
          text: err.message
        });
      }
    }
  });
};

// ===== LOGOUT =====
window.logout = () => {
  signOut(auth).then(() => {
    Swal.fire({
      icon: "success",
      title: "Logged Out",
      timer: 1000,
      showConfirmButton: false
    }).then(() => location.href = "login.html");
  });
};

// ===== SEARCH FILTER =====
window.filterTodos = () => {
  const q = search.value.toLowerCase();
  renderTodos(todos.filter(t => t.text.toLowerCase().includes(q)));
};
