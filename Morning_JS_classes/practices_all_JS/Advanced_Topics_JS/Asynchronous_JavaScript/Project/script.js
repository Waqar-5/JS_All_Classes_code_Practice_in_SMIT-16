// ------------------------
// GET DOM ELEMENTS
// ------------------------

// Get the input field for task name and store in variable
const taskNameInput = document.getElementById("taskName"); // HTML element with id="taskName"

// Get the input field for task duration and store in variable
const taskTimeInput = document.getElementById("taskTime"); // HTML element with id="taskTime"

// Get the button for adding a task and store in variable
const addTaskBtn = document.getElementById("addTask"); // Button to add a new task

// Get the UL element where tasks will be listed
const taskList = document.getElementById("taskList"); // UL container for all tasks

// Get buttons for running tasks in different modes
const runSequentialBtn = document.getElementById("runSequential"); // Sequential run button
const runParallelBtn = document.getElementById("runParallel");     // Parallel run button
const runRaceBtn = document.getElementById("runRace");             // Race run button
const retryFailedBtn = document.getElementById("retryFailed");     // Retry failed tasks
const clearTasksBtn = document.getElementById("clearTasks");       // Clear all tasks

// Get the div where step-by-step logs will be shown
const logsDiv = document.getElementById("logs"); // Div for logging async steps

// ------------------------
// TASK STORAGE
// ------------------------

// Array to store all tasks dynamically
let tasks = []; // Empty array initially, will store task objects {name, time, status}

// ------------------------
// LOGGING FUNCTION
// ------------------------

// Function to add step-by-step messages in the logs
function addLog(msg){
  const p = document.createElement("p"); // Create a new paragraph element
  p.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`; // Add timestamp + message
  logsDiv.prepend(p); // Add new log at the top (latest first)
}

// ------------------------
// ADD TASK FUNCTIONALITY
// ------------------------

// When "Add Task" button is clicked
addTaskBtn.addEventListener("click", ()=>{
  const name = taskNameInput.value.trim(); // Get task name input and remove spaces
  const time = parseInt(taskTimeInput.value); // Convert input string to number

  // Validate inputs
  if(!name || !time){ // If name empty or time not number
    alert("Enter valid name & time"); // Show alert
    return; // Stop function
  }

  // Create a new task object with name, time, and initial status "pending"
  tasks.push({name,time,status:"pending"}); 

  renderTasks(); // Update the UI to show new task
  addLog(`Task "${name}" added – it will take ${time}ms to complete`); // Log the action

  taskNameInput.value=""; // Clear the task name input
  taskTimeInput.value=""; // Clear the task time input
});

// ------------------------
// RENDER TASK LIST FUNCTION
// ------------------------

// Function to display tasks dynamically in UL
function renderTasks(){
  taskList.innerHTML=""; // Clear current task list in HTML

  // Loop through all tasks
  tasks.forEach((task)=>{

    const li = document.createElement("li"); // Create a new list item
    li.textContent = `${task.name} - ${task.time}ms`; // Show task name and time
    li.className = task.status; // Apply CSS class based on task status

    const progress = document.createElement("div"); // Create progress bar div
    progress.className = "progress"; // Assign CSS class for styling
    li.appendChild(progress); // Add progress bar inside task list item

    taskList.appendChild(li); // Add task item to the UL in HTML
  });
}

// ------------------------
// RUN SINGLE TASK FUNCTION
// ------------------------

// Function to run a task asynchronously using Promise
function runTask(task){
  return new Promise((resolve,reject)=>{ // Promise resolves or rejects

    task.status="running"; // Update task status to running
    renderTasks(); // Refresh UI to show running status
    addLog(`Task "${task.name}" is now running`); // Log the action

    const li = taskList.children[tasks.indexOf(task)]; // Get the corresponding li element
    const progressBar = li.querySelector(".progress"); // Get the progress bar inside the li
    let progress = 0; // Initialize progress value

    // Interval to animate progress bar
    const interval = setInterval(()=>{
      progress+=5; // Increment progress by 5%
      progressBar.style.width = progress + "%"; // Update width of progress bar visually
      if(progress>=100) clearInterval(interval); // Stop interval when progress reaches 100%
    }, task.time / 20); // Divide total time into 20 steps for smooth animation

    // Simulate task completion after specified time
    setTimeout(()=>{
      const success = Math.random() > 0.1; // 90% chance of success, 10% chance fail
      if(success){
        task.status="completed"; // Mark task as completed
        addLog(`Task "${task.name}" completed successfully`); // Log completion
        resolve(task.name); // Resolve the promise
      } else {
        task.status="failed"; // Mark task as failed
        addLog(`Task "${task.name}" failed – you can retry`); // Log failure
        reject(task.name+" failed"); // Reject the promise
      }
      renderTasks(); // Refresh UI to show completed or failed
    }, task.time); // Run after task.time milliseconds
  });
}

// ------------------------
// SEQUENTIAL RUN
// ------------------------

// When "Run Sequentially" button clicked
runSequentialBtn.addEventListener("click", async ()=>{
  addLog("Starting sequential execution – tasks will run one by one");

  // Loop through all tasks sequentially
  for(const task of tasks){
    try{
      await runTask(task); // Wait for task to finish before starting next
    } catch(err){
      addLog(err); // Log if task failed
    }
  }

  addLog("Sequential execution finished"); // Final log after all tasks done
});

// ------------------------
// PARALLEL RUN
// ------------------------

// When "Run Parallel" button clicked
runParallelBtn.addEventListener("click", async ()=>{
  addLog("Starting parallel execution – all tasks run together");

  const promises = tasks.map(task => runTask(task)); // Create promises array for all tasks

  try{
    const results = await Promise.all(promises); // Wait until all promises resolved
    addLog("All tasks completed in parallel: " + results.join(", ")); // Log success
  }catch(err){
    addLog("Some tasks failed in parallel: "+err); // Log if any failed
  }
});

// ------------------------
// RACE RUN
// ------------------------

// When "Run Race" button clicked
runRaceBtn.addEventListener("click", async ()=>{
  addLog("Starting race – first task to finish wins");

  const promises = tasks.map(task => runTask(task)); // Create promises array

  try{
    const winner = await Promise.race(promises); // Wait for first task to complete
    addLog("Race finished – first completed: " + winner); // Log winner
  }catch(err){
    addLog("Race failed: "+err); // Log if first task fails
  }
});

// ------------------------
// RETRY FAILED TASKS
// ------------------------

// When "Retry Failed Tasks" button clicked
retryFailedBtn.addEventListener("click", async ()=>{
  const failedTasks = tasks.filter(t => t.status==="failed"); // Get failed tasks
  if(failedTasks.length===0){
    addLog("No failed tasks to retry"); // Log if none failed
    return;
  }

  addLog("Retrying failed tasks...");
  for(const task of failedTasks){
    task.status="pending"; // Reset status to pending
    renderTasks(); // Refresh UI

    try{
      await runTask(task); // Run task again
    }catch(err){
      addLog(err); // Log if fails again
    }
  }
  addLog("Retry finished"); // Final log after retry
});

// ------------------------
// CLEAR TASKS
// ------------------------

// When "Clear All" button clicked
clearTasksBtn.addEventListener("click", ()=>{
  tasks = []; // Clear tasks array
  renderTasks(); // Clear task UI
  addLog("All tasks cleared"); // Log clearing
});
