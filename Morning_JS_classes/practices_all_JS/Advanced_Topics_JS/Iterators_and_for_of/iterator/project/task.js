/* 
Task Manager
Demonstrates iterators in real-life scenario
- Custom iterator to iterate tasks
- Filter tasks dynamically
- Infinite iterator for recurring tasks
- Generator for reports
*/

// ------------------------------
// 1. Sample Task List
// ------------------------------
const tasks = [
    {id: 1, title: "Clean room", status: "Pending"},
    {id: 2, title: "Do homework", status: "Completed"},
    {id: 3, title: "Buy groceries", status: "Pending"},
    {id: 4, title: "Call friend", status: "Pending"},
];

// ------------------------------
// 2. Task Iterator
// ------------------------------
const taskManager = {
    tasks, // attach tasks
    [Symbol.iterator]() { // make iterable
        let index = 0; // start at first task
        const tasks = this.tasks; // local reference
        return {
            next() { // called by for...of
                if (index < tasks.length) {
                    return { value: tasks[index++], done: false }; // return task
                } else {
                    return { value: undefined, done: true }; // end iteration
                }
            }
        }
    }
}

// ------------------------------
// 3. Iterate All Tasks
// ------------------------------
console.log("All Tasks:");
for(const task of taskManager){
    console.log(`${task.id}. ${task.title} [${task.status}]`);
}

console.log("******************************************");

// ------------------------------
// 4. Filter Pending Tasks (Custom Iterator)
// ------------------------------
const pendingTasks = {
    tasks,
    [Symbol.iterator]() {
        let index = 0;
        const tasks = this.tasks;
        return {
            next() {
                while(index < tasks.length){
                    const task = tasks[index++];
                    if(task.status === "Pending"){ // only pending
                        return { value: task, done: false };
                    }
                }
                return { value: undefined, done: true };
            }
        }
    }
}

console.log("Pending Tasks:");
for(const task of pendingTasks){
    console.log(`${task.id}. ${task.title} [${task.status}]`);
}

console.log("******************************************");

// ------------------------------
// 5. Infinite Recurring Task Iterator
// ------------------------------
const recurringTasks = {
    tasks,
    [Symbol.iterator]() {
        let index = 0;
        const tasks = this.tasks;
        return {
            next() {
                const task = tasks[index % tasks.length]; // loop infinitely
                index++;
                return { value: task, done: false }; // never ends
            }
        }
    }
}

const recIter = recurringTasks[Symbol.iterator]();
console.log("First 7 Recurring Tasks:");
for(let i=0; i<7; i++){
    const t = recIter.next().value;
    console.log(`${t.id}. ${t.title} [${t.status}]`);
}

console.log("******************************************");

// ------------------------------
// 6. Generator Function for Task Report
// ------------------------------
function* taskReport(tasks){
    let completed = 0;
    let pending = 0;
    for(const task of tasks){
        if(task.status === "Completed") completed++;
        else pending++;
        yield {completed, pending}; // yield progress after each task
    }
}

console.log("Task Report Progress:");
for(const progress of taskReport(tasks)){
    console.log(`Completed: ${progress.completed}, Pending: ${progress.pending}`);
}

console.log("******************************************");

/*
✅ Lessons Learned:
- Iterating through tasks using iterators
- Custom filtering of tasks
- Infinite iterator for recurring tasks
- Generator for dynamic reports
- Real-life application of iterators
*/
