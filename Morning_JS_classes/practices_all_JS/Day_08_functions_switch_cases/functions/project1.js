//  Project 1: Smart To-Do Manager


// *********************************************************
// Smart To-Do Manager - Full JS Function Practice
// *********************************************************

// This project demonstrates:
// Named, Anonymous, Arrow, IIFE, Callback, Recursive,
// Generator, Async, Constructor, Method, Higher-Order,
// Nested, and Dynamic/Anonymous Class Methods

console.log("*********** Smart To-Do Manager ***********");

// ========================================================
// 1. IIFE (Immediately Invoked Function Expression)
// Initializes the app immediately
// ========================================================

(function initializeApp(){
    console.log("Welcome to Smart TO-DO Manager!");
    
})()

// ========================================================
// 2. Constructor Function + Method Functions
// Used to create tasks
// ========================================================
function Task(title, priority) {
    this.title = title;
    this.priority = priority;
    this.done = false;

    // Method Function: mark task as done
    this.markDone = function() {
        this.done = true;
        console.log(`Task "${this.title}" completed!`);
    };
}

// ========================================================
// 3. Named Function
// Displays a task nicely
// ========================================================
function displayTask(task) {
    console.log(
        `Task: ${task.title} | Priority: ${task.priority} | Done: ${task.done}`
    );
}

// ========================================================
// 4. Anonymous Function
// Used with array forEach
// ========================================================
var tasks = [];
tasks.push(new Task("Learn JS Functions", "High"));
tasks.push(new Task("Build Smart To-Do App", "Medium"));
tasks.push(new Task("Practice Coding", "High"));

console.log("All Tasks:");
tasks.forEach(function(task) {
    displayTask(task); // callback usage here
});

// ========================================================
// 5. Arrow Function
// Filter high-priority tasks
// ========================================================
const highPriorityTasks = tasks.filter(task => task.priority === "High");
console.log("High Priority Tasks:");
highPriorityTasks.forEach(task => displayTask(task));

// ========================================================
// 6. Callback Function
// Function passed to another function
// ========================================================
function processTasks(tasks, callback) {
    console.log("Processing tasks with callback...");
    tasks.forEach(callback);
}

processTasks(tasks, displayTask); // callback example

// ========================================================
// 7. Recursive Function
// Mark all tasks done recursively
// ========================================================
function markAllDoneRecursive(tasks, index = 0) {
    if (index >= tasks.length) return;
    tasks[index].markDone();
    markAllDoneRecursive(tasks, index + 1);
}

console.log("Marking all tasks done recursively...");
markAllDoneRecursive(tasks);

// ========================================================
// 8. Generator Function
// Iterate tasks one by one
// ========================================================
function* taskGenerator(tasks) {
    for (let task of tasks) {
        yield task;
    }
}

const taskIter = taskGenerator(tasks);
console.log("Iterating tasks using generator:");
console.log(taskIter.next().value);
console.log(taskIter.next().value);
console.log(taskIter.next().value);

// ========================================================
// 9. Async Function
// Simulate saving tasks to server
// ========================================================
async function saveTasks(tasks) {
    console.log("Saving tasks to server...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tasks saved successfully!");
            resolve(true);
        }, 2000);
    });
}

// Using async function
(async () => {
    await saveTasks(tasks);
})();

// ========================================================
// 10. Higher-Order Function
// Function returning another function
// ========================================================
function priorityChecker(priority) {
    return function(task) {
        return task.priority === priority;
    };
}

const isMedium = priorityChecker("Medium");
console.log("Medium Priority Tasks:");
tasks.filter(isMedium).forEach(displayTask);

// ========================================================
// 11. Nested Function
// Function inside another function
// ========================================================
function taskSummary(tasks) {
    function countDone() {
        return tasks.filter(task => task.done).length;
    }
    console.log(`You have completed ${countDone()} out of ${tasks.length} tasks.`);
}

taskSummary(tasks);

// ========================================================
// 12. Dynamic / Anonymous Class Methods
// Add a new method dynamically to Task prototype
// ========================================================
Task.prototype.togglePriority = function() {
    this.priority = this.priority === "High" ? "Low" : "High";
    console.log(`Task "${this.title}" priority is now: ${this.priority}`);
};

tasks[0].togglePriority();

// ========================================================
// Done! All 13 function types covered
// ========================================================

console.log("*********** End of Smart To-Do Manager ***********");
