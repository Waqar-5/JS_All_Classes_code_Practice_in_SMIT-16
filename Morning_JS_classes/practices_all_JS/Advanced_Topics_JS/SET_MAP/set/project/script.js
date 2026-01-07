// 1️⃣ Select DOM elements
const taskInput = document.getElementById('taskInput'); // Input field
const addTaskBtn = document.getElementById('addTaskBtn'); // Add button
const taskList = document.getElementById('taskList'); // UL to display tasks
const taskCount = document.getElementById('taskCount'); // Span to show count

// 2️⃣ Create a Set to store unique tasks
const tasks = new Set(); // Set automatically ensures uniqueness

// 3️⃣ Function to update task list display
function updateTaskList() {
  taskList.innerHTML = ''; // Clear existing list items

  tasks.forEach(task => { // Iterate through each task in the Set
    const li = document.createElement('li'); // Create list item
    li.textContent = task; // Set task text

    // Create delete button for each task
    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Remove'; // Button text
    deleteBtn.onclick = () => {       // On click, remove task
      tasks.delete(task);             // Delete from Set
      updateTaskList();               // Update the display
    };

    li.appendChild(deleteBtn); // Add button to list item
    taskList.appendChild(li);  // Add list item to UL
  });

  taskCount.textContent = tasks.size; // Update task count
}

// 4️⃣ Event listener for Add Task button
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim(); // Get input value and remove extra spaces

  if (task) {                  // If input is not empty
    if (tasks.has(task)) {     // Check if task already exists
      alert('Task already exists!'); // Notify user
    } else {
      tasks.add(task);         // Add task to Set
      updateTaskList();        // Update display
      taskInput.value = '';    // Clear input field
    }
  } else {
    alert('Please enter a task'); // Notify if input is empty
  }
});

// 5️⃣ Optional: Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {    // If Enter is pressed
    addTaskBtn.click();       // Trigger Add Task button
  }
});
