// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return alert('Please enter a task!');
    const task = { text: taskText, completed: false };
    tasks.push(task);
    taskInput.value = '';
    saveAndRender();
});

// Search Tasks
searchInput.addEventListener('input', () => {
    renderTasks(searchInput.value.trim().toLowerCase());
});

// Save tasks to localStorage and render
function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(searchInput.value.trim().toLowerCase());
}

// Render tasks
function renderTasks(filter = '') {
    taskList.innerHTML = '';
    let completedCount = 0;

    tasks.filter(task => task.text.toLowerCase().includes(filter))
         .forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        if (task.completed) {
            li.classList.add('completed');
            completedCount++;
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="btn btn-sm btn-primary completeBtn">✔</button>
                <button class="btn btn-sm btn-danger deleteBtn">🗑</button>
            </div>
        `;

        // Complete task toggle
        li.querySelector('.completeBtn').addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            saveAndRender();
        });

        // Delete task
        li.querySelector('.deleteBtn').addEventListener('click', () => {
            tasks.splice(index, 1);
            saveAndRender();
        });

        taskList.appendChild(li);
    });

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completedCount;
}
