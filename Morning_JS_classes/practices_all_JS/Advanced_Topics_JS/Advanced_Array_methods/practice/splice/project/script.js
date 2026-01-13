// ===============================
// 🧠 TASK DATABASE
// ===============================

// let   → creates a variable
// tasks → name of our array (our app's memory)
// []    → empty array (no tasks yet)
let tasks = [];


// ===============================
// 🖥 RENDER FUNCTION
// ===============================

// function → keyword to create a function
// render   → name of function (means draw on screen)
// ()       → no parameters
function render() {

  // const → variable that cannot change
  // list → variable name
  // document → the web page
  // getElementById → find element by id
  // "taskList" → id of <ul>
  const list = document.getElementById("taskList");

  // list.innerHTML → HTML inside <ul>
  // = "" → clear everything
  list.innerHTML = "";

  // tasks → our array
  // .forEach → loop through each item
  // (task, index) → task = value, index = position
  tasks.forEach((task, index) => {

    // list.innerHTML += → add more HTML
    // ` ` → template string
    list.innerHTML += `
      <li>
        ${task}
        <div>
          <button onclick="moveUp(${index})">⬆</button>
          <button onclick="moveDown(${index})">⬇</button>
          <button onclick="editTask(${index})">✏</button>
          <button onclick="deleteTask(${index})">❌</button>
        </div>
      </li>
    `;
  });
}


// ===============================
// ➕ ADD TASK
// ===============================

function addTask() {

  // Get input box
  let input = document.getElementById("taskInput");

  // input.value → text inside box
  // trim() → remove extra spaces
  let value = input.value.trim();

  // if empty → stop
  if (value === "") return;

  // tasks.length → last index
  // 0 → remove nothing
  // value → insert task
  tasks.splice(tasks.length, 0, value);

  // clear input box
  input.value = "";

  // refresh screen
  render();
}


// ===============================
// ❌ DELETE TASK
// ===============================

function deleteTask(index) {

  // index → where to start
  // 1 → remove one task
  tasks.splice(index, 1);

  render();
}


// ===============================
// ✏ EDIT TASK
// ===============================

function editTask(index) {

  // prompt → popup box
  // tasks[index] → old task
  let newTask = prompt("Edit task:", tasks[index]);

  // if user clicked OK
  if (newTask !== null) {

    // remove old and insert new
    tasks.splice(index, 1, newTask);

    render();
  }
}


// ===============================
// ⬆ MOVE UP
// ===============================

function moveUp(index) {

  // if first item → stop
  if (index === 0) return;

  // remove task and store it
  let item = tasks.splice(index, 1)[0];

  // insert it one position up
  tasks.splice(index - 1, 0, item);

  render();
}


// ===============================
// ⬇ MOVE DOWN
// ===============================

function moveDown(index) {

  // if last item → stop
  if (index === tasks.length - 1) return;

  // remove task
  let item = tasks.splice(index, 1)[0];

  // insert it one position down
  tasks.splice(index + 1, 0, item);

  render();
}


// ===============================
// 🧹 CLEAR ALL
// ===============================

function clearAll() {

  // start at 0
  // remove everything
  tasks.splice(0, tasks.length);

  render();
}
